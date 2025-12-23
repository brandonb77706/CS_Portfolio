# Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Computer Science student and software developer.

## 🚀 Live Demo

[View Live Portfolio](https://brandonmbrown.dev/)

## ✨ Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Glass Morphism UI** - Modern design with glass card effects and smooth animations
- **Smooth Scrolling Navigation** - Fixed navigation with scroll-to-section functionality
- **Project Showcase** - Featured and categorized project displays with GitHub links
- **Skills Section** - Interactive technology stack presentation
- **Contact Form** - Functional contact form with EmailJS integration
- **Resume Download** - One-click resume download functionality
- **SEO Optimized** - Meta tags, Open Graph, and structured data
- **Dark Theme** - Professional dark color scheme

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: Vercel

## 🏗️ Project Structure

```
cs-portfolio/
├── public/
│   ├── Brandon_Brown_Resume.pdf
│   ├── BrandonLogo.png
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── ui/
│   ├── assets/
│   ├── lib/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.local
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/brandonb77706/CS_Portfolio.git
   cd CS_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📧 EmailJS Setup

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
4. Add your credentials to `.env.local`

## 🎨 Customization

### Colors
Update the color scheme in `src/index.css`:
```css
:root {
  --primary: 193 100% 50%;
  --secondary: 270 100% 70%;
  /* Add your custom colors */
}
```

### Projects
Add your projects in `src/components/Projects.tsx`:
```tsx
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    image: yourImage,
    tags: ["React", "TypeScript"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://your-demo.com",
    featured: true
  }
];
```

### Skills
Update your skills in `src/components/Skills.tsx`:
```tsx
const skills = [
  { name: "React", icon: React, level: 90 },
  { name: "TypeScript", icon: TypeScript, level: 85 }
];
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🔧 Build & Deployment

### Build for production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

**Brandon Brown**
- Email: bbrow113@emich.edu
- GitHub: [@brandonb77706](https://github.com/brandonb77706)
- Portfolio: [Live Demo](https://brandonmbrown.dev/)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [EmailJS](https://www.emailjs.com/) for email functionality
- [Vercel](https://vercel.com/) for deployment

---

⭐ Star this repository if you found it helpful!
