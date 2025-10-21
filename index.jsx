// /*
//   Marcelino Emmanuel (TheCyberBeat) - Single-file React + Tailwind portfolio component
//   - TailwindCSS required (v3+)
//   - Framer Motion used for subtle animations
//   - lucide-react icons used for icons (optional)
//   - Replace placeholders (resume link, Formspree endpoint, project links, images)
//   - To deploy: push to a Git repo and import to Vercel (automatic build)

//   Quick setup notes (if you don't already have a project):
//   1. Create app: `npm create vite@latest my-portfolio -- --template react`
//   2. Install deps: `npm i -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`
//   3. Tailwind config: set content to ['./index.html','./src/**/*.{js,jsx,ts,tsx}'] and enable dark mode: 'class'
//   4. Install runtime deps: `npm i framer-motion lucide-react`
//   5. Add Tailwind directives to ./src/index.css:
//      @tailwind base;\n     @tailwind components;\n     @tailwind utilities;
//   6. Use this file as src/App.jsx (or import it into your App component)
//   7. ENV / Formspree: replace CONTACT_FORM_ACTION with your Formspree endpoint or EmailJS integration

// */

import React from 'react'
import { motion } from 'framer-motion'
import { GitHub, ExternalLink, Mail, Download } from 'lucide-react'

const CONTACT_FORM_ACTION = 'https://formspree.io/f/yourFormId' // <- replace
const RESUME_LINK = '/resume-marcelino.pdf' // <- upload your resume to public folder or replace with absolute URL

