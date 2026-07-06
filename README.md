# Professional Portfolio

A **10-page professional portfolio website** built with **Bootstrap 5**, designed for immediate deployment to:

- **GitHub Pages**
- **Firebase Hosting**

Includes premium animations, a responsive grid system, and clean, commented code.

## Pages

- `index.html` – Home
- `about.html` – About
- `services.html` – Services
- `portfolio.html` – Portfolio
- `blog.html` – Blog
- `contact.html` – Contact
- `resume.html` – Resume
- `team.html` – Team
- `pricing.html` – Pricing
- `faq.html` – FAQ

## Features

- Bootstrap 5 responsive layout
- Premium animations (fade-up, fade-left, hover-lift)
- SEO-friendly meta tags and clean structure
- Firebase Hosting ready (`firebase.json`, `.firebaserc`)
- GitHub Actions CI/CD pipeline:
  - Validates HTML/CSS/JS
  - Deploys to GitHub Pages
  - Deploys to Firebase Hosting
  - Placeholder for mobile (Flutter) build pipeline

## Deployment

### GitHub Pages

1. In GitHub repo: **Settings → Pages** → Source: **GitHub Actions**.
2. Push to `main`.
3. The workflow will deploy automatically.
4. Your site URL:  
   `https://Dev-moe-kyawaung.github.io/professional-portfolio/`

### Firebase Hosting

1. Create a Firebase project and get its **Project ID**.
2. Update `.firebaserc`:

   ```json
   {
     "projects": {
       "default": "YOUR-FIREBASE-PROJECT-ID"
     }
   }
