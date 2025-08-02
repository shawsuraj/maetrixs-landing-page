import { Palette, Users, Heart, Lightbulb, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Header } from '@/components/Header';

const Creators = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header title="For Creators" subtitle="Track the People Who Fuel Your Creative Life" />
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <Palette className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">For Creators & Artists</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Build a Network of Creators<br />You Actually Care About
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Log key collaborators, supporters, fans, and mentors. Nurture them like you do your art.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Join the Creator Graph
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            {/* Mock Creator Interface */}
            <div className="relative max-w-lg mx-auto">
              <Card className="card-elevated p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="font-semibold">Creative Journey</h3>
                      <p className="text-sm text-muted-foreground">Track collaboration moments</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pl-6 border-l-2 border-accent/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">First collab with Sarah</span>
                      <span className="text-xs text-muted-foreground">🧠</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Studio visit</span>
                      <span className="text-xs text-muted-foreground">🎉</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-accent">Release party</span>
                      <span className="text-xs text-muted-foreground">🎯</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-matrix-border">
                    <span className="text-sm text-muted-foreground">Creative Impact</span>
                    <span className="text-lg font-bold gradient-text">High</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Tools */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Creative Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center interactive-card">
              <Users className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Log by Context</h3>
              <p className="text-sm text-muted-foreground">
                "Podcast guest", "Jam partner", "Gallery co-artist"
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <Heart className="w-12 h-12 text-neon-magenta mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Emotional Tone</h3>
              <p className="text-sm text-muted-foreground">
                Track meetings with: 🧠 | 🎉 | 🎯
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Creative Graph</h3>
              <p className="text-sm text-muted-foreground">
                Showcase your network as a shareable profile
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <Sparkles className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Inspiration Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Remember who sparks your best creative moments
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Creative Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              People Are Your Biggest Inspiration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't lose them in the noise. Track the people who fuel your creative life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 interactive-card">
              <h3 className="text-xl font-bold mb-3">Creative Connections</h3>
              <p className="text-muted-foreground mb-4">
                Creative connections made at open mics, gigs, art shows — hard to remember who inspired what.
              </p>
              <div className="flex items-center gap-2 text-neon-blue">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Remember Every Spark</span>
              </div>
            </Card>

            <Card className="p-6 interactive-card">
              <h3 className="text-xl font-bold mb-3">Lasting Collaborations</h3>
              <p className="text-muted-foreground mb-4">
                Amazing collabs fade away without proper follow-up. Keep your creative partnerships alive.
              </p>
              <div className="flex items-center gap-2 text-neon-magenta">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Nurture Partnerships</span>
              </div>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <h3 className="text-xl font-bold mb-3">Fan & Mentor Tracking</h3>
              <p className="text-muted-foreground mb-4">
                Hard to track consistency with fans, followers, mentors. See who truly supports your journey.
              </p>
              <div className="flex items-center gap-2 text-accent">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Build Your Tribe</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Creator Features */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Creative Community Dashboard
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Track the people who inspire, collaborate, and support your creative journey.
              </p>
              
              <div className="space-y-6">
                <Card className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Palette className="w-6 h-6 text-neon-blue" />
                    <h3 className="font-semibold">Collaboration Timeline</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Track creative projects and partnerships over time
                  </p>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="w-6 h-6 text-neon-magenta" />
                    <h3 className="font-semibold">Supporter Network</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Map your fans, mentors, and creative community
                  </p>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Lightbulb className="w-6 h-6 text-accent" />
                    <h3 className="font-semibold">Inspiration Sources</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Remember who sparks your best creative ideas
                  </p>
                </Card>
              </div>
            </div>

            <Card className="card-elevated p-8">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                    <Palette className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold">Creative Network Map</h3>
                <p className="text-muted-foreground">
                  Visualize your creative ecosystem and see collaboration patterns
                </p>
                
                <div className="flex justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                    <span>Collaborators</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-neon-magenta rounded-full"></div>
                    <span>Supporters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span>Mentors</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Creator Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Creator Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Jordan Rivers</h4>
                  <p className="text-sm text-muted-foreground">Indie Musician</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "MaetriXs helped me reconnect with a producer I met at SXSW. We're now working on my debut album."
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
                  <h4 className="font-semibold">Zara Kim</h4>
                  <p className="text-sm text-muted-foreground">Visual Artist</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "I tracked my gallery connections and found patterns in who supports my work. It's transformed my career."
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
      <section className="py-16 px-4 bg-gradient-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Creative Network?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be part of our beta. Get early access to creative network maps + fan interaction tools
          </p>
          
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Join the Creator Graph
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Join 400+ creators already mapping their communities
          </p>
        </div>
      </section>
    </div>
  );
};

export default Creators;