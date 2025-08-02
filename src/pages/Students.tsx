import { GraduationCap, Users, MapPin, Calendar, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Header } from '@/components/Header';

const Students = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header title="For Students" subtitle="Make College the Start of Meaningful Relationships" />
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-blue/10 rounded-full mb-6">
              <GraduationCap className="w-5 h-5 text-neon-blue" />
              <span className="text-sm font-medium text-neon-blue">For University Students</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Track Your Campus Connections
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From lectures to late-night chats — log the people you meet and never lose a meaningful link again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Join the Campus Circle
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            {/* Mock App Interface */}
            <div className="relative max-w-md mx-auto">
              <Card className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">New Connection!</h3>
                    <p className="text-sm text-muted-foreground">Second encounter with Anjali</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">XP Earned</span>
                  <span className="text-lg font-bold gradient-text">+15</span>
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
              <h3 className="font-semibold mb-2">Log Who You Meet</h3>
              <p className="text-sm text-muted-foreground">
                "Group project teammate", "Chess club rival", "Dorm hallway friend"
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <MapPin className="w-12 h-12 text-neon-magenta mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Tag Locations</h3>
              <p className="text-sm text-muted-foreground">
                "Economics 101", "Campus Café", "Library Study Room"
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Track Consistency</h3>
              <p className="text-sm text-muted-foreground">
                See monthly meetups, daily chats, and social streaks
              </p>
            </Card>

            <Card className="p-6 text-center interactive-card">
              <Star className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Watch Your Growth</h3>
              <p className="text-sm text-muted-foreground">
                View your college years as a social growth chart
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Make College the Start of Meaningful Relationships
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MaetriXs turns classmates, club-mates, and random encounters into long-term relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 interactive-card">
              <h3 className="text-xl font-bold mb-3">Combat Campus Loneliness</h3>
              <p className="text-muted-foreground mb-4">
                Hard to form lasting bonds in big campuses or online lectures? Track every meaningful interaction.
              </p>
              <div className="flex items-center gap-2 text-neon-blue">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Build Deeper Connections</span>
              </div>
            </Card>

            <Card className="p-6 interactive-card">
              <h3 className="text-xl font-bold mb-3">Remember Every Encounter</h3>
              <p className="text-muted-foreground mb-4">
                So many casual encounters at library, clubs, parties — never lose track of consistency again.
              </p>
              <div className="flex items-center gap-2 text-neon-magenta">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Track Social Patterns</span>
              </div>
            </Card>

            <Card className="p-6 interactive-card">
              <h3 className="text-xl font-bold mb-3">Beyond Social Media</h3>
              <p className="text-muted-foreground mb-4">
                Social media ≠ true friendship memory. Build real connections with people who matter.
              </p>
              <div className="flex items-center gap-2 text-accent">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Authentic Relationships</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your College Experience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get early access + invite to private college ambassador program
          </p>
          
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Join the Campus Circle
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Join 500+ students already on the waitlist
          </p>
        </div>
      </section>
    </div>
  );
};

export default Students;