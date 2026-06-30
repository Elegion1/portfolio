"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import skills from "@/data/skills.json";
import projects from "@/data/projects.json";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoaded(true), 100); // piccola attesa per un ingresso più naturale
    return () => clearTimeout(timeoutId);
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
      { threshold: 0.2 },
    );

    document
      .querySelectorAll(".project-block")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const cleanDesc = [...projects].sort((a, b) => {
    const dateA = a.year;
    const dateB = b.year;

    // Ordina dal più recente al meno recente
    const diff = dateB - dateA;
    if (diff !== 0) return diff;

    // Tie-breaker: titolo (opzionale, rende l'ordine stabile)
    return (b.title || "").localeCompare(a.title || "");
  });

  return (
    <main
      className={`page-shell container-fluid min-vh-100 py-5 transition-all ${
        loaded ? "opacity-100 translate-none" : "opacity-0 translate-down"
      }`}
      style={{ transition: "opacity 0.8s ease, transform 0.8s ease" }}
    >
      <div className="container">
        {/* Hero Section */}
        <section className="hero-panel text-center mb-5">
          <h1 className="fw-bold display-4 mb-3 text-primary">
            Giovanni Sugamiele
          </h1>
          <p className="hero-subtitle fs-4 text-secondary mb-4">
            Web Developer
          </p>
          <p className="hero-copy text-muted mx-auto mb-4">
            Progetto e sviluppo siti web veloci, curati e orientati ai
            risultati, con focus su UX, performance e SEO.
          </p>

          <div className="hero-stats d-flex flex-wrap justify-content-center gap-3 mb-4">
            <span className="hero-stat-pill">9 progetti in evidenza</span>
            <span className="hero-stat-pill">Stack moderno e scalabile</span>
            <span className="hero-stat-pill">Approccio mobile-first</span>
          </div>

          <section className="skills-section my-4 text-center">
            <h3 className="fw-semibold mb-3 text-primary">Le mie competenze</h3>

            <div className="d-flex flex-column align-items-center mb-2 wv-100">
              <p className="skills-group-title mb-2">Competenze principali</p>
              <div className="d-flex justify-content-center flex-wrap gap-2 mb-3 w-md-50">
                {skills
                  .filter((skill) => skill.level !== "in-progress")
                  .map((skill, i) => (
                    <span
                      key={`${skill.name}-${i}`}
                      className="badge rounded-pill px-3 py-2 border text-bg-light border-primary-subtle skill-badge skill-main"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>

              <p className="skills-group-title mb-2">In crescita</p>
              <div className="d-flex justify-content-center flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.level === "in-progress")
                  .map((skill, i) => (
                    <span
                      key={`${skill.name}-${i}`}
                      className="badge rounded-pill px-3 py-2 border text-bg-light border-warning-subtle skill-badge skill-progress"
                    >
                      ⏳ {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          </section>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <a
              href="#projects"
              className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm"
            >
              Guarda i miei progetti
            </a>
            <a
              href="mailto:ggsugamiele+webdev@gmail.com"
              className="btn btn-light btn-lg rounded-pill px-4 border"
            >
              Parliamo del tuo progetto
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-5">
          <h3 className="fw-semibold mb-5 text-center text-dark">
            Progetti Recenti
          </h3>
          <p className="text-center text-muted projects-intro mx-auto mb-5">
            Una selezione di lavori reali: dal sito vetrina al sistema completo
            di prenotazione con backend integrato.
          </p>

          <div className="d-flex flex-column gap-5">
            {cleanDesc.map((p, i) => (
              <div
                key={p.id || i}
                className={`project-block row align-items-center g-4 flex-md-row ${
                  i % 2 !== 0 ? "flex-md-row-reverse" : ""
                }`}
              >
                <div className="col-md-6">
                  <div className="project-image-frame">
                    <Image
                      src={`/${p.id}.png`}
                      alt={p.title}
                      width={600}
                      height={400}
                      className="rounded-4 shadow-sm img-fluid w-100 project-image"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                        maxHeight: "320px",
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-6 project-content-card">
                  <h4 className="fw-bold text-primary mb-2">{p.title}</h4>

                  {/* ONE LINER */}
                  <p className="fw-semibold mb-3">{p.overview.one_liner}</p>

                  {/* KEY POINTS */}
                  <ul className="mb-3">
                    {p.overview.key_points.map((point, idx) => (
                      <li key={idx} className="text-muted small">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* CASE STUDY MINI */}
                  <div className="mb-3">
                    <p className="mb-1">
                      <strong>Problema:</strong> {p.case_study.problem}
                    </p>
                    <p className="mb-1">
                      <strong>Soluzione:</strong> {p.case_study.solution}
                    </p>
                  </div>

                  {/* STACK */}
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {p.stack.map((tech, t) => (
                      <span
                        key={t}
                        className="badge bg-light text-dark border border-secondary-subtle project-stack-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* LINK */}
                  {p.link && (
                    <Link
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fw-semibold text-primary text-decoration-none project-link"
                    >
                      Visita il progetto →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-panel text-center py-4 border-top">
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
              rel="noopener noreferrer"
              aria-label="Profilo LinkedIn di Giovanni Sugamiele"
              className="text-decoration-none mx-2 text-primary social-link"
            >
              <i className="bi bi-linkedin fs-3"></i>
            </a>
            <a
              href="https://github.com/Elegion1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profilo GitHub di Giovanni Sugamiele"
              className="text-decoration-none mx-2 text-dark social-link"
            >
              <i className="bi bi-github fs-3"></i>
            </a>
          </div>
        </section>
      </div>

      {/* Inline style helpers */}
      <style jsx>{`
        .page-shell {
          --accent: #0d6efd;
          --accent-soft: #dce9ff;
          --surface: #ffffff;
          --surface-soft: #f5f8ff;
          --text-soft: #64748b;
          background:
            radial-gradient(circle at 10% 10%, #e7f0ff 0%, transparent 33%),
            radial-gradient(circle at 95% 18%, #e8f7ff 0%, transparent 28%),
            linear-gradient(180deg, #f8fbff 0%, #edf2f8 100%);
        }
        .opacity-0 {
          opacity: 0;
          transform: translateY(-20px);
        }
        .opacity-100 {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-panel {
          background: linear-gradient(160deg, #ffffff 0%, #f4f9ff 100%);
          border: 1px solid #d7e8ff;
          border-radius: 1.4rem;
          box-shadow: 0 20px 55px rgba(15, 36, 74, 0.08);
          padding: 2.5rem 1.5rem;
        }
        .hero-kicker {
          display: inline-block;
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          background: #eaf2ff;
          color: #0b4db4;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .hero-subtitle {
          color: #2f5f9e !important;
        }
        .hero-copy {
          max-width: 710px;
          color: var(--text-soft);
          line-height: 1.65;
        }
        .hero-stat-pill {
          background: var(--surface);
          border: 1px solid #d7e8ff;
          border-radius: 999px;
          padding: 0.45rem 0.95rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: #245290;
        }
        .skills-group-title {
          font-size: 0.84rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-weight: 700;
          color: #315f9d;
        }
        .skill-badge {
          font-size: 0.88rem;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }
        .skill-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 16px rgba(20, 63, 128, 0.12);
        }
        .skill-main {
          background-color: #eaf2ff;
          color: #0d6efd;
        }
        .skill-progress {
          background-color: #fff8e1;
          color: #ff9800;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .projects-intro {
          max-width: 680px;
          line-height: 1.65;
        }
        .project-block.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .project-block {
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid #d8e6fa;
          box-shadow: 0 16px 36px rgba(20, 41, 79, 0.07);
          border-radius: 1.2rem;
          padding: 1.15rem;
          backdrop-filter: blur(2px);
        }
        .project-image-frame {
          overflow: hidden;
          border-radius: 1rem;
        }
        .project-image {
          transition: transform 0.45s ease;
        }
        .project-block:hover .project-image {
          transform: scale(1.02);
        }
        .project-content-card {
          padding: 0.25rem 0.5rem;
        }
        .project-year {
          color: #6f819a !important;
          font-weight: 500;
        }
        .project-stack-badge {
          font-size: 0.75rem;
          background: var(--surface-soft) !important;
        }
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          transition:
            transform 0.2s ease,
            color 0.2s ease;
        }
        .project-link:hover {
          transform: translateX(2px);
          color: #0849af !important;
        }
        .contact-panel {
          margin-top: 2rem;
          background: #ffffff;
          border-radius: 1.15rem;
          border: 1px solid #d9e7fc;
          box-shadow: 0 14px 30px rgba(16, 41, 84, 0.06);
          padding: 2rem 1rem;
        }
        .social-link {
          transition: transform 0.2s ease;
          display: inline-flex;
        }
        .social-link:hover {
          transform: translateY(-2px);
        }
        .social-link:focus-visible {
          outline: 3px solid #97beff;
          outline-offset: 3px;
          border-radius: 0.5rem;
        }
        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 15px rgba(13, 110, 253, 0.2);
          background-color: #eaf2ff;
        }
        @media (max-width: 768px) {
          .hero-panel {
            padding: 2rem 1rem;
          }
          .hero-copy {
            font-size: 0.98rem;
          }
          .project-block {
            padding: 0.9rem;
          }
          .project-content-card {
            padding: 0.15rem;
          }
          .contact-panel {
            padding: 1.5rem 0.9rem;
          }
          img {
            max-height: 220px !important;
          }
        }
      `}</style>
    </main>
  );
}
