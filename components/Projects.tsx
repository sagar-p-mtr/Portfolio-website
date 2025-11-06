import React from 'react'

const projects = [
  {
    id: 'flood',
    title: 'Real-Time Flood Reporting System',
    desc: 'Built a full-stack real-time flood reporting web app featuring photo uploads, location tagging, secure authentication, AWS SNS alerts, and a mobile-responsive design for smart city disaster management.',
    tech: ['Python','HTML','CSS','JavaScript','MySQL','AWS SNS'],
    date: 'March 2025',
    github: 'https://github.com/sagar-p-mtr/Real-Time-Flood-Reporting-System.git'
  },
  {
    id: 'ai-quote',
    title: 'AI Motivational Quote Agent',
    desc: 'AI-powered Python CLI using the OpenAI API to generate personalized motivational quotes and career tips with prompt engineering and structured logging.',
    tech: ['Python','OpenAI API'],
    date: 'June 2025',
    github: 'https://github.com/sagar-p-mtr/AI-Motivational-Quote-Agent.git'
  },
  {
    id: 'mobility',
    title: 'Real-Time Mobility & Crowd Analytics System',
    desc: 'Full-stack smart transit platform (in development) integrating predictive ETAs, real-time crowd analysis, weather-aware commute assistance, live tracking, authentication, and digital ticketing.',
    tech: ['Python','React','TypeScript','Node.js','PostgreSQL','Google Maps'],
    date: 'Sep 2025',
    github: 'https://github.com/sagar-p-mtr/Real-Time-Mobility-Crowd-Analytics-System.git'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-10 pt-12 pb-16">
      <div className="container">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p=> (
            <article key={p.id} className="panel">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map(t=> <span key={t} className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">{t}</span>)}
              </div>
              <div className="mt-4">
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-sm bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
