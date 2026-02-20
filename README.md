# Hilmi Abdurrahim - Portfolio Website

A professional portfolio website built with Nuxt.js 4, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark theme with blue accent color (#3B82F6)
- **Responsive**: Fully responsive for mobile, tablet, and desktop using Bootstrap 5
- **Animated**: Smooth CSS animations for better user experience
- **Fast**: Built with Nuxt.js 4 and Vite for optimal performance
- **SEO Optimized**: Meta tags and Open Graph tags configured
- **TypeScript**: Full TypeScript support for type safety

## 📦 Tech Stack

- **Framework**: Nuxt.js 4.3.1
- **Language**: TypeScript 5.6
- **Styling**: Bootstrap 5.3
- **Icons**: @nuxt/icon with Heroicons and Simple Icons
- **Animations**: CSS animations

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview
```

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── app.css         # Global CSS with Tailwind directives
│   ├── components/     # Reusable Vue components
│   ├── layouts/        # Layout components
│   └── pages/          # Page components
├── data/
│   └── portfolio.ts    # Portfolio data (easily editable)
├── public/             # Static assets
└── nuxt.config.ts      # Nuxt configuration
```

## ✏️ Customization

### Update Portfolio Data

Edit `data/portfolio.ts` to update:

- Personal information (name, title, location, etc.)
- Skills and experience
- Projects (major and other)
- Social media links
- Design preferences

### Update Styling

Edit `app/app.css` to customize:

- Color schemes
- Component styles
- Animations
- Utility classes

### Update Configuration

Edit `nuxt.config.ts` to configure:

- Meta tags
- Fonts
- Modules
- Build settings

## 🚢 Deployment

### GitHub Pages

```bash
# Generate static site
npm run generate

# Deploy .output/public/ to GitHub Pages
```

### Netlify

```bash
# Build for production
npm run build

# Deploy .output/public/ to Netlify
```

### Vercel

```bash
# Build for production
npm run build

# Deploy .output/public/ to Vercel
```

## 📝 Development

### Adding New Projects

1. Open `data/portfolio.ts`
2. Add project to `major_projects` or `other_projects` array
3. Include: name, type, description, technologies, status, GitHub links

### Adding New Skills

1. Open `data/portfolio.ts`
2. Add skill to appropriate category (backend, frontend, tools, other)
3. Include: name, level (Beginner/Intermediate/Advanced/Expert), years

### Customizing Design

1. Open `nuxt.config.ts`
2. Update `app.head` for meta tags and fonts
3. Update `design` object in `data/portfolio.ts` for theme preferences

## 🌐 Live Demo

The portfolio is available at: [https://helmetabd.github.io](https://helmetabd.github.io)

## 📧 Maintenance

### Update Dependencies

```bash
npm update
```

### Clean Build

```bash
rm -rf .nuxt
rm -rf node_modules/.cache
npm run dev
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Hilmi Abdurrahim**

- GitHub: [@helmetabd](https://github.com/helmetabd)
- LinkedIn: [Hilmi Abdurrahim](https://linkedin.com/in/hilmi-abdurrahim-985280167)
- Email: hilmiabdurrahim@gmail.com

---

Built with ❤️ using Nuxt.js and Bootstrap 5
