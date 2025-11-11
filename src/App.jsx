import { useMemo } from 'react'
import { Github, Linkedin, Mail, Cpu, Code2, Rocket, Database, Shield } from 'lucide-react'

function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            Your Name
          </span>
        </a>
        <div className="flex items-center gap-4 text-sm">
          <a href="#stack" className="text-white/70 hover:text-white transition-colors">Stack</a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
          <div className="w-px h-5 bg-white/10 mx-1" />
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="#" className="text-white/70 hover:text-white transition-colors"><Github size={18} /></a>
            <a aria-label="LinkedIn" href="#" className="text-white/70 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a aria-label="Email" href="#contact" className="text-white/70 hover:text-white transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

function TechPlanet() {
  return (
    <div className="relative w-full max-w-sm aspect-square mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-tr from-purple-600/40 via-fuchsia-500/30 to-blue-600/40" />
      {/* Planet */}
      <div className="relative w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,#a78bfa_0%,#6d28d9_35%,#1d4ed8_70%,#0b1222_85%)] shadow-[inset_0_40px_80px_rgba(255,255,255,0.05)] border border-white/10 overflow-visible">
        {/* Rings */}
        <div className="absolute inset-0 rounded-full border border-white/10 -rotate-12 spin-slow" />
        <div className="absolute inset-0 rounded-full border border-blue-300/20 rotate-12 spin-slower" />
        {/* Orbits */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-purple-300/20">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_12px_3px_rgba(167,139,250,0.6)] orbit" />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full border border-blue-300/15">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(96,165,250,0.6)] orbit-slow" />
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative pt-28 pb-10 sm:pt-32 sm:pb-16 bg-[#0a0f1b] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-20%,rgba(124,58,237,0.25),transparent_60%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Name minimal */}
        <div>
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-none">
            <span className="text-gradient">YOUR NAME</span>
          </h1>
          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">Web</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">React</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">FastAPI</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">Design</span>
          </div>
        </div>
        {/* Right: Tech Planet */}
        <div className="md:justify-self-end">
          <TechPlanet />
        </div>
      </div>
    </section>
  )
}

function GlassCard({ icon: Icon, title, children }) {
  return (
    <div className="group relative rounded-xl p-5 bg-white/5 border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md">
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
      <div className="relative flex items-start gap-4">
        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-200">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-white/70 leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  )
}

function Stack() {
  const items = useMemo(() => ([
    { icon: Code2, title: 'Frontend', text: 'React, Vite, Tailwind, Framer Motion.' },
    { icon: Database, title: 'APIs & Data', text: 'FastAPI, MongoDB, REST.' },
    { icon: Cpu, title: 'Performance', text: 'Fast, accessible, sleek.' },
    { icon: Shield, title: 'Quality', text: 'Typed, validated, tested.' },
    { icon: Rocket, title: 'Delivery', text: 'Modular and scalable.' },
  ]), [])

  return (
    <section id="stack" className="relative py-20 bg-[#0a0f1b] overflow-hidden">
      {/* Moving lines background */}
      <div className="absolute inset-0 moving-lines opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">
          <span className="text-gradient">Tech Stack</span>
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <GlassCard key={i} icon={item.icon} title={item.title}>{item.text}</GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="relative bg-[#090d17] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white/80 font-medium">Say hi</p>
          <p className="text-white/50 text-sm">I read every message.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:you@example.com" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white/90 transition-colors">you@example.com</a>
          <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 transition-colors"><Github size={18} /></a>
          <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 transition-colors"><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1b] text-white">
      <Nav />
      <Hero />
      <Stack />
      <Footer />
    </div>
  )
}
