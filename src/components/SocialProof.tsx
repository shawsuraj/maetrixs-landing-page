import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Heart, Star } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000, label }: { end: number; duration?: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOut));

      if (progress >= 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 animate-count-up">
        {count.toLocaleString()}+
      </div>
      <p className="text-muted-foreground text-sm md:text-base">{label}</p>
    </div>
  );
};

const testimonials = [
  {
    quote: "Finally, a way to remember everyone I meet at conferences!",
    author: "Sarah K.",
    role: "UX Designer",
    avatar: "👩‍💻"
  },
  {
    quote: "The XP system makes networking actually fun.",
    author: "Marcus T.",
    role: "Entrepreneur",
    avatar: "👨‍💼"
  },
  {
    quote: "Perfect for my nomad lifestyle. Love the map feature!",
    author: "Elena R.",
    role: "Digital Nomad",
    avatar: "🌍"
  }
];

export const SocialProof = () => {
  return (
    <section className="py-20 bg-matrix-dark particles-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-neon-cyan border-neon-cyan/30">
            <TrendingUp className="w-4 h-4 mr-2" />
            Social Proof
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the <span className="gradient-text">Social Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thousands are already tracking their connections and leveling up their social lives.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="glass-card-interactive text-center p-8">
            <CardContent className="p-0">
              <div className="inline-flex p-4 rounded-xl bg-neon-cyan/10 mb-6">
                <Users className="w-8 h-8 text-neon-cyan" />
              </div>
              <AnimatedCounter end={12500} label="Beta Users Registered" />
            </CardContent>
          </Card>

          <Card className="glass-card-interactive text-center p-8">
            <CardContent className="p-0">
              <div className="inline-flex p-4 rounded-xl bg-neon-magenta/10 mb-6">
                <TrendingUp className="w-8 h-8 text-neon-magenta" />
              </div>
              <AnimatedCounter end={847} label="Daily Meet Logs" />
            </CardContent>
          </Card>

          <Card className="glass-card-interactive text-center p-8">
            <CardContent className="p-0">
              <div className="inline-flex p-4 rounded-xl bg-electric-violet/10 mb-6">
                <Heart className="w-8 h-8 text-electric-violet" />
              </div>
              <AnimatedCounter end={96} label="Satisfaction Rate %" />
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.author}
              className="glass-card-interactive p-6"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: 'fade-in-up 0.8s ease-out forwards'
              }}
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};