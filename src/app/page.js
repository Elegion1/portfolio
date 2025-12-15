"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import skills from "@/data/skills.json";
import projects from "@/data/projects.json";

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

  const parseMonthYear = (s) => {
    if (!s || typeof s !== "string") return new Date(0); // fallback molto vecchio
    const parts = s.split("/").map((p) => p.trim());
    if (parts.length !== 2) return new Date(0);
    const mm = parseInt(parts[0], 10);
    const yyyy = parseInt(parts[1], 10);
    if (Number.isNaN(mm) || Number.isNaN(yyyy)) return new Date(0);
    // Mese in Date è 0-based
    return new Date(yyyy, mm - 1, 1);
  };

  const cleanDesc = projects
    .map((p) => ({
      ...p,
      desc: p.desc.replace(/[‘’]/g, "'"),
    }))
    .sort((a, b) => {
      const dateA = parseMonthYear(a.date);
      const dateB = parseMonthYear(b.date);

      // Ordina dal più recente al meno recente
      const diff = dateB - dateA;
      if (diff !== 0) return diff;

      // Tie-breaker: titolo (opzionale, rende l'ordine stabile)
      return (b.title || "").localeCompare(a.title || "");
    });

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
              <div className="d-flex justify-content-center flex-wrap gap-2 mb-2 w-md-50">
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
                      width={600}
                      height={400}
                      className="rounded-4 shadow-sm img-fluid w-100"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                        maxHeight: "300px",
                      }}
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
        @media (max-width: 768px) {
          img {
            max-height: 220px !important;
          }
        }
      `}</style>
    </main>
  );
}
