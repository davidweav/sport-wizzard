import Layout from '@/components/Layout/Layout';

const leagues = ['All', 'MLB', 'NBA'];
const fantasyApps = ['All', 'prizepicks', 'underdog'];
const books = ['All', 'betonline', 'williamhill'];
const positions = ['All', 'Forward', 'Defenseman', 'Goalie']
const props = ['All', 'Goals', 'Assists', 'Saves'];
const matchups = ['1', '2', '3'];

export default function Nhl() {
  return (
    <Layout leagues={leagues} league={'nhl'} fantasyApps={fantasyApps} books={books} positions={positions} props={props} matchups={matchups}>

    </Layout>
  );
}