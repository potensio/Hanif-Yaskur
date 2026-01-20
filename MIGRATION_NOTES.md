# Next.js Migration Notes

## Overview

This document contains important notes and gotchas from migrating the Lio Portfolio from Vite + React 19 to Next.js 15 with App Router.

## Migration Summary

**Date Completed:** January 2025  
**From:** Vite + React 19 (SPA)  
**To:** Next.js 15 + React 19 (App Router)

## Key Changes

### 1. File Structure

**Old Structure (Vite):**

```
├── index.html          # Entry HTML file
├── index.tsx           # React entry point
├── App.tsx             # Main app component
├── vite.config.ts      # Vite configuration
└── components/         # React components
```

**New Structure (Next.js):**

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   ├── sitemap.ts      # SEO sitemap
│   └── robots.ts       # SEO robots.txt
├── components/         # React components
├── next.config.ts      # Next.js configuration
└── public/             # Static assets
```

### 2. Routing Changes

**Before (Vite):**

- Single-page application with hash-based routing (#work, #pricing, #about)
- Client-side navigation only

**After (Next.js):**

- Single route (/) with anchor-based section navigation
- Server-side rendering for better SEO
- Smooth scroll behavior maintained via CSS

### 3. Component Classification

**Server Components (Default):**

- Hero, FeaturedWork, WorkShowcase, WorkCard
- Capabilities, DesignSmarter, IntelligentSystems
- Testimonials, Pricing, About, Footer

**Client Components (Interactive):**

- Header (mobile menu state management)

**Key Rule:** Only add `"use client"` directive when components need:

- `useState`, `useEffect`, or other React hooks
- Event handlers (onClick, onChange, etc.)
- Browser-only APIs

### 4. Styling Migration

**Before (Vite):**

- Tailwind CSS loaded via CDN
- Google Fonts loaded via CDN

**After (Next.js):**

- Tailwind CSS configured via PostCSS
- Google Fonts optimized via `next/font/google`
- Custom font variables for Tailwind integration

### 5. SEO Improvements

**New Features:**

- Metadata API for comprehensive SEO tags
- Open Graph and Twitter Card support
- Automatic sitemap.xml generation
- Automatic robots.txt generation
- JSON-LD structured data for Person schema

### 6. Build System

**Scripts:**

```json
{
  "dev": "next dev", // Development server (port 3000)
  "build": "next build", // Production build
  "start": "next start", // Production server
  "lint": "next lint" // ESLint checking
}
```

## Important Gotchas

### 1. Server vs Client Components

**Issue:** Forgetting to add `"use client"` directive to interactive components.

**Solution:** Add `"use client"` at the top of any component that uses:

- React hooks (useState, useEffect, etc.)
- Event handlers
- Browser APIs (window, document, localStorage)

**Example:**

```tsx
"use client";

import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // ... component code
}
```

### 2. Import Path Aliases

**Issue:** Relative imports can become complex in nested directories.

**Solution:** Use the `@/` alias configured in `tsconfig.json`:

```tsx
// Instead of: import { Header } from '../../components/Header'
import { Header } from "@/components/Header";
```

### 3. Environment Variables

**Issue:** Environment variables work differently in Next.js.

**Solution:**

- Use `NEXT_PUBLIC_` prefix for client-side variables
- Server-only variables (like API keys) don't need the prefix
- Always restart dev server after changing `.env.local`

**Example:**

```bash
# Client-side (accessible in browser)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Server-side only (secure)
GEMINI_API_KEY=your_api_key_here
```

### 4. Image Optimization

**Current State:** Hero background uses external Supabase URL.

**Future Optimization:** For better performance, consider:

1. Download images to `public/images/`
2. Use Next.js `<Image>` component
3. Configure remote patterns in `next.config.ts` (already done)

**Example:**

```tsx
import Image from "next/image";

<Image
  src="/images/hero-bg.jpg"
  alt="Hero background"
  width={1920}
  height={1080}
  priority
