import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, ArrowUpRight, Send, Menu, X, 
  Rocket, Code2, ShieldCheck, Gem, 
  Globe2, Zap, MousePointer2, ChevronDown, 
  CheckCircle2, Euro, LayoutGrid, Users
} from 'lucide-react';

/* 🏆 COCORICOLABS - AWWWARDS EDITION (MOBILE OPTIMIZED)
  --------------------------------------------------
  Concept: Kinetic Typography & French Brutalism
  Palette: International Klein Blue (#002FA7), Marianne Red (#EF4135), Paper White.
  Features: Custom Router, Interactive Calculator, Detailed Portfolio.
*/

// --- HOOKS & UTILS ---

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  return mousePosition;
};

const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollProgress;
};

// --- GLOBAL COMPONENTS ---

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  return (
    <>
      <div 
        className="fixed top-0 left-0 w-4 h-4 bg-red-500 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{ transform: `translate(${x - 8}px, ${y - 8}px)` }}
      />
      <div 
        className="fixed top-0 left-0 w-12 h-12 border border-blue-600 rounded-full pointer-events-none z-[100] transition-transform duration-100 ease-out hidden md:block"
        style={{ transform: `translate(${x - 24}px, ${y - 24}px)` }}
      />
    </>
  );
};

const Marquee = ({ text, reverse = false }) => (
  <div className="relative flex overflow-hidden py-3 md:py-4 bg-slate-900 text-white border-y border-white/10 select-none">
    <div className={`py-1 md:py-2 animate-marquee whitespace-nowrap flex gap-8 md:gap-12 ${reverse ? 'flex-row-reverse' : ''}`}>
      {[...Array(8)].map((_, i) => (
        <span key={i} className="text-3xl md:text-6xl font-serif italic font-light tracking-tighter opacity-80">
          {text} <span className="text-red-500 not-italic mx-2 md:mx-4">•</span>
        </span>
      ))}
    </div>
    <div className={`absolute top-0 py-3 md:py-4 animate-marquee2 whitespace-nowrap flex gap-8 md:gap-12 ${reverse ? 'flex-row-reverse' : ''}`}>
      {[...Array(8)].map((_, i) => (
        <span key={i} className="text-3xl md:text-6xl font-serif italic font-light tracking-tighter opacity-80">
          {text} <span className="text-red-500 not-italic mx-2 md:mx-4">•</span>
        </span>
      ))}
    </div>
  </div>
);

const Footer = ({ setPage }) => (
  <footer className="bg-slate-900 text-white pt-20 md:pt-32 pb-8 md:pb-12 px-6 md:px-12 relative overflow-hidden">
     {/* Giant Background Text */}
     <div className="absolute bottom-0 left-0 text-[20vw] font-bold text-white/[0.03] leading-none pointer-events-none select-none">
        COCORICO
     </div>

     <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
           <div>
              <h2 className="text-5xl md:text-8xl font-serif italic mb-6 md:mb-8">
                 Parlons-en.
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-md mb-8 md:mb-12">
                 Prêt à lancer votre projet ? Nous acceptons actuellement de nouveaux défis pour le T4 2024.
              </p>
              <a href="mailto:bonjour@cocoricolabs.fr" className="text-2xl md:text-5xl font-bold hover:text-blue-500 transition-colors underline decoration-slate-700 underline-offset-8 break-all md:break-normal">
                 hello@cocoricolabs.fr
              </a>
           </div>
           
           <div className="flex flex-col justify-end">
              <div className="grid grid-cols-2 gap-8 md:gap-12">
                 <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 md:mb-6">Réseaux</h4>
                    <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                       <li><a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2">LinkedIn <ArrowUpRight size={14}/></a></li>
                       <li><a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2">Twitter <ArrowUpRight size={14}/></a></li>
                       <li><a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2">Instagram <ArrowUpRight size={14}/></a></li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 md:mb-6">Menu</h4>
                    <ul className="space-y-3 md:space-y-4 text-base md:text-lg cursor-pointer">
                       <li onClick={() => setPage('work')} className="hover:text-red-500 transition-colors">Projets</li>
                       <li onClick={() => setPage('funding')} className="hover:text-red-500 transition-colors">Financement</li>
                       <li onClick={() => setPage('studio')} className="hover:text-red-500 transition-colors">Studio</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8 md:pt-12 gap-4">
           <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded-full"></div>
              <span className="text-sm font-bold tracking-widest">COCORICOLABS © 2024</span>
           </div>
           <div className="text-[10px] md:text-xs text-slate-500 font-mono">
              CONÇU À PARIS • CODÉ AVEC REACT • DÉPLOYÉ SUR VERCEL
           </div>
        </div>
     </div>
  </footer>
);

