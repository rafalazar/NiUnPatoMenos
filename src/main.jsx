import React, { useLayoutEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  Droplets,
  Feather,
  Heart,
  MapPin,
  Shirt,
  Sparkles,
  UtensilsCrossed,
  Waves
} from "lucide-react";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const communities = ["Chosica", "Chaclacayo", "Santa Clara", "Ate", "Lima"];

const waterTips = [
  {
    number: "01",
    icon: Clock3,
    title: "Ducha corta, pato feliz",
    text: "Báñate rápido. La ducha no es un concierto de una hora: entra, enjabónate y sal.",
    tag: "Menos tiempo"
  },
  {
    number: "02",
    icon: Shirt,
    title: "Lava con el agua necesaria",
    text: "No malgastes agua y reutilízala para regar o limpiar.",
    tag: "Más eficiencia"
  },
  {
    number: "03",
    icon: UtensilsCrossed,
    title: "Cierra mientras enjabonas",
    text: "Al lavar platos, cierra el caño mientras enjabonas y vuelve a abrirlo solo para enjuagar.",
    tag: "Cero desperdicio"
  },
  {
    number: "04",
    icon: Droplets,
    title: "Una fuga también cuenta",
    text: "Un caño que gotea no es poca cosa. Repáralo y reutiliza agua siempre que sea posible.",
    tag: "Cada gota suma"
  }
];

