# Implementation Plan: Next.js Migration

## Overview

This implementation plan breaks down the migration from Vite + React to Next.js 15 with App Router into discrete, incremental steps. Each task builds on previous work, ensuring a smooth migration with continuous validation. The approach prioritizes getting a working Next.js application quickly, then enhancing it with SEO and performance optimizations.

## Tasks

- [x] 1. Initialize Next.js 15 project and install dependencies
  - Install Next.js 15, React 19, TypeScript, and required dependencies
  - Install Tailwind CSS, PostCSS, and Autoprefixer
  - Install Lucide React icons
  - Set up package.json with correct scripts (dev, build, start)
  - _Requirements: 1.1, 1.3, 1.4, 1.8, 9.1, 9.2, 9.3_

- [ ]\* 1.1 Write test to verify dependencies are installed correctly
  - **Property 1: Build System Completeness**
  - **Validates: Requirements 1.5, 1.6, 1.7, 9.1, 9.2, 9.3, 9.7**

- [x] 2. Configure TypeScript for Next.js 15
  - Create/update tsconfig.json with Next.js-compatible settings
  - Add Next.js plugin to compilerOptions
  - Configure path aliases (@/\* for root imports)
  - Set jsx to "preserve" and enable incremental compilation
  - Include next-env.d.ts in include array
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ]\* 2.1 Write test to verify TypeScript configuration
  - **Property 8: TypeScript Configuration**
  - **Validates: Requirements 8.1, 8.2, 8.3, 8.4, 8.5**

- [x] 3. Configure Tailwind CSS with PostCSS
  - Create tailwind.config.ts with custom theme extensions
  - Add custom font families (Geist, Inter) using CSS variables
  - Add custom colors (background: gray-100)
  - Add custom animations (steam keyframes)
  - Create postcss.config.js with Tailwind and Autoprefixer
  - Create app/globals.css with Tailwind directives and smooth scroll
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.7_

- [ ]\* 3.1 Write test to verify Tailwind CSS configuration
  - **Property 4: Tailwind CSS Configuration**
  - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.7**

- [x] 4. Create Next.js configuration file
  - Create next.config.ts with TypeScript
  - Configure remote image patterns for Supabase storage
  - Add environment variable configuration for GEMINI_API_KEY
  - _Requirements: 1.2, 6.1, 9.6_

- [ ]\* 4.1 Write test to verify Next.js configuration
  - **Property 13: Image Configuration**
  - **Validates: Requirements 6.1, 6.7**

- [x] 5. Create root layout with metadata and font optimization
  - Create app/layout.tsx as root layout component
  - Import and configure Inter and Geist fonts using next/font/google
  - Set up font CSS variables for Tailwind
  - Export comprehensive metadata object with title, description, Open Graph, Twitter Card, and robots configuration
  - Add JSON-LD structured data script for Person schema
  - Apply global styles and font classes to html and body elements
  - _Requirements: 4.5, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.9, 5.10, 6.4, 6.5_

- [ ]\* 5.1 Write test to verify metadata implementation
  - **Property 5: SEO Metadata Implementation**
  - **Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.9, 5.10, 5.11**

- [ ]\* 5.2 Write test to verify font optimization
  - **Property 7: Font Optimization**
  - **Validates: Requirements 4.5, 6.4, 6.5**

- [x] 6. Create SEO files (sitemap and robots)
  - Create app/sitemap.ts with sitemap function returning home page entry
  - Create app/robots.ts with robots function allowing all user agents
  - Configure sitemap URL in robots.txt
  - _Requirements: 5.7, 5.8_

- [ ]\* 6.1 Write test to verify sitemap and robots configuration
  - **Property 6: Sitemap and Robots Configuration**
  - **Validates: Requirements 5.7, 5.8**

- [x] 7. Create home page component
  - Create app/page.tsx as the main portfolio page
  - Import all section components
  - Render all sections with proper structure and section IDs for anchor navigation
  - Add background blur effect div with Supabase image
  - Wrap content in proper semantic HTML structure
  - _Requirements: 3.3, 11.3_

- [x] 8. Migrate Header component as Client Component
  - Copy components/Header.tsx to new project
  - Add "use client" directive at the top
  - Update logo link to use "/" instead of "#"
  - Maintain mobile menu state management with useState
  - Keep all existing navigation links with anchor hrefs
  - Preserve all styling and functionality
  - _Requirements: 2.1, 2.4, 2.5, 3.1, 3.6, 11.1_

