import Navbar from '../components/Navbar';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Projetogit from '../components/Projetogit';
import SocialBar from '../components/SocialBar';
import Footer from '../components/Footer';
import MediumArticles from "../components/MediumArticles";
import ScrollEffect from '../components/ScrollEffect';
import './globals.css';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-4 py-4">
        <ScrollEffect>
          <About />
        </ScrollEffect>
        <ScrollEffect>
          <Certifications />
        </ScrollEffect>
        <ScrollEffect>
          <Projetogit />
        </ScrollEffect>
        <ScrollEffect>
          <MediumArticles />
        </ScrollEffect>
        <ScrollEffect>
          <Footer />
        </ScrollEffect>
      </main>
      <SocialBar />
    </div>
  );
}