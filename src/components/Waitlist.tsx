import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  CheckCircle, 
  Users, 
  Calendar,
  Gift,
  Sparkles
} from 'lucide-react';

const benefits = [
  {
    icon: Gift,
    title: "Early Access",
    description: "Be among the first to experience MaetriXs"
  },
  {
    icon: Users,
    title: "Beta Community",
    description: "Join exclusive beta user community"
  },
  {
    icon: Sparkles,
    title: "Free Pro Trial",
    description: "3 months free Pro features"
  }
];

export const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast({
        title: "Welcome to MaetriXs! 🎉",
        description: "You're on the waitlist! We'll notify you when we launch.",
      });
    }, 1000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-matrix-surface to-matrix-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <Badge variant="outline" className="mb-6 px-4 py-2 text-neon-blue border-neon-blue/30">
            <Calendar className="w-4 h-4 mr-2" />
            Join the Waitlist
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be the First to
            <br />
            <span className="gradient-text">Level Up Your Social Life</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            MaetriXs launches late 2025. Join our waitlist for exclusive early access, 
            beta testing opportunities, and special launch bonuses.
          </p>

          {/* Main Waitlist Card */}
          <Card className="card-elevated border-matrix-border neon-glow mb-12">
            <CardContent className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-matrix-dark border-matrix-border focus:border-neon-blue"
                      disabled={isLoading}
                    />
                    <Button 
                      type="submit"
                      disabled={isLoading}
                      className="bg-gradient-primary hover:shadow-elevation neon-glow transition-all duration-300 group"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Mail className="w-4 h-4 mr-2" />
                          Join Waitlist
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Join <span className="text-neon-blue font-semibold">2,847+</span> others 
                    waiting for MaetriXs. No spam, unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-green-500/20 mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    You're on the list! 🎉
                  </h3>
                  <p className="text-muted-foreground">
                    We'll send you early access as soon as MaetriXs is ready. 
                    Keep an eye on your inbox!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="text-center space-y-4"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fade-in-up 0.6s ease-out forwards'
                }}
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-primary/10">
                  <benefit.icon className="w-6 h-6 text-neon-blue" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">2,847</div>
              <div className="text-muted-foreground">People on Waitlist</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-blue mb-2">15+</div>
              <div className="text-muted-foreground">Universities Interested</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-magenta mb-2">Q4 2025</div>
              <div className="text-muted-foreground">Expected Launch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};