const projects = [
  {
    title: 'PhishSim — Manual Phishing Demo',
    desc: 'A simulated manual phishing workflow with step-by-step breakdown and defensive notes.',
    tech: ['Node', 'Express', 'Puppeteer'],
    live: '#',
    repo: '#',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=60'
  },
  {
    title: 'NetGuard — Small Network Hardening',
    desc: 'Automated configuration templates and checklist for small office networks.',
    tech: ['Bash', 'Ansible'],
    live: '#',
    repo: '#',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60'
  },
  {
    title: 'VulnScan UI',
    desc: 'A compact frontend to visualize vulnerability scan results with filters and priorities.',
    tech: ['React', 'Tailwind'],
    live: '#',
    repo: '#',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60'
  }
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#05060a] text-slate-200 antialiased selection:bg-teal-500 selection:text-black">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0f172a] to-[#071124] flex items-center justify-center ring-1 ring-white/5">
            <span className="font-semibold text-teal-400">ME</span>
          </div>
          <div>
            <div className="text-lg font-semibold">Marcelino Emmanuel <span className="text-slate-400">(TheCyberBeat)</span></div>
            <div className="text-xs text-slate-500">Cybersecurity Enthusiast &amp; Ethical Hacker</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href={RESUME_LINK} download className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg hover:bg-white/8">
            <Download size={14} /> <span className="text-sm">Resume</span>
          </a>
        </nav>
        <div className="md:hidden">
          <button className="px-3 py-2 bg-white/5 rounded">Menu</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-20">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <motion.h1 initial={{ y: -10, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
              Marcelino Emmanuel
              <span className="block text-teal-400 mt-2">(TheCyberBeat)</span>
            </motion.h1>
            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ delay: 0.15 }} className="mt-6 text-lg text-slate-300 max-w-xl">
              Cybersecurity Enthusiast &amp; Ethical Hacker — I build tools, conduct simulated attacks, and write defensive playbooks to make systems safer.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex gap-3">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-gradient-to-r from-teal-500/80 to-cyan-400/70 font-medium shadow-lg hover:scale-[1.02] transform transition">See Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-lg bg-white/5 hover:bg-white/7">Contact Me</a>
            </motion.div>

            <div className="mt-8 text-sm text-slate-500">
              <div className="flex items-center gap-2"> <GitHub size={14} /> <span>GitHub: <a href="#" className="text-slate-300 hover:underline">github.com/your-username</a></span></div>
            </div>
          </div>

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale:1, opacity:1 }} transition={{ delay: 0.2 }} className="relative">
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/5 bg-gradient-to-b from-[#071124] to-[#071126] p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/3 rounded-lg">
                  <div className="text-xs text-slate-400">Primary</div>
                  <div className="mt-2 font-semibold">Web App Hardening</div>
                  <div className="text-xs text-slate-400 mt-2">Vuln assessment, secure config, CI checks.</div>
                </div>
                <div className="p-4 bg-white/3 rounded-lg">
                  <div className="text-xs text-slate-400">Tools</div>
                  <div className="mt-2 font-semibold">Scripts & Automations</div>
                  <div className="text-xs text-slate-400 mt-2">Small utilities to speed up triage.</div>
                </div>
                <div className="p-4 bg-white/3 rounded-lg">
                  <div className="text-xs text-slate-400">Playbooks</div>
                  <div className="mt-2 font-semibold">Incident Response</div>
                  <div className="text-xs text-slate-400 mt-2">Checklist-based, time-saving templates.</div>
                </div>
                <div className="p-4 bg-white/3 rounded-lg">
                  <div className="text-xs text-slate-400">Phishing</div>
                  <div className="mt-2 font-semibold">Manual Simulations</div>
                  <div className="text-xs text-slate-400 mt-2">Human-centred, educational campaigns.</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-gradient-to-br from-teal-700/30 to-cyan-400/10 blur-3xl pointer-events-none" />
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y:0, opacity:1 }} className="text-2xl font-semibold">Selected Projects</motion.h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article key={p.title} initial={{ y: 12, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ delay: 0.05 * i }} className="rounded-2xl overflow-hidden ring-1 ring-white/4 bg-gradient-to-b from-[#071124] to-[#06101a]">
                <div className="relative h-40 bg-slate-800">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover brightness-75" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="text-xs text-slate-400 mt-2">{p.desc}</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
                        {p.tech.map(t => (
                          <span key={t} className="px-2 py-1 bg-white/3 rounded text-[11px]">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <a href={p.live} className="px-3 py-2 bg-white/5 rounded hover:scale-[1.02] flex items-center gap-2"><ExternalLink size={14} /></a>
                      <a href={p.repo} className="px-3 py-2 bg-white/5 rounded flex items-center gap-2"><GitHub size={14} /></a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y:0, opacity:1 }} className="text-2xl font-semibold">Skills & Tools</motion.h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Linux', 'Nmap', 'Burp Suite', 'Scripting (Python/Bash)', 'React', 'Tailwind', 'Docker', 'Ansible'].map(skill => (
              <div key={skill} className="p-4 rounded-lg bg-white/3 text-sm">{skill}</div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y:0, opacity:1 }} className="text-2xl font-semibold">About Me</motion.h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 text-slate-300">
              <p>I’m Marcelino — a cybersecurity enthusiast focused on pragmatic defenses and human-centred security. I enjoy building small tools that automate repetitive triage tasks, running controlled simulations to teach teams about phishing, and writing clear playbooks that a junior analyst can follow.</p>

              <p className="mt-4">I’m always learning: from web app hardening to network fundamentals. I like projects with clear ROI — where a short script or configuration saves hours during incident response.</p>

              <div className="mt-6 flex gap-3">
                <a href={RESUME_LINK} download className="px-4 py-2 rounded bg-white/5 flex items-center gap-2"> <Download size={14} /> Resume</a>
                <a href="#contact" className="px-4 py-2 rounded bg-white/3">Work with me</a>
              </div>
            </div>

            <aside className="p-4 rounded-lg bg-white/3">
              <div className="text-sm text-slate-400">Quick Facts</div>
              <ul className="mt-3 text-sm">
                <li>• Based in Nigeria</li>
                <li>• Focus: Web App / People-centred security</li>
                <li>• Tools: Nmap, Burp, Git, Docker</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y:0, opacity:1 }} className="text-2xl font-semibold">Contact</motion.h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-300">Got a project or want to collaborate? Drop a short message and I’ll get back to you.</p>

              <form action={CONTACT_FORM_ACTION} method="POST" className="mt-6 grid gap-3">
                <input type="text" name="name" placeholder="Your name" className="w-full px-4 py-3 bg-[#060818] rounded border border-white/6 placeholder:text-slate-500" required />
                <input type="email" name="email" placeholder="Your email" className="w-full px-4 py-3 bg-[#060818] rounded border border-white/6 placeholder:text-slate-500" required />
                <textarea name="message" rows={5} placeholder="Tell me about the project" className="w-full px-4 py-3 bg-[#060818] rounded border border-white/6 placeholder:text-slate-500" required />
                <div className="flex items-center gap-3">
                  <button type="submit" className="px-4 py-2 rounded bg-gradient-to-r from-teal-500 to-cyan-400">Send message</button>
                  <a href="mailto:your@email.com" className="px-3 py-2 rounded bg-white/5 flex items-center gap-2"><Mail size={14} /> Email</a>
                </div>
              </form>
            </div>

            <div className="p-6 rounded-lg bg-white/3">
              <div className="text-slate-200 font-medium">Let's connect</div>
              <div className="mt-4 text-slate-400">You can also reach me on:</div>
              <ul className="mt-4 text-sm text-slate-300 space-y-2">
                <li>• GitHub: <a href="#" className="hover:underline">github.com/your-username</a></li>
                <li>• LinkedIn: <a href="#" className="hover:underline">linkedin.com/in/your</a></li>
                <li>• X: <a href="#" className="hover:underline">@your_handle</a></li>
              </ul>

              <div className="mt-6 text-xs text-slate-400">Privacy: I won't share your message. Form submissions go to the inbox configured on the provider.</div>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-slate-500">
          © {new Date().getFullYear()} Marcelino Emmanuel (TheCyberBeat) — Built with ❤️ and Tailwind
        </footer>
      </main>
    </div>
  )
}