// --- PAGE COMPONENTS ---

const Home = ({ setPage }) => (
  <div className="animate-in fade-in duration-700">
    <section className="relative min-h-[90vh] md:min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden">
         <div className="absolute top-0 right-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
         <div className="absolute top-[20%] right-[-5%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] bg-red-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
         <div className="absolute -bottom-32 left-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-[1600px] mx-auto w-full relative">
        <div className="mb-6 md:mb-8 flex items-center gap-4 reveal-up" style={{ animationDelay: '0.1s' }}>
           <div className="h-[1px] w-8 md:w-12 bg-slate-900"></div>
           <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Innovation depuis 2024</span>
        </div>

        <h1 className="text-[13vw] leading-[0.8] font-bold tracking-tighter mb-8 md:mb-12 mix-blend-darken reveal-up" style={{ animationDelay: '0.2s' }}>
          Haute Couture <br/>
          <span className="font-serif italic font-light text-slate-800 relative z-10 pl-6 md:pl-32 block mt-2 md:mt-0">
            NUMÉRIQUE
            <svg className="absolute -bottom-2 md:-bottom-4 left-0 md:left-24 w-[200px] md:w-[300px] h-4 md:h-6 z-[-1] opacity-50" viewBox="0 0 300 10">
              <path d="M0 5 Q 150 15 300 5" stroke="url(#frGradient)" strokeWidth="4" fill="none" />
              <defs>
                <linearGradient id="frGradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#002FA7" />
                  <stop offset="50%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#EF4135" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end reveal-up" style={{ animationDelay: '0.4s' }}>
           <div className="md:col-span-5">
             <p className="text-lg md:text-2xl font-light leading-relaxed text-slate-600 mb-6 md:mb-8">
               Nous sommes les architectes de votre souveraineté numérique. 
               <strong className="text-slate-900 font-medium"> MVPs, Web3 et Plateformes</strong> conçus en France, financés par la France.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
               <button onClick={() => setPage('contact')} className="w-fit group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-slate-900 pb-1">
                 Obtenir un Devis
                 <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
               </button>
               <div className="text-xs font-mono text-slate-400">
                 ÉLIGIBLE : CII • CIR • BPI
               </div>
             </div>
           </div>
           
           <div className="md:col-span-7 flex justify-start md:justify-end mt-8 md:mt-0">
              <div onClick={() => setPage('funding')} className="relative w-full md:max-w-md aspect-[4/5] perspective-1000 group cursor-pointer">
                 <div className="relative w-full h-full bg-white border border-slate-200 shadow-2xl transition-transform duration-700 transform md:group-hover:rotate-y-12 md:group-hover:rotate-x-6 preserve-3d">
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between overflow-hidden">
                      <div className="text-6xl md:text-8xl font-serif text-slate-100 absolute -top-4 -right-4">FR</div>
                      <div className="mt-auto">
                        <h3 className="text-3xl md:text-4xl font-bold mb-2">40%</h3>
                        <p className="text-xs md:text-sm text-slate-500 font-mono border-t border-slate-100 pt-2">COUVERTURE MAXIMALE</p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-white to-red-600"></div>
                    </div>
                    <div className="absolute -right-4 md:-right-12 top-16 md:top-24 w-16 md:w-24 h-16 md:h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg transform translate-z-20 md:group-hover:scale-110 transition-transform">
                      <ArrowUpRight size={24} className="md:w-8 md:h-8" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>

    <Marquee text="DESIGN • DÉVELOPPEMENT • INNOVATION" />

    {/* Preview of Work */}
    <section className="py-20 md:py-32 px-6 md:px-12 bg-white relative z-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-bold max-w-2xl leading-tight">
            Nous bâtissons des écosystèmes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">pérennes</span>.
          </h2>
          <button onClick={() => setPage('work')} className="hidden md:block text-right group">
            <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Catalogue de Services</span>
            <span className="block text-3xl font-serif italic group-hover:text-blue-600 transition-colors">Voir les Projets &rarr;</span>
          </button>
        </div>
        
        <div className="space-y-0">
          {[
            { num: "01", title: "MVP & Proto", desc: "Cycles de déploiement rapides avec React & Next.js.", icon: Rocket },
            { num: "02", title: "Infra Web3", desc: "Smart contracts & dApps.", icon: Gem },
            { num: "03", title: "Plateformes SaaS", desc: "Outils d'entreprise haute performance.", icon: Code2 }
          ].map((service, i) => (
            <div key={i} onClick={() => setPage('work')} className="group relative border-t border-slate-200 py-10 md:py-16 hover:bg-slate-50 transition-colors duration-500 cursor-pointer">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center">
                <div className="md:col-span-2 text-lg md:text-xl font-serif italic text-slate-300 group-hover:text-blue-600">({service.num})</div>
                <div className="md:col-span-5"><h3 className="text-2xl md:text-4xl font-bold md:group-hover:translate-x-4 transition-transform">{service.title}</h3></div>
                <div className="md:col-span-5 text-sm md:text-base text-slate-500">{service.desc}</div>
              </div>
            </div>
          ))}
          <div className="border-t border-slate-200"></div>
          
          <button onClick={() => setPage('work')} className="md:hidden w-full mt-8 py-4 border border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full">
            Voir tous les projets
          </button>
        </div>
      </div>
    </section>
  </div>
);

