import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import HowToBuySection from '@/components/HowToBuySection';
import Footer from '@/components/Footer';

const Index = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const checkRugpull = () => {
    if (!contractAddress) return;

    // Simple mock logic (replace with real API calls later)
    const suspiciousPatterns = ['0xdead', '0x123', '0xabcd'];
    const isSuspicious = suspiciousPatterns.some((pattern) =>
      contractAddress.toLowerCase().includes(pattern)
    );

    // Random check for fun demo
    const randomFlag = Math.random() < 0.3;

    if (isSuspicious || randomFlag) {
      setResult('⚠️ Warning: This contract might be unsafe!');
    } else {
      setResult('✅ Looks safe (basic check).');
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-main">
      <Navbar />
      <HeroSection />
      <TokenomicsSection />
      <HowToBuySection />

      {/* --- Rugpull Detector Utility --- */}
      <section className="bg-gray-100 dark:bg-gray-900 p-8 my-8 rounded-xl max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Rugpull Detector</h2>
        <p className="mb-4">Enter a contract address to check if it might be unsafe.</p>
        <div className="flex justify-center gap-2 mb-4">
          <input
            type="text"
            placeholder="0xContractAddress"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            className="border p-2 rounded w-64 text-center"
          />
          <button
            onClick={checkRugpull}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Check
          </button>
        </div>
        {result && <p className="text-lg font-medium mt-2">{result}</p>}
      </section>

      <Footer />
    </div>
  );
};

export default Index;