- [x] 9. Migrate static section components as Server Components
  - Copy Hero.tsx, FeaturedWork.tsx, WorkShowcase.tsx, WorkCard.tsx to components directory
  - Ensure no "use client" directive (keep as Server Components)
  - Update any import paths to use @ alias
  - Preserve all existing props, styling, and structure
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 10. Migrate remaining section components
  - Copy Capabilities.tsx, DesignSmarter.tsx, IntelligentSystems.tsx to components directory
  - Copy Testimonials.tsx, Pricing.tsx, About.tsx to components directory
  - Copy Footer.tsx to components directory
  - Ensure all remain as Server Components (no "use client")
  - Update import paths to use @ alias
  - Preserve all existing functionality and styling
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [ ]\* 10.1 Write test to verify component migration completeness
  - **Property 2: Component Migration Completeness**
  - **Validates: Requirements 2.1, 2.3, 2.4, 2.5, 7.3**

- [x] 11. Set up environment variables
  - Create .env.local file with NEXT_PUBLIC_BASE_URL and GEMINI_API_KEY
  - Create .env.example file with placeholder values
  - Update .gitignore to exclude .env\*.local files
  - Document environment variables in README
  - _Requirements: 9.4, 9.5, 9.6_

- [ ]\* 11.1 Write test to verify environment variables support
  - **Property 9: Environment Variables Support**
  - **Validates: Requirements 9.4, 9.5, 9.6**

- [x] 12. Update .gitignore for Next.js
  - Add .next directory
  - Add next-env.d.ts
  - Add .env\*.local files
  - Keep existing node_modules and other entries
  - _Requirements: 12.6_

- [ ]\* 12.1 Write test to verify file structure conventions
  - **Property 10: File Structure Conventions**
  - **Validates: Requirements 10.1, 10.2, 10.3, 10.4, 10.5, 10.6**

- [x] 13. Checkpoint - Verify application runs and builds
  - Run `npm run dev` and verify application loads at http://localhost:3000
  - Test all navigation links work with smooth scrolling
  - Test mobile menu opens and closes correctly
  - Run `npm run build` and verify build completes successfully
  - Run `npm run start` and verify production build works
  - Ensure all tests pass, ask the user if questions arise

- [ ]\* 13.1 Write test to verify navigation and routing functionality
  - **Property 3: Navigation and Routing Functionality**
  - **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6**

- [ ]\* 13.2 Write test to verify functionality preservation
  - **Property 11: Functionality Preservation**
  - **Validates: Requirements 11.1, 11.2, 11.3, 11.6, 11.7**

- [ ]\* 13.3 Write test to verify Lucide icons compatibility
  - **Property 12: Lucide Icons Compatibility**
  - **Validates: Requirements 1.8**

- [x]\* 14. Optimize images (if applicable)
  - Identify any local images that should use next/image
  - Update image imports to use Next.js Image component
  - Add width and height attributes to prevent layout shift
  - Set priority prop for above-the-fold images
  - Configure lazy loading for below-the-fold images
  - _Requirements: 6.1, 6.3, 6.7_

- [-] 15. Run performance audit and optimize
  - Run Lighthouse audit on production build
  - Verify performance score is 90 or higher
  - Check Cumulative Layout Shift (CLS) is minimized
  - Verify proper caching headers are set
  - Optimize any performance bottlenecks identified
  - _Requirements: 7.1, 7.4, 7.5_

- [ ]\* 15.1 Write test to verify performance baseline
  - **Property 14: Performance Baseline**
  - **Validates: Requirements 7.1, 7.5**

- [x]\* 16. Verify production build output
  - Run production build and verify .next directory is created
  - Verify static HTML is generated for the home page
  - Verify JavaScript bundles are optimized and minified
  - Check that build output includes all necessary assets
  - _Requirements: 12.3, 12.5_

- [ ]\* 16.1 Write test to verify production build output
  - **Property 15: Production Build Output**
  - **Validates: Requirements 12.3, 12.4, 12.6**

- [x] 17. Final validation and cleanup
  - Remove old Vite configuration files (vite.config.ts, index.html, index.tsx)
  - Remove Vite-specific dependencies from package.json
  - Update README with Next.js-specific instructions
  - Verify all functionality works end-to-end
  - Test on multiple browsers and devices
  - Document any migration notes or gotchas
  - _Requirements: 11.5_

- [x] 18. Final checkpoint - Complete migration verification
  - Run full test suite and ensure all tests pass
  - Verify all 12 requirements are met
  - Test production build locally
  - Verify SEO metadata appears correctly in browser dev tools
  - Test mobile responsiveness
  - Verify all animations and transitions work
  - Ensure all tests pass, ask the user if questions arise

## Notes

- Tasks marked with `*` are optional test tasks and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation throughout the migration
- The migration maintains all existing functionality while improving architecture
- TypeScript provides compile-time validation throughout the process
- Testing strategy uses example-based tests to verify migration requirements
