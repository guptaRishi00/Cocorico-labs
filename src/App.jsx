import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Rocket,
  Code2,
  Gem,
  Globe2,
  CheckCircle2,
  Plus,
  Minus,
  FileText,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

/* 🏆 COCORICOLABS - CORRECTION & CONTENU MIS À JOUR
  --------------------------------------------------
  Correctifs : Structure du Footer, Fermeture des balises.
  Contenu : Nouveaux textes marketing, FAQ complète.
*/

// --- HOOKS & UTILS ---

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  return mousePosition;
};

const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div
      className={`py-1 md:py-2 animate-marquee whitespace-nowrap flex gap-8 md:gap-12 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          className="text-3xl md:text-6xl font-serif italic font-light tracking-tighter opacity-80"
        >
          {text} <span className="text-red-500 not-italic mx-2 md:mx-4">•</span>
        </span>
      ))}
    </div>
    <div
      className={`absolute top-0 py-3 md:py-4 animate-marquee2 whitespace-nowrap flex gap-8 md:gap-12 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          className="text-3xl md:text-6xl font-serif italic font-light tracking-tighter opacity-80"
        >
          {text} <span className="text-red-500 not-italic mx-2 md:mx-4">•</span>
        </span>
      ))}
    </div>
  </div>
);

const Footer = ({ setPage }) => (
  <footer className="bg-slate-900 text-white pt-20 md:pt-32 pb-8 md:pb-12 px-6 md:px-12 relative overflow-hidden">
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
            Obtenez un devis détaillé pour votre projet Web3 dès aujourd’hui.
          </p>
          <a
            href="mailto:hello@cocoricolabs.com"
            className="text-2xl md:text-5xl font-bold hover:text-blue-500 transition-colors underline decoration-slate-700 underline-offset-8 break-all md:break-normal"
          >
            hello@cocoricolabs.com
          </a>
        </div>

        <div className="flex flex-col justify-end">
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 md:mb-6">
                Réseaux
              </h4>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    LinkedIn <ArrowUpRight size={14} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    Twitter <ArrowUpRight size={14} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    Instagram <ArrowUpRight size={14} />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 md:mb-6">
                Menu
              </h4>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg cursor-pointer">
                <li
                  onClick={() => setPage("work")}
                  className="hover:text-red-500 transition-colors"
                >
                  Projets
                </li>
                <li
                  onClick={() => setPage("funding")}
                  className="hover:text-red-500 transition-colors"
                >
                  Financement
                </li>
                <li
                  onClick={() => setPage("studio")}
                  className="hover:text-red-500 transition-colors"
                >
                  Studio
                </li>
                <li
                  onClick={() => setPage("faq")}
                  className="hover:text-red-500 transition-colors"
                >
                  FAQ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8 md:pt-12 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded-full"></div>
          <span className="text-sm font-bold tracking-widest">
            COCORICOLABS © 2024
          </span>
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
        <div
          className="mb-6 md:mb-8 flex items-center gap-4 reveal-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="h-[1px] w-8 md:w-12 bg-slate-900"></div>
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Expertise Innovation
          </span>
        </div>

        <h1
          className="text-[13vw] leading-[0.8] font-bold tracking-tighter mb-8 md:mb-12 mix-blend-darken reveal-up"
          style={{ animationDelay: "0.2s" }}
        >
          Spécialistes <br />
          <span className="font-serif italic font-light text-slate-800 relative z-10 pl-6 md:pl-32 block mt-2 md:mt-0">
            INNOVANTS
            <svg
              className="absolute -bottom-2 md:-bottom-4 left-0 md:left-24 w-[200px] md:w-[300px] h-4 md:h-6 z-[-1] opacity-50"
              viewBox="0 0 300 10"
            >
              <path
                d="M0 5 Q 150 15 300 5"
                stroke="url(#frGradient)"
                strokeWidth="4"
                fill="none"
              />
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

        <div
          className="grid md:grid-cols-12 gap-8 md:gap-12 items-end reveal-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="md:col-span-5">
            <p className="text-lg md:text-2xl font-light leading-relaxed text-slate-600 mb-6 md:mb-8">
              Nous développons des <strong>MVPs et solutions Web3</strong> pour
              des entreprises en phase de R&D, avec une documentation technique
              conforme aux standards français.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
              <button
                onClick={() => setPage("contact")}
                className="w-fit group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-slate-900 pb-1"
              >
                Obtenir un Devis
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>
          </div>

          <div className="md:col-span-7 flex justify-start md:justify-end mt-8 md:mt-0">
            <div
              onClick={() => setPage("funding")}
              className="relative w-full md:max-w-md aspect-[4/5] perspective-1000 group cursor-pointer"
            >
              <div className="relative w-full h-full bg-white border border-slate-200 shadow-2xl transition-transform duration-700 transform md:group-hover:rotate-y-12 md:group-hover:rotate-x-6 preserve-3d">
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between overflow-hidden">
                  <div className="text-6xl md:text-8xl font-serif text-slate-100 absolute -top-4 -right-4">
                    FR
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">40%</h3>
                    <p className="text-xs md:text-sm text-slate-500 font-mono border-t border-slate-100 pt-2">
                      MAXIMISEZ VOTRE RUNWAY
                    </p>
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

    <Marquee text="R&D • WEB3 • INNOVATION • FRANCE" />
  </div>
);

