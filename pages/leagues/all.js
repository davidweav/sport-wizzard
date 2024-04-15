import Layout from '@/components/Layout/Layout';

const leagues = ['MLB', 'NHL', 'NBA'];
const fantasyApps = ['All', 'prizepicks', 'underdog'];
const books = ['All', 'betonline', 'williamhill'];
const positions = ['All', 'hmm'];
const props = ['All', 'hmm'];
const matchups = ['1', '2', '3'];

export default function Home() {
  return (
    <Layout leagues={leagues} league={'All'} fantasyApps={fantasyApps} books={books} positions={positions} props={props} matchups={matchups}>
      
    </Layout>
  );
}