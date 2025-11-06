import React from 'react'

const experiences = [
  {
    role: "Bachelor of Engineering, Computer Science",
    company: "Sai Vidya Institute of Technology",
    date: '2022 - 2026',
    location: 'Bengaluru',
    bullets: ['Pursuing B.E. in Computer Science, coursework includes Data Structures, Algorithms, OOP, DBMS']
  },
  {
    role: "Prasanna Rameshwar PU College",
    company: "PCMB",
    date: '2021 - 2022',
    location: 'Belaguru',
    bullets: ['Completed pre-university college with focus on Physics, Chemistry, Maths, Biology']
  }
]

export default function Experience(){
  return (
    <section id="experience" className="py-10 pt-32 pb-24">
      <div className="container">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="mt-6 space-y-4">
          {experiences.map((e,idx)=> (
            <div key={idx} className="panel">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg">{e.role}</div>
                  <div className="text-sm text-slate-400">{e.company} • {e.location}</div>
                </div>
                <div className="text-sm text-blue-400">{e.date}</div>
              </div>
              <ul className="mt-3 list-disc ml-5 text-sm text-slate-300">
                {e.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
