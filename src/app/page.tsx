import styles from './page.module.css'
import Footer from '../components/Footer'
import Members from '../components/Members'
import Navbar from '../components/Navbar'



export default function Home() {
  return (
    <main>
      <Navbar/>
      <Members/>
      <Footer/>
    </main>
  )
}
