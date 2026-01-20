# Design Document: Next.js Migration

## Overview

This design document outlines the technical approach for migrating a Vite + React 19 portfolio website to Next.js 15 with App Router architecture. The migration will transform a client-side single-page application (SPA) into a modern Next.js application with server-side rendering capabilities, comprehensive SEO optimization, and performance enhancements.

### Migration Strategy

The migration follows an incremental approach:

1. Set up Next.js 15 with App Router as the foundation
2. Migrate components with minimal changes (keeping client-side behavior initially)
3. Configure styling, fonts, and assets using Next.js optimizations
4. Implement comprehensive SEO using Next.js Metadata API
5. Optimize performance through Server Components and built-in features
6. Maintain all existing functionality while improving architecture

### Key Technologies

- **Next.js 15**: Latest version with App Router and React Server Components
- **React 19**: Maintained from current application
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Configured via PostCSS (migrated from CDN)
- **Lucide React**: Icon library (maintained)
- **next/font**: Google Fonts optimization
- **next/image**: Automatic image optimization

## Architecture

### File Structure

The Next.js application will follow the App Router conventions:

```
project-root/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page (main portfolio)
│   ├── globals.css             # Global styles with Tailwind directives
│   └── favicon.ico             # Favicon
├── components/
│   ├── Header.tsx              # Navigation header (Client Component)
│   ├── Hero.tsx                # Hero section (Server Component)
│   ├── FeaturedWork.tsx        # Featured work section
│   ├── WorkShowcase.tsx        # Work showcase section
│   ├── WorkCard.tsx            # Work card component
│   ├── Capabilities.tsx        # Capabilities section
│   ├── DesignSmarter.tsx       # Design smarter section
│   ├── IntelligentSystems.tsx  # Intelligent systems section
│   ├── Testimonials.tsx        # Testimonials section
│   ├── Pricing.tsx             # Pricing section
│   ├── About.tsx               # About section
│   └── Footer.tsx              # Footer component
├── public/
│   ├── images/                 # Static images
│   ├── robots.txt              # Search engine directives
│   └── sitemap.xml             # Site map for SEO
├── types/
│   └── index.ts                # TypeScript type definitions
├── lib/
│   └── metadata.ts             # Shared metadata utilities
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── .env.local                  # Environment variables
```

### Routing Architecture

**Current State (Vite):**

