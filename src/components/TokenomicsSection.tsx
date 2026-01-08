import { Flame, Users, Zap, Percent } from 'lucide-react';
import TerminalWindow from './TerminalWindow';

const TokenomicsSection = () => {
  const tokenomics = [
    {
      icon: Zap,
      label: 'Total Supply',
      value: '1,000,000,000',
      sub: '1 Billion $RUN',
      color: 'text-primary',
    },
    {
      icon: Users,
      label: 'Community',
      value: '100%',
      sub: 'Fair launch · No presale',
      color: 'text-secondary',
    },
    {
      icon: Flame,
      label: 'Burned LP',
      value: '100%',
      sub: 'Liquidity permanently locked',
      color: 'text-accent',
    },
    {
      icon: Percent,
      label: 'Tax',
      value: '0%',
      sub: 'No buy / sell tax ever',
      color: 'text-primary',
    },
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
          <TerminalWindow title="run.tokenomics">
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
                  <p className="text-xs text-muted-foreground uppercase mt-1">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-8 p-4 bg-card rounded-lg border border-border text-center">
              <p className="text-muted-foreground text-sm">// SECURITY & FAIRNESS</p>
              <p className="text-3xl font-display font-bold text-accent">
                LP BURNED 🔥 · TAX 0%
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Ownership renounced · Community owned
              </p>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
