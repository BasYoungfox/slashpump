import { Copy, ExternalLink, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import TerminalWindow from './TerminalWindow';

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = 'PUMPx8KFkwgD4mVJCWJuSrzqy5gfLCsuxtZh3BZpump';

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-16 grid-bg">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <TerminalWindow className="animate-slideIn">
            <div className="space-y-6">
              {/* Command Line */}
              <div className="flex items-center gap-2 text-secondary">
                <span>$</span>
                <span className="text-glow">execute</span>
              </div>

              {/* Main Title */}
              <h1 className="text-6xl md:text-8xl font-display font-black text-primary text-glow glitch">
                /pump<span className="blink-cursor">_</span>
              </h1>

              {/* Status Lines */}
              <div className="space-y-2 font-mono">
                <p className="flex items-center gap-2">
                  <span className="text-muted-foreground">&gt;</span>
                  <span className="text-primary">initializing memecoin protocol...</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-muted-foreground">&gt;</span>
                  <span className="text-muted-foreground">status:</span>
                  <span className="text-secondary font-bold pump-animation inline-flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    PUMPING LIVE
                  </span>
                </p>
              </div>

              {/* Contract Address */}
              <div className="bg-muted rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 neon-border">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">// CONTRACT ADDRESS</p>
                  <p className="text-primary text-sm md:text-base break-all">{contractAddress}</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded hover:bg-muted transition-colors whitespace-nowrap"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? 'copied!' : 'copy'}
                </button>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#buy" className="cyber-button-filled flex items-center justify-center gap-2">
                  BUY $/PUMP <ExternalLink className="w-4 h-4" />
                </a>
                <a href="#tokenomics" className="cyber-button flex items-center justify-center gap-2">
                  VIEW TOKENOMICS
                </a>
              </div>
            </div>
          </TerminalWindow>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary float-animation">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
