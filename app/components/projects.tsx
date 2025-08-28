import React from 'react'
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Nandos Zimbabwe Website"
              description="A full-stack e-commerce platform built with Next.js, Stripe, and Prisma."
              tags={["JSP", "Dupal", "Google Maps API"]}
              image="/images/nandos.png"
              demoUrl="https://nandos.co.zw"
              repoUrl="#"
            />
            <ProjectCard
              title="Online Marketplace"
              description="A marketplace platform for buying and selling products, built with React and Firebase."
              tags={["React", "React Native", "Tailwind CSS", "AWS S3"]}
              image="/images/go-advert.png"
              demoUrl="https://iadvertise.co.zw"
              repoUrl="#"
            />
            <ProjectCard
              title="Broker Management System"
              description="A fullstack broker management system using Laravel, React, and MongoDB."
              tags={["Next.js", "Laravel", "MongoDB"]}
              image="/images/brokers.png"
              demoUrl="#"
              repoUrl="https://github.com/grahamusai/broker-management-system "
            />
            <ProjectCard
              title="Trucking Management System"
              description="A comprehensive trucking management system for logistics companies."
              tags={["Nextjs", "TypeScript", "AWS", "Firebase"]}
              image="/images/loads.png"
              demoUrl="https://loads.africa"
              repoUrl="https://github.com/grahamusai/loads.africa"
            />
            <ProjectCard
              title="Business Website"
              description="Website for a local business showcasing their services and products."
              tags={["React", "Nextjs", "tailwindscss", "Javascript"]}
              image="/images/tropical.png"
              demoUrl="https://tropicalblinds.co.zw"
              repoUrl="https://github.com/grahamusai/tropicalblinds"
            />
            <ProjectCard
              title="Furniture Business Website"
              description="A modern website for a furniture business, built with Next.js and Tailwind CSS."
              tags={["WordPress", "Elementor", "Ph", "TypeScript"]}
              image="/images/ntane.png"
              demoUrl="https://ntaneentitiesandprojects.co.za/"
              repoUrl="#"
            />
          </div>
        </div>
      </section>
  )
}

export default Projects