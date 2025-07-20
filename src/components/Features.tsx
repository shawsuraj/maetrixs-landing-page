import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  BookOpen, 
  TrendingUp, 
  Bell, 
  BarChart3,
  Users,
  MapPin,
  Target
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Memory Meets Metrics",
    description: "Never forget a face or name again. Track every connection with context, location, and purpose.",
    color: "text-neon-blue",
    bgColor: "bg-neon-blue/10"
  },
  {
    icon: BookOpen,
    title: "Real-World Journal",
    description: "Your personal social diary. Log conversations, shared interests, and follow-up reminders.",
    color: "text-neon-magenta",
    bgColor: "bg-neon-magenta/10"
  },
  {
    icon: TrendingUp,
    title: "Gamified Growth",
    description: "Earn XP for every new connection. Build streaks, unlock badges, and level up your social game.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "AI-powered nudges to reconnect with people at the perfect moments. Never lose touch again.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: BarChart3,
    title: "Social Analytics",
    description: "Visualize your network growth, discover patterns, and optimize your social strategy.",
    color: "text-neon-blue",
    bgColor: "bg-neon-blue/10"
  },
  {
    icon: MapPin,
    title: "Location Tracking",
    description: "Remember where you met everyone. Build a map of your social encounters around the world.",
    color: "text-neon-magenta",
    bgColor: "bg-neon-magenta/10"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-matrix-dark to-matrix-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-neon-blue border-neon-blue/30">
            <Target className="w-4 h-4 mr-2" />
            Core Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Level Up Your</span>
            <br />
            Social Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Turn every interaction into progress. MaetriXs makes networking 
            measurable, memorable, and meaningful.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="glass-card-interactive card-elevated border-matrix-border"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              <CardContent className="p-8">
                <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-6`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="card-elevated p-6 rounded-xl">
            <div className="text-3xl font-bold gradient-text mb-2">10,000+</div>
            <div className="text-muted-foreground">Connections Tracked</div>
          </div>
          <div className="card-elevated p-6 rounded-xl">
            <div className="text-3xl font-bold text-neon-blue mb-2">95%</div>
            <div className="text-muted-foreground">Memory Improvement</div>
          </div>
          <div className="card-elevated p-6 rounded-xl">
            <div className="text-3xl font-bold text-neon-magenta mb-2">3x</div>
            <div className="text-muted-foreground">More Follow-ups</div>
          </div>
        </div>
      </div>
    </section>
  );
};