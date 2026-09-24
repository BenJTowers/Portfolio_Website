import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { Navigation } from "@/components/Navigation";
import styles from "./page.module.css";

const navItems = [
  ["01", "PROFILE", "#profile"],
  ["02", "EXPERIENCE", "#experience"],
  ["03", "SELECTED WORK", "#work"],
  ["04", "FILM ARCHIVE", "#film-archive"],
  ["05", "CONTACT", "#contact"],
] as const;

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className={styles.sectionHeading}>
      <p>{number} / {title}</p>
      <span aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.heroTopline}>
          <p>BT / 001</p>
          <Navigation items={navItems} />
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.portraitPlaceholder} aria-label="Portrait placeholder">
            <span>PORTRAIT</span>
            <small>ASSET PENDING</small>
            <i aria-hidden="true" />
          </div>
          <div className={styles.heroCopy}>
            <h1><span>BEN</span><span>TOWERS</span></h1>
            <p className={styles.role}>SOFTWARE ENGINEER</p>
            <p className={styles.specialty}>BACKEND / DATA / SYSTEMS</p>
            <div className={styles.heroLinks}>
              <a href="https://github.com/BenJTowers" target="_blank" rel="noreferrer">GITHUB ↗</a>
              <span>LINKEDIN / PENDING</span>
              <span>RÉSUMÉ / PENDING</span>
            </div>
          </div>
        </div>

        <div className={styles.heroFooter}>
          <p>VANCOUVER, BC</p>
          <a href="#profile">SCROLL ↓</a>
        </div>
      </header>

      <section className={styles.profile} id="profile" aria-labelledby="profile-heading">
        <SectionHeading number="01" title="PROFILE" />
        <div className={styles.profileGrid}>
          <h2 id="profile-heading">I&apos;M A SOFTWARE ENGINEERING STUDENT AT THE UNIVERSITY OF VICTORIA, INTERESTED IN BUILDING BACKEND SYSTEMS AND WORKING WITH DATA.</h2>
          <div className={styles.profileDetails}>
            <p>My experience spans software development, geospatial data pipelines, and system design, with a focus on practical systems that solve interesting problems.</p>
            <dl>
              <div><dt>BASE</dt><dd>VANCOUVER, BC</dd></div>
              <div><dt>EDUCATION</dt><dd>UVIC / B.SENG.</dd></div>
              <div><dt>FOCUS</dt><dd>BACKEND / DATA / SYSTEMS</dd></div>
              <div><dt>STATUS</dt><dd>GRADUATING 2026</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.experience} id="experience" aria-labelledby="experience-heading">
        <SectionHeading number="02" title="EXPERIENCE" />
        <h2 id="experience-heading" className="srOnly">Experience</h2>
        <div className={styles.experienceList}>
          {experience.map((item, index) => (
            <article className={styles.experienceItem} key={item.company}>
              <p className={styles.itemNumber}>0{index + 1}</p>
              <div><h3>{item.company}</h3><p className={styles.jobTitle}>{item.role}</p><p>{item.organization}</p></div>
              <div className={styles.jobMeta}><p>{item.period}</p><p>{item.location}</p></div>
              <p className={styles.jobDescription}>{item.description}</p>
              <p className={styles.tags}>{item.technologies.join(" / ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.work} id="work" aria-labelledby="work-heading">
        <SectionHeading number="03" title="SELECTED WORK" />
        <h2 id="work-heading" className="srOnly">Selected work</h2>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <article className={styles.project} key={project.slug}>
              <div className={`${styles.projectPoster} ${styles[`poster${index + 1}`]}`} aria-label={`${project.title} artwork placeholder`}>
                <span>{project.posterLabel}</span><b>0{index + 1}</b><i aria-hidden="true" />
              </div>
              <div className={styles.projectCopy}>
                <p className={styles.projectEyebrow}>{project.context}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className={styles.tags}>{project.technologies.join(" / ")}</p>
                <span className={styles.pendingLink}>CASE STUDY / PENDING ↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.film} id="film-archive" aria-labelledby="film-heading">
        <SectionHeading number="04" title="FILM ARCHIVE" />
        <div className={styles.filmIntro}><h2 id="film-heading">MY FILM LOG</h2><p>A selection of favourites and recent watches.</p><span>DATASET / PENDING</span></div>
        <div className={styles.filmStrip} aria-label="Film archive placeholders">
          {["01", "02", "03", "04", "05"].map((number) => <div className={styles.filmPoster} key={number}><span>POSTER</span><b>{number}</b></div>)}
        </div>
        <p className={styles.filmControls}>← DRAG / SCROLL → <span>EXPLORE ARCHIVE / PENDING ↗</span></p>
      </section>

      <footer className={styles.contact} id="contact" aria-labelledby="contact-heading">
        <SectionHeading number="05" title="CONTACT" />
        <div className={styles.contactGrid}>
          <h2 id="contact-heading">LET&apos;S<br />CONNECT.</h2>
          <div><p>EMAIL / PENDING</p><p>LINKEDIN / PENDING</p><a href="https://github.com/BenJTowers" target="_blank" rel="noreferrer">GITHUB ↗</a></div>
        </div>
        <div className={styles.contactFooter}><p>BEN TOWERS</p><p>VAN / 2026</p></div>
      </footer>
    </main>
  );
}
