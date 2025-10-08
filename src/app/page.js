"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100); // piccola attesa per un ingresso più naturale
  }, []);

  // Observer per animazioni scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // animazione una volta sola
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".project-block")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "HTML", level: "expert" },
    { name: "CSS", level: "expert" },
    { name: "JavaScript", level: "expert" },
    { name: "PHP", level: "expert" },
    { name: "Laravel", level: "expert" },
    { name: "React", level: "expert" },
    { name: "Next.js", level: "expert" },
    { name: "MySQL", level: "expert" },
    { name: "Tailwind", level: "expert" },
    { name: "TypeScript", level: "in-progress" },
    { name: "Node.js", level: "in-progress" },
    { name: "JAVA", level: "in-progress" },
    { name: "Python", level: "in-progress" },
  ];

  const projects = [
    {
      title: "Tranchida Transfer",
      desc: "Tranchida Transfer è una piattaforma completa per la gestione delle prenotazioni di transfer, escursioni e noleggio auto. Il progetto include la creazione di un dashboard amministrativo personalizzato con funzionalità avanzate come la gestione dei clienti, delle disponibilità, dei pagamenti e delle statistiche. L'interfaccia è stata progettata per essere intuitiva e responsive, garantendo un'esperienza utente ottimale su desktop e dispositivi mobili. Il backend è sviluppato in PHP con Laravel e Livewire, mentre frontend e interattività sono gestiti con HTML, CSS e JavaScript, integrando anche le Google API per calcoli di distanza e localizzazione. Particolare attenzione è stata posta all'ottimizzazione SEO per migliorare la visibilità online.",
      tecnologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "Livewire",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Google API",
        "Ottimizzazione SEO",
      ],
      img: "/tranchidatransfer.png",
      link: "https://tranchidatransfer.it",
    },
    {
      title: "Favignana Transfer",
      desc: "Favignana Transfer è un sistema avanzato per la gestione dei servizi di transfer sull'isola, con possibilità di pagamento online tramite PayPal. Il backend, sviluppato in Laravel, comunica tramite API REST con il frontend Next.js/React, garantendo un'interazione fluida e tempi di risposta rapidi. Il progetto è stato pensato per supportare la gestione simultanea di più prenotazioni, con interfaccia chiara e intuitiva sia per gli utenti che per gli amministratori. La piattaforma è stata ottimizzata per SEO e performance, utilizzando Bootstrap per il layout responsive e garantendo compatibilità su tutti i dispositivi. Inoltre, è stata implementata la gestione dei dati in sicurezza e un sistema di notifiche per aggiornamenti delle prenotazioni.",
      tecnologies: [
        "React",
        "Next.js",
        "Bootstrap",
        "HTML",
        "CSS",
        "JavaScript",
        "Laravel",
        "REST API",
        "Ottimizzazione SEO",
      ],
      img: "/favignanatransfer.png",
      link: "https://favignana-transfer.it",
    },
    {
      title: "Base Ecommerce in costruzione",
      desc: "Questo progetto rappresenta la base di un e-commerce completamente scalabile e personalizzabile, sviluppato con Next.js per il frontend e Bootstrap per la parte visiva e responsive. L’architettura prevede componenti modulari riutilizzabili per la gestione di prodotti, categorie, carrello e ordini, permettendo una facile espansione futura. Particolare attenzione è stata data alle performance e all'accessibilità, per garantire un'esperienza utente ottimale su ogni dispositivo. Il backend previsto è in Laravel, che consentirà la gestione completa dei dati, l'integrazione con sistemi di pagamento e la creazione di un pannello amministrativo per il controllo del catalogo, delle offerte e delle statistiche. Il progetto è pensato per essere facilmente estendibile e pronto per future funzionalità avanzate come filtri dinamici, ricerca full-text e gestione multi-lingua.",
      tecnologies: [
        "Backend Laravel",
        "MySQL",
        "Frontend Next.js",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "REST API",
      ],
      img: "/ecommerce.png",
      link: "",
    },
    {
      title: "Tech Talk",
      desc: "Mockup di un blog di tecnologia sviluppato interamente in HTML, CSS e JavaScript puro. Il progetto riproduce la struttura e lo stile di un blog moderno, con una homepage per gli articoli, una sezione dedicata alle categorie e un layout responsive ottimizzato per diversi dispositivi. Ideale come esercizio di design statico e gestione semantica dei contenuti.",
      tecnologies: ["HTML", "CSS", "JavaScript"],
      img: "/techtalk.png",
      link: "https://elegion1.github.io/tech-talk/index.html",
    },
    {
      title: "RED",
      desc: "Mockup di un sito web realizzato a partire da un design statico, trasformato in un layout HTML e CSS completamente responsive. Il progetto si concentra sulla precisione del markup e sulla fedeltà visiva al design originale, includendo transizioni fluide e una tipografia curata per ottenere un risultato elegante e coerente.",
      tecnologies: ["HTML", "CSS"],
      img: "/red.png",
      link: "https://elegion1.github.io/Red-Giovanni-Sugamiele/",
    },
    {
      title: "Thrift Shop",
      desc: "Mockup di un e-commerce per la vendita di articoli usati, sviluppato con Laravel e Livewire su database MySQL. Il progetto include una gestione completa dei prodotti, con pagine dinamiche, componenti reattivi e un’attenzione particolare all’esperienza utente. È presente una funzione di revisione dei prodotti da parte degli amministratori per garantire la qualità dei contenuti, insieme a un sistema automatico di gestione delle immagini. Inoltre, è stata integrata l’API di Google per la rilevazione e censura automatica dei volti nelle foto caricate, assicurando la conformità alle normative sulla privacy. Il progetto è ideato come base scalabile e facilmente estendibile con funzionalità reali di checkout e autenticazione.",
      tecnologies: [
        "Laravel",
        "MySQL",
        "Livewire",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      img: "/thriftshop.png",
      link: "https://github.com/Elegion1/Thrift-Shop-Giovanni-Sugamiele",
    },
    {
      title: "Echo",
      desc: "Mockup di un social network ispirato a Twitter, sviluppato in Laravel e Livewire con database MySQL. Il progetto simula un flusso di post, un sistema di profili e un’interfaccia reattiva in tempo reale. È stato pensato come esercizio di architettura MVC e interazione dinamica lato frontend, con l’obiettivo di avvicinarsi al comportamento di una vera piattaforma social.",
      tecnologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "Livewire",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      img: "/echo.png",
      link: "https://github.com/Elegion1/echo_Giovanni_Sugamiele",
    },
  ];

  const cleanDesc = projects.map((p) => ({
    ...p,
    desc: p.desc.replace(/[‘’]/g, "'"),
  }));

  return (
    <main
      className={`container-fluid min-vh-100 py-5 transition-all ${
        loaded ? "opacity-100 translate-none" : "opacity-0 translate-down"
      }`}
      style={{
        background: "linear-gradient(180deg, #f9fafc 0%, #eef2f5 100%)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div className="container">
        {/* Hero Section */}
        <section className="text-center mb-5">
          <h1 className="fw-bold display-4 mb-2 text-primary">
            Giovanni Sugamiele
          </h1>
          <p className="fs-4 text-secondary mb-3">Web Developer</p>

          <section className="skills-section my-5 text-center">
            <h3 className="fw-semibold mb-4 text-primary">Le mie competenze</h3>

            <div className="d-flex flex-column align-items-center mb-4 wv-100">
              {/* --- SKILL COMPLETE --- */}
              <div className="d-flex justify-content-center flex-wrap gap-2 mb-2 w-50">
                {skills
                  .filter((skill) => skill.level !== "in-progress")
                  .map((skill, i) => (
                    <span
                      key={i}
                      className="badge rounded-pill px-3 py-2 border text-bg-light border-primary-subtle"
                      style={{
                        backgroundColor: "#eaf2ff",
                        color: "#0d6efd",
                        fontSize: "0.9rem",
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>

              {/* --- SKILL IN PROGRESS --- */}
              <div className="d-flex justify-content-center flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.level === "in-progress")
                  .map((skill, i) => (
                    <span
                      key={i}
                      className="badge rounded-pill px-3 py-2 border text-bg-light border-warning-subtle"
                      style={{
                        backgroundColor: "#fff8e1",
                        color: "#ff9800",
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      ⏳ {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          </section>

          <a
            href="#projects"
            className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm"
          >
            Guarda i miei progetti
          </a>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-5">
          <h3 className="fw-semibold mb-5 text-center text-dark">
            Progetti Recenti
          </h3>

          <div className="d-flex flex-column gap-5">
            {cleanDesc.map((p, i) => (
              <Link key={i} href={p.link} target="_blank">
                <div
                  className={`row align-items-center g-4 flex-md-row ${
                    i % 2 !== 0 ? "flex-md-row-reverse" : ""
                  }`}
                >
                  <div className="col-md-6">
                    <Image
                      src={p.img}
                      alt={p.title}
                      width={600} // larghezza desiderata
                      height={400} // altezza desiderata
                      className="rounded-4 shadow-sm"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>

                  <div className="col-md-6">
                    <h4 className="fw-bold text-primary mb-2">{p.title}</h4>
                    <p className="text-muted mb-3">{p.desc}</p>

                    <div className="d-flex flex-wrap gap-2">
                      {p.tecnologies.map((tech, t) => (
                        <span
                          key={t}
                          className="badge bg-light text-dark border border-secondary-subtle"
                          style={{
                            fontSize: "0.8rem",
                            padding: "0.4em 0.7em",
                            backgroundColor: "#f8f9fa",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center py-4 border-top">
          <h4 className="fw-semibold mb-3 text-primary">Contattami</h4>
          <p className="text-muted mb-4">
            Se vuoi collaborare o discutere di un progetto, scrivimi pure:
          </p>
          <a
            href="mailto:ggsugamiele+webdev@gmail.com"
            className="btn btn-outline-primary px-4 rounded-pill"
          >
            📩 Inviami un&apos; email
          </a>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/giovanni-sugamiele-webdev/"
              target="_blank"
              className="text-decoration-none mx-2 text-primary"
            >
              <i className="bi bi-linkedin fs-3"></i>
            </a>
            <a
              href="https://github.com/Elegion1"
              target="_blank"
              className="text-decoration-none mx-2 text-dark"
            >
              <i className="bi bi-github fs-3"></i>
            </a>
          </div>
        </section>
      </div>

      {/* Inline style helpers */}
      <style jsx>{`
        .opacity-0 {
          opacity: 0;
          transform: translateY(-20px);
        }
        .opacity-100 {
          opacity: 1;
          transform: translateY(0);
        }
        .project-block.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 15px rgba(13, 110, 253, 0.2);
          background-color: #eaf2ff;
        }
      `}</style>
    </main>
  );
}