- Single-page application with hash-based routing (#work, #pricing, #about, #contact)
- Client-side navigation using anchor links
- All content on one page

**Target State (Next.js):**

- Single route (/) serving the portfolio page
- Smooth scroll navigation to sections using anchor IDs
- Server-rendered HTML for better SEO
- Optional: Future expansion to multi-page structure if needed

**Implementation:**

- Main page at `app/page.tsx` renders all sections
- Navigation links use anchor hrefs (#work, #pricing, etc.)
- CSS `scroll-behavior: smooth` for smooth scrolling
- Each section has an `id` attribute for anchor targeting

### Component Classification

**Server Components (Default):**

- `Hero` - Static hero section with background image
- `FeaturedWork` - Work showcase content
- `WorkShowcase` - Portfolio items display
- `WorkCard` - Individual work item cards
- `Capabilities` - Capabilities section
- `DesignSmarter` - Design smarter section
- `IntelligentSystems` - Intelligent systems section
- `Testimonials` - Testimonials display
- `Pricing` - Pricing information
- `About` - About section
- `Footer` - Footer with links

**Client Components (Interactive):**

- `Header` - Navigation with mobile menu state management
- Any component with `useState`, `useEffect`, or event handlers

**Rationale:**
Server Components reduce JavaScript bundle size and improve initial page load. Only components requiring client-side interactivity need the "use client" directive.

## Components and Interfaces

### Root Layout Component

**File:** `app/layout.tsx`

**Purpose:** Wraps all pages with HTML structure, metadata, and global styles.

**Implementation:**

```typescript
import type { Metadata } from 'next'
import { Inter, Geist } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lio — Product Designer',
  description: 'Portfolio of Lio, a product designer specializing in intelligent systems and user-centered design.',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'Lio — Product Designer',
    description: 'Portfolio of Lio, a product designer specializing in intelligent systems and user-centered design.',
    url: 'https://yourdomain.com',
    siteName: 'Lio Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lio Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lio — Product Designer',
    description: 'Portfolio of Lio, a product designer specializing in intelligent systems and user-centered design.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} h-full bg-white`}>
      <body className="min-h-full antialiased selection:bg-black selection:text-white text-black bg-gray-100 font-inter">
        {children}
      </body>
    </html>
  )
}
```

### Home Page Component

**File:** `app/page.tsx`

**Purpose:** Main portfolio page rendering all sections.

**Implementation:**

```typescript
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { FeaturedWork } from '@/components/FeaturedWork'
import { WorkShowcase } from '@/components/WorkShowcase'
import { Capabilities } from '@/components/Capabilities'
import { DesignSmarter } from '@/components/DesignSmarter'
import { IntelligentSystems } from '@/components/IntelligentSystems'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen relative bg-gray-100">
      <div
        className="absolute top-0 w-full z-0 h-[1000px] blur-3xl bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55089b0e-fd30-4b07-881c-69dd9c26979b_3840w.jpg")',
        }}
      />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <section id="work">
            <FeaturedWork />
            <WorkShowcase />
          </section>
          <section id="about">
            <About />
          </section>
          <Capabilities />
          <Testimonials />
          <section id="pricing">
            <Pricing />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
```

### Header Component (Client Component)

**File:** `components/Header.tsx`

**Purpose:** Navigation header with mobile menu state.

**Key Changes:**

- Add "use client" directive at the top
- Maintain existing functionality
- Update anchor links to work with Next.js routing

**Implementation:**

```typescript
'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="">
      <div className="max-w-7xl sm:px-8 mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="text-sm sm:text-base font-medium tracking-tight text-black font-geist">
            LIO
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-black/60 hover:text-black transition font-geist"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="cursor-pointer inline-flex flex-col leading-none outline-none overflow-hidden no-underline align-baseline whitespace-nowrap select-none transition-all duration-150 hover:opacity-85 focus:outline-none focus:ring-4 focus:ring-black/50 max-sm:h-12 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-sm text-white text-center bg-gradient-to-b from-neutral-700 to-neutral-900 border-0 rounded-xl pt-2 pr-5 pb-2 pl-5 items-center justify-center font-geist"
              role="button"
            >
              Resume
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-black/10 bg-white text-black/70 hover:bg-black/5 h-9 w-9 transition z-50"
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 md:hidden pt-20 px-6">
          <nav className="flex flex-col gap-6 text-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-geist font-medium text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
```

### Other Components

All other components (Hero, FeaturedWork, WorkShowcase, etc.) will be migrated with minimal changes:

- Remove any Vite-specific imports
- Keep as Server Components unless they require client-side state
- Update image imports if using static imports
- Maintain existing props and interfaces

## Data Models

### Metadata Configuration

**Type Definition:**

```typescript
import type { Metadata } from "next";

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  siteName: string;
  ogImage: string;
  twitterHandle?: string;
}

export const siteMetadata: SiteMetadata = {
  title: "Lio — Product Designer",
  description:
    "Portfolio of Lio, a product designer specializing in intelligent systems and user-centered design.",
  url: "https://yourdomain.com",
  siteName: "Lio Portfolio",
  ogImage: "/og-image.png",
  twitterHandle: "@yourhandle",
};
```

### Environment Variables

**Configuration:**

```typescript
// .env.local
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
GEMINI_API_KEY=your_api_key_here
```

**Usage:**

```typescript
// Access in components
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apiKey = process.env.GEMINI_API_KEY; // Server-side only
```

### TypeScript Configuration

**tsconfig.json:**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Configuration Files

### Next.js Configuration

**File:** `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hoirqrkdgbmvpwutwuwj.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
};