/>;
```

### 5. Metadata Configuration

**Issue:** Metadata must be defined in specific ways.

**Solution:** Use the Metadata API in `layout.tsx` or `page.tsx`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
  // ... other metadata
};
```

### 6. Font Loading

**Issue:** Google Fonts should not be loaded via CDN in Next.js.

**Solution:** Use `next/font/google` for automatic optimization:

```tsx
import { Inter, Geist } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```

### 7. CSS and Tailwind

**Issue:** Tailwind directives must be in a CSS file, not inline.

**Solution:** Use `app/globals.css` for Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 8. Development Server Port

**Default:** Next.js runs on port 3000 by default.

**Change Port:** Use the `-p` flag:

```bash
npm run dev -- -p 3001
```

## Testing Checklist

After migration, verify:

- [ ] Development server starts without errors
- [ ] Production build completes successfully
- [ ] All navigation links work with smooth scrolling
- [ ] Mobile menu opens and closes correctly
- [ ] All sections render properly
- [ ] Fonts load correctly (no FOUT/FOIT)
- [ ] SEO metadata appears in page source
- [ ] Images load and display correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] All animations and transitions work
- [ ] Environment variables are accessible

## Browser Testing

Recommended browsers to test:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Performance Considerations

**Lighthouse Targets:**

- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 100

**Optimization Tips:**

1. Use Server Components by default
2. Add `priority` prop to above-the-fold images
3. Lazy load below-the-fold content
4. Minimize client-side JavaScript
5. Use `next/image` for all images

## Deployment Notes

### Vercel (Recommended)

1. Connect your Git repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms

Requirements:

- Node.js 18.17 or later
- Support for Next.js 15
- Environment variables configuration

Build command: `npm run build`  
Start command: `npm run start`  
Output directory: `.next`

## Common Issues and Solutions

### Issue: "Module not found" errors

**Solution:** Check import paths and ensure `@/` alias is configured in `tsconfig.json`.

### Issue: Styles not applying

**Solution:**

1. Verify `globals.css` is imported in `layout.tsx`
2. Check Tailwind config includes all content paths
3. Restart dev server

### Issue: Fonts not loading

**Solution:**

1. Verify font imports in `layout.tsx`
2. Check font variables are applied to `<html>` element
3. Verify Tailwind config includes font families

### Issue: Environment variables undefined

**Solution:**

1. Check `.env.local` file exists
2. Verify variable names (use `NEXT_PUBLIC_` for client-side)
3. Restart dev server after changes

### Issue: Build fails with type errors

**Solution:**

1. Run `npm run build` to see specific errors
2. Check TypeScript configuration
3. Verify all imports have correct types

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

## Migration Completed

All Vite-specific files have been removed:

- ✅ `vite.config.ts` - Removed
- ✅ `index.html` - Removed (Next.js generates HTML)
- ✅ `index.tsx` - Removed (replaced by `app/page.tsx`)
- ✅ `App.tsx` - Removed (content moved to `app/page.tsx`)

All functionality has been preserved and enhanced with:

- ✅ Server-side rendering
- ✅ Comprehensive SEO optimization
- ✅ Font optimization
- ✅ Better performance
- ✅ Type safety with TypeScript
- ✅ Modern App Router architecture

## Next Steps

1. **Performance Audit:** Run Lighthouse audit and optimize as needed
2. **Image Optimization:** Consider migrating external images to local files
3. **Content Updates:** Update metadata with actual domain and social links
4. **Analytics:** Add analytics tracking (Google Analytics, Vercel Analytics, etc.)
5. **Error Tracking:** Consider adding error tracking (Sentry, etc.)
6. **Testing:** Add comprehensive test coverage
7. **Deployment:** Deploy to production platform

## Questions or Issues?

If you encounter any issues not covered in this document:

1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Review the [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
3. Check the project's `.kiro/specs/nextjs-migration/` directory for detailed requirements and design docs
