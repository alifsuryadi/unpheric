# Unpheric - Future Bass Artist Portfolio Website

Welcome to the official source code of **Unpheric's** immersive and modern personal website.

## 🌌 About Unpheric

**Unpheric** is a Future Bass musical artist who invites listeners to dive into immersive soundscapes of emotional energy and powerful rhythm. With over 6 years of experience using FL Studio, Unpheric crafts sound journeys that blend dreamy melodies with bold basslines. This website serves as the central hub for fans to discover music, explore albums, and collaborate.

> _"Gain creativity with FL Studio"  
> Dive into the world of future bass 🎶  
> 6 years of learning 🎹📚  
> Let's make some music! 🎧_

---

## 🛠️ Tech Stack

This project is built using the following technologies:

- [Next.js](https://nextjs.org/) with **TypeScript**
- [Tailwind CSS](https://tailwindcss.com/) for responsive and utility-first styling
- [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) for animations, transitions, and interactions
- [shadcn/ui](https://ui.shadcn.com/) for elegant UI components

---

## ✨ Features

- **Mobile-first design** with immersive layout and atmospheric feel
- **Sticky transparent navbar** with animated active indicator
- **GSAP animations** for text fades, scroll effects, cursor parallax, and hover interactions
- **Album Showcase** with hover glow effects and a dramatic story page
- **Responsive grid** for album display and platform logos
- **Interactive hero section** with parallax smartphone mockup
- **Streaming platform links**: YouTube Music, Spotify, Amazon Music, Tidal, SoundCloud, and Apple Music
- **Email capture** for upcoming merch
- **Contact form** for collaboration inquiries

---

---

## ⚙️ Getting Started Locally

### Prerequisites

Ensure you have **Node.js** and **npm** installed (Node.js 16+ recommended). You can use [`nvm`](https://github.com/nvm-sh/nvm) for easy Node.js version management.

### Steps

#### Step 1: Clone the repository

```bash
git clone https://github.com/alifsuryadi/unpheric
```

#### Step 2: Navigate into the project directory

```bash
cd unpheric
```

#### Step 3: Install dependencies

```bash
npm install
```

#### Step 4: Set up Environment Variables

> Copy the example environment file to a local environment file

```bash
cp .env.example .env.local
```

> After running the command above, follow these manual steps:

> 1. Open your browser and sign up or log in at `Formspree.io`.
> 2. Create a new form to get your unique Endpoint URL (e.g., `https://formspree.io/f/xxxxxxxx`).
> 3. Open the newly created `.env.local` file in your project.
> 4. Replace the value of `VITE_FORMSPREE_ENDPOINT` with the Endpoint URL you got from Formspree.

#### Step 5: Start the development server

```bash
npm run dev
```

> Visit `http://localhost:8080` to view the site locally.

## 📩 Contributing / Feedback

For improvements, bug reports, or feature requests, feel free to open a pull request or create an issue.
