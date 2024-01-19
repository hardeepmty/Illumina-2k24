import Hero from '@/components/Hero';
import Footer from '../components/Footer';
import Members from '../components/Members';
import Navbar from '../components/Navbar';
import Shirt from '../components/Shirt';
import ScoreCard from '../components/ScoreCard'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Shirt />
      <ScoreCard/>
      <Members />
      <Footer />
    </main>
  );
}