function App() {
  const page = useRef(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".brand", { y: -20, opacity: 0, duration: 0.55 })
        .from(".hero-kicker", { y: 24, opacity: 0, duration: 0.5 }, "-=.25")
        .from(".hero-word", { yPercent: 115, rotate: 2, duration: 0.9, stagger: 0.1 }, "-=.25")
        .from(".hero-copy, .hero-actions", { y: 28, opacity: 0, duration: 0.65, stagger: 0.12 }, "-=.4")
        .from(".hero-visual", { scale: 0.9, rotate: 3, opacity: 0, duration: 1 }, "-=.75")
        .from(".hero-sticker", { scale: 0, rotate: -24, duration: 0.55, ease: "back.out(1.8)" }, "-=.35");

      gsap.to(".hero-image", {
        yPercent: 9,
        ease: "none",
        scrollTrigger: { trigger: ".hero-visual", start: "top 75%", end: "bottom top", scrub: true }
      });

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 64,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 84%", once: true }
        });
      });

      gsap.from(".tip-card", {
        x: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".tips-grid", start: "top 78%", once: true }
      });

      gsap.from(".fact-big span", {
        yPercent: 110,
        duration: 0.9,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: { trigger: ".fact-section", start: "top 65%", once: true }
      });

      gsap.to(".fact-image", {
        rotate: 2,
        y: -18,
        ease: "none",
        scrollTrigger: { trigger: ".fact-section", start: "top bottom", end: "bottom top", scrub: 1 }
      });
    }, page);

    return () => context.revert();
  }, []);

  return (
    <div ref={page}>
      <Header />
      <main>
        <Hero />
        <CommunityRibbon />
        <Huachipa />
        <WaterCare />
        <BigFact />
        <Manifesto />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

function DuckBadge({ className = "" }) {
  return (
    <span className={`duck-badge ${className}`} aria-hidden="true">
      <span>NM</span>
      <Feather size={18} strokeWidth={2.5} />
    </span>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ni un pato menos, inicio">
        <DuckBadge />
        <span>Ni un pato menos</span>
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        <a href="#huachipa">Huachipa</a>
        <a href="#agua">Cuida el agua</a>
        <a href="#dato">Dato curioso</a>
      </nav>
      <a className="header-cta" href="#agua">
        Haz tu parte <ArrowUpRight size={17} />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy-block">
        <p className="hero-kicker">
          <Sparkles size={17} /> #SalvemosALosPatos
        </p>
        <h1 className="hero-title" aria-label="Ni un pato menos">
          <span className="hero-line"><span className="hero-word">Ni un</span></span>
          <span className="hero-line accent"><span className="hero-word">pato</span></span>
          <span className="hero-line"><span className="hero-word">menos.</span></span>
        </h1>
        <p className="hero-copy">
          Cuidemos el agua que compartimos. Una iniciativa para todas las comunidades de Lima, con especial cariño por <strong>Chosica, Chaclacayo, Santa Clara y Ate.</strong>
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#agua">
            Cada gota cuenta <Droplets size={18} />
          </a>
          <a className="text-link" href="#huachipa">
            Conoce a nuestros amigos emplumados<ArrowDown size={18} />
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <img
          className="hero-image"
          src="/images/patos-lima-hero.png"
          alt="Tres patos nadan en un paisaje de agua limpia inspirado en Lima Este"
        />
        <div className="hero-sticker" aria-hidden="true">
          <span>Lima Este</span>
          <strong>nada unida</strong>
        </div>
        <span className="visual-caption">Ilustración original · 2026</span>
      </div>
    </section>
  );
}

function CommunityRibbon() {
  const repeated = [...communities, ...communities];
  return (
    <div className="community-ribbon" aria-label="Comunidades de Lima">
      <div className="ribbon-track">
        {repeated.map((place, index) => (
          <React.Fragment key={`${place}-${index}`}>
            <span>{place}</span>
            <i aria-hidden="true">●</i>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function Huachipa() {
  return (
    <section className="huachipa section-shell" id="huachipa">
      <div className="section-index reveal">01 / NUESTROS VECINOS</div>
      <div className="huachipa-grid">
        <div className="reveal">
          <p className="eyebrow"><MapPin size={16} /> Huachipa, Lima Este</p>
          <h2>Hay una bandada que también llama <em>Lima</em> su hogar.</h2>
        </div>
        <div className="huachipa-copy reveal">
          <p>
            En el <strong>Parque de las Leyendas de Huachipa</strong> viven patos que dependen de espacios limpios, agua cuidada y visitantes respetuosos.
          </p>
          <p>
            Mirarlos sin molestarlos, evitar lanzar comida inadecuada y no dejar residuos cerca del agua son gestos sencillos que protegen su día a día.
          </p>
          <div className="local-note">
            <Waves size={30} />
            <span>Lo que hacemos río arriba también llega a su hogar.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function WaterCare() {
  return (
    <section className="water-section" id="agua">
      <div className="section-shell">
        <div className="section-index reveal">02 / MENOS DESPERDICIO</div>
        <div className="water-heading reveal">
          <p className="eyebrow light"><Droplets size={16} /> Consejos útiles</p>
          <h2>Ahorrar agua no tiene que ser un drama.</h2>
          <p>Son pequeños cambios cotidianos. Juntos hacen una laguna de diferencia.</p>
        </div>
        <div className="tips-grid">
          {waterTips.map(({ number, icon: Icon, title, text, tag }) => (
            <article className="tip-card" key={number}>
              <div className="tip-top">
                <span>{number}</span>
                <Icon size={28} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <small>{tag}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BigFact() {
  return (
    <section className="fact-section" id="dato">
      <div className="fact-image-wrap reveal">
        <img
          className="fact-image"
          src="/images/ganso-vs-pato.png"
          alt="Comparación ilustrada de un ganso grande junto a un pato más pequeño"
        />
        <span className="fact-label">Ganso / Pato</span>
      </div>
      <div className="fact-copy">
        <div className="section-index reveal">03 / DATO CURIOSO</div>
        <p className="fact-intro reveal">Aunque los gansos y los patos se parecen mucho…</p>
        <h2 className="fact-big" aria-label="Los gansos son mucho más grandes">
          <span>Los gansos</span>
          <span>son <em>más grandes</em></span>
          <span> que los patos.</span>
        </h2>
        <p className="fact-detail reveal">
          Suelen tener el cuello más largo, patas más robustas y un cuerpo notablemente mayor. Parecidos, sí. Del mismo tamaño, para nada.
        </p>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto-duck" aria-hidden="true">🦆</div>
      <p className="eyebrow reveal"><Heart size={16} /> Una ciudad, una comunidad</p>
      <h2 className="reveal">Cada gota que no desperdicias deja más agua para la vida.</h2>
      <p className="reveal">
        Desde Chosica hasta Ate, pasando por Chaclacayo y Santa Clara: hagamos de Lima una ciudad donde cuidar el agua sea parte de nuestra cultura.
      </p>
      <a className="primary-button dark reveal" href="#inicio">
        Comparte la idea <ArrowUpRight size={18} />
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <DuckBadge />
        <strong>Ni un pato menos</strong>
      </div>
      <p>Hecho por Jordan, inspirado por María 🦆❤️</p>
      <a href="#inicio">Volver arriba ↑</a>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
