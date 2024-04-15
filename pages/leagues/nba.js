import Layout from '@/components/Layout/Layout';

const leagues = ['All', 'MLB', 'NHL'];
const fantasyApps = ['All', 'prizepicks', 'underdog'];
const books = ['All', 'betonline', 'williamhill'];
const positions = ['All', 'Guard', 'Forward', 'Center'];
const props = ['All', 'Points', 'Assists', 'Rebounds'];
const matchups = ['1', '2', '3'];

export default function Nba() {
  return (
    <Layout leagues={leagues} league={'nba'} fantasyApps={fantasyApps} books={books} positions={positions} props={props} matchups={matchups}>
      
    </Layout>
  );
}