const Work = () => (
  <div className="min-h-screen pt-28 md:pt-32 px-6 md:px-12 animate-in slide-in-from-bottom-8 duration-700">
    <div className="max-w-[1600px] mx-auto">
      <div className="mb-12 md:mb-20">
        <h1 className="text-5xl md:text-9xl font-bold mb-4 md:mb-8">Projets <br/><span className="font-serif italic text-blue-600">Sélectionnés</span></h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl">
          Une sélection de projets où la rigueur technique rencontre la sensibilité du design français.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-32">
        {[
          { title: "Velocité AI", cat: "Plateforme SaaS", color: "bg-emerald-100", year: "2024" },
          { title: "Ledger X", cat: "Web3 / Sécurité", color: "bg-slate-900", year: "2023", dark: true },
          { title: "Maison Blanc", cat: "E-Commerce", color: "bg-slate-100", year: "2024" },
          { title: "NeoBank Fr", cat: "App Fintech", color: "bg-blue-600", year: "2023", dark: true }
        ].map((project, i) => (
          <div key={i} className="group cursor-pointer">
            <div className={`aspect-[4/3] rounded-sm overflow-hidden relative ${project.color} mb-4 md:mb-6 transition-transform duration-500 md:hover:scale-[1.02]`}>
               {/* Mock Content inside card */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className={`text-2xl md:text-4xl font-bold ${project.dark ? 'text-white/20' : 'text-black/10'}`}>{project.title}</span>
               </div>
               <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`inline-block px-3 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest ${project.dark ? 'bg-white text-black' : 'bg-black text-white'}`}>Voir l'Étude de Cas</span>
               </div>
            </div>
            <div className="flex justify-between items-start border-t border-slate-200 pt-3 md:pt-4">
               <div>
                 <h3 className="text-lg md:text-2xl font-bold mb-1">{project.title}</h3>
                 <p className="text-xs md:text-sm text-slate-500 font-mono uppercase">{project.cat}</p>
               </div>
               <span className="text-xs md:text-sm font-serif italic">{project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Marquee text="PARCOURIR TOUS LES PROJETS" />
  </div>
);

const Funding = () => {
  const [budget, setBudget] = useState(50000);
  const ciiRate = 0.20; // 20%
  const cirRate = 0.30; // 30%
  
  return (
    <div className="min-h-screen pt-28 md:pt-32 px-6 md:px-12 bg-slate-50 animate-in slide-in-from-bottom-8 duration-700">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
          
          <div>
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 rounded-full">Simulateur</div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight">
              Maximisez votre <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">Financement</span>.
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-12 leading-relaxed">
              La France offre parmi les meilleures incitations à l'innovation au monde. En tant qu'agence française enregistrée, CocoricoLabs génère la documentation nécessaire pour vous permettre de réclamer ces remboursements.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-xl">
                 <h3 className="text-lg md:text-xl font-bold mb-2">Crédit Impôt Innovation (CII)</h3>
                 <p className="text-slate-500 text-sm mb-4">Rembourse 20% des dépenses liées au prototypage et au design UX.</p>
                 <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full w-[20%] bg-blue-500"></div>
                 </div>
              </div>
              <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-xl">
                 <h3 className="text-lg md:text-xl font-bold mb-2">Crédit Impôt Recherche (CIR)</h3>
                 <p className="text-slate-500 text-sm mb-4">Rembourse 30% des dépenses de R&D pour résoudre des défis techniques complexes.</p>
                 <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full w-[30%] bg-red-500"></div>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 md:p-16 rounded-3xl shadow-2xl sticky top-24 md:top-32 mb-12 lg:mb-0">
             <h3 className="text-xl md:text-2xl font-serif italic mb-6 md:mb-8">Simulateur d'Économies</h3>
             
             <div className="mb-8 md:mb-12">
               <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Budget du Projet</label>
               <input 
                  type="range" 
                  min="10000" 
                  max="200000" 
                  step="5000" 
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 touch-pan-x"
               />
               <div className="mt-4 text-3xl md:text-4xl font-mono font-bold">€{budget.toLocaleString()}</div>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 border-t border-white/10 pt-6 md:pt-8">
                <div>
                   <div className="text-xs text-slate-400 mb-1">Remboursement CII (20%)</div>
                   <div className="text-2xl md:text-3xl font-bold text-blue-400">€{(budget * ciiRate).toLocaleString()}</div>
                </div>
                <div>
                   <div className="text-xs text-slate-400 mb-1">Remboursement CIR (30%)</div>
                   <div className="text-2xl md:text-3xl font-bold text-red-400">€{(budget * cirRate).toLocaleString()}</div>
                </div>
             </div>

             <div className="mt-6 md:mt-8 p-4 bg-white/5 rounded-lg text-xs text-slate-400 leading-relaxed">
                *Estimations seulement. Les montants réels dépendent des dépenses éligibles et de la validation administrative.
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const Studio = () => (
  <div className="min-h-screen pt-28 md:pt-32 px-6 md:px-12 bg-white animate-in slide-in-from-bottom-8 duration-700">
    <div className="max-w-[1200px] mx-auto text-center">
       <div className="inline-block mb-6 md:mb-8">
         <Globe2 size={40} className="md:w-12 md:h-12 text-blue-600 mx-auto animate-spin-slow" style={{ animationDuration: '10s' }} />
       </div>
       <h1 className="text-4xl md:text-8xl font-serif font-medium mb-10 md:mb-16 leading-tight">
         "Nous parlons JavaScript. <br/> Nous parlons aussi <span className="italic text-red-600">BPI</span>."
       </h1>
    </div>

    <div className="max-w-[800px] mx-auto text-lg md:text-2xl font-light leading-relaxed text-slate-800 space-y-8 md:space-y-12 mb-20 md:mb-32">
       <p>
         <span className="font-bold text-blue-600">CocoricoLabs</span> est né d'un constat simple : l'innovation française est puissante, mais administrativement complexe.
       </p>
       <p>
         Les startups internationales envient nos crédits d'impôt, mais les fondateurs locaux peinent à les réclamer. Nous comblons ce fossé. Nous sommes une équipe d'ingénieurs seniors et d'experts administratifs travaillant à l'unisson.
       </p>
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base font-sans mt-8 md:mt-12 border-t border-slate-200 pt-8 md:pt-12">
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-2">QG Paris</h4>
            <p className="text-slate-500">Station F<br/>5 Parvis Alan Turing<br/>75013 Paris</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-2">Contact</h4>
            <p className="text-slate-500">bonjour@cocoricolabs.fr<br/>+33 1 00 00 00 00</p>
          </div>
       </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 px-1">
       {[
         { label: "Ingénierie", val: "Senior Uniq." },
         { label: "Lieu", val: "Paris, FR" },
         { label: "Focus", val: "Qualité" },
       ].map((stat, i) => (
         <div key={i} className="bg-slate-50 p-8 md:p-12 text-center hover:bg-slate-900 hover:text-white transition-colors duration-500">
            <div className="text-xs font-bold uppercase tracking-widest mb-2 md:mb-4 opacity-50">{stat.label}</div>
            <div className="text-2xl md:text-3xl font-serif italic">{stat.val}</div>
         </div>
       ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen pt-32 md:pt-40 px-6 md:px-12 bg-slate-900 text-white animate-in zoom-in-95 duration-500">
    <div className="max-w-[1000px] mx-auto text-center">
       <h1 className="text-5xl md:text-9xl font-bold mb-6 md:mb-8">Lancez-vous.</h1>
       <p className="text-lg md:text-xl text-slate-400 mb-10 md:mb-16">Racontez-nous votre ambition. Nous construisons le reste.</p>
       
       <form className="max-w-xl mx-auto space-y-6 md:space-y-8 text-left">
          <div className="group">
             <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-blue-500 transition-colors">Nom</label>
             <input type="text" className="w-full bg-transparent border-b border-slate-700 py-3 md:py-4 text-xl md:text-2xl focus:outline-none focus:border-blue-500 transition-colors" placeholder="Jean Dupont" />
          </div>
          <div className="group">
             <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-blue-500 transition-colors">Email</label>
             <input type="email" className="w-full bg-transparent border-b border-slate-700 py-3 md:py-4 text-xl md:text-2xl focus:outline-none focus:border-blue-500 transition-colors" placeholder="jean@entreprise.com" />
          </div>
          <div className="group">
             <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-blue-500 transition-colors">Détails du Projet</label>
             <textarea rows="3" className="w-full bg-transparent border-b border-slate-700 py-3 md:py-4 text-xl md:text-2xl focus:outline-none focus:border-blue-500 transition-colors" placeholder="Je veux construire..." />
          </div>
          
          <div className="pt-8 text-center">
             <button type="button" className="w-full md:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
               Envoyer la Demande
             </button>
          </div>
       </form>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [activePage]);

  // Map English keys to French display names for navigation
  const navItems = [
    { id: 'work', label: 'Projets' },
    { id: 'funding', label: 'Financement' },
    { id: 'studio', label: 'Studio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden cursor-auto md:cursor-none">
      
      {/* --- GLOBAL STYLES --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400&family=Syne:wght@400;500;700;800&family=Manrope:wght@300;400;600&display=swap');
        
        :root {
          --font-display: 'Syne', sans-serif;
          --font-serif: 'Playfair Display', serif;
          --font-body: 'Manrope', sans-serif;
        }

        body { font-family: var(--font-body); }
        h1, h2, h3 { font-family: var(--font-display); }
        .font-serif { font-family: var(--font-serif); }
        
        /* Cursor hidden only on desktop */
        @media (min-width: 768px) {
          .cursor-none { cursor: none; }
          a, button, input, textarea { cursor: none; }
        }

        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }
        @keyframes marquee2 { 0% { transform: translateX(100%); } 100% { transform: translateX(0%); } }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee2 { animation: marquee2 25s linear infinite; }

        .reveal-up { animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; transform: translateY(40px); }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }
        
        .grain {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 90;
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      <CustomCursor />
      <div className="grain"></div>
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-white to-red-600 z-[60]" style={{ width: `${scrollProgress * 100}%` }}></div>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50' : 'py-6 md:py-8 mix-blend-multiply bg-transparent'}`}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePage('home')}>
          {/* LOGO IMAGE ADDED HERE */}
          <img 
            src="cocoricolabs_logo_third.png" 
            alt="CocoricoLabs" 
            className="h-8 md:h-10 w-auto object-contain" 
            onError={(e) => {e.target.style.display='none'}} 
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-tighter leading-none">CocoricoLabs<span className="text-red-600">.</span></span>
            <span className="text-[10px] uppercase tracking-widest font-semibold mt-1 opacity-60 hidden md:block">Atelier Numérique Parisien</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-12 items-center">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => setActivePage(item.id)}
              className={`text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors relative group ${activePage === item.id ? 'text-blue-600' : ''}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-red-500 transition-all duration-300 ${activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          <button onClick={() => setActivePage('contact')} className="bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/30">
            Démarrer un projet
          </button>
        </div>

        <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-[#FDFBF7] flex flex-col items-center justify-center gap-6 md:gap-8 z-40 animate-in fade-in slide-in-from-top-4 duration-300">
             <button 
                onClick={() => setActivePage('home')}
                className="text-3xl md:text-4xl font-serif italic hover:text-blue-600 transition-colors"
             >
                Accueil
             </button>
             {navItems.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => setActivePage(item.id)}
                  className="text-3xl md:text-4xl font-serif italic hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-400">Paris • France</div>
          </div>
        )}
      </nav>

      {/* --- PAGE CONTENT ROUTER --- */}
      <main>
        {activePage === 'home' && <Home setPage={setActivePage} />}
        {activePage === 'work' && <Work />}
        {activePage === 'funding' && <Funding />}
        {activePage === 'studio' && <Studio />}
        {activePage === 'contact' && <Contact />}
      </main>

      <Footer setPage={setActivePage} />

    </div>
  );
};

export default App;