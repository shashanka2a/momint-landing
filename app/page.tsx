import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemGrid from '@/components/ProblemGrid';
import HowItWorks from '@/components/HowItWorks';
import Gallery from '@/components/Gallery';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="bg-surface relative z-20">
        <ProblemGrid />
        <HowItWorks />
        <Gallery />
        <Testimonial />
      </div>
      <Footer />
    </main>
  );
}


