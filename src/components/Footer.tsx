import { Twitter, Send, MessageCircle, Github } from 'lucide-react';

const Footer = () => {
  const socials = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Send, href: '#', label: 'Telegram' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#home" className="text-3xl font-display font-bold text-primary text-glow">
            /pump<span className="blink-cursor">_</span>
          </a>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-card transition-colors neon-border"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center max-w-md">
            $PUMP is a memecoin with no intrinsic value. Trade at your own risk. 
            This is not financial advice. DYOR.
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-mono">
            &copy; 2024 /pump_ | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
