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
            Track → Reflect → Grow
          </p>
        </div>

        {/* Horizontal Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              {/* Connection Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-neon-blue/50" />
                </div>
              )}

              <Card className="card-elevated border-matrix-border p-6 text-center h-full group-hover:scale-105 transition-all duration-300">
                <CardContent className="p-0 space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl ${step.bgColor} mx-auto`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>

                  {/* Step Number */}
                  <div className="text-4xl font-bold text-matrix-border/30">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 pt-2">
                    {step.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Zap className={`w-3 h-3 ${step.color}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-md bg-matrix-border rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-primary rounded-full w-0 animate-[progress_2s_ease-out_forwards]" />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
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