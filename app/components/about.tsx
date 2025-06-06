import React from "react";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading title="About Me" subtitle="My background and journey" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
              <img
                src="/images/me.jpg"
                alt="Graham Usai"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <GlassmorphicCard>
              <p className="text-lg text-zinc-300">
                I'm a passionate software engineer with experience building web
                applications and digital products. I specialize in frontend
                development with React and Next.js, but I'm also comfortable
                working with backend technologies.
              </p>
              <p className="text-lg text-zinc-300 mt-4">
                My journey in tech started with a strong foundation in software
                development. I've worked with various companies to create
                intuitive, performant, and accessible digital experiences.
              </p>
              <p className="text-lg text-zinc-300 mt-4">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, and staying up-to-date
                with the latest industry trends.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Name</div>
                  <div className="font-medium">Graham Usai</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Email</div>
                  <div className="font-medium">grahamusai0@gmail.com</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Location</div>
                  <div className="font-medium">Johannesburg</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Availability</div>
                  <div className="font-medium text-green-500">
                    Open to opportunities.
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/pdf/Graham-Usai-CV.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
                >
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                    Download Resume
                  </Button>
                </Link>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
