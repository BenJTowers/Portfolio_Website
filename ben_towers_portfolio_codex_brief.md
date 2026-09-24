# Ben Towers Portfolio --- V1 Build Brief for Codex

## 1. Project Goal

Build a polished personal portfolio website for **Ben Towers**, a
software engineering student based in Vancouver, BC.

The website is primarily a **professional software engineering
portfolio**, with enough personality and visual experimentation to be
memorable. It should showcase technical experience and selected projects
while also containing a smaller personal film archive.

The site should feel intentionally designed, but professional usefulness
comes first.

### Professional positioning

Primary descriptor:

**SOFTWARE ENGINEER**

Secondary descriptor:

**BACKEND / DATA / SYSTEMS**

The site should communicate that Ben is interested in backend
engineering, data-oriented software, systems, and technically
substantial software projects.

------------------------------------------------------------------------

## 2. V1 Technical Goals

Use this project to practice and demonstrate:

-   Next.js
-   React
-   TypeScript
-   HTML/CSS
-   Responsive web design
-   Component architecture
-   Structured/static data
-   Git/GitHub
-   Deployment
-   Accessibility
-   Thoughtful UI interaction

Do **not** over-engineer V1.

Specifically, V1 does **not** need:

-   PostgreSQL
-   AWS
-   Docker
-   Redis
-   Authentication
-   A CMS
-   A custom backend
-   Complex state management

Those can be added in later versions.

The initial goal is to ship a complete, polished, responsive website
before expanding the architecture.

------------------------------------------------------------------------

## 3. Suggested Stack

-   Next.js
-   React
-   TypeScript
-   App Router
-   Plain CSS / CSS Modules or another lightweight CSS approach
-   Space Grotesk as the primary typeface
-   ESLint

Avoid adding unnecessary dependencies.

Animations should preferably use CSS where practical. A lightweight
animation library can be introduced later only if it clearly improves
implementation.

------------------------------------------------------------------------

## 4. Core Design Direction

The design can be summarized as:

> **Structure like a technical manual. Compose like a poster. Move like
> a title sequence.**

The visual direction combines:

1.  Contemporary editorial design
2.  Technical / NASA graphics-manual influence
3.  Minimalist high-contrast film-poster design
4.  Mild retro influence
5.  Modern software portfolio usability

The site should **not** look like a literal recreation of a 1970s NASA
website.

NASA/manual design is the underlying system. Cinema/poster design
supplies expressive moments.

### Priority hierarchy

1.  Professional software engineering portfolio
2.  Strong visual/design identity
3.  Personal touches

A recruiter should immediately understand who Ben is, what he does, and
what work he has done.

------------------------------------------------------------------------

## 5. Visual System

### Palette

Primary background:

-   Warm off-white / paper-like cream

Primary text:

-   Near-black / charcoal

Secondary text:

-   Muted gray

Accent:

-   **NASA-style red**

Use the red sparingly, roughly as visual punctuation rather than as a
dominant page color.

Good uses include:

-   Section numbers
-   Small rules
-   Registration marks
-   Active navigation
-   Small labels
-   Hover states
-   Technical annotations

Project artwork may introduce its own colors independently.

### Typography

Primary font:

**Space Grotesk**

Use one strong sans-serif family rather than mixing many typefaces.

Create hierarchy through:

-   Scale
-   Weight
-   Letter spacing
-   Position
-   Whitespace

The same family should support:

-   Very large display text
-   Body copy
-   Small uppercase technical metadata

Huge typography should be used selectively.

### Geometry

Use:

-   Strong alignment
-   Strict grid
-   Thin horizontal/vertical rules
-   Small technical labels
-   Section numbering
-   Figure labels
-   Metadata
-   Registration marks / crosshair-style details where appropriate

The structural grid should remain sharp.

Ben prefers **rounded corners**, so content objects such as:

-   Portraits
-   Posters
-   Interactive panels
-   Buttons

can use a subtle or medium border radius.

Do not make the site look like a rounded SaaS dashboard.

### Texture

The base UI should remain clean and sharp.

Later experimentation can include subtle:

-   Film grain
-   Analog noise
-   Halftone
-   Print texture
-   Diffusion
-   Static
-   Chromatic aberration

These should mainly affect imagery or transitions, not make the entire
interface noisy.

------------------------------------------------------------------------

## 6. Motion Philosophy

