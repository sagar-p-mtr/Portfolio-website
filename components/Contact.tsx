import React, { useState } from 'react'

export default function Contact(){
  const [status,setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setStatus('sending')
    const form = new FormData(e.target)
    const res = await fetch('/api/contact',{method:'POST',body:JSON.stringify(Object.fromEntries(form as any)),headers:{'Content-Type':'application/json'}})
    if(res.ok) setStatus('sent')
    else setStatus('error')
  }

  return (
    <section id="contact" className="py-10">
      <div className="container">
        <h2 className="text-2xl font-semibold">Get In Touch</h2>
        <p className="text-sm text-slate-400 mt-2">Have a project in mind or want to collaborate? Fill out the form below and I'll get back to you soon!</p>
        
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <form className="lg:col-span-2 panel" onSubmit={handleSubmit}>
            <label className="block">Full Name<input name="name" required placeholder="Your name" className="w-full p-2 border border-slate-600 bg-slate-800/50 text-slate-200 rounded mt-1 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"/></label>
            <label className="block mt-3">Email Address<input name="email" type="email" required placeholder="your.email@example.com" className="w-full p-2 border border-slate-600 bg-slate-800/50 text-slate-200 rounded mt-1 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"/></label>
            <label className="block mt-3">Service Interest<select name="service" className="w-full p-2 border border-slate-600 bg-slate-700 text-white rounded mt-1 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
              <option value="">Select a service</option>
              <option value="web">Web Development</option>
              <option value="resume">Resume Format</option>
              <option value="general">General Enquiry</option>
            </select></label>
            <label className="block mt-3">Message<textarea name="message" rows={5} required placeholder="Tell me about your project or needs..." className="w-full p-2 border border-slate-600 bg-slate-800/50 text-slate-200 rounded mt-1 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"/></label>
            <div className="mt-4">
              <button className="btn-gradient" disabled={status==='sending'}>{status==='sending'?'Sending...':'Send Message'}</button>
            </div>
            {status==='sent' && <p className="mt-2 text-green-400">Message sent — I will get back to you soon.</p>}
            {status==='error' && <p className="mt-2 text-red-400">Something went wrong. Try again later.</p>}
          </form>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Connect With Me */}
            <div className="panel">
              <h3 className="font-bold text-lg mb-4 text-blue-400">Connect With Me</h3>
              <div className="space-y-3">
                <a 
                  href="https://linkedin.com/in/sagar-p-526238330/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-slate-800/50 rounded hover:bg-slate-700/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] group"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">LinkedIn</div>
                    <div className="text-xs text-slate-400">3K+ Followers</div>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a 
                  href="https://github.com/sagar-p-mtr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-slate-800/50 rounded hover:bg-slate-700/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] group"
                >
                  <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">GitHub</div>
                    <div className="text-xs text-slate-400">View Projects</div>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="panel">
              <h3 className="font-bold text-lg mb-4 text-purple-400">Response Time</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600/20 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Usually responds</div>
                    <div className="text-sm text-slate-400">Within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-sm text-slate-400">sagarp.22cs@saividya.ac.in</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600/20 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-sm text-slate-400">Bengaluru, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
