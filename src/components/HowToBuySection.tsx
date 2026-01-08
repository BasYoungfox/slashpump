import { Wallet, ArrowRightLeft, Coins, Rocket } from 'lucide-react';
import TerminalWindow from './TerminalWindow';

const HowToBuySection = () => {
  const steps = [
    {
      icon: Wallet,
      title: 'Create Wallet',
      description: 'Download Phantom or Solflare wallet from the official website. Create a new wallet and save your seed phrase securely.',
      command: 'wallet.init()',
    },
    {
      icon: Coins,
      title: 'Get SOL',
      description: 'Purchase SOL from an exchange like Coinbase or Binance. Transfer SOL to your wallet address.',
      command: 'transfer.sol()',
    },
    {
      icon: ArrowRightLeft,
      title: 'Buy on Pump.fun',
      description: 'Connect your wallet to Pump.fun. Paste the $PUMP contract address and buy your tokens.',
      command: 'buy.pump()',
    },
    {
      icon: Rocket,
      title: 'HODL & Pump',
      description: 'Congratulations! You now own $PUMP. Join the community and watch your bags grow. 🚀',
      command: 'pump.start()',
    },
  ];

  return (
    <section id="how-to-buy" className="py-24 relative grid-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground font-mono mb-2">// HOW TO BUY</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary text-glow">
            Join The Pump
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <TerminalWindow
              key={step.title}
              title={`step_${index + 1}.sh`}
              className="animate-slideIn"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    $ <span className="text-secondary">{step.command}</span>
                  </p>
                  <h3 className="text-xl font-display font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://pump.fun/coin/"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button-filled inline-flex items-center gap-2"
          >
            <Rocket className="w-5 h-5" />
            BUY ON PUMP.FUN
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;
