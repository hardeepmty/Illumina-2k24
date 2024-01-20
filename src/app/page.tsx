import Footer from '../components/Footer';
import Members from '../components/Members';
import Navbar from '../components/Navbar';
import Shirt from '../components/Shirt';  
import EventTable from "@/components/table_view"
import Gallery from "@/components/gallery"
import styles from './page.module.css'



export default function Home() {
  return (
    <main style={{backgroundColor:"white"}}>
      <Navbar />
      <Shirt />
      <Members />
      <Footer />

      <br></br>
      <Gallery/>
      <EventTable/>
    </main>
  );
}
