import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { ProblemSolution } from '@/components/ProblemSolution';
import { HowItWorks } from '@/components/HowItWorks';
import { Pricing } from '@/components/Pricing';
import { SocialProof } from '@/components/SocialProof';
import { MaetrixsWrapped } from '@/components/MaetrixsWrapped';
import { Waitlist } from '@/components/Waitlist';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-matrix-dark">
      <Hero />
      <Features />
      <ProblemSolution />
      <HowItWorks />
      <SocialProof />
      <MaetrixsWrapped />
      <Pricing />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