Motion should be **reserved, precise, and mechanical**.

Possible motion:

-   Rules drawing into place
-   Masked text reveals
-   Small poster movement on hover
-   Smooth horizontal film-strip scrolling
-   Navigation unfolding
-   Subtle hero entrance

Avoid:

-   Constant parallax
-   Excessive scroll-triggered movement
-   Large amounts of floating UI
-   Animation on every element

The unfolding navigation and hero can be the most dramatic interactions.

Support `prefers-reduced-motion`.

------------------------------------------------------------------------

## 7. Site Architecture

Main routes:

``` text
/
├── #profile
├── #experience
├── #work
├── #film-archive
└── #contact

/projects/coastal-remote-sensing
/projects/semantic-retrieval
/projects/project-vanguard

# Add later when project is mature:
/projects/nfl-pressure-geometry

/movies
```

The homepage should be primarily a single-page scrolling experience.

Project case-study routes and `/movies` are separate pages.

------------------------------------------------------------------------

## 8. Homepage Flow

The homepage order is:

1.  Hero / Cover
2.  Profile
3.  Experience
4.  Selected Work
5.  Film Archive
6.  Contact

The page should have enough whitespace to breathe. Do not compress all
sections together just to fit more content above the fold.

------------------------------------------------------------------------

# 9. Hero

The hero is the visual introduction and should occupy roughly the first
viewport.

It should immediately communicate:

-   Ben Towers
-   Software Engineer
-   Backend / Data / Systems
-   Vancouver, BC
-   GitHub
-   LinkedIn
-   Résumé
-   Navigation entry point

Do **not** put a generic portfolio paragraph such as:

> Passionate software engineer building scalable solutions...

The hero should rely on typography, portraiture, metadata, and
composition instead.

## Hero composition

Current preferred direction:

-   Large editorial portrait anchored on the **left**
-   Giant `BEN TOWERS` typography on the **right**
-   Strong asymmetric composition
-   Generous whitespace
-   Technical linework
-   Small metadata
-   NASA-red accents
-   `INDEX +` in the upper-right
-   Social/resume links beneath the primary typography
-   Small scroll indicator

Approximate conceptual structure:

``` text
BT / 001 ───────────────────────────────────────── INDEX +

┌──────────────────────┐
│                      │
│                      │       BEN
│      PORTRAIT        │       TOWERS
│                      │
│                      │       SOFTWARE ENGINEER
│                      │       BACKEND / DATA / SYSTEMS
└──────────────────────┘
FIG. 001                       ─────────────────────────────
VANCOUVER, BC                  GITHUB ↗ LINKEDIN ↗ RÉSUMÉ ↗
                                                        SCROLL ↓
```

This is a conceptual guide, not a pixel-perfect requirement.

## Portrait direction

The portrait should feel:

-   Editorial
-   Mildly graphic
-   Professional but not corporate
-   High contrast
-   Slightly analog/print-inspired

The preferred pose is looking somewhat away from the camera rather than
a conventional straight-on LinkedIn headshot.

Possible treatment:

-   Slight desaturation
-   Increased contrast
-   Fine grain
-   Technical red linework
-   Registration marks
-   Figure number
-   Small metadata
-   Typography or rules interacting with the image

The photo should still clearly look like a real person rather than
heavily processed glitch art.

### Current reference imagery

The user supplied four personal reference photos during design. Use an
appropriate local/public asset derived from those images if available in
the working repository. Do not invent a final portrait if the repository
does not contain one; use a clearly marked placeholder until the real
asset is added.

------------------------------------------------------------------------

# 10. Navigation

Avoid a conventional large navbar.

Primary navigation concept:

``` text
BT / 001                                      INDEX +
```

Clicking `INDEX +` should cause the header/navigation to **unfold
downward** into a larger technical index.

Concept:

``` text
BT / INDEX                                      CLOSE ×
─────────────────────────────────────────────────────────
01      PROFILE
─────────────────────────────────────────────────────────
02      EXPERIENCE
─────────────────────────────────────────────────────────
03      SELECTED WORK
─────────────────────────────────────────────────────────
04      FILM ARCHIVE
─────────────────────────────────────────────────────────
05      CONTACT
─────────────────────────────────────────────────────────
VOL. 01 / 2026                         VANCOUVER, BC
```

Animation idea:

