# ⚛️ Mission React — React.js Practice Projects

A collection of **practical mini-projects and use cases** built while learning React.js.
Covers key concepts like components, state, props, hooks, routing, context API, custom hooks, and more.

🌐 **Live Demo:** [mission-react.vercel.app](https://mission-react.vercel.app)

---

## 🚀 Tech Stack

| Technology       | Usage                            |
|------------------|----------------------------------|
| React.js 18      | UI Library                       |
| React Router v7  | Client-side routing              |
| Tailwind CSS     | Utility-first styling            |
| Context API      | Global state management (Todos)  |
| Custom Hooks     | Reusable logic (Currency API)    |
| react-toastify   | Toast notifications              |
| react-confetti-explosion | Winner celebration effect |
| use-sound        | Game sound effects               |
| Font Awesome     | Icons                            |

---

## 📁 Project Structure

```
src/
├── Components/
│   ├── Header.js              # Navigation bar with route links
│   ├── Footer.js              # Footer section
│   ├── Hero.js                # Landing hero section
│   ├── OtherHeroSection.js    # Secondary hero for inner pages
│   ├── CommonComponents.js    # Reusable: AboutSection, FeatureSection, Testimonial, CallToAction
│   └── SubmitButtonLoader.js  # Loading spinner for form submit
├── Pages/
│   ├── Home.js                # Home page (Hero + Sections)
│   ├── AboutUs.js             # About page
│   ├── ContactUs.js           # Contact page with form
│   ├── BGChanger.js           # Background color changer (useState)
│   ├── RandomString.js        # Password generator (useState + logic)
│   ├── CurrencyConverter.js   # Live currency converter (Custom Hook + API)
│   ├── TicTakToe.js           # Full Tic-Tac-Toe game with sounds & confetti
│   ├── Todo.js                # Advanced Todo (Context API)
│   ├── AIAgent.js             # AI Agent page
│   └── PageNotFound.js        # 404 Not Found page
├── Todo/
│   ├── Form.js                # Todo input form
│   └── List.js                # Todo list rendering
├── context/
│   └── TodoContext.js         # Context + Provider for global Todo state
├── Hooks/
│   └── useCurrenciesRates.js  # Custom hook — fetches live exchange rates
├── Data/
│   └── Data.json              # Static content data
├── sounds/                    # Audio files for Tic-Tac-Toe game
├── Layout.js                  # App layout with BrowserRouter + Routes
└── App.js                     # Root component
```

---

## 🧩 Mini Projects Included

| Project | Route | Key Concepts |
|---|---|---|
| 🏠 Home Page | `/` | Component composition, reusable sections |
| 🎨 Background Changer | `/background-changer` | `useState`, event handling |
| 🔑 Password Generator | `/password-generator` | `useState`, string logic |
| 💱 Currency Converter | `/currency-convert` | Custom Hooks, `useEffect`, API fetch |
| ❌⭕ Tic-Tac-Toe | `/tic-tak-toe` | Game logic, sounds, confetti, toss system |
| ✅ Advanced Todo | `/todo` | `Context API`, CRUD operations |
| 🤖 AI Agent | `/ai-agent` | Component structure |
| 📬 Contact Form | `/contact-us` | Controlled inputs, form handling |

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shubhamprajapati1202/mission-react.git
cd mission-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

App runs at: `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

This project is deployed on **Vercel** with **auto-deploy** enabled.
Every push to the `master` branch automatically triggers a new deployment.

🔗 Live: [https://mission-react.vercel.app](https://mission-react.vercel.app)

---

## 📄 License

This project is licensed under the **MIT License**.

---

> Built with ❤️ while learning React by [Shubham Prajapati](https://github.com/shubhamprajapati1202)
