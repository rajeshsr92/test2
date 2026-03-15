/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  FileSpreadsheet, 
  Cpu, 
  Activity, 
  BarChart3, 
  ShieldCheck, 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink,
  Eye,
  ChevronRight,
  Award,
  Briefcase,
  User,
  Code2
} from 'lucide-react';
import { SKILLS, CERTIFICATIONS, EXPERIENCES } from './constants';

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon: any }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 rounded-lg bg-brand-accent/10 border border-brand-accent/20">
        <Icon className="w-5 h-5 text-brand-accent" />
      </div>
      <span className="text-xs font-mono uppercase tracking-widest text-brand-accent">Section</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-serif italic mb-4">{title}</h2>
    {subtitle && <p className="text-white/50 max-w-2xl text-lg">{subtitle}</p>}
  </div>
);

const SkillCard = ({ skill }: { skill: typeof SKILLS[0] }) => {
  const IconMap: Record<string, any> = {
    FileSpreadsheet,
    Terminal,
    Cpu,
    Activity,
    BarChart3,
    ShieldCheck
  };
  const Icon = IconMap[skill.icon] || Code2;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl glass group transition-all duration-300 hover:border-brand-accent/30"
    >
      <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit group-hover:bg-brand-accent/10 transition-colors">
        <Icon className="w-6 h-6 text-white/70 group-hover:text-brand-accent" />
      </div>
      <h3 className="text-xl font-medium mb-2">{skill.name}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{skill.description}</p>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-white/40">
          {skill.category}
        </span>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATIONS[0] | null>(null);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Certification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-4xl w-full glass rounded-3xl overflow-hidden p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-6 h-6 rotate-45" />
              </button>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2 aspect-[4/3] bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden relative">
                  {selectedCert.image ? (
                    <img 
                      src={selectedCert.image} 
                      alt={selectedCert.title} 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <>
                      <Award className="w-20 h-20 text-brand-accent/20" />
                      <span className="absolute text-[10px] font-mono text-white/20 uppercase tracking-widest">Certificate Preview</span>
                    </>
                  )}
                </div>
                <div className="flex-1 py-4">
                  <span className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-4 block">Credential Details</span>
                  <h3 className="text-3xl font-serif italic mb-4">{selectedCert.title}</h3>
                  <div className="space-y-4 text-white/60">
                    <p><span className="text-white">Issuer:</span> {selectedCert.issuer}</p>
                    <p><span className="text-white">Date:</span> {selectedCert.date}</p>
                    <p className="text-sm leading-relaxed mt-8">
                      This certification validates the professional expertise and commitment to excellence in {selectedCert.title.includes('Revenue') ? 'Healthcare Revenue Cycle Management' : 'Project Management'}.
                    </p>
                  </div>
                  <button className="mt-12 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-brand-accent transition-all">
                    Verify Credential
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass border-b' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center font-bold text-black">RM</div>
            <span className="font-serif italic text-xl tracking-tight hidden sm:block">Rajesh Mullapudi</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-brand-accent transition-colors">{link.name}</a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-full bg-white text-black hover:bg-brand-accent transition-all">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-b overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white/60 hover:text-brand-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 rounded-2xl bg-white text-black text-center font-bold hover:bg-brand-accent transition-all"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-accent/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em] mb-6 block">
              Senior Operations Leader
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif italic mb-8 leading-tight">
              Transforming <br />
              <span className="text-gradient">Operations.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              12+ years of expertise in US Healthcare Revenue Cycle Management, 
              leveraging Python automation and VBA to drive financial performance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#experience"
                className="px-8 py-4 rounded-full bg-brand-accent text-black font-semibold flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                View Experience <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="/Rajesh_Mullapudi_Resume.pdf" 
                download="Rajesh_Mullapudi_Resume.pdf"
                className="px-8 py-4 rounded-full glass flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader 
                title="The Strategic Leader" 
                subtitle="Bridging the gap between complex healthcare operations and cutting-edge automation."
                icon={User}
              />
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  I am a seasoned RCM leader with over a decade of progressive experience across US Healthcare Accounts Receivable (AR), Prior Authorization, and Quality Operations.
                </p>
                <p>
                  My core strength lies in managing large-scale delivery (130+ FTEs) while simultaneously architecting automation solutions that eliminate manual bottlenecks. I don't just manage processes; I transform them into stable, high-performing BAU operations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-serif italic text-brand-accent mb-1">12+</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-white/40">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-serif italic text-brand-accent mb-1">130+</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-white/40">FTEs Managed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden glass p-4"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent z-0" />
              <img 
                src="/IMG19.png" 
                alt="Rajesh Mullapudi" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-brand-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Technical Arsenal" 
            subtitle="Specialized skills in automation and deep healthcare analytics."
            icon={Code2}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, index) => (
              <div key={index}>
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Professional Journey" 
            subtitle="A track record of operational excellence and leadership."
            icon={Briefcase}
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-medium">{exp.role}</h3>
                    <p className="text-brand-accent font-serif italic">{exp.company}</p>
                  </div>
                  <span className="text-sm font-mono text-white/40 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60">
                      <ChevronRight className="w-4 h-4 text-brand-accent mt-1 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-32 bg-brand-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Certifications" 
            subtitle="Validated expertise in revenue cycle, account planning, and quality management."
            icon={Award}
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <button 
                key={index} 
                onClick={() => setSelectedCert(cert)}
                className="p-8 rounded-2xl glass flex items-center justify-between group text-left w-full transition-all hover:bg-white/5"
              >
                <div>
                  <h3 className="text-xl font-medium mb-1">{cert.title}</h3>
                  <p className="text-sm text-white/40">{cert.issuer} • {cert.date}</p>
                </div>
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-brand-accent/20 transition-colors">
                  <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-brand-accent" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Recognition" 
            subtitle="Honors and awards received for exceptional performance and leadership."
            icon={ShieldCheck}
          />

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl overflow-hidden group"
            >
              <div className="aspect-video bg-white/5 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brand-accent/5 group-hover:bg-brand-accent/10 transition-colors" />
                <Award className="w-16 h-16 text-brand-accent/20 group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">Operational Excellence</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif italic mb-2">Operational Excellence Award</h3>
                <p className="text-white/50 text-sm">Awarded for leading high-impact automation projects and exceeding SLA targets consistently.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-3xl overflow-hidden group"
            >
              <div className="aspect-video bg-white/5 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brand-accent/5 group-hover:bg-brand-accent/10 transition-colors" />
                <ShieldCheck className="w-16 h-16 text-brand-accent/20 group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">Leadership</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif italic mb-2">Leadership Recognition</h3>
                <p className="text-white/50 text-sm">Recognized for managing a span of 130+ FTEs and driving team productivity through strategic mentorship.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-3xl overflow-hidden group"
            >
              <div className="aspect-video bg-white/5 relative flex items-center justify-center overflow-hidden">
                <img 
                  src="/Be10X.png" 
                  alt="Be10X AI Workshop" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif italic mb-2">Be10X AI Workshop</h3>
                <p className="text-white/50 text-sm">Mastered AI-driven productivity tools and automation workflows to enhance operational efficiency.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[3rem] glass p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 blur-[100px] -z-10" />
            
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-5xl md:text-6xl font-serif italic mb-8">Let's Connect.</h2>
                <p className="text-white/60 text-lg mb-12">
                  Ready to discuss how operational excellence and automation can transform your healthcare delivery.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-1">Email</div>
                      <a href="mailto:rmullapudi1@gmail.com" className="text-xl hover:text-brand-accent transition-colors">rmullapudi1@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-1">Phone</div>
                      <a href="tel:+919542233448" className="text-xl hover:text-brand-accent transition-colors">+91 9542233448</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-1">LinkedIn</div>
                      <a href="https://www.linkedin.com/in/rajesh-mullapudi-68434419b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-brand-accent transition-colors">rajesh-mullapudi</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-white/40">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-white/40">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-white/40">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="How can I help you?" />
                </div>
                <button className="w-full py-4 rounded-xl bg-white text-black font-semibold hover:bg-brand-accent transition-all">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-accent rounded flex items-center justify-center font-bold text-[10px] text-black">RM</div>
            <span className="text-sm text-white/40">© 2026 Rajesh Mullapudi. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-white/40">
            <a href="/Rajesh_Mullapudi_Resume.pdf" download className="hover:text-white transition-colors flex items-center gap-2">
              <Download className="w-3 h-3" /> Resume
            </a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" /> Hyderabad, India
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
