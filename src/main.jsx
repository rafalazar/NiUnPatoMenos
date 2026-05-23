import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Droplets,
  HeartHandshake,
  Home,
  Leaf,
  Megaphone,
  Sparkles
} from "lucide-react";
import "./styles.css";

const brandName = "Patos a Salvo";
const duckEmoji = "🦆";

const habitatItems = [
  {
    icon: Leaf,
    title: "Totora y plantas nativas",
    text: "Cuidamos la vegetación de humedales limeños para que los patos tengan sombra, alimento y refugio."
  },
  {
    icon: Droplets,
    title: "Agua sin basura",
    text: "Un canal, una laguna o una acequia limpia pueden ser la diferencia para una familia de patitos."
  },
  {
    icon: Home,
    title: "Nidos sin sustos",
    text: "Respetamos zonas de anidación y mantenemos distancia, sobre todo cuando hay crías cerca."
  }
];

const neighbors = [
  {
    name: "El visitante de los Pantanos",
    label: "Pantanos de Villa",
    image: "/images/wood-duck.jpg",
    text: "En Chorrillos, los humedales son descanso y hogar. Observar sin invadir también es una forma de cuidar."
  },
  {
    name: "La familia del parque",
    label: "Vecino urbano",
    image: "/images/ducklings-grass.jpg",
    text: "En parques y lagunas artificiales, lo mejor que podemos hacer es no darles pan y mantener limpia la orilla."
  },
  {
    name: "El pato de paso",
    label: "Ruta limeña",
    image: "/images/wetland-ducks.jpg",
    text: "Algunos se mueven entre cuerpos de agua buscando comida. Por eso Lima necesita corredores verdes cuidados."
  }
];

const actions = [
  "No les des pan, galletas ni comida salada.",
  "Recoge plásticos, colillas y envolturas cerca del agua.",
  "Mantén a perros con correa alrededor de lagunas y nidos.",
  "Reporta redes, anzuelos o basura peligrosa a la municipalidad."
];

function App() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-lagoon-900">
      <Header />
      <Hero />
      <Habitat />
      <Neighbors />
      <CareGuide />
      <Join />
      <Footer />
    </main>
  );
}

