# 🏋️ R & S Athletics

Welcome to the **R & S Athletics** project — a modern, responsive, and component-driven React application built with Vite and Tailwind CSS.

---

## 📌 Project Overview

This project serves as the frontend for R & S Athletics, showcasing clean UI architecture and reusable components. The layout includes essential landing page sections and follows a clear Git workflow for collaborative development.

### 🔧 Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## ✨ Features

### 🔹 Navigation (Header)
- Responsive navigation bar with logo and menu links
- Mobile-friendly hamburger menu
- Styled with focus and hover states for accessibility

### 🔹 Hero Section
- Large hero headline with subtext
- Primary and secondary call-to-action (CTA) buttons
- Fully responsive and visually centered layout

### 🔹 Features Section
- Display of core product/service features
- Responsive grid layout using reusable Card, Heading, and Paragraph components
- Icons and descriptive text

### 🔹 Footer
- Brand logo and navigation links
- Copyright
- Responsive for desktop and mobile layouts

---

## ♻️ Reusable UI Components

This project includes modular, styled UI components designed for reuse across the application:

- **Button** – Primary and link variants with hover states
- **Card** – Container with optional icons/images, hover effect
- **Heading** – Customizable heading levels (H1–H4)
- **Paragraph** – Supports body, small, and caption variants

---

## 📁 Folder Structure

```
src/
├── assets/         # Images, icons, logos
├── components/     # Reusable UI components
│   └── ui/         # Button, Card, Heading, Paragraph
├── sections/       # App sections (Hero, Features, Footer, Header)
├── styles/         # Global Tailwind and CSS files
│   ├── index.css
│   └── tailwind.config.ts
├── pages/          # App-level pages
│   └── Home.tsx
├── App.tsx         # Main App component
├── main.tsx        # Vite entry point
├── types/          # Shared TypeScript types
└── utils/          # Helper functions (e.g., class merging)
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/seatherly-banyanlabs/ojt-project
cd rs-athletics
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Navigate to: [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Scripts

| Command           | Description                         |
|------------------|-------------------------------------|
| `npm run dev`     | Start local development server       |
| `npm run build`   | Build the project for production     |
| `npm run preview` | Preview the production build locally |

---

## 🌈 Git Flow Branching Convention

This project uses **Git Flow** to maintain clean development and deployment workflows:

- `main` – Stable, production-ready code  
- `develop` – Integrates all ongoing features  
- `release` – Final testing before production  
- `feature/{name}` – Feature-specific branches (e.g., `feature/navbar`)  
- `bugfix/{name}` – For fixing bugs  
- `hotfix/{name}` – Urgent patches for production  

---

## 🧠 Best Practices

- Use semantic HTML for accessibility and SEO  
- Modularize reusable components  
- Follow consistent naming conventions  
- Write meaningful commit messages  
- Maintain clean and DRY code  

---

## 📝 License

This project is intended for **internal or educational use**. Redistribution is not permitted without express permission.