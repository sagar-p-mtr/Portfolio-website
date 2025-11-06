import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }){
  return (
    <div>
      <header className="nav-header bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
        <div className="container flex items-center justify-between">
          <div className="font-bold nav-brand">Personal Portfolio</div>
          <nav className="space-x-4">
            <a href="#home" className="nav-link opacity-90 hover:opacity-100">Home</a>
            <a href="#about" className="nav-link opacity-90 hover:opacity-100">About</a>
            <a href="#experience" className="nav-link opacity-90 hover:opacity-100">Education</a>
            <a href="#skills" className="nav-link opacity-90 hover:opacity-100">Skills</a>
            <a href="#projects" className="nav-link opacity-90 hover:opacity-100">Projects</a>
            <a href="#contact" className="nav-link opacity-90 hover:opacity-100">Contact</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
