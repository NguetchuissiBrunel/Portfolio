# 🌐 Cyberpunk Developer Portfolio - Opera GX Inspired

Welcome to my premium, interactive developer portfolio. This web application is inspired by the bold, high-contrast, dynamic aesthetic of **Opera GX** and modern cyberpunk user interfaces. It serves as a centralized communications hub, capabilities catalog, and interactive showcase of my work.

---

## 🚀 Key Features

*   **🕹️ Immersive Cyberpunk Aesthetic**: High-fidelity dark mode with neon accents (HLS-tailored `#fa193b`), glassmorphism cards with `backdrop-filter` blurs, and hover micro-animations.
*   **📍 Sticky Navigation Header**: A fixed, transparent, glassmorphic header that stays anchored at the top of the viewport when scrolling, allowing content to pass beautifully underneath it.
*   **👤 Manga / Character Guide**: An interactive guide element that shifts states dynamically depending on which tab you are currently exploring.
*   **📑 Live CV Download Hub**: Direct integration of a high-quality Curriculum Vitae (`CV_compressed (1).pdf`) that can be downloaded instantly by visitors.
*   **📡 Secure Transmission Channel**: A fully operational cybernetic contact form designed to transmit secure messages and connection requests.
*   **🖱️ Custom Interactive Cursor**: A stylized custom cursor that reacts smoothly to hover states and clickable components.

---

## 🛠️ Technology Stack

*   **Core Logic & UI**: [React](https://react.dev/) (v19)
*   **Build Tool & Dev Server**: [Vite](https://vite.dev/) (v8)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Styles**: Modern CSS Variables, Custom Keyframe Animations, Glassmorphic effects, and Polygon Clip-Paths.

---

## 📂 Project Structure

```bash
portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and CV PDF (CV_compressed (1).pdf)
│   ├── components/         # Reusable UI components (Header, Sidebar, CustomCursor, CharacterGuide)
│   ├── pages/              # Page views (Home, Projects, Skills, Blog/Contact)
│   ├── App.jsx             # Main layout shell
│   ├── index.css           # Global CSS variables & styles
│   └── main.jsx            # Entry point
├── .gitignore              # Git ignore rules
├── LICENSE.md              # MIT License
├── package.json            # Dependencies & Scripts
└── README.md               # Project documentation
```

---

## ⚡ Getting Started

Follow these instructions to run the project in your local development environment:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NguetchuissiBrunel/Portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to experience the cyberpunk interface!

### Building for Production

To create an optimized production bundle:
```bash
npm run build
```
The output will be generated inside the `dist/` directory, ready to be deployed to static hosting providers (GitHub Pages, Netlify, Vercel, etc.).

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

*Designed and crafted with 💖 by **[Nguetchuissi Brunel](https://github.com/NguetchuissiBrunel)**.*
