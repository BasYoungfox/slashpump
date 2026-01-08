import MatrixRain from '@/components/MatrixRain';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import HowToBuySection from '@/components/HowToBuySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <TokenomicsSection />
        <HowToBuySection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
