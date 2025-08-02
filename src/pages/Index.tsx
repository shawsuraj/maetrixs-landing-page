import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { ProblemSolution } from '@/components/ProblemSolution';
import { HowItWorks } from '@/components/HowItWorks';
import { Pricing } from '@/components/Pricing';
import { MaetrixsWrapped } from '@/components/MaetrixsWrapped';
import { Waitlist } from '@/components/Waitlist';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <Features />
      <ProblemSolution />
      <HowItWorks />
      <Pricing />
      <MaetrixsWrapped />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