export default nextConfig;
```

### Tailwind CSS Configuration

**File:** `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "#f3f4f6", // gray-100
      },
      keyframes: {
        steam: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        steam: "steam 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
```

### PostCSS Configuration

**File:** `postcss.config.js`

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Global Styles

**File:** `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  .font-geist {
    font-family: var(--font-geist), sans-serif !important;
  }
}
```

## SEO Implementation

### Metadata API Usage

Next.js 15's Metadata API provides a type-safe way to define SEO metadata. The implementation uses static metadata exports in layout and page files.

**Root Layout Metadata:**

- Defines site-wide metadata
- Includes Open Graph and Twitter Card tags
- Sets robots directives
- Configures metadata base URL

**Page-Specific Metadata:**

- Can override or extend root metadata
- Supports dynamic metadata generation via `generateMetadata` function

### Structured Data (JSON-LD)

**Implementation in layout.tsx:**

```typescript
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lio',
    jobTitle: 'Product Designer',
    url: 'https://yourdomain.com',
    sameAs: [
      'https://twitter.com/yourhandle',
      'https://linkedin.com/in/yourprofile',
    ],
    description: 'Product designer specializing in intelligent systems and user-centered design.',
  }

  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} h-full bg-white`}>
      <body className="min-h-full antialiased selection:bg-black selection:text-white text-black bg-gray-100 font-inter">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
```

### Sitemap Generation

**File:** `app/sitemap.ts`

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yourdomain.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
```

### Robots.txt Generation

**File:** `app/robots.ts`

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}
```

## Asset Optimization

### Font Optimization

Next.js `next/font` automatically optimizes Google Fonts:

- Self-hosts fonts for privacy and performance
- Eliminates external network requests
- Prevents layout shift with `font-display: swap`
- Generates CSS variables for use in Tailwind

**Implementation:**

```typescript
import { Inter, Geist } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
```

### Image Optimization

For future image optimization (when migrating from external URLs to local images):

**Using next/image:**

```typescript
import Image from 'next/image'

<Image
  src="/images/hero-bg.jpg"
  alt="Hero background"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  className="..."
/>
```

**Benefits:**

- Automatic WebP/AVIF conversion
- Responsive image sizing
- Lazy loading by default
- Prevents Cumulative Layout Shift

**Current Implementation:**
The hero background image uses an external Supabase URL. This can remain as-is initially, but for optimal performance, consider:

1. Downloading the image to `public/images/`
2. Using `next/image` with local path
3. Configuring remote patterns in `next.config.ts` (already done)

## Performance Optimization

### Server Components Strategy

**Default to Server Components:**

- All components are Server Components by default
- Reduces client-side JavaScript bundle
- Improves initial page load time
- Better for SEO (fully rendered HTML)

**Use Client Components Only When Needed:**

- Components with `useState`, `useEffect`, or event handlers
- Components using browser-only APIs
- Interactive UI elements

**Current Application:**

- Header: Client Component (mobile menu state)
- All other components: Server Components (static content)

### Code Splitting

Next.js automatically code-splits by route:

- Each page loads only necessary JavaScript
- Shared components are intelligently bundled
- Dynamic imports for heavy components (if needed)

**Example for future optimization:**

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

### Caching Strategy

**Static Generation:**

- Home page is statically generated at build time
- HTML is cached and served instantly
- Revalidation can be configured if content changes

**Headers Configuration:**
Next.js automatically sets optimal cache headers for static assets.

### Bundle Optimization

**Automatic Optimizations:**

- Tree shaking removes unused code
- Minification reduces file sizes
- Compression (gzip/brotli) enabled by default
- CSS is extracted and optimized

**Manual Optimizations:**

