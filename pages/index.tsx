import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'

export default function Home(){
  return (
    <Layout>
      <Head>
        <title>Sagar P — Portfolio</title>
        <meta name="description" content="Computer Science student building full-stack and AI-driven web applications." />
      </Head>
      <div className="container">
        <Hero />
        <main>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </Layout>
  )
}
