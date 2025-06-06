import React from 'react'
import { SkillBadge } from "@/components/skill-badge"
import { SectionHeading } from "@/components/section-heading"

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>
    
            <div className="container relative z-10">
              <SectionHeading title="My Skills" subtitle="Technologies I work with" />
    
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
                <SkillBadge name="JavaScript" level={90} />
                <SkillBadge name="TypeScript" level={85} />
                <SkillBadge name="React" level={95} />
                <SkillBadge name="Next.js" level={90} />
                <SkillBadge name="Node.js" level={80} />
                <SkillBadge name="HTML/CSS" level={95} />
                <SkillBadge name="Tailwind CSS" level={90} />
                <SkillBadge name="GraphQL" level={75} />
                <SkillBadge name="PostgreSQL" level={70} />
                <SkillBadge name="AWS" level={65} />
                <SkillBadge name="Docker" level={60} />
                <SkillBadge name="Git" level={85} />
              </div>
            </div>
          </section>
  )
}

export default Skills