1.  Navigation container expands vertically
2.  Horizontal rules draw across
3.  Menu labels reveal
4.  Small metadata appears last

Hover/active states can use NASA red.

Requirements:

-   Keyboard accessible
-   Escape closes menu
-   Proper focus handling
-   Mobile friendly
-   Fast enough not to obstruct navigation
-   Reduced-motion fallback

Interesting interaction must never come at the cost of usability.

------------------------------------------------------------------------

# 11. Profile Section

Section identifier:

**01 / PROFILE**

Keep this section concise.

Structure:

-   One strong editorial introduction
-   Short supporting paragraph if necessary
-   Small metadata block

Approximate content direction:

``` text
01 / PROFILE
────────────────────────────────────────────────────

I'M A SOFTWARE ENGINEERING STUDENT AT THE
UNIVERSITY OF VICTORIA, INTERESTED IN BUILDING
BACKEND SYSTEMS AND WORKING WITH DATA.

My experience spans software development, geospatial
data pipelines, and system design, with a focus on
building practical systems that solve interesting problems.


                         BASE        VANCOUVER, BC
                         EDUCATION   UVIC / B.SENG.
                         FOCUS       BACKEND / DATA / SYSTEMS
                         STATUS      GRADUATING 2026
```

Copy can be refined, but keep it concise.

Do not turn this into a long autobiography.

------------------------------------------------------------------------

# 12. Experience

Section identifier:

**02 / EXPERIENCE**

Only show **technical professional experience**.

Do not include unrelated service-industry work on the portfolio
homepage.

Primary entries:

### Natural Resources Canada

Role:

**Coastal Dynamics Remote Sensing Analyst / Co-op**

Organization:

Natural Resources Canada\
Geological Survey of Canada --- Pacific Geoscience Centre

Location:

Sidney, BC

Year:

2025

Relevant work includes:

-   Geospatial processing pipelines
-   Coastal remote sensing
-   Shoreline extraction
-   Python
-   QGIS
-   Google Earth Engine
-   Satellite imagery
-   Pipeline automation
-   Data quality/control tooling

Important quantified accomplishments available for later copy refinement
include:

-   More than 300% throughput improvement
-   Approximately 150% improvement in shoreline selection reliability

Avoid overstating claims. Present metrics accurately and with context.

### ACD Systems

Role:

Software Engineering Co-op

Location:

Victoria, BC

Years:

2023--2024

Use the actual verified resume/project content available in the
repository for detailed copy and technologies. Do not invent missing
responsibilities.

## Experience presentation

Experience should be **restrained and résumé-like**, with the
NASA/manual influence strongest here.

Do not make experience entries into movie posters.

Concept:

``` text
02 / EXPERIENCE
────────────────────────────────────────────────────────────

01                                                  2025
NATURAL RESOURCES CANADA
REMOTE SENSING ANALYST / CO-OP
PACIFIC GEOSCIENCE CENTRE                    SIDNEY, BC

Concise 1–2 sentence description.

PYTHON / QGIS / GOOGLE EARTH ENGINE / REMOTE SENSING

────────────────────────────────────────────────────────────

02                                               2023–24
ACD SYSTEMS
SOFTWARE ENGINEERING CO-OP                     VICTORIA, BC

Concise description.

TECHNOLOGIES...
```

Website descriptions should be more distilled than resume bullets.

------------------------------------------------------------------------

# 13. Selected Work

Section identifier:

**03 / SELECTED WORK**

This is the **visual centerpiece** of the homepage.

Do not use a standard three-column project card grid.

Use a **large exhibition-style vertical scroll**.

Each project receives substantial space, custom artwork/poster,
metadata, short description, technologies, and a project link.

The compositions can alternate left/right to create rhythm.

Concept:

``` text
03 / SELECTED WORK
────────────────────────────────────────────────────────────

[ LARGE POSTER ]       COASTAL REMOTE SENSING
                       NRCAN / 2025
                       PYTHON / GIS / REMOTE SENSING

                       Short description...
                       VIEW PROJECT ↗


SEMANTIC RETRIEVAL                         [ LARGE POSTER ]
2026
SEARCH / EMBEDDINGS / SYSTEMS

Short description...
VIEW PROJECT ↗


[ LARGE POSTER ]       PROJECT VANGUARD
                       SECURITY / SYSTEM DESIGN / LLM

                       Short description...
                       VIEW PROJECT ↗
```

## Poster philosophy

