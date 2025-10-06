"use client";
import { useEffect, useState } from "react";

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
    "Laravel",
    "React",
    "Next.js",
    "Bootstrap",
    "MySQL",
    "JavaScript",
  ];

  const projects = [
    {
      title: "Tranchida Transfer",
      desc: "Tranchida Transfer è una piattaforma completa per la gestione delle prenotazioni di transfer, escursioni e noleggio auto. Il progetto include la creazione di un dashboard amministrativo personalizzato con funzionalità avanzate come la gestione dei clienti, delle disponibilità, dei pagamenti e delle statistiche. L'interfaccia è stata progettata per essere intuitiva e responsive, garantendo un'esperienza utente ottimale su desktop e dispositivi mobili. Il backend è sviluppato in PHP con Laravel e Livewire, mentre frontend e interattività sono gestiti con HTML, CSS e JavaScript, integrando anche le Google API per calcoli di distanza e localizzazione. Particolare attenzione è stata posta all'ottimizzazione SEO per migliorare la visibilità online.",
      tecnologies: [
        "PHP",
        "Laravel",
        "Livewire",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Google API",
        "Ottimizzazione SEO",
      ],
      img: "/tranchidatransfer.png",
      link: "tranchidatransfer.it"
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
      link: "favignana-transfer.it"
    },
    {
      title: "Base Ecommerce in costruzione",
      desc: "Questo progetto rappresenta la base di un e-commerce completamente scalabile e personalizzabile, sviluppato con Next.js per il frontend e Bootstrap per la parte visiva e responsive. L’architettura prevede componenti modulari riutilizzabili per la gestione di prodotti, categorie, carrello e ordini, permettendo una facile espansione futura. Particolare attenzione è stata data alle performance e all'accessibilità, per garantire un'esperienza utente ottimale su ogni dispositivo. Il backend previsto è in Laravel, che consentirà la gestione completa dei dati, l'integrazione con sistemi di pagamento e la creazione di un pannello amministrativo per il controllo del catalogo, delle offerte e delle statistiche. Il progetto è pensato per essere facilmente estendibile e pronto per future funzionalità avanzate come filtri dinamici, ricerca full-text e gestione multi-lingua.",
      tecnologies: [
        "Backend Laravel",
        "Frontend Next.js",
        "Bootstrap",
        "REST API",
      ],
      img: "/ecommerce.png",
      link: ""
    },
  ];

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

          <div className="d-flex justify-content-center flex-wrap mb-4 gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="badge rounded-pill text-bg-light border border-primary-subtle px-3 py-2"
                style={{
                  backgroundColor: "#eaf2ff",
                  color: "#0d6efd",
                  fontSize: "0.9rem",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

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
            {projects.map((p, i) => (
              <div
                key={i}
                className={`row align-items-center g-4 flex-md-row ${
                  i % 2 !== 0 ? "flex-md-row-reverse" : ""
                }`}
              >
                <div className="col-md-6">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="img-fluid rounded-4 shadow-sm"
                    style={{ width: "100%", objectFit: "cover" }}
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
            📩 Inviami un'email
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
      `}</style>
    </main>
  );
}
