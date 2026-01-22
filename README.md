<h3 align="center"> 🛒 GoCart (Work in Progress)</h3>

<p align="center">
  A modern full-stack e-commerce application built with Next.js, Prisma, and Neon.<br/>
  This project is currently under active development and not yet feature-complete.
  <br>
</p>

<p align="center">
  <a href="https://pern-multivendor-ecommerce.vercel.app">
    <img src="https://img.shields.io/badge/Live-Demo-brightgreen" alt="Live Demo">
  </a>
  <img src="https://img.shields.io/badge/Status-In%20Progress-yellow" alt="Project Status">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/Neon-00E5FF?style=flat" alt="Neon">
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Current Status](#current_status)
- [Features](#features)
- [Tech Stack](#tech_stack)
- [Prerequisites](#prerequisites)
- [Dependencies Overview](#dependencies)
- [Folder Structure](#folder_structure)
- [Installation](#installation)
- [Running the App](#running_app)
- [Testing](#testing)
- [Learning Goals](#learning_goals)
- [Credits](#credits)
- [License](#license)

## 🧐 About <a name="about"></a>

GoCart is a **full-stack e-commerce application** built with **Next.js (App Router)** and a modern cloud-native stack.  
The project focuses on scalable architecture, authentication, state management, and real-world e-commerce workflows.

⚠️ **Note:** This project is still in development. Features, structure, and APIs are subject to change.

## 🏁 Getting Started <a name="getting_started"></a>

Follow the steps below to run the project locally for development and experimentation.

## 🚧 Current Status <a name="current_status"></a>

- Core project setup complete
- Database schema managed with Prisma
- Authentication integrated with Clerk
- Styling configured with Tailwind CSS
- State management set up with Redux Toolkit

❌ Products / checkout flow, payments (Stripe), and other features are still in progress.

## 🚀 Features <a name="features"></a>

### Implemented / In Progress

- User authentication (Clerk)
- Global state management (Redux Toolkit)
- Database integration with Prisma + Neon
- Responsive UI with Tailwind CSS
- Image handling via ImageKit
- Background jobs & workflows (Inngest)

### Planned

- Product catalog
- Shopping cart & checkout
- Order management
- Admin dashboard
- Analytics & reporting

## 🧰 Tech Stack <a name="tech_stack"></a>

- **Frontend:** Next.js 15, React 19, Tailwind CSS
- **Backend:** Next.js App Router, Inngest
- **Database:** Neon (PostgreSQL)
- **ORM:** Prisma
- **Auth:** Clerk
- **State Management:** Redux Toolkit
- **Media:** ImageKit
- **Testing:** Cypress (E2E)
- **Charts:** Recharts

## ⚡ Prerequisites <a name="prerequisites"></a>

- **Node.js** (v18+ recommended)
- **npm**
- **PostgreSQL database** (Neon recommended)
- A **Clerk account** (authentication)
- An **ImageKit account** (media uploads)
- Git

## 📦 Dependencies Overview <a name="dependencies"></a>

Key dependencies used in this project:

- next / react / react-dom Application framework
- prisma / @prisma/client Database ORM
- @neondatabase/serverless PostgreSQL hosting
- @clerk/nextjs Authentication
- @reduxjs/toolkit / react-redux State management
- tailwindcss Utility-first styling
- axios HTTP client
- inngest Background jobs
- imagekit Image hosting
- cypress End-to-end testing

## 🔧 Folder Structure <a name="folder_structure"></a>

GOCART/
│
├── .next/ # Next.js build output
├── .vs/ # Visual Studio configuration
├── .vscode/ # VS Code workspace settings
│
├── app/ # Next.js App Router (routes, layouts, pages)
├── assets/ # Static assets (images, icons, etc.)
├── components/ # Reusable UI components
├── configs/ # Application and service configurations
├── cypress/ # End-to-end tests (Cypress)
├── inngest/ # Inngest background jobs & workflows
├── lib/ # Shared utilities, helpers, and services
├── middlewares/ # Custom middleware logic
├── prisma/ # Prisma schema and database setup
│
├── .env # Environment variables (ignored by git)
├── .env.example # Example environment variables
├── .gitignore # Git ignored files
│
├── CODE_OF_CONDUCT.md # Code of conduct
├── CONTRIBUTING.md # Contribution guidelines
├── cypress.config.js # Cypress configuration
├── jsconfig.json # JavaScript/Path aliases config
├── middleware.ts # Next.js middleware
├── next-env.d.ts # Next.js TypeScript declarations
├── next.config.mjs # Next.js configuration
├── package.json # Project metadata & scripts
├── package-lock.json # Dependency lock file
├── postcss.config.mjs # PostCSS configuration
├── LICENSE.md # Project license
└── README.md # Project documentation

## ⚙️ Installation <a name = "installation"></a>

### Clone the repository

1. Clone the repository

```bash
git clone https://github.com/dorarodriguezag/pern-multivendor-ecommerce.git
cd pern-multivendor-ecommerce
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file (see `.env.example`)

```bash
DATABASE_URL=your_neon_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_secret
IMAGEKIT_URL_ENDPOINT=your_url
```

## ▶️ Running the App <a name = "running_app"></a>

Development mode

```bash
npm run dev
```

Production mode

```bash
npm run build
npm start
```

App runs on:

```bash
http://localhost:3000
```

## 🔐 Testing <a name = "testing"></a>

Open Cypress UI

```bash
npm run cypress:open
```

Run tests headlessly

```bash
npm run cypress:run
```

## 📚 Learning Goals <a name = "learning_goals"></a>

- Advanced Next.js App Router patterns
- Authentication in production-ready applications
- Scalable database design with Prisma
- State management in large React applications
- E-commerce architecture
- End-to-end testing with Cypress

## 📘 Credits <a name = "credits"></a>

This project is based on a starter template from:

GreatStackDev – GoCart
https://github.com/GreatStackDev/gocart

This repository represents my own implementation and learning process.

## 📜 License <a name="license"></a>

This project is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.
