import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-10 pb-16 pt-12">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">About Me</h2>
        <div className="panel">
          <p className="text-slate-300">Passionate and self-motivated Computer Science student with a strong interest in technology and software development. Driven by curiosity and a desire to solve real-world problems, I have developed hands-on projects using Python, HTML, CSS, and modern frameworks, including AI-driven and real-time web applications.</p>
          <p className="mt-3 text-slate-300">I aim to grow my career in a forward-thinking tech organization, where I can apply my technical, analytical, and creative skills to build scalable, user-focused, and impactful technology solutions.</p>
          <h3 className="mt-6 font-semibold text-lg">Quick Facts</h3>
          <ul className="list-disc ml-5 text-slate-400 mt-3 space-y-2">
            <li>Sai Vidya Institute of Technology — B.E., Computer Science (2022–2026) — Bengaluru</li>
            <li>Prasanna Rameshwar PU College — PCMB (2021–2022) — Belaguru</li>
            <li>Volunteering: Festiva Foundation — Waste Segregation Awareness Drive</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
