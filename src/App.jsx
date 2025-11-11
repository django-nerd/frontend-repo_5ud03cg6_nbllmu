import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail, Sparkles, Cpu, Code2, Rocket, Database, Shield } from 'lucide-react'

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
          <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
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

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-[#0a0f1b] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 backdrop-blur">
            <Sparkles size={16} className="text-purple-300" />
            <span className="text-xs">Futuristic • Next‑Gen • Tech Forward</span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-tight">
            <span className="text-gradient">Building sleek digital experiences</span>
            <br />
            <span className="text-white/80">with code, design, and curiosity.</span>
          </h1>

          <p className="mt-5 text-white/70 text-lg">
            I craft high‑performance web apps with modern stacks, clean architecture, and an obsessive focus on detail.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-[0_0_20px_rgba(88,28,135,0.35)] hover:shadow-[0_0_30px_rgba(37,99,235,0.45)] transition-shadow">
              Get in touch
            </a>
            <a href="#stack" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white/90 font-medium backdrop-blur transition-colors">
              Explore my stack
            </a>
          </div>
        </div>
      </div>

      <Waves />
    </section>
  )
}

function Waves() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10">
      <div className="relative h-28 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-[200%] h-28 animate-wave-slow" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0 67 C 273,183 822,-40 1200,52 L1200 120 L0 120 Z" fill="url(#grad1)" fillOpacity="0.22" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute bottom-0 left-0 w-[200%] h-28 animate-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0 67 C 273,183 822,-40 1200,52 L1200 120 L0 120 Z" fill="url(#grad2)" fillOpacity="0.35" />
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute bottom-0 left-0 w-[200%] h-28 animate-wave-fast" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0 67 C 273,183 822,-40 1200,52 L1200 120 L0 120 Z" fill="url(#grad3)" fillOpacity="0.6" />
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
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
    { icon: Code2, title: 'Frontend', text: 'React, Vite, Tailwind, Framer Motion — responsive, accessible, and blazing fast.' },
    { icon: Database, title: 'APIs & Data', text: 'FastAPI, MongoDB, REST patterns, secure auth, clean data models.' },
    { icon: Cpu, title: 'Performance', text: 'Lighthouse‑friendly, lazy loading, image optimization, bundle hygiene.' },
    { icon: Shield, title: 'Quality', text: 'Type hints, schema validation, sensible error handling, observability.' },
    { icon: Rocket, title: 'Delivery', text: 'CI‑ready, modular architecture, scalable components, future‑proof.' },
  ]), [])

  return (
    <section id="stack" className="relative py-20 bg-[#0a0f1b]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">
          <span className="text-gradient">Tech that powers my builds</span>
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          A carefully‑curated toolkit engineered for reliability and speed.
        </p>

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
          <p className="text-white/80 font-medium">Let’s build something remarkable.</p>
          <p className="text-white/50 text-sm">Drop a line and I’ll get back within 24h.</p>
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
