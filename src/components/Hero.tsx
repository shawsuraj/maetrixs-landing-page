import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Users, Zap } from 'lucide-react';
import maetrixsLogo from '@/assets/maetrixs-logo.png';

export const Hero = () => {
  const [xpCount, setXpCount] = useState(0);
  const [connectionCount, setConnectionCount] = useState(0);

  useEffect(() => {
    const xpTimer = setInterval(() => {
      setXpCount(prev => prev < 2847 ? prev + 47 : 2847);
    }, 50);

    const connectionTimer = setInterval(() => {
      setConnectionCount(prev => prev < 156 ? prev + 2 : 156);
    }, 80);

    return () => {
      clearInterval(xpTimer);
      clearInterval(connectionTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-matrix-dark via-matrix-surface to-matrix-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-1 h-full w-full">
            {Array.from({ length: 120 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-neon-blue/20 animate-pulse-glow"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8 animate-fade-in-up">
          <div className="relative group">
            <img 
              src={maetrixsLogo} 
              alt="MaetriXs Logo" 
              className="w-24 h-24 md:w-28 md:h-28 object-contain transition-all duration-500 group-hover:scale-105 neon-glow rounded-2xl"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))',
                animation: 'float 3s ease-in-out infinite'
              }}
            />
            <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="mt-4 text-sm md:text-base text-muted-foreground font-medium tracking-wide">
            The Social Fitness Tracker
          </div>
        </div>

        {/* Badge */}
        <Badge 
          variant="outline" 
          className="mb-6 px-4 py-2 text-neon-blue border-neon-blue/30 bg-matrix-surface/50 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <Zap className="w-4 h-4 mr-2" />
          The Social Fitness Tracker
        </Badge>

        {/* Main Heading */}
        <h1 
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="gradient-text">MaetriXs</span>
        </h1>

        {/* Tagline */}
        <p 
          className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          The social fitness tracker for real-life connections.
        </p>

        {/* Subhead */}
        <p 
          className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          Track every person you meet, gamify your social growth, and never forget 
          a connection again. Like Fitbit for your social life.
        </p>

        {/* Interactive Stats */}
        <div 
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          <div className="card-elevated px-6 py-4 rounded-xl">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-neon-blue" />
              <div>
                <div className="text-2xl font-bold text-neon-blue">{xpCount.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total XP Earned</div>
              </div>
            </div>
          </div>
          
          <div className="card-elevated px-6 py-4 rounded-xl">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-neon-magenta" />
              <div>
                <div className="text-2xl font-bold text-neon-magenta">{connectionCount}</div>
                <div className="text-sm text-muted-foreground">People Connected</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '1.2s' }}
        >
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg neon-glow bg-gradient-primary hover:shadow-elevation transition-all duration-300 group"
          >
            Join Waitlist
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg border-matrix-border hover:bg-matrix-surface/50 interactive-card"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};