Each major project should receive **genuinely unique artwork**.

The posters should share:

-   Dimensions/rhythm
-   Metadata conventions
-   Typographic system
-   Site grid

But their visual concepts can differ significantly.

The main site is disciplined; the posters are where more expressive art
direction can occur.

------------------------------------------------------------------------

# 14. Initial Featured Projects

## 14.1 Coastal Remote Sensing / NRCan

Likely the strongest visual opener.

Possible visual language:

-   Satellite imagery
-   Shoreline traces
-   Transects
-   Coordinates
-   Coastal geometry
-   Map lines
-   Remote-sensing imagery
-   Technical annotations

Technical themes:

-   Python
-   QGIS
-   Google Earth Engine
-   CoastSat-style shoreline processing
-   Remote sensing
-   Geospatial data pipelines
-   Pipeline automation
-   Quality control
-   Tide correction / shoreline analysis

Be careful about employer data, proprietary material, internal
screenshots, or imagery that cannot legally/publicly be shown.

Use only public or user-approved assets.

## 14.2 Semantic Retrieval Platform

Software/data-oriented project.

Possible visual language:

-   Vector space
-   Embeddings
-   Point clouds
-   Relationships
-   Retrieval paths
-   Search/query geometry
-   Abstract graph-like imagery

The poster should be visually different from NRCan while fitting the
same overall site.

Use verified project details from repository/user-provided material
rather than inventing architecture.

## 14.3 Project Vanguard

Security / systems architecture / LLM-related project.

Known themes include:

-   SOC assistant
-   Natural-language discovery
-   Incident analysis
-   Security architecture
-   Detection/verification workflows
-   Retrieval/RAG concepts
-   System architecture

Possible poster language:

-   Network paths
-   Nodes
-   Security-event diagrams
-   Architecture linework
-   Detection paths
-   Darker technical imagery

Again, use verified project details.

## 14.4 NFL Pressure Geometry --- Later

Do not feature prominently in initial V1 unless sufficient work has been
completed.

Eventually it can become:

**NFL PRESSURE GEOMETRY**

Potential themes:

-   NFL player tracking data
-   Pass-rush geometry
-   Pressure direction
-   Sack direction
-   Effective hurry direction
-   Football-field geometry
-   Sports analytics

This should be easy to add later using the same reusable project system.

------------------------------------------------------------------------

# 15. Project Case Studies

Each major project should eventually link to:

``` text
/projects/[slug]
```

Examples:

``` text
/projects/coastal-remote-sensing
/projects/semantic-retrieval
/projects/project-vanguard
```

For V1, case studies can be relatively simple.

Potential structure:

1.  Project title
2.  Hero/poster artwork
3.  Problem
4.  Role
5.  Approach
6.  Technical implementation
7.  Results
8.  Visuals
9.  Technologies
10. GitHub/external links where appropriate

Do not let case-study complexity block homepage completion.

Build the architecture so pages can become richer later.

------------------------------------------------------------------------

# 16. Film Archive

Section identifier:

**04 / FILM ARCHIVE**

This should be:

-   Understated on the homepage
-   Substantial enough to show personality
-   A real mini-product on `/movies`

The homepage should use a **horizontal film strip**, not a huge poster
gallery.

Concept:

``` text
04 / FILM ARCHIVE                              XX FILMS
────────────────────────────────────────────────────────

MY FILM LOG
A selection of favourites and recent watches.

┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──
│      │ │      │ │      │ │      │ │      │ │
│poster│ │poster│ │poster│ │poster│ │poster│ │
│      │ │      │ │      │ │      │ │      │ │
└──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──
 01       02       03       04       05

← DRAG / SCROLL →                 EXPLORE ARCHIVE ↗
```

Possible interaction:

-   Horizontal scrolling
-   Partial next poster visible
-   Poster number underneath
-   Hover reveals title/rating
-   Smooth but restrained motion

Borrow lightly from contact sheets / film strips without literal
decorative sprocket holes everywhere.

------------------------------------------------------------------------

# 17. `/movies` V1

The full movie page should use **structured TypeScript static data**
initially.

Each movie can include fields such as:

``` ts
type Movie = {
  id: string;
  title: string;
  year: number;
  rating?: number;
  poster: string;
  genres?: string[];
  watchedDate?: string;
  favorite?: boolean;
};
```

V1 functionality:

