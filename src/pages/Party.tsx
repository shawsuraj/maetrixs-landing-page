import { Zap, Users, Calendar, Music, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Header } from '@/components/Header';

const Party = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header title="For Party People" subtitle="Turn Parties Into Personal Progress" />
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-magenta/10 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-neon-magenta" />
              <span className="text-sm font-medium text-neon-magenta">For Party & Nightlife Lovers</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Track the People Who Made<br />Your Nights Legendary
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              MaetriXs helps you log, reconnect, and grow with the people behind the fun.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Join the Party List
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            {/* Mock Party Interface */}
            <div className="relative max-w-md mx-auto">
              <Card className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">Epic Night Logged!</h3>
                    <p className="text-sm text-muted-foreground">Karaoke partner found</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Vibes</span>
                  <div className="flex gap-1">
                    <span className="text-lg">🔥🔥🔥</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">XP Earned</span>
                  <span className="text-lg font-bold gradient-text">+20</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center interactive-card">
              <Users className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Log Key People</h3>
              <p className="text-sm text-muted-foreground">
                "Blue shirt dancer", "Karaoke partner", "DJ friend"
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <Calendar className="w-12 h-12 text-neon-magenta mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Set Reconnection</h3>
              <p className="text-sm text-muted-foreground">
                Next week, next party, tomorrow brunch
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Earn XP Streaks</h3>
              <p className="text-sm text-muted-foreground">
                Build connections with repeat party friends
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <Star className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Vibe Tracker</h3>
              <p className="text-sm text-muted-foreground">
                See who you consistently have fun with
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Fun Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Make Every Night Count
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your wildest nights are full of real connection — MaetriXs helps you remember who mattered.
              </p>
              
              <div className="space-y-6">
                <Card className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Music className="w-6 h-6 text-neon-blue" />
                    <h3 className="font-semibold">Song of the Night</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Add the track that defined each logged moment
                  </p>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-6 h-6 text-neon-magenta" />
                    <h3 className="font-semibold">Rate the Connection</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Rate vibes: 🔥🔥🔥 for those unforgettable moments
                  </p>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-6 h-6 text-accent" />
                    <h3 className="font-semibold">Social Vibe Tracker</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Real-time insights on who brings the best energy
                  </p>
                </Card>
              </div>
            </div>

            <Card className="card-elevated p-8">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-magenta rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">🔥</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Party Mode Activated</h3>
                <p className="text-muted-foreground">
                  Quick-log people during the night, review connections the next day
                </p>
                <div className="flex justify-center gap-2">
                  <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-neon-magenta rounded-full animate-pulse delay-100"></div>
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Nightlife Memories */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Party Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Alex T.</h4>
                  <p className="text-sm text-muted-foreground">Festival Enthusiast</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "I met my now-best friend at a rave in Goa. I logged her on MaetriXs before I even knew her name."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-accent" />
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Maya K.</h4>
                  <p className="text-sm text-muted-foreground">Nightlife Explorer</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "This app lowkey saves your real-life highlights. I found my crew through consistent party logging."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-accent" />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Solution */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Turn Parties Into Personal Progress
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop losing amazing connections to forgotten names and missed follow-ups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 interactive-card">
              <h3 className="text-xl font-bold mb-3">Remember Who Matters</h3>
              <p className="text-muted-foreground mb-4">
                Meeting lots of people but forgetting names the next day? Track every meaningful connection.
              </p>
              <div className="flex items-center gap-2 text-neon-blue">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Never Lose Touch</span>
              </div>
            </Card>

            <Card className="p-6 interactive-card">
              <h3 className="text-xl font-bold mb-3">Find Your Vibe Tribe</h3>
              <p className="text-muted-foreground mb-4">
                No way to know who you actually vibe with consistently? See patterns in your connections.
              </p>
              <div className="flex items-center gap-2 text-neon-magenta">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Quality Over Quantity</span>
              </div>
            </Card>

            <Card className="p-6 interactive-card">
              <h3 className="text-xl font-bold mb-3">Real Connection Value</h3>
              <p className="text-muted-foreground mb-4">
                Instagram doesn't tell you who matters. Track emotional value and growth with real people.
              </p>
              <div className="flex items-center gap-2 text-accent">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Meaningful Metrics</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Keep the Vibes Going —<br />Long After the Music Ends
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get 3 months of MaetriXs Pro, plus invite to exclusive launch party in your city
          </p>
          
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Join the Party List
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Join 800+ party-goers already building their crews
          </p>
        </div>
      </section>
    </div>
  );
};

export default Party;