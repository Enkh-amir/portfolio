import { AboutPage } from "@/components/About";
import { ContactPage } from "@/components/ContactMe";
import { ExperiencePage } from "@/components/Experience";
import { FooterPage } from "@/components/FooterPage";
import { Header } from "@/components/Header";
import { Hero } from "@/components/HiPage";
import { SkillsPage } from "@/components/Skill";
import { Testing } from "@/components/TestingPage";
import { WorkPage } from "@/components/Work";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutPage />
      <SkillsPage />
      <ExperiencePage />
      <WorkPage />
      <ContactPage />
      <FooterPage />
    </div>
  );
}
