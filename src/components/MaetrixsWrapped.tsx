import { Calendar, MapPin, Users, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const MaetrixsWrapped = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            MaetriXs Wrapped
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your year in social connections - just like Spotify Wrapped, but for the people who matter most
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Preview Card */}
          <div className="relative">
            <Card className="card-elevated p-8 max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold gradient-text mb-2">Your 2024</h3>
                  <p className="text-muted-foreground">Social Connection Summary</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-neon-blue" />
                      New People Met
                    </span>
                    <span className="font-bold text-xl gradient-text">247</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-neon-magenta" />
                      Top Location
                    </span>
                    <span className="font-bold">Berlin Café</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      Best Month
                    </span>
                    <span className="font-bold">September</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-neon-blue" />
                      Total XP
                    </span>
                    <span className="font-bold text-xl gradient-text">12,450</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-matrix-border">
                  <p className="text-sm text-muted-foreground">
                    "You're in the top 5% of social connectors!"
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Your Personal Social Analytics</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every December, get a beautiful, shareable summary of your year in connections. 
                See your social growth, favorite meeting spots, strongest relationships, and 
                personal networking achievements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 interactive-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-neon-blue" />
                  </div>
                  <h4 className="font-semibold">Connection Stats</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Total people met, strongest bonds, consistency streaks
                </p>
              </Card>

              <Card className="p-4 interactive-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-neon-magenta/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-neon-magenta" />
                  </div>
                  <h4 className="font-semibold">Location Insights</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your social hotspots and networking venues
                </p>
              </Card>

              <Card className="p-4 interactive-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-accent" />
                  </div>
                  <h4 className="font-semibold">Monthly Trends</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Peak social months and seasonal patterns
                </p>
              </Card>

              <Card className="p-4 interactive-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-neon-blue" />
                  </div>
                  <h4 className="font-semibold">Growth Metrics</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  XP earned, achievements unlocked, level progression
                </p>
              </Card>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Share your Wrapped on social media or keep it private - it's entirely up to you. 
                Your data, your story, your connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};