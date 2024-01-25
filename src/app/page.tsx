import Hero from '@/components/Hero';
import Footer from '../components/Footer';
import Members from '../components/Members';
import Navbar from '../components/Navbar';
import ScoreCard from '../components/ScoreCard'
import Shirt from '../components/Shirt';  
import EventTable from "@/components/table_view"
import Gallery from "@/components/gallery"
import CardComponent from "@/components/fixtures"
import About0 from "@/components/about_us"
import styles from './page.module.css'
import LiveFeed from '@/components/liveScore';
import BackToTopButton from '@/components/Button';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LiveFeed/>
      <Gallery/>
      <EventTable/>
      <About0/>
      <CardComponent/>
      <Shirt />
      <ScoreCard/>
      <Gallery/>
      <Shirt />
      <ScoreCard/>
      <CardComponent/>
      <EventTable/>
      <BackToTopButton/>
      <Members />
      <Footer />
    </main>
  );
}