- Use `next/dynamic` for code splitting heavy components
- Lazy load below-the-fold content
- Optimize third-party scripts with `next/script`

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

For this migration project, most correctness properties are example-based tests that verify specific migration requirements are met. The migration is successful when all components, configurations, and functionality are properly transferred to the Next.js architecture.

### Property 1: Build System Completeness

_For the_ migrated application, all build scripts (dev, build, start) should execute successfully without errors, and the development server should start on port 3000 by default.

**Validates: Requirements 1.5, 1.6, 1.7, 9.1, 9.2, 9.3, 9.7, 12.5**

**Test Approach:**

- Execute `npm run dev` and verify server starts on port 3000
- Execute `npm run build` and verify build completes successfully
- Execute `npm run start` after build and verify production server starts
- Verify build output directory (.next) is created with expected files

### Property 2: Component Migration Completeness

_For the_ migrated application, all components from the original Vite application should exist in the components directory, and interactive components should be properly marked as Client Components with the "use client" directive.

**Validates: Requirements 2.1, 2.3, 2.4, 2.5, 7.3**

**Test Approach:**

- Verify all expected component files exist: Header.tsx, Hero.tsx, FeaturedWork.tsx, WorkShowcase.tsx, WorkCard.tsx, Capabilities.tsx, DesignSmarter.tsx, IntelligentSystems.tsx, Testimonials.tsx, Pricing.tsx, About.tsx, Footer.tsx
- Verify Header.tsx contains "use client" directive (interactive component)
- Verify other components do not contain "use client" directive (Server Components)
- Verify all components can be imported without errors

### Property 3: Navigation and Routing Functionality

_For the_ migrated application, navigation links should work correctly with smooth scrolling to sections, and the home page route (/) should render all sections properly.

**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6**

**Test Approach:**

