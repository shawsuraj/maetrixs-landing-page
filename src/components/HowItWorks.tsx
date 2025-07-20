import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  Brain, 
  TrendingUp, 
  ArrowRight,
  Zap,
  Target
} from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Meet & Log",
    description: "Quick 30-second entry to capture who you met, where, and why. Add photos, notes, and context that matters.",
    features: ["Name & photo capture", "Location tagging", "Context notes", "Interest mapping"],
    color: "text-neon-blue",
    bgColor: "bg-neon-blue/10"
  },
  {
    number: "02", 
    icon: Brain,
    title: "Remember & Organize",
    description: "AI helps organize your connections by interests, locations, and relationship strength. Never lose track again.",
    features: ["Smart categorization", "Memory assists", "Search & filter", "Connection timeline"],
    color: "text-neon-magenta",
    bgColor: "bg-neon-magenta/10"
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Grow & Gamify",
    description: "Earn XP for every connection, build streaks, unlock achievements, and watch your social network flourish.",
    features: ["XP & level system", "Achievement badges", "Streak counters", "Growth analytics"],
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-matrix-surface to-matrix-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-neon-blue border-neon-blue/30">
            <Target className="w-4 h-4 mr-2" />
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Three Simple Steps</span>
            <br />
            to Social Mastery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your social life with a system so simple, 
            you'll wonder how you ever networked without it.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-32 w-0.5 h-16 bg-gradient-to-b from-matrix-border to-transparent z-0 hidden lg:block" />
              )}
              
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Content */}
                <div 
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    animation: 'fade-in-up 0.6s ease-out forwards'
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex p-4 rounded-xl ${step.bgColor} relative z-10`}>
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div className="text-6xl font-bold text-matrix-border/30">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Zap className={`w-4 h-4 ${step.color}`} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Illustration/Visual */}
                <div 
                  className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  style={{ 
                    animationDelay: `${index * 0.2 + 0.1}s`,
                    animation: 'fade-in-up 0.6s ease-out forwards'
                  }}
                >
                  <Card className="card-elevated border-matrix-border p-12 relative overflow-hidden">
                    <CardContent className="p-0">
                      {/* Mock interface visualization */}
                      <div className="aspect-square bg-gradient-card rounded-xl border border-matrix-border p-8 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-matrix-border/5 to-transparent" />
                        
                        {/* Step-specific visual content */}
                        {step.number === "01" && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-matrix-surface rounded-lg">
                              <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center">
                                <UserPlus className="w-6 h-6 text-neon-blue" />
                              </div>
                              <div>
                                <div className="h-3 bg-neon-blue/30 rounded w-20 mb-1" />
                                <div className="h-2 bg-matrix-border rounded w-16" />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="h-8 bg-matrix-border/30 rounded animate-pulse" />
                              ))}
                            </div>
                          </div>
                        )}

                        {step.number === "02" && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-3">
                              {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="aspect-square bg-neon-magenta/20 rounded-lg p-2">
                                  <div className="w-full h-full bg-neon-magenta/40 rounded" />
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <div className="flex-1 h-2 bg-neon-magenta/40 rounded" />
                              <div className="flex-1 h-2 bg-matrix-border/30 rounded" />
                              <div className="flex-1 h-2 bg-matrix-border/30 rounded" />
                            </div>
                          </div>
                        )}

                        {step.number === "03" && (
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="text-4xl font-bold text-accent mb-2">Level 12</div>
                              <div className="h-3 bg-matrix-border rounded-full overflow-hidden">
                                <div className="h-full bg-accent rounded-full w-3/4" />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="flex items-center gap-2 p-2 bg-accent/10 rounded">
                                  <div className="w-6 h-6 bg-accent/40 rounded" />
                                  <div className="h-2 bg-accent/30 rounded flex-1" />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg neon-glow bg-gradient-primary hover:shadow-elevation transition-all duration-300 group"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};