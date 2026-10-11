// Primera portada de Todo Mecánica Express.
// Por ahora mostramos solo información que ya conocemos del taller.
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-bold">Todo Mecánica Express</span>
        <a href="#contacto" className="text-sm text-slate-300 hover:text-white">
          Contacto
        </a>
      </header>

      <section className="mx-auto flex max-w-6xl flex-col justify-center px-6 py-24 sm:py-36">
        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-orange-400">
          Taller mecánico en San Felipe
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
          Todo Mecánica <span className="text-orange-400">Express</span>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
          Estamos en Barrancas, San Felipe. Conoce nuestro taller y contáctanos
          para conversar sobre tu vehículo.
        </p>

        <a
          href="https://www.instagram.com/todomecanicaexpress/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 w-fit rounded-xl bg-orange-500 px-6 py-3 font-semibold text-slate-950 hover:bg-orange-400"
        >
          Visitar Instagram
        </a>
      </section>

      <section id="contacto" className="border-t border-slate-800 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold">Encuéntranos</h2>
          <p className="mt-3 text-slate-300">
            Camino vecinal, parcela 10, Barrancas, San Felipe, Valparaíso.
          </p>
        </div>
      </section>
    </main>
  );
}
