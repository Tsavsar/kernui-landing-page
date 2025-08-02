# KernUI Landing Page

A modern, responsive landing page for **KernUI**

## 🚀 Features

- **Modern Design**: Clean, professional landing page with precise Figma specifications
- **Responsive Layout**: Optimized for all device sizes
- **Component-Based Architecture**: Modular, reusable components
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Custom Styling**: Tailwind CSS with custom gradients, shadows, and precise spacing

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- **Language**: TypeScript
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── app/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Small, reusable UI elements
│   │   └── ...          # Other component files
│   ├── sections/        # Page-level sections and layouts
│   ├── styles/          # Global CSS and styling
│   ├── layout.tsx       # Root layout configuration
│   └── page.tsx         # Main page component
└── public/              # Static assets (images, icons, etc.)
    └── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd kernui-landing-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the landing page.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

The landing page follows precise design specifications with:

- **Color Palette**:

  - Primary Red: `#FB3748`
  - Dark Gray: `#171717`
  - Light Gray: `#5C5C5C`
  - Background: `#FFFFFF`

- **Typography**:

  - Font Family: Inter
  - Various weights: 400, 500, 600

- **Spacing**: Consistent pixel-perfect spacing from Figma designs
- **Components**: Modular design with reusable UI components

## 📱 Sections

1. **Navigation**: KernUI logo, menu items, and Figma integration
2. **Hero Section**: Main headline, description, and call-to-action buttons
3. **Trusted By**: Social proof with avatar stack
4. **Founder Quote**: Testimonial with founder information

## 🔧 Customization

- **Colors**: Update color values in component styles
- **Content**: Modify text content in respective component files
- **Styling**: Adjust Tailwind classes or inline styles as needed
- **Assets**: Replace SVG files in the `public/` directory

## 📄 License

This project is part of the KernUI design system.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ for the KernUI community
