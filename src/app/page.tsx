import Hero from '@/components/Hero';
import Footer from '../components/Footer';
import Members from '../components/Members';
import Navbar from '../components/Navbar';
import Shirt from '../components/Shirt';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Shirt />
      <Members />
      <Footer />
    </main>
  );
}