-   Render movie collection from data
-   Search
-   Sort
-   Filter
-   Responsive poster layout
-   Consistent site design

Potential filters:

-   Genre
-   Rating
-   Year
-   Favorites

Potential sorting:

-   Rating
-   Year
-   Title
-   Recently watched

Do not build a database yet.

The static data layer should be easy to replace later with
PostgreSQL/API data.

------------------------------------------------------------------------

# 18. Contact

Section identifier:

**05 / CONTACT**

No contact form in V1.

Use a strong closing composition that echoes the hero.

Concept:

``` text
05 / CONTACT
──────────────────────────────────────────────────

LET'S
CONNECT.

EMAIL ↗
LINKEDIN ↗
GITHUB ↗

BEN TOWERS                             VAN / 2026
──────────────────────────────────────────────────
```

This should feel like a closing title card.

------------------------------------------------------------------------

# 19. Content Architecture

Avoid hardcoding all content inside JSX.

Suggested structure:

``` text
portfolio/
├── app/
│   ├── page.tsx
│   ├── movies/
│   │   └── page.tsx
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Hero.tsx
│   ├── Profile.tsx
│   ├── Experience.tsx
│   ├── SelectedWork.tsx
│   ├── FilmArchive.tsx
│   ├── Contact.tsx
│   ├── Navigation.tsx
│   └── ProjectFeature.tsx
│
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   └── movies.ts
│
├── public/
│   ├── images/
│   └── resume/
│
└── ...
```

Adjust structure when Next.js conventions or implementation needs
justify it.

Data-driven components are preferred because future versions may replace
static content with APIs/database content.

------------------------------------------------------------------------

# 20. Responsive Design

Desktop should use the strongest editorial/grid composition.

Mobile should **reinterpret**, not merely shrink, the desktop layout.

Important mobile behavior:

-   Giant typography remains impactful but readable
-   Portrait and name can stack
-   Technical metadata remains legible
-   Navigation becomes a full-screen/large vertical index
-   Project features stack vertically
-   Film strip remains horizontally scrollable
-   No horizontal overflow except intentional film scrolling
-   Tap targets remain accessible

Do not preserve desktop linework if it makes mobile cluttered.

------------------------------------------------------------------------

# 21. Accessibility

Treat accessibility as part of implementation quality.

Requirements:

-   Semantic HTML
-   Proper heading hierarchy
-   Keyboard navigation
-   Visible focus states
-   Appropriate color contrast
-   Alt text for meaningful imagery
-   Decorative imagery hidden from assistive technology where
    appropriate
-   `prefers-reduced-motion`
-   Navigation focus management
-   Escape-to-close menu
-   No hover-only critical information

------------------------------------------------------------------------

# 22. Performance

Keep the site lightweight.

Use:

-   Next.js image optimization where appropriate
-   Responsive image sizes
-   Lazy loading below the fold
-   Minimal client-side JavaScript
-   Server components by default where appropriate
-   Client components only for interactive functionality
-   Optimized fonts
-   Avoid unnecessary libraries

The visual richness should not produce a slow portfolio.

------------------------------------------------------------------------

# 23. V1 Development Sequence

Build in this order.

## Phase 1 --- Foundation

-   Create Next.js TypeScript project
-   Configure Space Grotesk
-   Create global design tokens
-   Establish page/container/grid primitives
-   Add Git repository
-   Add base responsive behavior

## Phase 2 --- Complete Page Skeleton

Build all homepage sections with placeholder/minimal styling:

-   Hero
-   Profile
-   Experience
-   Selected Work
-   Film Archive
-   Contact

Goal:

**An ugly but complete and responsive homepage before detailed visual
polishing.**

## Phase 3 --- Real Content

Replace placeholders with:

-   Actual experience
-   Actual project descriptions
-   Real links
-   Résumé
-   Real project images where available
-   Initial movie dataset

Do not invent factual resume/project details.

## Phase 4 --- Core Interactions

Implement:

-   Unfolding `INDEX +`
-   Smooth section navigation
-   Horizontal Film Archive
-   Project links
-   Search/filter/sort on `/movies`

## Phase 5 --- Visual Pass

Add:

-   Typography scaling
-   Technical linework
-   NASA red
-   Portrait treatment
-   Rounded corners
-   Project poster compositions
-   Metadata
-   Figure labels
-   Section numbering

## Phase 6 --- Motion and Polish

