import React from 'react'

const skillGroups = [
  { title: 'Programming Languages', items: ['Python','C','JavaScript'] },
  { title: 'Frameworks & Tech', items: ['HTML','CSS','Flask','React','TypeScript','Node.js'] },
  { title: 'Databases & Tools', items: ['SQLite','MySQL','PostgreSQL','Git','GitHub','AWS (SNS)','OpenAI API'] },
  { title: 'Other', items: ['Data Structures','Algorithms','Real-time Systems'] }
]

export default function Skills(){
  return (
    <section id="skills" className="py-10 pt-32 pb-24">
      <div className="container">
        <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((g,idx)=> (
            <div key={idx} className="panel">
              <h3 className="font-semibold text-lg">{g.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map(i=> <span key={i} className="text-xs px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded border border-purple-500/50 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
