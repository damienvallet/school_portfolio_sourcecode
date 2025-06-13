
# 🎓 Damien Vallet – School Portfolio

A responsive, SEO-optimized portfolio built with React, Bootstrap, and modern web standards. This project was developed as part of the *Utilisation d’Ordinateurs en Réseau* course at **Université Paris 8**.

Report can be downloaded here : [report_school_portfolio.pdf](https://github.com/damienvallet/school_portfolio_sourcecode/blob/250d13b0ca103d7166092148febbfb9cae174d50/report_school_portfolio.pdf)

---

## 🚀 Features

* Built with **React** and **React Router**
* Custom CSS and **Bootstrap 5** responsive layout
* SEO metadata via:

  * HTML5 `<meta>` tags
  * **Dublin Core**
  * **Open Graph**
  * **JSON-LD** using `react-helmet`
* Embedded **media**: video, SVG icons, external project links
* Well-structured, scalable component-based architecture

---

## 🧩 Project Structure

```
dv-portfolio/
├── .env
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── public/
│   ├── data/
│   ├── favicon.ico / .png
│   ├── index.html             # HTML base with meta tags
│   ├── manifest.json
│   ├── picofme.jpg            # Portrait image
│   └── robots.txt
├── src/
│   ├── App.js                 # Main app wrapper
│   ├── App.test.js
│   ├── Metadata.js            # Meta tags with React Helmet
│   ├── NavigationHeader.js    # Main navigation router
│   ├── commonJS.js
│   ├── index.js               # Entry point
│   ├── setupTests.js
│   ├── components/            # HTML, CSS versions, NavBar etc.
│   ├── img/                   # SVG icons, media
│   ├── phpserver/             # PHP-related examples (optional)
│   └── stylesheet/            # Custom CSS (e.g. style.css)
```

---

## 🔧 Getting Started

### Prerequisites

* Node.js (v18+ recommended)
* npm

### Installation

```bash
git clone https://github.com/damienvallet/school_portfolio_sourcecode.git
cd school_portfolio_sourcecode/dv-portfolio
npm install
```

### Run Locally

```bash
npm start
```

Then open your browser to [http://localhost:3000](http://localhost:3000)

---

## 🌐 Main Routes

* `/html` → Static-style version
* `/css` → Bootstrap-enhanced responsive version

---

## 📸 Content Sections

* **Header & Hero Section**: Name, role, design/dev skills
* **Presentation**: Personal and professional background
* **Video**: Introductory clip
* **Projects**: YouTube embeds + external links (UVI projects)
* **Contact**: Email link, social icons
* **Footer**: Copyright

---

## 🧠 Educational Context

This portfolio was created as a deliverable for coursework at *Université Paris 8*, combining:

* Web development fundamentals
* React.js component architecture
* Styling and layout using CSS/Bootstrap
* Client-server understanding (HTTP, PHP integration)
* SEO best practices

---

## 📜 License

Created for academic purposes — © 2024 Damien Vallet
