# Rohit Kumar — Personal Portfolio Website

A modern, high-performance, fully responsive personal developer portfolio website designed for **Rohit Kumar** (B.Tech IT student, graduating 2027) targeting **Full-Stack (MERN) Developer** and **Data Analyst** roles.

Features a sleek obsidian aesthetic with amber/gold accents, floating tech badges, glassmorphic cards, and an interactive dual-role switcher that dynamically alters summaries, service priorities, and resume downloads.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) (Vite 5)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Tech Badges
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Great Vibes*, *Dancing Script*)
- **Deployment**: [Vercel](https://vercel.com/) (Zero-config SPA with rewrite rules)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` (or the URL shown in your terminal) to view the portfolio in your browser. Hot Module Replacement (HMR) is active by default.

---

## ✏️ How to Edit Content

All portfolio content, personal details, project cards, experience entries, certifications, skills, and links are centralized in a single configuration file:

📁 **[`src/data/portfolio.js`](src/data/portfolio.js)** (aliases [`src/data/portfolioData.js`](src/data/portfolioData.js))

### What you can update:
1. **Personal Information**:
   - `personal.firstName`, `personal.lastName`, `personal.location`, `personal.email`, `personal.phone`
   - `personal.github`, `personal.linkedin`
   - `personal.roles` (the rotating typewriter role list in the Hero section)
2. **Dual-Role Summaries**:
   - `summaries.fullstack`: Displayed when the "Full Stack (MERN)" role toggle is selected.
   - `summaries.dataAnalyst`: Displayed when the "Data Analyst" role toggle is selected.
3. **Featured Projects**:
   - Edit, add, or reorder projects under `projects`.
   - Each project supports: `id`, `title`, `category`, `description`, `highlights`, `tags`, `demoUrl`, `githubUrl`, and `image` (stored in `/public/projects/`).
4. **Skills & Tech Grid**:
   - Update `skills.competencies` for categorized badges and `skills.grid` for the 12 tech stack cards.
5. **Experience & Education**:
   - Update `experience`, `education`, `certifications`, and `achievements` lists.
6. **Resumes**:
   - Update file paths and labels in `resumes.fullstack` and `resumes.dataAnalyst`.

---

## 📄 Managing Resume PDFs

The portfolio provides an interactive dual-option resume download button that automatically serves the resume matching the active role view:

- **Full-Stack Resume**: `/public/resumes/Rohit_Kumar_MERN_Resume.pdf`
- **Data Analyst Resume**: `/public/resumes/Rohit_Kumar_Data_Analyst_Resume.pdf`

To update your resumes, replace those two PDF files inside `/public/resumes/` while keeping their exact file names.

---

## 📦 Production Build

To create an optimized production bundle:

```bash
npm run build
```

This compiles your application and places all minified assets into the `dist/` directory.

To preview the production build locally before deploying:
```bash
npm run preview
```

---

## 🌐 Vercel Deployment

The project includes a pre-configured `vercel.json` file with SPA rewrite rules for smooth client-side routing.

### Deploy Settings:
- **Framework Preset**: Vite
- **Build command**: `npm run build`
- **Output directory**: `dist`

### Steps to deploy:
1. Push your repository to GitHub:
   ```bash
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com/) and click **"Add New..."** > **"Project"**.
3. Import your GitHub repository (`My_Portfolio`).
4. Vercel automatically detects **Vite** as the framework preset, `npm run build` as the build command, and `dist` as the output directory.
5. Click **"Deploy"**. Your portfolio will be live in seconds!

---

## 🌟 Key Sections & Architecture

1. **Header & Navigation (`Navbar.jsx`)**: Sticky navigation with glowing brand mark, smooth scrolling to sections, mobile drawer, and direct CTA.
2. **Hero (`Hero.jsx`)**: Animated typewriter role rotator, status pill badge (`OPEN TO ROLES & INTERNSHIPS`), direct contact triggers, and developer portrait with orbit badges.
3. **About Me (`About.jsx`)**: Interactive dual-role switcher (Full-Stack vs Data Analyst), 4 key metric counters, info card, and handwritten calligraphy signature.
4. **Areas of Expertise (`Services.jsx`)**: Factual 5-card layout highlighting Full-Stack development, Frontend, Backend & APIs, Data Analytics & BI, and Databases & SQL, reordered dynamically based on active role.
5. **Skills & Core Competencies (`Skills.jsx`)**: 6 skill progress bars, 12 tech stack cards, dedicated AI tooling grid, and categorized competency pills.
6. **Projects (`Projects.jsx` & `ProjectModal.jsx`)**: Category-filtered project gallery with interactive detailed modal view, live demo, and GitHub links.
7. **Experience & Education (`Experience.jsx`)**: Two-column layout featuring internship history, academic education timeline, certifications with verify links, and hackathon honors.
8. **Why Hire Me (`WhyHireMe.jsx`)**: 3 value-proposition pillars emphasizing full-stack development, analytical rigor, and fast learning.
9. **Contact & Footer (`Contact.jsx` & `Footer.jsx`)**: Recruiter opportunity inquiry form, 1-click clipboard copy for email and phone, quick navigation links, and copyright info.
