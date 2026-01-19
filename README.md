# 🚀 Modern 3D Portfolio

A stunning, interactive portfolio website built with React, TypeScript, and modern web technologies. Features animated CSS backgrounds, comprehensive tech stack visualization, and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-cyan)

## ✨ Features

- **🎨 Animated CSS Background** - Gradient orbs and twinkling stars
- **💼 Multi-page Portfolio** - Home, About, Skills, Projects, Certifications, Contact
- **🛠️ Comprehensive Tech Stack** - 25+ technology icons with proper branding
- **📱 Fully Responsive** - Optimized for all devices
- **⚡ Smooth Animations** - Framer Motion powered transitions
- **🎯 Interactive Elements** - Hover effects and dynamic content
- **🚀 Performance Optimized** - Fast loading and smooth scrolling

## 🛠️ Tech Stack

### Frontend
- **React 19.2.3** - Modern React with hooks
- **TypeScript 4.9.5** - Type-safe development
- **Tailwind CSS 3.x** - Utility-first styling
- **Framer Motion 12.26.2** - Smooth animations
- **React Router DOM 7.12.0** - Client-side routing

### Tools & Libraries
- **Lucide React** - Beautiful icons
- **Three.js** - 3D graphics (optional components)
- **React Spring** - Additional animations
- **Leva** - Debug controls

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/15Harish/portfolio-3d.git
   cd portfolio-3d
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3001
   ```

### Build for Production

```bash
npm run build
```

### Serve Production Build

```bash
npm install -g serve
serve -s build -l 3001
```

## 📁 Project Structure

```
portfolio-3d/
├── public/
│   ├── Harish_G_Resume.pdf      # Resume download
│   └── index.html               # HTML template
├── src/
│   ├── components/
│   │   ├── LoadingScreen.tsx    # Loading animation
│   │   ├── Navbar.tsx          # Navigation component
│   │   └── Scene3D.tsx         # 3D scene (optional)
│   ├── pages/
│   │   ├── Home.tsx            # Hero section
│   │   ├── About.tsx           # About me
│   │   ├── Skills.tsx          # Tech stack showcase
│   │   ├── Projects.tsx        # Project portfolio
│   │   ├── Certifications.tsx  # Achievements
│   │   └── Contact.tsx         # Contact form
│   ├── hooks/
│   │   └── useScrollAnimation.ts # Custom scroll hooks
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # Custom animations
│   └── index.css               # Global styles
├── vercel.json                 # Vercel deployment config
└── package.json               # Dependencies
```

## 🎨 Customization

### Personal Information
Update your details in:
- `src/pages/Home.tsx` - Hero section
- `src/pages/About.tsx` - Personal info
- `src/pages/Contact.tsx` - Contact details
- `public/Harish_G_Resume.pdf` - Replace with your resume

### Tech Stack
Modify skills in `src/pages/Skills.tsx`:
```typescript
const skillCategories = [
  {
    title: "Your Category",
    skills: ["Your", "Technologies"],
    // ...
  }
];
```

### Projects
Update projects in `src/pages/Projects.tsx`:
```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    // ...
  }
];
```

### Styling
- **Colors**: Update `tailwind.config.js`
- **Animations**: Modify `src/App.css`
- **Layout**: Adjust component styles

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build project: `npm run build`
2. Deploy `build` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://15Harish.github.io/portfolio-3d"`
3. Deploy: `npm run deploy`

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~141KB (gzipped)
- **Load Time**: <2s on 3G
- **Core Web Vitals**: Excellent

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Harish G**
- GitHub: [@15Harish](https://github.com/15Harish)
- LinkedIn: [harish-g-4144742833](https://linkedin.com/in/harish-g-4144742833)
- Email: hsirah16@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- Lucide for beautiful icons

---

⭐ **Star this repository if you found it helpful!**