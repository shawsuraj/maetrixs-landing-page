import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  Target, 
  Users, 
  Lightbulb,
  Brain,
  TrendingUp,
  Globe,
  Smartphone,
  ArrowRight,
  UserPlus,
  Briefcase,
  Palette
} from 'lucide-react';

const problemCards = [
  {
    icon: Brain,
    title: "Memory Overload",
    description: "Meet dozens weekly but forget names, context, or purpose",
    color: "text-red-400"
  },
  {
    icon: Smartphone,
    title: "Feed-Driven Networks",
    description: "Social platforms focus on content, not meaningful connections",
    color: "text-orange-400"
  },
  {
    icon: AlertTriangle,
    title: "Lost Opportunities",
    description: "No measurable way to track real-life networking progress",
    color: "text-yellow-400"
  }
];

const solutionCards = [
  {
    icon: Target,
    title: "Track Connections",
    description: "Log every person you meet with context and purpose",
    color: "text-neon-blue"
  },
  {
    icon: Lightbulb,
    title: "Remember Everything",
    description: "AI-powered memory assists for names, faces, and conversations",
    color: "text-neon-magenta"
  },
  {
    icon: TrendingUp,
    title: "Gamify Growth",
    description: "XP, badges, and streaks make networking fun and measurable",
    color: "text-accent"
  }
];

const marketSegments = [
  {
    icon: Users,
    title: "Gen Z & Students",
    description: "High social activity, event-driven lifestyle",
    color: "text-neon-blue",
    link: "/students"
  },
  {
    icon: Globe,
    title: "Travelers & Nomads", 
    description: "Constant new connections around the world",
    color: "text-neon-magenta",
    link: "/travelers"
  },
  {
    icon: UserPlus,
    title: "Party & Social",
    description: "Turn parties into meaningful connections",
    color: "text-accent",
    link: "/party"
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Strategic networking for business growth",
    color: "text-neon-blue",
    link: "/professionals"
  },
  {
    icon: Palette,
    title: "Creators",
    description: "Build networks with fellow creators",
    color: "text-neon-magenta",
    link: "/creators"
  }
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 bg-matrix-dark">
      <div className="container mx-auto px-6">
        {/* Problem Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-red-400 border-red-400/30">
              <AlertTriangle className="w-4 h-4 mr-2" />
              The Problem
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Social <span className="text-red-400">Memory Crisis</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We meet amazing people every day, but our brains aren't designed 
              to remember everyone in our increasingly connected world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemCards.map((card, index) => (
              <Card 
                key={card.title}
                className="card-elevated border-red-400/20 interactive-card"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fade-in-up 0.6s ease-out forwards'
                }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-xl bg-red-400/10 mb-6">
                    <card.icon className={`w-8 h-8 ${card.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-neon-blue border-neon-blue/30">
              <Lightbulb className="w-4 h-4 mr-2" />
              Our Solution
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">MaetriXs</span> Changes Everything
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A gamified, private-first platform that turns every social interaction 
              into measurable progress toward better relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionCards.map((card, index) => (
              <Card 
                key={card.title}
                className="card-elevated border-matrix-border interactive-card neon-glow"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fade-in-up 0.6s ease-out forwards'
                }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-primary/10 mb-6`}>
                    <card.icon className={`w-8 h-8 ${card.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Section */}
        <div>
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-accent border-accent/30">
              <Target className="w-4 h-4 mr-2" />
              Target Market
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for <span className="text-accent">Social Catalysts</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Perfect for anyone who values real connections and wants to 
              level up their social and professional networking game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketSegments.map((segment, index) => (
              <Link
                key={segment.title}
                to={segment.link}
                className="group block"
              >
                <Card 
                  className="card-elevated border-matrix-border interactive-card group-hover:border-accent/50 transition-all duration-300 group-hover:shadow-elevation h-full"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fade-in-up 0.6s ease-out forwards'
                  }}
                >
                  <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className={`inline-flex p-3 rounded-xl bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors`}>
                        <segment.icon className={`w-6 h-6 ${segment.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{segment.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{segment.description}</p>
                    </div>
                    <div className="flex items-center justify-center text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};