function DuckMark({ className = "" }) {
  return (
    <span aria-hidden="true" className={`duck-mark ${className}`}>
      {duckEmoji}
    </span>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-lagoon-900/10 bg-[#fbfaf6]/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a className="flex items-center gap-2 font-semibold text-lagoon-700" href="#inicio" aria-label={`${brandName}, inicio`}>
          <DuckMark />
          {brandName}
        </a>
        <div className="hidden items-center gap-7 text-sm text-lagoon-900/70 md:flex">
          <a className="nav-link" href="#habitat">
            Humedales
          </a>
          <a className="nav-link" href="#proteccion">
            Cómo ayudar
          </a>
          <a className="nav-link" href="#vecinos">
            Patos limeños
          </a>
          <a className="nav-link" href="#sumate">
            Súmate
          </a>
        </div>
        <a className="button-primary hidden md:inline-flex" href="#sumate">
          Protege un pato
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden md:min-h-[680px]">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/wetland-ducks.jpg"
        alt="Patos nadando entre plantas de humedal"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaf6]/25 via-[#fbfaf6]/76 to-[#fbfaf6]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fbfaf6]/94 via-[#fbfaf6]/62 to-transparent" />
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-5 pb-16 pt-12 md:min-h-[680px] md:px-8 md:pb-20 md:pt-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-lagoon-600/20 bg-lagoon-50/90 px-4 py-2 text-sm font-medium text-lagoon-700">
            <Sparkles size={16} />
            Lima también cuida a sus patos
          </span>
          <p className="mt-5 text-2xl font-extrabold tracking-[0.08em] text-[#082c6c] md:text-xl">
            #NiUnPatoMenos
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[3.15rem] font-semibold leading-[0.98] text-lagoon-900 md:text-7xl">
            Que cada pato limeño nade tranquilo
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-lagoon-900/80">
            Una guía ciudadana para proteger patos en los Pantanos de Villa, parques, canales y lagunas urbanas. Cuidarlos empieza con acciones simples y mucho respeto por su casa.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#proteccion">
              Cómo ayudar hoy
              <ArrowUpRight size={17} />
            </a>
            <a className="button-secondary" href="#habitat">
              Ver sus refugios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Habitat() {
  return (
    <section id="habitat" className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1fr_0.92fr] md:items-center md:px-8 md:py-20">
      <div className="relative">
        <div className="blob-frame bg-lagoon-50">
          <img
            className="h-full w-full object-cover"
            src="/images/ducklings-grass.jpg"
            alt="Patito caminando sobre pasto"
          />
        </div>
        <div className="fact-badge">
          <strong>Dato limeño</strong>
          <span>Los Pantanos de Villa son un refugio clave para aves acuáticas dentro de la ciudad.</span>
        </div>
      </div>
      <div>
        <p className="eyebrow">Humedales y parques</p>
        <h2 className="section-title">Dónde encuentran casa en Lima</h2>
        <p className="mt-5 text-lg leading-8 text-lagoon-900/75">
          Los patos no solo necesitan agua: necesitan orillas sanas, plantas, silencio y vecinos atentos. Cuando cuidamos un humedal o una laguna de barrio, también cuidamos la vida que mantiene fresca a la ciudad.
        </p>
        <div className="mt-8 space-y-4">
          {habitatItems.map(({ icon: Icon, title, text }) => (
            <article className="info-row" key={title}>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-lagoon-100 text-lagoon-700">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="font-semibold text-lagoon-900">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-lagoon-900/70">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Neighbors() {
  return (
    <section id="vecinos" className="mx-auto max-w-7xl px-5 py-12 md:px-8">
      <div className="max-w-2xl">
        <p className="eyebrow">Patos limeños</p>
        <h2 className="section-title">Vecinos con plumas, pico y barrio</h2>
        <p className="mt-4 text-lg leading-8 text-lagoon-900/70">
          Lima tiene más vida silvestre de la que parece. Si aprendemos a mirar con calma, cada visita al agua puede volverse una oportunidad para proteger.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {neighbors.map((duck) => (
          <article className="duck-card" key={duck.name}>
            <img src={duck.image} alt={`${duck.name} en su hábitat`} />
            <div className="p-6">
              <span>{duck.label}</span>
              <h3>{duck.name}</h3>
              <p>{duck.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CareGuide() {
  return (
    <section id="proteccion" className="bg-lagoon-900 py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-skysoft">Cómo ayudar</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Lima puede ser una ciudad más amable para sus patos
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/75">
            No hace falta una gran campaña para empezar. En una salida al parque, una visita a Chorrillos o una caminata cerca del agua, ya puedes hacer algo útil.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {actions.map((action, index) => (
            <article className="action-card" key={action}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{action}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="sumate" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8 md:py-20">
      <div className="rounded-[48%_52%_47%_53%/55%_45%_55%_45%] bg-skysoft px-7 py-14 text-center shadow-inner md:px-16">
        <Megaphone className="mx-auto text-[#0b5fb6]" size={42} />
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.24em] text-[#0b5fb6]">¿Sabías esto?</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-[#082c6c] md:text-5xl">
          "Los gansos son más grandes que los patos."
        </h2>
        <div className="mt-8 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#0b5fb6]/30" />
          <span className="h-2 w-8 rounded-full bg-[#0b5fb6]" />
          <span className="h-2 w-2 rounded-full bg-[#0b5fb6]/30" />
        </div>
      </div>
      <aside className="bg-lagoon-600 p-8 text-white shadow-soft md:p-10">
        <HeartHandshake size={42} />
        <h2 className="mt-6 font-display text-4xl font-semibold">Súmate desde tu distrito</h2>
        <p className="mt-5 leading-8 text-white/80">
          Organiza una limpieza pequeña, avisa si encuentras basura peligrosa o comparte esta guía con tu colegio, familia o junta vecinal. La bandada también se cuida en comunidad.
        </p>
      </aside>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-lagoon-900/10 bg-[#f4f0e7]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-9 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <a className="flex items-center gap-2 font-semibold text-lagoon-700" href="#inicio" aria-label={`${brandName}, inicio`}>
            <DuckMark />
            {brandName}
          </a>
          <p className="mt-2 text-sm italic text-lagoon-900/70">Cuidando patos limeños, un humedal a la vez.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-lagoon-900/70">
          <a href="#habitat">Humedales</a>
          <a href="#proteccion">Acciones</a>
          <a href="#sumate">Súmate</a>
        </div>
        <p className="text-sm text-lagoon-900/70 font-bold">
          Hecho por Jordan, inspirado por María {duckEmoji}
        </p>
      </div>
    </footer>
  );
}

export default App;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
