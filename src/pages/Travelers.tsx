import { Globe, MapPin, Users, Heart, Star, ArrowRight, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Header } from '@/components/Header';

const Travelers = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header title="For Travelers" subtitle="Turn Travel Encounters Into Lifelong Connections" />
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-blue/10 rounded-full mb-6">
              <Globe className="w-5 h-5 text-neon-blue" />
              <span className="text-sm font-medium text-neon-blue">For Travelers & Nomads</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Capture Human Connections<br />as You Explore the World
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Every magical travel connection deserves more than a selfie or forgotten IG follow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Join the Travel Circle
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            {/* Mock Travel Interface */}
            <div className="relative max-w-md mx-auto">
              <Card className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Compass className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">New Travel Connection!</h3>
                    <p className="text-sm text-muted-foreground">Hiking in Peru with Marco</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">XP Earned</span>
                  <span className="text-lg font-bold gradient-text">+25</span>
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
              <h3 className="font-semibold mb-2">Log by Moment</h3>
              <p className="text-sm text-muted-foreground">
                "Hiking in Peru", "Train to Tokyo", "Beach in Bali"
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <Heart className="w-12 h-12 text-neon-magenta mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Add Voice Notes</h3>
              <p className="text-sm text-muted-foreground">
                Capture memory snapshots and emotional moments
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Set Reminders</h3>
              <p className="text-sm text-muted-foreground">
                "Check in after 1 month" to keep connections alive
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <Globe className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Visualize Your Trail</h3>
              <p className="text-sm text-muted-foreground">
                See your social network bloom around the world
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Creative Feature */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Geo-Tagged Memory Pins
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                A visual map of who you met and where. See your global social graph grow with every journey.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-neon-blue" />
                  </div>
                  <span>Interactive world map of your connections</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-neon-magenta/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-neon-magenta" />
                  </div>
                  <span>Click any pin to revisit that moment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-accent" />
                  </div>
                  <span>Share your travel story with friends</span>
                </div>
              </div>
            </div>

            <Card className="card-elevated p-8">
              <div className="text-center space-y-4">
                <Globe className="w-16 h-16 text-neon-blue mx-auto" />
                <h3 className="text-xl font-bold">Global Social Graph</h3>
                <p className="text-muted-foreground">
                  Zoom in on cities you've visited, see your personal contacts bloom over time
                </p>
                <div className="flex justify-center gap-2">
                  <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                  <div className="w-3 h-3 bg-neon-magenta rounded-full"></div>
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Travel Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Sarah M.</h4>
                  <p className="text-sm text-muted-foreground">Digital Nomad</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "I used to lose people to time zones. Now I reconnect with my travel fam every month."
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
                  <h4 className="font-semibold">Jake R.</h4>
                  <p className="text-sm text-muted-foreground">Backpacker</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "MaetriXs reminded me to wish my Iceland trip buddy a happy birthday — magic."
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

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Never Let a Once-in-a-Lifetime Person<br />Become Just a Memory
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be part of our global beta for travelers — Free Pro for first 1,000 wanderers.
          </p>
          
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Join the Travel Circle
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Join 1,200+ travelers already exploring connections
          </p>
        </div>
      </section>
    </div>
  );
};

export default Travelers;