import Layout from '@/components/Layout/Layout';

const leagues = ['All', 'NHL', 'NBA'];
const fantasyApps = ['All', 'prizepicks', 'underdog'];
const books = ['All', 'betonline', 'williamhill'];
const positions = ['All', 'Pitcher', 'Hitter'];
const props = ['All', 'Strikeouts', 'Home Runs', 'RBIs'];
const matchups = ['1', '2', '3'];

export default function Mlb() {
  return (
    <Layout leagues={leagues} league={'mlb'} fantasyApps={fantasyApps} books={books} positions={positions} props={props} matchups={matchups}>
      
    </Layout>
  );
}