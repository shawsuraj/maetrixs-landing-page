import { Briefcase, Users, Target, TrendingUp, Star, ArrowRight, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Header } from '@/components/Header';

const Professionals = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header title="For Professionals" subtitle="Your Real-World Network, Visualized" />
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-blue/10 rounded-full mb-6">
              <Briefcase className="w-5 h-5 text-neon-blue" />
              <span className="text-sm font-medium text-neon-blue">For Young Professionals</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Build a Relationship Graph,<br />Not Just a Contact List
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Track real-life meetings, consistency of contact, and follow-through with people in your field.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Build Your Real-World CRM
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            {/* Mock Professional Interface */}
            <div className="relative max-w-lg mx-auto">
              <Card className="card-elevated p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Network className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="font-semibold">Networking Timeline</h3>
                      <p className="text-sm text-muted-foreground">Track your professional journey</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pl-6 border-l-2 border-neon-blue/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Met at startup mixer</span>
                      <span className="text-xs text-muted-foreground">Jan 15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Coffee follow-up</span>
                      <span className="text-xs text-muted-foreground">Feb 20</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-neon-blue">Job referral sent</span>
                      <span className="text-xs text-muted-foreground">Mar 10</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-matrix-border">
                    <span className="text-sm text-muted-foreground">Connection Value</span>
                    <span className="text-lg font-bold gradient-text">High Impact</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center interactive-card">
              <Users className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Log Meetings</h3>
              <p className="text-sm text-muted-foreground">
                Event name, notes, vibe score for every interaction
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <Target className="w-12 h-12 text-neon-magenta mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Smart Nudges</h3>
              <p className="text-sm text-muted-foreground">
                "3 months since you last met Jamie" - never miss follow-ups
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <Network className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Visualize Network</h3>
              <p className="text-sm text-muted-foreground">
                Graph view: nodes = depth, color = industry type
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <TrendingUp className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">CRM Export</h3>
              <p className="text-sm text-muted-foreground">
                Optional export to CRM tools and LinkedIn
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Most Valuable Asset is Your People
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start tracking who really matters in your professional network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 interactive-card">
              <h3 className="text-xl font-bold mb-3">Beyond Business Cards</h3>
              <p className="text-muted-foreground mb-4">
                Networking is forgotten after a business card swap or boring LinkedIn add. Track real relationships.
              </p>
              <div className="flex items-center gap-2 text-neon-blue">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Real Relationship Tracking</span>
              </div>
            </Card>

            <Card className="p-6 interactive-card">
              <h3 className="text-xl font-bold mb-3">Consistent Follow-ups</h3>
              <p className="text-muted-foreground mb-4">
                Follow-ups are inconsistent and opportunities are missed. Get intelligent reminders and insights.
              </p>
              <div className="flex items-center gap-2 text-neon-magenta">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Smart Networking</span>
              </div>
            </Card>

            <Card className="p-6 interactive-card">
              <h3 className="text-xl font-bold mb-3">Strategic Insights</h3>
              <p className="text-muted-foreground mb-4">
                No real insight on who's worth nurturing. Visualize your network and identify key relationships.
              </p>
              <div className="flex items-center gap-2 text-accent">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Data-Driven Networking</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Network Visualization */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visualize Your Professional Network
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                See your connections as an interactive graph. Understand the depth and value of each relationship.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                    <Network className="w-4 h-4 text-neon-blue" />
                  </div>
                  <span>Node size represents relationship strength</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-neon-magenta/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-neon-magenta" />
                  </div>
                  <span>Color coding by industry or role type</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-accent" />
                  </div>
                  <span>Track networking ROI and career impact</span>
                </div>
              </div>
            </div>

            <Card className="card-elevated p-8">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                    <Network className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-neon-blue rounded-full flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold">Network Graph View</h3>
                <p className="text-muted-foreground">
                  Interactive visualization of your professional relationships with depth metrics
                </p>
                
                <div className="flex justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                    <span>Tech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-neon-magenta rounded-full"></div>
                    <span>Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span>Business</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full"></div>
                <div>
                  <h4 className="font-semibold">David Chen</h4>
                  <p className="text-sm text-muted-foreground">Product Manager</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "MaetriXs helped me land my dream job through a connection I made 6 months ago at a tech meetup."
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
                  <h4 className="font-semibold">Lisa Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">UX Designer</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "The network visualization showed me I was neglecting key relationships. Now I'm strategic about networking."
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
            Ready to Build Your Strategic Network?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Try the networking beta and claim your visual graph profile
          </p>
          
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Build Your Real-World CRM
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Join 600+ professionals already mapping their networks
          </p>
        </div>
      </section>
    </div>
  );
};

export default Professionals;