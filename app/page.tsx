import { Header } from "@/components/header";
import { ProfileSection } from "@/components/profile-section";
import { SelfAwareness } from "@/components/self-awareness";
import { Timeline } from "@/components/timeline";
import { SkillsSection } from "@/components/skills-section";
import { LearningsSection } from "@/components/learnings-section";
import { GoalsSection } from "@/components/goals-section";
import { BadgesSection } from "@/components/badges-section";
import { ProjectsSection } from "@/components/projects-section";
import { FinalConsiderations } from "@/components/final-considerations";
import { Footer } from "@/components/footer";

export default function PDIPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Background gradient effect */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/5" />

      <main className="mx-auto max-w-5xl px-4 py-8 md:px-6 lg:px-8">
        <Header />
        <ProfileSection />
        <SelfAwareness />
        <Timeline />
        <SkillsSection />
        <LearningsSection />
        <ProjectsSection />
        <GoalsSection />
        <BadgesSection />
        <FinalConsiderations />
        <Footer />
      </main>
    </div>
  );
}
