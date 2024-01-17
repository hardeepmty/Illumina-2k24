
import EventTable from "@/components/table_view"
import Gallery from "@/components/gallery"
import CardComponent from "@/components/fixtures"


export default function Home() {
  return (
    <main  style={{backgroundColor:"white"}}>
      <br></br>
      <Gallery/>
      <EventTable/>
      <CardComponent/>

    </main>
  )
}
