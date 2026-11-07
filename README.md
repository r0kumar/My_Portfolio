# Rohit Kumar — Personal Portfolio Website

A modern, high-performance, fully responsive personal portfolio website built with **React.js** and **Tailwind CSS**, designed specifically for **Rohit Kumar** (B.Tech IT, graduating 2027) targeting **Full-Stack (MERN) Developer** and **Data Analyst** roles.

Features a sleek obsidian/dark aesthetic inspired by the modern DEVFUSION design system, complete with amber/gold glows, floating tech badges, glassmorphic cards, and an interactive Role Switcher.

---

## 🌟 Key Sections & Features

1. **Header & Navigation (`Navbar.jsx`)**:
   - `ROHIT.DEV` logo with geometric glowing hexagon icon.
   - Smooth-scrolling anchor links (`HOME`, `ABOUT`, `SERVICES`, `SKILLS`, `PROJECTS`, `EXPERIENCE`, `EDUCATION`, `CONTACT`).
   - Pill-shaped `LET'S TALK` CTA button.
   - Responsive mobile navigation drawer with backdrop blur.

2. **Hero Section (`Hero.jsx`)**:
   - Live typewriter role switcher (`Full-Stack (MERN) Developer`, `Data Analyst`, `AI-Assisted Builder`, `B.Tech IT Student (2027)`).
   - Direct CTAs: `HIRE ME →` and `VIEW MY WORK`.
   - Radar-pulsing status badge: `OPEN TO ROLES & INTERNSHIPS`.
   - Direct contact bar: GitHub (`r0kumar`), LinkedIn (`rohit-kumar-665082299`), Phone, and Email.
   - Centered circular developer portrait of Rohit surrounded by concentric glowing orbit rings and 4 floating tech badges (`React.js`, `Node.js`, `TypeScript`, `MongoDB`).

3. **About Me (`About.jsx`)**:
   - **Interactive Role Switcher Toggle**:
     - `Full Stack (MERN) View`: Highlights MERN development, APIs, auth, and scalable web apps.
     - `Data Analyst View`: Highlights SQL, Python, Excel, Power BI, and business intelligence reporting.
   - 4 Stat Highlights: `4+ Completed Projects`, `22K+ Orders Analyzed`, `4 Certifications`, `2027 Graduation Year`.
   - Smart `DOWNLOAD RESUME` button serving the matching PDF (`Rohit_Kumar_MERN_Resume.pdf` or `Rohit_Kumar_Data_Analyst_Resume.pdf`).
   - Quick Info Card with profile avatar thumbnail, email, and Noida, India location.
   - Dotted world map with beacon on India.
   - Golden calligraphy signature: `Rohit Kumar`.

4. **Services ("WHAT I DO")**:
   - Full-Stack Development (MERN Stack & JWT Auth)
   - Frontend Engineering (React.js, Tailwind CSS, Context API)
   - Backend & RESTful APIs (Node.js, Express.js, Postman)
   - Data Analytics & Business Intelligence (Power BI, EDA, SQL)

5. **Skills & Core Competencies (`Skills.jsx`)**:
   - 6 Glowing animated skill progress bars.
   - 15 Tech stack square cards (5×3 grid) with authentic SVG icons.
   - Categorized Core Competencies section (Languages, Frontend, Backend, Databases, Data Analysis, Tools, Core CS, AI & Dev Tools, Soft Skills).

6. **Featured Projects (`Projects.jsx` & `ProjectModal.jsx`)**:
   - Filterable categories (`All`, `Full Stack`, `Full Stack + AI`, `Data Analytics`).
   - **FixMate – PG & Hostel Maintenance Tracker** (Live Demo: [https://fix-mate-pg-hostel-maintenance-trac.vercel.app/](https://fix-mate-pg-hostel-maintenance-trac.vercel.app/))
   - **Resume Analyzer & Report Generator** (Live Demo: [https://resume-analyzer-and-report-generator.netlify.app/register](https://resume-analyzer-and-report-generator.netlify.app/register))
   - **Sales Performance Dashboard** (Power BI, 22K+ orders analyzed)
   - **Music Store Database Analysis** (SQL, relational DBMS)
   - Interactive project details modal with all bullet points and direct repository/demo links.

7. **Career Background (`Experience.jsx`)**:
   - **Internship**: AI Systems Evaluation Intern at AirDawgs Labs (Online, Jul 2026 – Aug 2026).
   - **Education**: JSS Academy of Technical Education (B.Tech IT), Central Hindu Boys School (Class XII, PCM), Florence Public School (Class X).
   - **Certifications**: Oracle Cloud OCI AI Foundations, Python for Everybody, Introduction to Front End, Data Analyst 101.
   - **Honors & Achievements**: Smart India Hackathon (SIH 2025) Round 2 Shortlisted, 1st Rank in School in Class X.

8. **Contact Section (`Contact.jsx`)**:
   - Interactive 2-column contact form with dropdowns and submission confirmation.
   - 1-Click Copy to Clipboard for Email and Phone with toast notification.
   - Direct email and phone links.

---

## 🚀 How to Run the Website Locally

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run local development server
npm run dev

# 3. Open in your browser
http://localhost:3000
```

---

## 📄 Adding Your Resume PDFs

To enable the Download Resume button to serve your actual resume files:
1. Place your Full-Stack resume at:
   `/public/resumes/Rohit_Kumar_MERN_Resume.pdf`
2. Place your Data Analyst resume at:
   `/public/resumes/Rohit_Kumar_Data_Analyst_Resume.pdf`

The download button dynamically selects the correct PDF based on whichever role view is active.

---

## 🌐 Deploying to Netlify

The repository includes `netlify.toml` pre-configured for instant zero-config deployment:

1. Push your repository to GitHub (`git push origin main`).
2. Log into [Netlify](https://app.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
3. Select your GitHub repository `Rohit_Portfolio`.
4. Netlify will automatically detect:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Click **"Deploy site"**. Your portfolio will be live in under 60 seconds!
