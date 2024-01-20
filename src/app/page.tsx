

import EventTable from "@/components/table_view"
import Gallery from "@/components/gallery"

import styles from './page.module.css'
import Footer from '../components/Footer'
import Members from '../components/Members'
import Navbar from '../components/Navbar'




export default function Home() {
  return (
    <main  style={{backgroundColor:"white"}}>
      <br></br>
      <Gallery/>
      <EventTable/>

      <Navbar/>
      <Members/>
      <Footer/>
    </main>
  )
}