- Verify home page (/) renders without errors
- Verify navigation links use anchor hrefs (#work, #pricing, #about, #contact)
- Verify sections have corresponding id attributes
- Verify CSS includes `scroll-behavior: smooth`
- Verify mobile menu toggle functionality works (opens and closes)

### Property 4: Tailwind CSS Configuration

_For the_ migrated application, Tailwind CSS should be configured through PostCSS (not CDN), and all custom theme extensions should be preserved in the configuration.

**Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.7**

**Test Approach:**

- Verify tailwind.config.ts exists with custom theme extensions
- Verify postcss.config.js exists
- Verify app/globals.css contains Tailwind directives (@tailwind base, components, utilities)
- Verify custom font families (geist, inter) are in Tailwind config
- Verify custom animations (steam) are in Tailwind config
- Verify HTML does not contain Tailwind CDN script tag
- Verify smooth scroll CSS is present

### Property 5: SEO Metadata Implementation

_For the_ migrated application, comprehensive SEO metadata should be implemented using Next.js Metadata API, including title, description, Open Graph tags, Twitter Card tags, and structured data.

**Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.9, 5.10, 5.11**

**Test Approach:**

- Verify app/layout.tsx exports metadata object
- Verify metadata includes: title, description, metadataBase, openGraph, twitter, robots
- Verify openGraph includes: title, description, url, siteName, images, locale, type
- Verify twitter includes: card, title, description, images
- Verify JSON-LD structured data script is included in layout
- Verify rendered HTML contains all metadata tags in <head>

### Property 6: Sitemap and Robots Configuration

_For the_ migrated application, sitemap.xml and robots.txt should be generated using Next.js special files with correct configuration.

**Validates: Requirements 5.7, 5.8**

**Test Approach:**

- Verify app/sitemap.ts exists and exports a sitemap function
- Verify sitemap function returns array with home page entry
- Verify app/robots.ts exists and exports a robots function
- Verify robots function allows all user agents and references sitemap

### Property 7: Font Optimization

_For the_ migrated application, Google Fonts (Inter and Geist) should be loaded using Next.js font optimization with proper configuration to prevent layout shift.

**Validates: Requirements 4.5, 6.4, 6.5**

**Test Approach:**

- Verify app/layout.tsx imports fonts from 'next/font/google'
- Verify fonts are configured with: subsets, variable, display: 'swap'
- Verify font CSS variables are applied to html element
- Verify HTML does not contain external Google Fonts links

### Property 8: TypeScript Configuration

_For the_ migrated application, TypeScript should be configured for Next.js 15 compatibility with path aliases and proper compiler options.

**Validates: Requirements 8.1, 8.2, 8.3, 8.4, 8.5**

**Test Approach:**

- Verify tsconfig.json includes Next.js plugin
- Verify path aliases (@/\*) are configured
- Verify jsx is set to "preserve"
- Verify incremental compilation is enabled
- Verify TypeScript compilation succeeds without errors
- Verify imports using @ alias resolve correctly

### Property 9: Environment Variables Support

_For the_ migrated application, environment variables should be accessible through process.env, including the existing GEMINI_API_KEY.

**Validates: Requirements 9.4, 9.5, 9.6**

**Test Approach:**

- Verify .env.local file can be created
- Verify NEXT*PUBLIC*\* variables are accessible in client components
- Verify server-only variables (GEMINI_API_KEY) are accessible in server components
- Verify next.config.ts includes env configuration

### Property 10: File Structure Conventions

_For the_ migrated application, files should be organized according to Next.js 15 App Router conventions with proper directory structure.

**Validates: Requirements 10.1, 10.2, 10.3, 10.4, 10.5, 10.6**

**Test Approach:**

- Verify app directory exists with layout.tsx and page.tsx
- Verify components directory exists with all component files
- Verify public directory exists
- Verify configuration files exist at root: next.config.ts, tailwind.config.ts, tsconfig.json, postcss.config.js
- Verify .gitignore includes .next and node_modules

### Property 11: Functionality Preservation

_For the_ migrated application, all existing functionality should be preserved including mobile menu, buttons, visual effects, and animations.

**Validates: Requirements 11.1, 11.2, 11.3, 11.6, 11.7**

**Test Approach:**

- Verify mobile menu toggle state management works
- Verify Resume button exists and is clickable
- Verify hero section includes background blur effect
- Verify animation classes (steam) are present in Tailwind config
- Verify all interactive elements have proper event handlers

### Property 12: Lucide Icons Compatibility

_For the_ migrated application, Lucide React icons should work correctly without any import or rendering errors.

**Validates: Requirements 1.8**

**Test Approach:**

- Verify lucide-react is in package.json dependencies
- Verify Header component imports Menu and X icons from lucide-react
- Verify icons render without errors

### Property 13: Image Configuration

_For the_ migrated application, Next.js should be configured to allow remote images from Supabase storage.

**Validates: Requirements 6.1, 6.7**

**Test Approach:**

- Verify next.config.ts includes remotePatterns for Supabase domain
- Verify hero background image URL is accessible
- Verify image optimization configuration is present

### Property 14: Performance Baseline

_For the_ migrated application, Lighthouse performance score should be 90 or higher, and Cumulative Layout Shift should be minimized.

**Validates: Requirements 7.1, 7.5**

**Test Approach:**

- Run Lighthouse audit on production build
- Verify performance score >= 90
- Verify CLS score is in "good" range (< 0.1)
- Verify proper caching headers are set for static assets

### Property 15: Production Build Output

_For the_ migrated application, production build should generate optimized static output with proper error handling and .gitignore configuration.

**Validates: Requirements 12.3, 12.4, 12.6**

**Test Approach:**

- Verify production build creates .next directory with static HTML
- Verify .gitignore exists and excludes .next, node_modules, .env\*.local
- Verify error boundaries or error handling is implemented where appropriate
- Verify build output includes optimized JavaScript bundles

## Error Handling

### Build-Time Errors

**TypeScript Compilation Errors:**

- Next.js will report TypeScript errors during development and build
- Use `next build` to catch type errors before deployment
- Configure strict type checking in tsconfig.json

**Configuration Errors:**

- Invalid next.config.ts will prevent server from starting
- Invalid tailwind.config.ts will cause styling issues
- Validate configuration files during migration

### Runtime Errors

**Missing Environment Variables:**

- Server-side code accessing undefined environment variables will throw errors
- Use environment variable validation at application startup
- Provide clear error messages for missing required variables

**Image Loading Errors:**

- Remote images from unconfigured domains will fail to load
- Configure all remote image domains in next.config.ts
- Implement fallback images for failed loads

**Component Errors:**

- Client Component errors will be caught by React error boundaries
- Server Component errors will show Next.js error overlay in development
- Implement error boundaries for graceful error handling in production

### Migration-Specific Error Handling

**Import Path Errors:**

- Update all import paths to use @ alias or relative paths
- Verify all imports resolve correctly after migration
- Use TypeScript to catch import errors at compile time

**CSS Class Errors:**

- Verify all Tailwind classes are available after configuration
- Check for custom classes that need to be migrated
- Test responsive classes work correctly

## Testing Strategy

### Dual Testing Approach

This migration project uses both unit tests and example-based tests to ensure correctness:

**Unit Tests:**

- Test individual component rendering
- Test utility functions and helpers
- Test configuration parsing and validation
- Test metadata generation functions

**Example-Based Tests:**

- Verify specific migration requirements are met
- Test build scripts execute successfully
- Verify file structure matches conventions
- Test SEO metadata is correctly implemented
- Verify functionality preservation

### Testing Tools

**Recommended Testing Stack:**

- **Vitest**: Fast unit testing framework (compatible with Vite background)
- **React Testing Library**: Component testing
- **Playwright**: End-to-end testing for navigation and interactions
- **Lighthouse CI**: Automated performance testing

### Test Organization

```
tests/
├── unit/
│   ├── components/
│   │   ├── Header.test.tsx
│   │   └── ...
│   └── lib/
│       └── metadata.test.ts
├── integration/
│   ├── build.test.ts
│   ├── navigation.test.ts
│   └── seo.test.ts
└── e2e/
    ├── mobile-menu.spec.ts
    └── performance.spec.ts
```

### Test Coverage Goals

**Critical Paths (Must Test):**

- Build system functionality (dev, build, start)
- Component migration completeness
- SEO metadata implementation
- Navigation and routing
- TypeScript configuration

**Important Paths (Should Test):**

- Tailwind CSS configuration
- Font optimization
- Environment variables
- File structure conventions

**Nice to Have (Can Test):**

- Visual regression testing
- Performance benchmarks
- Accessibility testing

### Testing During Migration

**Phase 1: Setup Verification**

- Test that Next.js project initializes correctly
- Verify all dependencies install without errors
- Test that dev server starts successfully

**Phase 2: Component Migration**

- Test each component after migration
- Verify Server/Client Component classification
- Test that all imports resolve correctly

**Phase 3: Configuration**

- Test Tailwind CSS configuration
- Verify font loading
- Test environment variables

**Phase 4: SEO Implementation**

- Test metadata generation
- Verify sitemap and robots.txt
- Test structured data

**Phase 5: Final Validation**

- Run full test suite
- Perform Lighthouse audit
- Test production build
- Verify all functionality works end-to-end

### Continuous Testing

**During Development:**

- Run unit tests on file changes
- Use TypeScript for compile-time validation
- Test in browser during development

**Before Deployment:**

- Run full test suite
- Perform Lighthouse audit
- Test production build locally
- Verify all environment variables are set

**Post-Deployment:**

- Monitor for runtime errors
- Check performance metrics
- Verify SEO metadata in production
- Test on multiple devices and browsers
