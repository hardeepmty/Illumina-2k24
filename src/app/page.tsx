
import EventTable from "@/components/table_view"
import Gallery from "@/components/gallery"
import CardComponent from "@/components/fixtures"
import About0 from "@/components/about_us"


export default function Home() {
  return (
    <main  style={{backgroundColor:"white"}}>
      <br></br>
      <Gallery/>
      <EventTable/>
      <About0/>
      <CardComponent/>
    </main>
  )
}