const Work = () => (
  <div className="min-h-screen pt-28 md:pt-32 px-6 md:px-12 animate-in slide-in-from-bottom-8 duration-700">
    <div className="max-w-[1600px] mx-auto">
      <div className="mb-12 md:mb-20">
        <h1 className="text-5xl md:text-9xl font-bold mb-4 md:mb-8">
          Projets <br />
          <span className="font-serif italic text-blue-600">Réalisés</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl">
          Sites sur mesure, MVPs et solutions Blockchain pour les entreprises
          innovantes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-32">
        {[
          {
            title: "Marketplace NFT",
            cat: "Web3 / Blockchain",
            color: "bg-emerald-100",
            year: "2024",
          },
          {
            title: "SaaS R&D",
            cat: "Outil Interne",
            color: "bg-slate-900",
            year: "2023",
            dark: true,
          },
          {
            title: "E-Commerce Luxe",
            cat: "Site Sur Mesure",
            color: "bg-slate-100",
            year: "2024",
          },
          {
            title: "Fintech MVP",
            cat: "App Bancaire",
            color: "bg-blue-600",
            year: "2023",
            dark: true,
          },
        ].map((project, i) => (
          <div key={i} className="group cursor-pointer">
            <div
              className={`aspect-[4/3] rounded-sm overflow-hidden relative ${project.color} mb-4 md:mb-6 transition-transform duration-500 md:hover:scale-[1.02]`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`text-2xl md:text-4xl font-bold ${
                    project.dark ? "text-white/20" : "text-black/10"
                  }`}
                >
                  {project.title}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span
                  className={`inline-block px-3 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest ${
                    project.dark ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  Voir l'Étude de Cas
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start border-t border-slate-200 pt-3 md:pt-4">
              <div>
                <h3 className="text-lg md:text-2xl font-bold mb-1">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 font-mono uppercase">
                  {project.cat}
                </p>
              </div>
              <span className="text-xs md:text-sm font-serif italic">
                {project.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Funding = () => {
  const [budget, setBudget] = useState(50000);
  const ciiRate = 0.2; // 20%
  const cirRate = 0.3; // 30%

  return (
    <div className="min-h-screen pt-28 md:pt-32 px-6 md:px-12 bg-slate-50 animate-in slide-in-from-bottom-8 duration-700">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 rounded-full">
              Simulateur
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight">
              Maximisez votre <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Financement
              </span>
              .
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-12 leading-relaxed">
              Nos factures détaillées et notre accompagnement technique vous
              permettent de justifier vos dépenses innovation auprès de vos
              partenaires financiers.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-xl">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Crédit Impôt Innovation (CII)
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Rembourse 20% des dépenses liées au prototypage.
                </p>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[20%] bg-blue-500"></div>
                </div>
              </div>
              <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-xl">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Crédit Impôt Recherche (CIR)
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Rembourse 30% des dépenses de R&D pour résoudre des défis
                  techniques.
                </p>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[30%] bg-red-500"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 md:p-16 rounded-3xl shadow-2xl sticky top-24 md:top-32 mb-12 lg:mb-0">
            <h3 className="text-xl md:text-2xl font-serif italic mb-6 md:mb-8">
              Simulateur d'Économies
            </h3>

            <div className="mb-8 md:mb-12">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Budget du Projet
              </label>
              <input
                type="range"
                min="10000"
                max="200000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 touch-pan-x"
              />
              <div className="mt-4 text-3xl md:text-4xl font-mono font-bold">
                €{budget.toLocaleString()}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 border-t border-white/10 pt-6 md:pt-8">
              <div>
                <div className="text-xs text-slate-400 mb-1">
                  Remboursement CII (20%)
                </div>
                <div className="text-2xl md:text-3xl font-bold text-blue-400">
                  €{(budget * ciiRate).toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">
                  Remboursement CIR (30%)
                </div>
                <div className="text-2xl md:text-3xl font-bold text-red-400">
                  €{(budget * cirRate).toLocaleString()}
                </div>
              </div>
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
        <Globe2
          size={40}
          className="md:w-12 md:h-12 text-blue-600 mx-auto animate-spin-slow"
          style={{ animationDuration: "10s" }}
        />
      </div>
      <h1 className="text-4xl md:text-7xl font-serif font-medium mb-16 leading-tight">
        "Un partenariat qui valorise <br /> vos{" "}
        <span className="italic text-red-600">investissements</span>."
      </h1>
    </div>

    <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8 mb-32">
      {[
        {
          icon: BadgeCheck,
          title: "Livrables Conformes",
          desc: "Nos rapports techniques et nos factures détaillées sont conçus pour répondre aux exigences des programmes d’accompagnement à l’innovation.",
        },
        {
          icon: FileText,
          title: "Spécialistes R&D",
          desc: "Nous développons des MVPs et solutions Web3 pour des entreprises en phase de R&D, avec une documentation technique conforme.",
        },
        {
          icon: TrendingUp,
          title: "Partenaire de Croissance",
          desc: "Nous accompagnons les startups et PME qui cherchent à structurer leurs dépenses innovation pour en tirer le meilleur parti.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-slate-50 p-8 md:p-12 hover:bg-slate-900 hover:text-white transition-colors duration-500 group rounded-xl"
        >
          <div className="mb-6 text-blue-600 group-hover:text-white transition-colors">
            <item.icon size={48} />
          </div>
          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
          <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Quels types de projets accompagnez-vous ?",
      a: "Nous accompagnons les entreprises dans le développement de sites web sur mesure, MVPs pour valider vos idées, solutions Web3 (smart contracts, dApps, NFTs) et outils internes pour optimiser vos processus R&D.",
    },
    {
      q: "Pourquoi choisir CocoricoLabs ?",
      a: "Expertise technique Web3/React, documentation complète (rapports, factures précises) pour faciliter votre gestion, et un accompagnement sur mesure adapté aux startups et PME innovantes.",
    },
    {
      q: "Comment se déroule la collaboration ?",
      a: "1. Échange initial sur vos besoins. 2. Proposition détaillée avec devis clair. 3. Développement en étroite collaboration. 4. Livraison avec code source, documentation et support.",
    },
    {
      q: "Quels livrables recevrai-je ?",
      a: "Vous recevrez le code source (droits inclus), une documentation technique complète (architecture, guides), des factures détaillées par phase, et un rapport de recette.",
    },
    {
      q: "Vos factures sont-elles adaptées aux partenaires financiers ?",
      a: "Oui ! Nos factures respectent les standards comptables français : description précise, ventilation des coûts par phase (conception, dév, tests), et mentions légales obligatoires.",
    },
    {
      q: "Valorisez-vous nos investissements ?",
      a: "Absolument. Nous vous aidons à structurer vos dépenses technologiques et à obtenir des livrables techniques répondant aux attentes des institutions (BPI, etc.).",
    },
    {
      q: "Proposez-vous des solutions pour la R&D ?",
      a: "Oui, nous sommes spécialisés dans l'accompagnement R&D : prototypes, solutions innovantes, et rédaction de documentations conformes.",
    },
    {
      q: "Quels sont vos délais de livraison ?",
      a: "Site vitrine : 1-3 semaines. MVP : 4-8 semaines. Solution Web3 : 6-9 semaines. Un calendrier précis est fourni à la signature.",
    },
    {
      q: "Avantage d'une agence française ?",
      a: "Équipe francophone réactive, livrables conformes aux standards français, et compréhension fine des enjeux de l'innovation en France.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 md:pt-32 px-6 md:px-12 bg-white animate-in slide-in-from-bottom-8 duration-700">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold mb-16">
          Vos Questions, <br />
          <span className="font-serif italic text-blue-600">
            Notre Expertise
          </span>
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200">
              <button
                className="w-full py-8 flex justify-between items-center text-left hover:text-blue-600 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl md:text-2xl font-bold pr-8">
                  {faq.q}
                </span>
                <span className="shrink-0">
                  {openIndex === index ? <Minus /> : <Plus />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100 mb-8"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-lg text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-slate-50 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Une autre question ?</h3>
          <p className="mb-8 text-slate-500">
            Contactez-nous directement pour discuter de votre projet.
          </p>
          <a
            href="mailto:hello@cocoricolabs.com"
            className="inline-block px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-colors"
          >
            hello@cocoricolabs.com
          </a>
        </div>
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="min-h-screen pt-32 md:pt-40 px-6 md:px-12 bg-slate-900 text-white animate-in zoom-in-95 duration-500">
    <div className="max-w-[1000px] mx-auto text-center">
      <h1 className="text-5xl md:text-9xl font-bold mb-6 md:mb-8">
        Lancez-vous.
      </h1>
      <p className="text-lg md:text-xl text-slate-400 mb-10 md:mb-16">
        Obtenez un devis détaillé pour votre projet Web3 dès aujourd’hui.
      </p>

      <form className="max-w-xl mx-auto space-y-6 md:space-y-8 text-left">
        <div className="group">
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-blue-500 transition-colors">
            Nom
          </label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-slate-700 py-3 md:py-4 text-xl md:text-2xl focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Jean Dupont"
          />
        </div>
        <div className="group">
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-blue-500 transition-colors">
            Email
          </label>
          <input
            type="email"
            className="w-full bg-transparent border-b border-slate-700 py-3 md:py-4 text-xl md:text-2xl focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="jean@entreprise.com"
          />
        </div>
        <div className="group">
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-blue-500 transition-colors">
            Détails du Projet
          </label>
          <textarea
            rows="3"
            className="w-full bg-transparent border-b border-slate-700 py-3 md:py-4 text-xl md:text-2xl focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Objectifs, technologies, délais..."
          />
        </div>

        <div className="pt-8 text-center">
          <button
            type="button"
            className="w-full md:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
          >
            Envoyer la Demande (Réponse sous 48h)
          </button>
        </div>
      </form>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

const App = () => {
  const [activePage, setActivePage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [activePage]);

  const navItems = [
    { id: "work", label: "Projets" },
    { id: "funding", label: "Financement" },
    { id: "studio", label: "Studio" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden cursor-auto md:cursor-none">
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
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-white to-red-600 z-[60]"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>

      {/* --- NAVIGATION --- */}
      <nav
        className={`fixed top-0 w-full z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-500 
        ${
          isScrolled && !isMenuOpen
            ? "py-4 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50"
            : "py-6 md:py-8 bg-transparent"
        }
        ${!isMenuOpen && !isScrolled ? "mix-blend-multiply" : ""}
      `}
      >
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setActivePage("home")}
        >
          <img
            src="cocoricolabs_logo_third.png"
            alt="CocoricoLabs"
            className="h-8 md:h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-tighter leading-none">
              CocoricoLabs<span className="text-red-600">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-semibold mt-1 opacity-60 hidden md:block">
              Atelier Numérique Parisien
            </span>
          </div>
        </div>

        <div className="hidden md:flex gap-12 items-center">
          {navItems.slice(0, 4).map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors relative group ${
                activePage === item.id ? "text-blue-600" : ""
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-red-500 transition-all duration-300 ${
                  activePage === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
          ))}
          <button
            onClick={() => setActivePage("contact")}
            className="bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/30"
          >
            Démarrer un projet
          </button>
        </div>

        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#FDFBF7] flex flex-col items-center justify-center gap-6 md:gap-8 z-40 animate-in fade-in slide-in-from-top-4 duration-300">
            <button
              onClick={() => setActivePage("home")}
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
            <div className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-400">
              Paris • France
            </div>
          </div>
        )}
      </nav>

      {/* --- PAGE CONTENT ROUTER --- */}
      <main>
        {activePage === "home" && <Home setPage={setActivePage} />}
        {activePage === "work" && <Work />}
        {activePage === "funding" && <Funding />}
        {activePage === "studio" && <Studio />}
        {activePage === "faq" && <FAQ />}
        {activePage === "contact" && <Contact />}
      </main>

      <Footer setPage={setActivePage} />
    </div>
  );
};

export default App;
