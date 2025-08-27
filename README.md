# Divyansh Suwalka - React Portfolio

A modern, responsive portfolio website built with **React** and **Tailwind CSS**, featuring dark/light theme support and smooth animations. Bundled with **Parcel** for fast development and optimized builds.

![Portfolio Preview](https://portfolio-react-lldf.vercel.app/)

## ✨ Features

- **Modern React**: Built with React 18 and functional components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: CSS transitions and hover effects
- **Fast Bundling**: Parcel bundler for development and production
- **Clean Architecture**: Well-organized component structure
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Tailwind CSS
- **Bundler**: Parcel 2
- **Icons**: Lucide React
- **Development**: Hot reload, fast refresh

## 🚀 Quick Start

### Prerequisites

Make sure you have installed:
- Node.js (v16 or later)
- npm or yarn

### Installation & Setup

1. **Extract the project files**
   ```bash
   unzip divyansh-portfolio-react.zip
   cd divyansh-portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:1234](http://localhost:1234)

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` folder.

## 📁 Project Structure

```
divyansh-portfolio-react/
├── src/
│   ├── index.html              # Main HTML file
│   ├── index.js                # App entry point
│   ├── App.js                  # Main App component
│   ├── index.css               # Global styles with Tailwind
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.js       # Button component
│   │   │   ├── Card.js         # Card component
│   │   │   └── Badge.js        # Badge component
│   │   ├── layout/             # Layout components
│   │   │   ├── Navbar.js       # Navigation bar
│   │   │   └── Footer.js       # Footer
│   │   ├── sections/           # Main content sections
│   │   │   ├── Hero.js         # Hero section
│   │   │   ├── About.js        # About section
│   │   │   ├── Skills.js       # Skills section
│   │   │   ├── Experience.js   # Experience timeline
│   │   │   ├── Projects.js     # Projects showcase
│   │   │   └── Contact.js      # Contact information
│   │   └── ThemeProvider.js    # Theme context provider
│   ├── data/
│   │   └── resume.js           # Resume data in JSON format
│   └── utils/
│       └── helpers.js          # Utility functions
├── public/
│   ├── favicon.ico
│   └── profile-placeholder.svg
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### 1. Personal Information

Update your details in `src/data/resume.js`:

```javascript
export const resumeData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... other fields
  },
  // ... update other sections
}
```

### 2. Profile Photo

Replace the DS placeholder by:
1. Add your photo to the `public/` directory
2. Update the Hero component (`src/components/sections/Hero.js`)
3. Replace the DS placeholder with an `<img>` tag

### 3. Theme Colors

Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

### 4. Add/Remove Sections

- Create new components in `src/components/sections/`
- Import and add them to `src/App.js`
- Update navigation in `src/components/layout/Navbar.js`

## 🌐 Deployment

### Netlify
1. Run `npm run build`
2. Upload the `dist` folder to Netlify

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect the build settings

### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run `npm run build && npm run deploy`

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Fast Loading**: Parcel optimization and code splitting
- **Responsive Images**: Proper image optimization
- **Clean CSS**: Tailwind CSS purges unused styles
- **Modern JavaScript**: ES6+ features with polyfills

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Available Scripts

- `npm start` / `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run clean` - Clean build files and cache

## 🎨 Design Features

- **Clean & Modern**: Professional design suitable for all industries
- **Animations**: Subtle hover effects and scroll animations
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Mobile-First**: Optimized for mobile devices first
- **Print-Friendly**: CSS optimized for printing

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for beautiful icons
- Parcel for fast bundling

## 📞 Support

If you need help with setup or customization:
- Create an issue on GitHub
- Email: suwalkadivyansh63@gmail.com

---

**Made with ❤️ and React by Divyansh Suwalka**

⭐ If this helped you, please give it a star!
