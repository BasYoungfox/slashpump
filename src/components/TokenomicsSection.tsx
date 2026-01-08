import { Flame, Lock, Users, Zap } from 'lucide-react';
import TerminalWindow from './TerminalWindow';

const TokenomicsSection = () => {
  const tokenomics = [
    { icon: Zap, label: 'Total Supply', value: '1,000,000,000', color: 'text-primary' },
    { icon: Flame, label: 'Burned', value: '50%', color: 'text-accent' },
    { icon: Users, label: 'Community', value: '45%', color: 'text-secondary' },
    { icon: Lock, label: 'Locked LP', value: '5%', color: 'text-primary' },
  ];

  return (
    <section id="tokenomics" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground font-mono mb-2">// TOKENOMICS</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary text-glow">
            Fair Launch Protocol
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <TerminalWindow title="tokenomics.config">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tokenomics.map((item, index) => (
                <div
                  key={item.label}
                  className="text-center p-4 bg-muted rounded-lg animate-slideIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
                  <p className={`text-2xl font-display font-bold ${item.color} text-glow`}>
                    {item.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Tax Info */}
            <div className="mt-8 p-4 bg-card rounded-lg border border-border">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="text-muted-foreground text-sm">// TRANSACTION TAX</p>
                  <p className="text-3xl font-display font-bold text-primary">0% / 0%</p>
                  <p className="text-xs text-muted-foreground">Buy / Sell</p>
                </div>
                <div className="h-px md:h-16 w-full md:w-px bg-border" />
                <div className="text-center md:text-left">
                  <p className="text-muted-foreground text-sm">// LP STATUS</p>
                  <p className="text-3xl font-display font-bold text-secondary">BURNED 🔥</p>
                  <p className="text-xs text-muted-foreground">100% Renounced</p>
                </div>
                <div className="h-px md:h-16 w-full md:w-px bg-border" />
                <div className="text-center md:text-left">
                  <p className="text-muted-foreground text-sm">// CONTRACT</p>
                  <p className="text-3xl font-display font-bold text-accent">VERIFIED ✓</p>
                  <p className="text-xs text-muted-foreground">Audit Passed</p>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
