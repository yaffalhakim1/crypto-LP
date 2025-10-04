# Crypgo - Fast & Secure Cryptocurrency Exchange

🚀 **Live Demo**: [https://crypgo-lp.netlify.app/](https://crypgo-lp.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/509bad1c-5301-4c01-ad1b-d02f5c1e4ceb/deploy-status)](https://app.netlify.com/projects/crypgo-lp/deploys)

A modern, production-ready cryptocurrency trading platform built with React Router v7, TypeScript, and TailwindCSS. Experience lightning-fast execution, competitive fees, and bank-level security on our cutting-edge platform.

## ✨ Features

- 🚀 **Lightning-fast trade execution** - Execute trades in milliseconds
- 🔒 **Bank-level security** - Advanced encryption and cold storage
- 💱 **100+ cryptocurrencies** - Trade Bitcoin, Ethereum, and more
- 📱 **Responsive design** - Works seamlessly on all devices
- ⚡ **Real-time prices** - Live cryptocurrency price tracking
- 🌍 **Global reach** - Accessible from countries worldwide
- 🎨 **Modern UI/UX** - Beautiful, intuitive interface with animations

## 🛠 Tech Stack

- **Framework**: React Router v7 with Server-Side Rendering (SSR)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast
- **Price Data**: CoinGecko API
- **Icons**: React Icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yaffalhakim1/crypto-LP
cd crypto-LP
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## 🏗️ Project Structure

```
app/
├── root.tsx              # Root layout, links, meta, error boundary
├── routes.ts             # Route configuration
├── routes/
│   └── home.tsx          # Main home page route
├── components/
│   ├── Layout/           # Header, Footer, Navigation
│   ├── Home/             # All landing page components
│   │   ├── Hero/         # Main hero section with buy/sell forms
│   │   ├── work/         # Features section
│   │   ├── GlobalReach/  # Interactive globe with statistics
│   │   ├── timeline/     # Trading process steps
│   │   ├── platform/     # Platform features
│   │   ├── portfolio/    # Portfolio showcase
│   │   ├── upgrade/      # Premium features
│   │   ├── perks/        # Additional benefits
│   │   ├── Faq/          # FAQ section
│   │   └── BrandLogo/    # Brand logo showcase
│   └── Common/           # Shared components (ShimmerButton, Globe, etc.)
├── hooks/                # Custom React hooks
├── data/                 # Static data and content
└── types/                # TypeScript type definitions
```

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `build/` directory with client and server folders.

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Set build command: `react-router build`
3. Set publish directory: `build/client`
4. Deploy!

The project includes `netlify.toml` with proper redirects for client-side routing.

### Other Platforms

This application can be deployed to any platform that supports Node.js:

- Vercel
- AWS (ECS, Lambda)
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Railway
- Fly.io

Make sure to deploy the output of `react-router build` and configure proper routing redirects.

## 🎨 Customization

### Theming

The application uses TailwindCSS with a dark/light theme system. Customize colors in your `tailwind.config.js`.

### Content

Update content in the following files:

- `app/data/index.ts` - Static data for various sections
- Component files for specific section content
- `app/routes/home.tsx` for SEO meta tags

### Branding

Replace branding elements:

- Logo: `public/images/logo/`
- Hero image: `public/images/hero/`
- Other assets in `public/images/`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
```

## 📈 Features Included

### Trading Features

- Buy/Sell cryptocurrency forms
- Real-time price tracking
- Interactive price slider
- Multiple payment methods

### Interactive Elements

- Animated globe showing global reach
- Smooth scrolling navigation
- Interactive FAQ section
- Animated statistics counters
- Shimmer buttons with hover effects

### Responsive Design

- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interface
- Accessible navigation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🆘 Support

If you have any questions or need support, please open an issue on GitHub.

---

Built with ❤️ using React Router v7, TypeScript, and TailwindCSS
