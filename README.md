# Floka Agency — Frontend Developer Task
### SM Technology | Technical Assessment Submission

![Floka Agency](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80&auto=format&fit=crop)

---

## 🔗 Links

| | Link |
|---|---|
| 🌐 **Live Demo** | [floka-agency.netlify.app](https://floka-agency.netlify.app/) |
| 💻 **GitHub Repo** | [github.com/farial-robama/Floka-agency](https://github.com/farial-robama/Floka-agency) |
| 🎨 **Reference Design** | [floka.casethemes.net/home-1-onepage](https://floka.casethemes.net/home-1-onepage/) |
| 🐦 **Bonus Reference** | [bird.marketing](https://bird.marketing/) |

---

## 📋 Task Description

This project is a pixel-perfect replica of the **Floka Digital Agency** one-page website, completed as a technical assessment for the **Frontend Developer position at SM Technology**.

**Requirements:**
- ✅ Replicate the reference design using HTML, CSS, and JavaScript
- ✅ Use a modern framework
- ✅ Ensure all kinds of animations
- ✅ Fully responsive & pixel-perfect
- ✅ Bonus: Integrate bird.marketing banner animation

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI Framework & Component Architecture |
| **Vite** | Build tool & Dev server |
| **GSAP** | Hero animations, parallax, scroll effects |
| **Framer Motion** | Scroll-triggered reveal animations |
| **Tailwind CSS** | Utility-first styling |
| **DM Serif Display** | Serif heading font |
| **Syne** | Sans-serif UI font |
| **DM Sans** | Body text font |

---

## ✨ Features & Animations

### 🎬 Page Load
- Animated loader with percentage counter
- GSAP staggered title reveal on hero section
- Smooth fade-in for all elements on load

### 🖱️ Interactions
- Custom animated cursor with magnetic follower effect
- Hover effects on all cards, buttons, and links
- Portfolio items reveal overlay on hover with arrow animation
- Team cards color reveal on hover (grayscale → color)

### 📜 Scroll Animations
- Intersection Observer powered reveal animations on every section
- Parallax floating blobs in hero background
- Scroll-triggered skill bar fill animations
- Animated number counters that count up when in view
- Staggered award list rows that slide in one by one

### 🎠 Animated Elements
- **bird.marketing** style fixed top ticker banner
- Infinite scrolling marquee strip
- Testimonials text ticker
- Testimonials card slider with prev/next controls
- GSAP-powered team tab switching animation
- Smooth accordion open/close for Services & FAQ
- Live budget range slider in contact form

---

## 📁 Project Structure

```
floka-agency/
├── public/
├── src/
│   ├── components/
│   │   ├── BirdBanner.jsx     # Fixed top scrolling ticker (bonus)
│   │   ├── Loader.jsx         # Animated page loader
│   │   ├── Cursor.jsx         # Custom cursor with follower
│   │   ├── Navbar.jsx         # Sticky nav + mobile hamburger menu
│   │   ├── Hero.jsx           # GSAP hero with parallax blobs
│   │   ├── Marquee.jsx        # Scrolling accent ticker strip
│   │   ├── About.jsx          # Image stack + animated counters
│   │   ├── Skills.jsx         # Animated progress bars
│   │   ├── Portfolio.jsx      # Hover overlay portfolio grid
│   │   ├── Services.jsx       # Accordion with images
│   │   ├── TextSlip.jsx       # Testimonials ticker
│   │   ├── Facts.jsx          # Fun facts stat cards
│   │   ├── CTA.jsx            # Let's talk CTA section
│   │   ├── Testimonials.jsx   # Sliding testimonial cards
│   │   ├── Contact.jsx        # Contact form + budget slider
│   │   ├── Awards.jsx         # Animated awards list
│   │   ├── Team.jsx           # Team grid with tab switching
│   │   ├── FAQ.jsx            # FAQ accordion
│   │   ├── Blog.jsx           # Blog card grid
│   │   └── Footer.jsx         # Footer with columns
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles + Tailwind
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/floka-agency.git

# 2. Navigate into the project
cd floka-agency

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

---

## 📱 Responsive Design

The site is fully responsive across all screen sizes:

| Breakpoint | Layout |
|---|---|
| **Mobile** (< 768px) | Single column, hamburger menu |
| **Tablet** (768px – 1024px) | 2-column grids, adjusted typography |
| **Desktop** (> 1024px) | Full layout as per reference design |

---

## 🎨 Design Decisions

- **Color Palette:** Dark backgrounds (`#0a0a0a`, `#111111`) with `#c8f542` acid green accent — matching the reference exactly
- **Typography:** DM Serif Display for headings (editorial feel), Syne for UI labels, DM Sans for body text
- **Custom Cursor:** Replaced default cursor with a branded green dot + follower ring that scales on hover
- **bird.marketing Banner:** Implemented as a fixed top strip with infinite CSS scroll animation featuring agency keywords
- **No external image hosting dependencies:** All images use Unsplash with `onError` fallback to Picsum Photos

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "gsap": "^3.x",
    "framer-motion": "^11.x"
  },
  "devDependencies": {
    "vite": "^6.x",
    "@vitejs/plugin-react": "^4.x",
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x"
  }
}
```

---

## 👤 Submitted By

**Name:** Farial Robama
**Position Applied:** Frontend Developer
**Company:** SM Technology
**Submission Date:** April 6, 2026
**Contact:** farialrobama15@gmail.com

---

## 📄 License

This project was built as a technical assessment task. The original design belongs to [Case-Themes™](https://themeforest.net/user/case-themes/portfolio).