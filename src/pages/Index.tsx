import Head from 'next/head';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import HowToBuySection from '@/components/HowToBuySection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>/PUMP Token</title>
        <meta
          name="description"
          content="/PUMP Token — 100% community owned crypto coin. Fair launch, zero taxes, liquidity permanently locked. Join the /PUMP movement today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen relative overflow-x-hidden bg-gradient-main">
        <Navbar />
        <HeroSection />
        <TokenomicsSection />
        <HowToBuySection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
