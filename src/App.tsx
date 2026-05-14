import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Video, 
  Palette, 
  ExternalLink, 
  ChevronRight, 
  MapPin, 
  Calendar,
  Briefcase,
  GraduationCap,
  Code,
  Layout,
  Layers,
  Search,
  MessageSquare,
  Menu,
  X,
  Play
} from 'lucide-react';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const SKILLS = {
  hard: [
    'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere', 'Filmora', 'Figma', 'Canva', 'Capcut', 'Microsoft Office'
  ],
  soft: [
    'Communication', 'Teamwork', 'Critical Thinking', 'Design Thinking', 'Observation', 'Problem Solving', 'Time Management'
  ],
  languages: [
    { name: 'Indonesian', level: 'Native' },
    { name: 'English', level: 'Advanced' },
    { name: 'Spanish', level: 'Intermediate' }
  ]
};

const EXPERIENCES = [
  {
    company: 'Sport77',
    location: 'Jakarta, Indonesia (Onsite)',
    role: 'Videographer and Video Editor',
    period: 'Apr 2025 - Present',
    logo: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=100&auto=format&fit=crop', // Temporary placeholder for Sport77
    description: 'Jakarta-based sportainment company focused on digital media, content production, and events.',
    tasks: [
      'Edit sports content: highlights, interviews, promos, and social media videos.',
      'Collaborate with creative and editorial teams to produce engaging, on-brand content.',
      'Optimize videos for platforms like YouTube, Instagram, and TikTok.',
      'Manage footage and support full-cycle video production.'
    ]
  },
  {
    company: 'Semen Padang FC',
    location: 'Padang, Indonesia (Onsite)',
    role: 'Graphic Designer and Videographer Intern',
    period: 'Oct 2024 - Apr 2025',
    logo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=100&auto=format&fit=crop', // Placeholder for football club
    description: 'Historic Indonesian football club established in 1980, competes in Liga 1 Indonesia.',
    tasks: [
      'Produce match highlights, player interviews, and promotional content.',
      'Design matchday graphics, team announcements, and marketing materials aligned with club branding.'
    ]
  },
  {
    company: '90 Plus Sports Agency',
    location: 'Barcelona, Spain (Remotely)',
    role: 'Freelance Designer & Editor',
    period: 'May 2022 - Present',
    logo: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=100&auto=format&fit=crop', // Tech/Agency placeholder
    description: 'Company in the field of football sports offering Video Highlights, Graphic Design, and Web Development.',
    tasks: [
      'Served as a versatile creative professional proficiently serving as a Video Editor, Graphic Designer, and Web Designer.'
    ]
  },
  {
    company: 'Asia Football Showcase',
    location: 'Bangkok, Thailand (Remotely)',
    role: 'Freelance Video Editor',
    period: 'Oct 2022 - Jul 2024',
    logo: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=100&auto=format&fit=crop', // Video placeholder
    description: 'Company providing trials for foreign football players in Asia.',
    tasks: [
      'Specialized in meticulous assembly and refinement of raw video footage.',
      'Employed advanced technical proficiency to craft compelling content.'
    ]
  },
  {
    company: 'Interfute',
    location: 'Tangerang, Indonesia (Mixed)',
    role: 'Media Specialist & Scout',
    period: 'Oct 2021 - Jul 2024',
    logo: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=100&auto=format&fit=crop', // Scout placeholder
    description: 'Professional Football Player Management company.',
    tasks: [
      'Identify promising football talent through scouting.',
      'Created engaging video content showcasing players\' skills and achievements.',
      'Produced highlight reels and promotional videos.'
    ]
  },
  {
    company: 'PT Global Infotech Solution',
    location: 'Central Jakarta, Indonesia',
    role: 'UI/UX Designer Intern',
    period: 'Aug 2023 - Jan 2024',
    logo: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=100&auto=format&fit=crop', // IT placeholder
    description: 'IT Services sector specializing in information technology.',
    tasks: [
      'Developed expertise in Design Thinking, Wireframes, and UI Style Guides.',
      'Led independent projects focusing on enhancing the Learning Management System "Kerjaku".'
    ]
  }
];

