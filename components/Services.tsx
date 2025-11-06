import React from 'react'

const services = [
  { id: 'resume', title: 'Resume Writing Service', bullets: ['ATS-Optimized','Industry-Specific','Unlimited Revisions'] },
  { id: 'social', title: 'Social Media Management', bullets: ['Content Strategy','Brand Building','Engagement Growth'] },
  { id: 'web', title: 'Web Development', bullets: ['MERN Stack','Responsive Design','SEO Optimized'] },
  { id: 'design', title: 'Graphic Design', bullets: ['Logo Design','Brand Identity','Digital Graphics'] },
  { id: 'mentoring', title: 'Career Guidance & Mentoring', bullets: ['1-on-1 Sessions','Career Planning','Skill Assessment'] },
  { id: 'exam', title: 'Exam Preparation Coaching', bullets: ['Study Plans','Mock Tests','Performance Analysis'] }
]

export default function Services(){
  return (
    <section id="services" className="py-10 pt-32 pb-24">
      <div className="container">
        <h2 className="text-2xl font-semibold">Services I Offer</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(s=> (
            <div key={s.id} className="panel">
              <h3 className="font-bold text-lg">{s.title}</h3>
              <ul className="mt-2 list-disc ml-5 text-sm text-slate-300">
                {s.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
              </ul>
              <div className="mt-3">
                <a href="#contact" className="text-sm text-blue-400 hover:text-blue-300">Get Started →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
