import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const TerminalWindow = ({ title = 'terminal@pump:~', children, className = '' }: TerminalWindowProps) => {
  return (
    <div className={`terminal-window scanline ${className}`}>
      <div className="terminal-header">
        <div className="flex gap-2">
          <div className="terminal-dot terminal-dot-red" />
          <div className="terminal-dot terminal-dot-yellow" />
          <div className="terminal-dot terminal-dot-green" />
        </div>
        <span className="ml-4 text-sm text-muted-foreground">{title}</span>
      </div>
      <div className="p-6 md:p-8">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