interface SubItem {
  title: string;
  platform: 'youtube' | 'instagram' | 'tiktok' | 'image';
  url: string;
  embedId?: string;
}

interface Project {
  title: string;
  description: string;
  type: string;
  image: string;
  subItems: SubItem[];
}

interface Category {
  category: string;
  items: Project[];
}

const PROJECTS: Category[] = [
  {
    category: 'Long-form Video',
    items: [
      {
        title: 'Versus Program (Multiple Episodes)',
        description: 'A debate program about football at Sport77. I served as the lead video editor for the entire series.',
        type: 'Series Editing',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
        subItems: [
          { title: 'Versus Ep. 1: Liga 1 Debate', platform: 'youtube', url: 'https://youtube.com', embedId: 'dQw4w9WgXcQ' },
          { title: 'Versus Ep. 2: European Football', platform: 'youtube', url: 'https://youtube.com', embedId: 'dQw4w9WgXcQ' },
          { title: 'Versus Ep. 3: Transfer Window', platform: 'youtube', url: 'https://youtube.com', embedId: 'dQw4w9WgXcQ' },
        ]
      },
      {
        title: 'Sportcast77',
        description: 'Sports podcast production focusing on in-depth athlete interviews and trending football topics.',
        type: 'Podcast Editing',
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800',
        subItems: [
          { title: 'Sportcast Guest: Legend X', platform: 'youtube', url: 'https://youtube.com', embedId: 'dQw4w9WgXcQ' }
        ]
      },
      {
        title: 'Casa LaLiga (10+ Episodes)',
        description: 'A comprehensive series covering Spanish football news and analysis. Produced and edited multiple episodes.',
        type: 'Broadcast Editing',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
        subItems: [
          { title: 'Casa LaLiga: El Clasico Special', platform: 'youtube', url: 'https://youtube.com', embedId: 'dQw4w9WgXcQ' },
          { title: 'Casa LaLiga: Weekly Wrap Up', platform: 'youtube', url: 'https://youtube.com', embedId: 'dQw4w9WgXcQ' }
        ]
      },
      {
        title: 'AFS Interview Series',
        description: 'Feature interviews for Asia Football Showcase featuring various foreign players and scouts.',
        type: 'Interview Editing',
        image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800',
        subItems: [
          { title: 'Interview: Head Scout AFS', platform: 'youtube', url: 'https://youtube.com', embedId: 'dQw4w9WgXcQ' },
          { title: 'Player Profile: Pro Athlete Y', platform: 'youtube', url: 'https://youtube.com', embedId: 'dQw4w9WgXcQ' }
        ]
      }
    ]
  },
  {
    category: 'Short-form Video',
    items: [
      {
        title: 'Personal Social Media Content',
        description: 'Experimental and trending football content produced for personal branding and audience engagement.',
        type: 'Personal Projects',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
        subItems: [
          { title: 'TikTok: Skill Tutorial', platform: 'tiktok', url: 'https://tiktok.com' },
          { title: 'Personal Edit: Final Cup', platform: 'instagram', url: 'https://instagram.com' }
        ]
      },
      {
        title: 'Semen Padang FC Training',
        description: 'Professional training session coverage from recording to delivery for official club channels.',
        type: 'Club Media',
        image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=800',
        subItems: [
          { title: 'Training Highlights Day 1', platform: 'instagram', url: 'https://instagram.com' },
          { title: 'Coach Interview Clip', platform: 'instagram', url: 'https://instagram.com' }
        ]
      },
      {
        title: 'Rexona Men x Sport77',
        description: 'Commercial short-form collaboration featuring player spotlights and interviews.',
        type: 'Branded Content',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800',
        subItems: [
          { title: 'Campaign: Stay Fresh', platform: 'instagram', url: 'https://instagram.com' }
        ]
      },
      {
        title: 'Football Player Highlights',
        description: 'Fast-paced edits showcasing individual player skills for scouting and promotion.',
        type: 'Highlight Reels',
        image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=800',
        subItems: [
          { title: 'Player X Skills 2024', platform: 'youtube', url: 'https://youtube.com', embedId: 'dQw4w9WgXcQ' }
        ]
      }
    ]
  },
  {
    category: 'Graphic Design',
    items: [
      {
        title: 'SPFC Matchday Posters',
        description: 'Official matchday announcements and graphics for Semen Padang FC social media.',
        type: 'Club Design',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
        subItems: [
          { title: 'Poster: Matchday 1 vs Team B', platform: 'image', url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800' }
        ]
      },
      {
        title: 'Football Player Posters',
        description: 'Professional digital flyers and posters created for freelance football player clients.',
        type: 'Freelance Design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
        subItems: [
          { title: 'Player Art: Striker Hero', platform: 'image', url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800' }
        ]
      },
      {
        title: 'SPFC Online Tickets',
        description: 'Branded ticket layouts and digital collateral for club match scheduling.',
        type: 'Official Collateral',
        image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800',
        subItems: [
          { title: 'Ticket Layout Design', platform: 'image', url: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800' }
        ]
      },
      {
        title: 'Personal Branding Arts',
        description: 'Custom graphics and content layouts for personal social media channels.',
        type: 'Personal Content',
        image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
        subItems: [
          { title: 'Branding Art 1', platform: 'image', url: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800' }
        ]
      }
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Long-form Video');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary relative">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-30" />
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none" />
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center gap-16 relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter mono italic group cursor-pointer"
          >
            IAP<span className="text-brand-accent group-hover:animate-pulse">.</span>
          </motion.div>

          <div className="hidden md:flex gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-brand-secondary hover:text-brand-accent transition-all mono"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden absolute right-6 text-brand-secondary hover:text-brand-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800"
            >
              <div className="flex flex-col p-6 gap-4">
                {NAV_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-400 hover:text-white mono"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand-accent/5 blur-[140px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left"
              >
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-12 h-[1px] bg-brand-accent"></span>
                  <span className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] mono">
                    OPEN FOR COLLABORATION
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter mb-8 leading-[0.9] uppercase italic">
                  Ilham Agus<br />
                  <span className="text-brand-accent glow-accent">Pratama.</span>
                </h1>
                <p className="text-lg md:text-xl text-brand-secondary leading-relaxed max-w-xl mb-12 font-medium">
                  Video Editor & Graphic Designer specializing in <span className="text-brand-primary">High-Energy Sports Media</span>, 
                  <span className="text-brand-primary"> Visual Design</span>, and <span className="text-brand-primary">Full-Stack Creativity</span>.
                </p>
                
                <div className="flex flex-wrap gap-5">
                  <a 
                    href="#projects" 
                    className="px-10 py-4 bg-brand-primary text-black font-black uppercase tracking-widest text-xs rounded-none hover:bg-brand-accent transition-all flex items-center gap-3 group"
                  >
                    View Selection
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#contact" 
                    className="px-10 py-4 bg-transparent border-2 border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-none hover:border-brand-accent transition-all"
                  >
                    Get Hired
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] group">
                  <div className="absolute inset-0 bg-brand-accent rounded-full blur-[120px] opacity-20 animate-pulse" />
                  <div className="w-full h-full relative z-10">
                    <img 
                      src="/profile.png" 
                      alt="Ilham Agus Pratama"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain relative z-20 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Decorative Background Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none opacity-10">
                      <div className="text-[200px] font-black italic text-white leading-none">IAP</div>
                    </div>

                    <div className="absolute bottom-4 left-0 right-0 z-30 text-center">
                      <div className="inline-block px-6 py-2 bg-brand-accent text-black font-black uppercase tracking-[0.3em] text-[10px] skew-x-[-12deg]">
                        VIDEO EDITOR & GRAPHIC DESIGNER
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Corner Accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-brand-accent opacity-30 group-hover:w-24 group-hover:h-24 transition-all" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-brand-accent opacity-30 group-hover:w-24 group-hover:h-24 transition-all" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 border-y border-white/5 relative bg-[#080808]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-10">
                  <span className="p-2 bg-brand-accent/10 rounded-lg">
                    <Layers className="text-brand-accent" size={20} />
                  </span>
                  <h2 className="text-4xl font-black italic uppercase tracking-tighter">The Vision</h2>
                </div>
                <div className="space-y-8 text-brand-secondary text-lg leading-relaxed">
                  <p>
                    As a <span className="text-brand-primary font-bold">Video Editor</span> and <span className="text-brand-primary font-bold">Graphic Designer</span>, 
                    I have spent my career crafting visual stories for the football community. 
                    I started my professional path at <span className="text-brand-primary font-bold"> Ninety Plus Sports Agency</span>, 
                    building a foundation in sports-centric design and video production.
                    </p>
                    <p>
                    I later joined <span className="text-brand-primary font-bold">Semen Padang FC</span>, 
                    where I was responsible for the club's visual output and digital presence. 
                    </p>
                    <p>
                    Now, as a <span className="text-brand-primary font-bold">Video Editor</span> at <span className="text-brand-primary font-bold">Sport77</span>, 
                    I continue to combine technical precision with a deep passion for sports to deliver content that resonates with fans worldwide.
                  </p>
                
                </div>

                <div className="mt-16 p-8 glass-card border-white/5 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="flex items-center gap-6 mb-6">
                    <GraduationCap className="text-brand-accent" size={32} />
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter">Academic Ops</h3>
                  </div>
                  <div>
                    <h4 className="font-black text-brand-primary text-lg uppercase tracking-tight">Politeknik Negeri Padang</h4>
                    <p className="text-brand-secondary font-medium mt-1">Software Engineering (Diploma 4)</p>
                    <div className="flex justify-between items-center mt-6 p-4 bg-white/5 border border-white/5">
                      <div className="flex flex-col">
                        <span className="text-[10px] mono text-brand-secondary">SUCCESS RATE</span>
                        <span className="text-brand-accent font-black italic">GPA 3.54</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] mono text-brand-secondary">TIMELINE</span>
                        <span className="text-brand-primary font-bold mono uppercase">2020 - 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-xs font-black mb-8 flex items-center gap-3 mono tracking-[0.3em] uppercase opacity-50">
                    <Code size={14} className="text-brand-accent" />
                    Hardware / Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {SKILLS.hard.map(skill => (
                      <span key={skill} className="px-5 py-2 glass-card text-brand-primary text-[11px] font-black uppercase tracking-widest hover:bg-brand-accent hover:text-black transition-all cursor-crosshair">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-black mb-8 flex items-center gap-3 mono tracking-[0.3em] uppercase opacity-50">
                    <MessageSquare size={14} className="text-brand-accent" />
                    Biological Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {SKILLS.soft.map(skill => (
                      <span key={skill} className="px-5 py-2 border border-white/5 text-brand-secondary text-[11px] font-black uppercase tracking-widest hover:border-brand-accent/50 transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-black mb-8 mono uppercase tracking-[0.3em] opacity-50">Core Languages</h3>
                  <div className="grid grid-cols-2 gap-5">
                    {SKILLS.languages.map(lang => (
                      <div key={lang.name} className="p-6 glass-card border-white/5">
                        <div className="text-brand-primary font-black uppercase tracking-tighter italic text-xl">{lang.name}</div>
                        <div className="text-brand-accent text-[10px] mono font-black uppercase tracking-widest mt-2">{lang.level}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-24">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-1 bg-brand-accent"></span>
                <span className="text-brand-accent text-xs font-black uppercase tracking-[0.4em] mono">CAREER PROGRESSION</span>
                <span className="w-12 h-1 bg-brand-accent"></span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-center">Transmission Log<span className="text-brand-accent">.</span></h2>
            </div>
            
            <div className="space-y-32 relative">
              {/* Vertical line through center or side */}
              <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden lg:block" />
              
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
                >
                  {/* Timeline Dot (Desktop) */}
                  <div className="absolute left-1/2 top-10 w-4 h-4 bg-brand-accent rotate-45 border-4 border-black -translate-x-1/2 z-20 hidden lg:block glow-accent" />

                  {/* Left Column: Company Identity */}
                  <div className={`space-y-6 ${idx % 2 === 0 ? 'lg:text-right lg:order-1' : 'lg:text-left lg:order-2'}`}>
                    <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:items-end' : 'lg:items-start'}`}>
                      <div className="w-20 h-20 mb-8 bg-white/5 border border-white/10 p-4 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-brand-accent font-black mono text-xs uppercase tracking-widest mb-2">{exp.period}</span>
                      <h3 className="text-3xl font-black italic uppercase tracking-tighter text-brand-primary">{exp.role}</h3>
                      <div className={`flex items-center gap-3 text-brand-secondary font-bold uppercase tracking-wider text-xs mt-2 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <span className="text-white">{exp.company}</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full" />
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-brand-accent" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <p className={`text-brand-secondary/60 text-sm italic max-w-sm ${idx % 2 === 0 ? 'lg:ml-auto' : ''}`}>{exp.description}</p>
                  </div>

                  {/* Right Column: Key Results */}
                  <div className={`glass-card p-10 border-white/5 space-y-6 relative group hover:border-brand-accent/20 transition-all duration-500 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-3 mb-6 relative">
                      <Layers size={16} className="text-brand-accent" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] mono text-brand-secondary">Core Operations</span>
                    </div>
                    <ul className="space-y-6 relative">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex gap-4 items-start group/task">
                          <span className="mt-1 text-brand-accent font-black mono text-xs">0{i+1}</span>
                          <p className="text-brand-secondary text-sm leading-relaxed group-hover/task:text-brand-primary transition-colors">{task}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="text-left">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-1 bg-brand-accent"></span>
                  <span className="text-brand-accent text-xs font-black uppercase tracking-[0.4em] mono">PORTFOLIO</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">Selected Assets<span className="text-brand-accent">.</span></h2>
              </div>
              
              <div className="flex flex-wrap gap-2 p-1 bg-white/5 border border-white/5 rounded-none">
                {PROJECTS.map(cat => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveTab(cat.category)}
                    className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeTab === cat.category 
                        ? 'bg-brand-accent text-black pointer-events-none' 
                        : 'bg-transparent text-brand-secondary hover:text-brand-primary'
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence mode="wait">
                {PROJECTS.find(c => c.category === activeTab)?.items.map((project, i) => (
                  <motion.div
                    key={`${activeTab}-${i}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="group"
                  >
                    <div className="h-full bg-[#0d0d0d] border border-white/5 hover:border-brand-accent/40 transition-all duration-500 overflow-hidden flex flex-col">
                      <div className="aspect-video w-full overflow-hidden relative cursor-pointer" onClick={() => setSelectedProject(project)}>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black scale-50 group-hover:scale-100 transition-transform duration-500">
                            <Play size={24} fill="black" />
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-black text-brand-accent text-[9px] font-black uppercase tracking-widest mono border border-brand-accent/20">
                            {project.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-10 flex flex-col flex-grow">
                        <div className="mb-8 flex justify-between items-start">
                          <div className="text-brand-accent/40 group-hover:text-brand-accent transition-colors">
                            {activeTab.includes('Video') ? <Video size={32} strokeWidth={1.5} /> : <Palette size={32} strokeWidth={1.5} />}
                          </div>
                          <span className="text-[9px] mono text-brand-secondary font-black tracking-[0.2em] uppercase">NO. 0{i + 1}</span>
                        </div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic group-hover:text-brand-accent transition-colors">{project.title}</h3>
                        <p className="text-brand-secondary text-sm leading-relaxed flex-grow font-medium">
                          {project.description}
                        </p>
                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="mt-10 py-4 border-b border-white/10 hover:border-brand-accent flex items-center justify-between group/btn transition-all"
                        >
                          <span className="text-[10px] font-black uppercase tracking-widest mono">Project Data</span>
                          <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex justify-center items-center px-6"
            >
              <div 
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                className="w-full max-w-5xl h-[90vh] bg-black border border-white/10 overflow-hidden flex flex-col z-10 relative"
              >
                <div className="p-10 border-b border-white/5 flex justify-between items-start bg-[#0a0a0a]">
                  <div>
                    <span className="text-[10px] text-brand-accent font-black mono uppercase mb-3 block tracking-widest">{selectedProject.type}</span>
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter">{selectedProject.title}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-3 bg-white/5 hover:bg-brand-accent hover:text-black transition-all duration-300"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex-grow overflow-y-auto p-10 bg-black">
                  <div className="max-w-3xl mb-16">
                    <p className="text-brand-secondary text-xl leading-relaxed font-medium">{selectedProject.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-12 pb-20">
                    {selectedProject.subItems?.map((item, idx) => (
                      <div key={idx} className="group/item">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-1.5 h-1.5 bg-brand-accent rotate-45" />
                          <span className="text-[10px] font-black text-brand-secondary uppercase mono tracking-[0.2em]">{item.platform} SIGNAL</span>
                        </div>
                        <div className="aspect-video overflow-hidden bg-[#0a0a0a] border border-white/5 group-hover/item:border-brand-accent/30 transition-all duration-500">
                          {item.platform === 'youtube' ? (
                            <iframe 
                              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                              src={`https://www.youtube.com/embed/${item.embedId}`}
                              title={item.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : item.platform === 'image' ? (
                            <img src={item.url} alt={item.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-10 text-center bg-[#0d0d0d] relative group/sub">
                              <Play className="text-brand-accent/20 group-hover/item:text-brand-accent mb-6 transition-all duration-500" size={48} strokeWidth={1} />
                              <p className="text-brand-secondary text-[11px] font-black uppercase tracking-widest mb-6 opacity-60">optimized for direct app transmission</p>
                              <a 
                                href={item.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-brand-accent text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all"
                              >
                                Connect to {item.platform}
                              </a>
                            </div>
                          )}
                        </div>
                        <h4 className="text-brand-primary font-black uppercase tracking-tight italic mt-6 text-lg">{item.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6 border-t border-white/5 bg-[#080808]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8 justify-center">
                <span className="w-12 h-[1px] bg-brand-accent"></span>
                <span className="text-brand-accent text-xs font-black uppercase tracking-[0.4em] mono">GET IN TOUCH</span>
                <span className="w-12 h-[1px] bg-brand-accent"></span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-10 leading-tight">Ready to<br />Kick Off?</h2>
              <p className="text-lg text-brand-secondary mb-20 max-w-2xl mx-auto leading-relaxed font-medium">
                Whether you need a full match broadcast edit or a viral social campaign, let's build something that dominates the feed.
              </p>

              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { icon: Mail, label: 'Transmission', value: 'ilhamagus78@gmail.com', href: 'mailto:ilhamagus78@gmail.com' },
                  { icon: Phone, label: 'Direct Line', value: '+62 812 6708 8347', href: 'tel:+6281267088347' },
                  { icon: Linkedin, label: 'Network', value: 'Ilham Agus Pratama', href: 'https://www.linkedin.com/in/ilham-agus-pratama/' }
                ].map((item, i) => (
                  <a 
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-10 glass-card border-white/5 hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-14 h-14 bg-white/5 flex items-center justify-center text-brand-secondary group-hover:text-brand-accent group-hover:bg-brand-accent/10 mb-8 mx-auto transition-all duration-500">
                      <item.icon size={26} strokeWidth={1.5} />
                    </div>
                    <div className="text-[10px] text-brand-secondary/60 mono uppercase font-black tracking-widest mb-3">{item.label}</div>
                    <div className="text-sm font-black uppercase tracking-tight break-all text-brand-primary">{item.value}</div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 bg-[#030303] text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-3xl font-black italic tracking-tighter mb-8 uppercase">IAP<span className="text-brand-accent">.</span></div>
          <div className="flex justify-center gap-10 mb-10">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary hover:text-brand-accent transition-colors mono">
                {link.name}
              </a>
            ))}
          </div>
          <p className="text-brand-secondary/40 text-[10px] font-black uppercase tracking-[0.2em] mono">
            © {new Date().getFullYear()} Ilham Agus Pratama // Engineered for Excellence
          </p>
        </div>
      </footer>
    </div>
  );
}