Add:

-   Navigation animation
-   Rule drawing
-   Text reveals
-   Subtle hover states
-   Film strip polish
-   Reduced-motion support

Then:

-   Accessibility pass
-   Responsive testing
-   Performance testing
-   Metadata/SEO
-   README
-   Deployment

------------------------------------------------------------------------

# 24. Design Tokens

Start with variables rather than scattering literal values.

Example only:

``` css
:root {
  --color-paper: #f1eee5;
  --color-ink: #151515;
  --color-muted: #77746d;
  --color-rule: #b8b4aa;
  --color-accent: #e03c31;

  --radius-sm: 6px;
  --radius-md: 12px;

  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 8rem;
}
```

These exact values are **not locked**.

Tune them during implementation.

NASA red should remain recognizable but does not need to use an official
NASA brand value.

------------------------------------------------------------------------

# 25. Implementation Principles for Codex

When implementing this brief:

1.  **Do not invent factual resume/project content.**
2.  Prefer placeholders marked clearly when information is unavailable.
3.  Keep components reusable.
4.  Keep content data-driven where practical.
5.  Do not over-engineer V1.
6.  Avoid unnecessary dependencies.
7.  Preserve accessibility.
8.  Preserve responsive behavior.
9.  Prioritize shipping the complete page before micro-polish.
10. Treat design mockups as inspiration, not exact screenshots to
    reproduce.
11. Keep visual experimentation subordinate to usability.
12. Make the site easy to extend with backend/cloud/database features
    later.

------------------------------------------------------------------------

# 26. Things Intentionally Deferred

Do not implement these unless explicitly requested later:

-   PostgreSQL
-   AWS deployment architecture
-   Docker production setup
-   Redis
-   Authentication
-   Admin dashboard
-   CMS
-   Movie API backend
-   Background jobs
-   Analytics pipeline
-   Advanced observability
-   Dark mode
-   Heavy animation system

Dark mode is desired eventually, but the canonical V1 design is the warm
off-white theme.

------------------------------------------------------------------------

# 27. Future Technical Expansion

After V1 is complete, the portfolio can become a vehicle for deeper
engineering skills.

Possible V2/V3 work:

### Backend

-   API routes or standalone backend
-   Input validation
-   Service structure
-   Authentication/admin tooling

### Database

-   PostgreSQL
-   Schema design
-   Migrations
-   Indexing
-   Query optimization

The movie archive is a natural candidate for migration from static
TypeScript data to PostgreSQL.

### Infrastructure

-   Docker
-   AWS
-   CI/CD
-   GitHub Actions
-   Monitoring
-   Logging

### Performance

-   Caching
-   Redis
-   Profiling
-   Latency measurement

### Distributed/async work

-   Background jobs
-   Queues
-   Data ingestion

### Data engineering

-   ETL/ELT
-   Orchestration
-   Warehouse-style modelling
-   Production pipelines

The website should be architected cleanly enough that these can be added
without rewriting everything.

------------------------------------------------------------------------

# 28. V1 Definition of Done

V1 is done when:

-   Homepage contains all six sections
-   Hero communicates Ben's professional identity immediately
-   Site works on desktop and mobile
-   Navigation works and is accessible
-   Experience contains relevant technical work
-   At least three selected projects are presented
-   Project components are reusable
-   Project routes exist or have a clear implementation path
-   Film Archive preview works
-   `/movies` renders structured movie data
-   Movies can be searched, sorted, and filtered
-   GitHub, LinkedIn, email, and résumé are accessible
-   One distinctive interaction exists, ideally the unfolding navigation
-   Motion is restrained and accessible
-   Repository is clean
-   README explains the project
-   Site is publicly deployed
-   The result is polished enough to place its URL on a software
    engineering résumé

------------------------------------------------------------------------

# 29. Current Creative North Star

The current preferred hero direction came from the second hero mockup:

-   Portrait on left
-   Large horizontal typography on right
-   Strong asymmetric layout
-   Off-white canvas
-   Near-black typography
-   Sparse NASA-red details
-   Fine technical rules
-   Small metadata
-   Lots of breathing room
-   `INDEX +` as primary navigation control

Do not get trapped trying to perfectly reproduce a generated mockup.

The final website should be cleaner, more usable, more responsive, and
more technically coherent than the concept image.

The goal is to **start building now and refine from working software**.
