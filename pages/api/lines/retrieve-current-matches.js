import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
dotenv.config();

export async function retrieveValueMatches(s3Client, leagues, books, fantasyApps, properties) {
  const current = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'America/New_York' }).split('/');
  const currentDate = current[2] + '-' + current[0] + '-' + current[1]; // Format date as YYYY-MM-DD
  if (leagues[0] === 'All') {
    leagues = ['mlb', 'nba', 'nhl'];
  } 
  try {
    // Retrieve the data for each league from the S3 bucket
    const allParsedData = await Promise.all(leagues.map(async league => {
      const key = `matching_${league}_lines_${currentDate}.json`;
      const params = {
        Bucket: 'sportwizzard-data',
        Key: key
      };
      const response = await s3Client.send(new GetObjectCommand(params));
      const responseBodyString = await response.Body.transformToString();
      return JSON.parse(responseBodyString);
    }));

    const matchingLines = [];
    // Iterate through the data for each league
    allParsedData.forEach(parsedData => {
      // Iterate through the matches for each league
      parsedData.forEach(match => {
        const matchingLine = {};
        matchingLine['player'] = match.player;
        matchingLine['league'] = match.league;
        matchingLine['prop'] = match.prop;
        matchingLine['line'] = match.line;
        matchingLine['odds'] = match.odds;
        matchingLine['type'] = match.type;
        matchingLine['impliedProbability'] = match.impliedProbability;
        matchingLine['book'] = match.book;
        matchingLine['fantasyApp'] = match.fantasyApp;
        properties.forEach(prop => {
          matchingLine[prop] = match[prop];
        });
        matchingLines.push(matchingLine);
      });
    });

    // Filter out entries that don't match the specified league, book, fantasy app, and properties
    return matchingLines;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const s3Client = new S3Client({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
      }
    });
    try {
      const { leagues, books, fantasyApps, properties } = req.body;
      const requestedLeagues = Array.isArray(leagues) ? leagues : [leagues];
      const requestedBooks = Array.isArray(books) ? books : [books];
      const requestedFantasyApps = Array.isArray(fantasyApps) ? fantasyApps : [fantasyApps];
      const requestedProperties = Array.isArray(properties) ? properties : [properties];
      // console.log(leagues, books, fantasyApps, properties);
      // if leagues is a string, put it in an array
      const allValueMatches = [];
      // Handle optional league and book parameters
      const valueMatches = await retrieveValueMatches(s3Client, requestedLeagues, requestedBooks, requestedFantasyApps, requestedProperties);
      allValueMatches.push(...valueMatches);
          
      allValueMatches.sort((a, b) => a.odds - b.odds);
      res.status(200).json(allValueMatches);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
