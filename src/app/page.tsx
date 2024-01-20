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

export default function Home() {
  return (
    <main style={{backgroundColor:"white"}}>
      <Navbar />
      <Hero />
      <Shirt />
      <ScoreCard/>
      <Members />
      <Footer />

      <br></br>
      <Gallery/>
      <EventTable/>
      <About0/>
      <CardComponent/>
    </main>
  );
}
