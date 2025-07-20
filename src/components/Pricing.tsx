import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for casual networkers",
    features: [
      "Track up to 50 connections",
      "Basic logging & notes",
      "Simple search",
      "XP tracking",
      "Basic analytics"
    ],
    cta: "Start Free",
    popular: false,
    icon: Zap,
    color: "text-muted-foreground",
    borderColor: "border-matrix-border"
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For serious social networkers",
    features: [
      "Unlimited connections",
      "Advanced search & filters",
      "Smart reminders",
      "Location mapping",
      "Export data",
      "Priority support",
      "Advanced analytics"
    ],
    cta: "Join Waitlist",
    popular: true,
    icon: Star,
    color: "text-neon-blue",
    borderColor: "border-neon-blue"
  },
  {
    name: "Teams",
    price: "$19",
    period: "per member/month",
    description: "Perfect for organizations",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Shared connections",
      "Admin dashboard",
      "Team analytics",
      "Custom integrations",
      "White-label options"
    ],
    cta: "Contact Sales",
    popular: false,
    icon: Crown,
    color: "text-neon-magenta",
    borderColor: "border-neon-magenta"
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-matrix-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-neon-blue border-neon-blue/30">
            <Star className="w-4 h-4 mr-2" />
            Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Social Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and upgrade as your network grows. Every plan includes 
            our core features with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`card-elevated ${plan.borderColor} relative interactive-card ${
                plan.popular ? 'neon-glow scale-105' : ''
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-matrix-dark px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-primary/10 mb-4 mx-auto`}>
                  <plan.icon className={`w-6 h-6 ${plan.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {plan.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-primary/20 flex items-center justify-center mt-0.5`}>
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:shadow-elevation neon-glow' 
                      : 'bg-matrix-surface border border-matrix-border hover:bg-matrix-border/20'
                  } transition-all duration-300`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required. 
            <br />
            <span className="text-neon-blue">Cancel anytime</span> with full data export.
          </p>
        </div>
      </div>
    </section>
  );
};