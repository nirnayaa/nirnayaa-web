# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nirnaya is a web and mobile app to increase voter awareness in Nepal, helping citizens understand candidates, their promises, and make informed voting decisions. This repository contains the webapp portion, currently a POC with a simple education module.

## Technology Stack

- **Framework**: Next.js 15.5.3 with App Router and React 19
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Linting & Formatting**: Biome (replaces ESLint + Prettier)
- **Build**: Turbopack for faster development and builds
- **UI Components**: shadcn/ui with New York style, Lucide icons
- **Fonts**: Geist Sans and Geist Mono from next/font/google

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm run start

# Lint and check code (Biome replaces ESLint)
npm run lint

# Format code (Biome replaces Prettier)
npm run format
```

## Project Structure

- **App Router**: Uses Next.js App Router with `src/app/` directory
- **Components**:
  - shadcn/ui components in `@/components/ui/`
  - Custom components in `@/components/` (Header, Footer, ElectionCountdown, StructuredData)
- **Pages**:
  - `/` - Homepage with project overview and election countdown
  - `/candidates` - Candidate information (coming soon)
  - `/voting-info` - Voting registration and polling information
  - `/voter-education` - Educational content about voting rights
  - `/feedback` - User feedback form and contact information
- **Data Layer**:
  - `@/data/constants.ts` - All project constants (election date, organization info, URLs, feature flags)
  - `@/data/schema.ts` - Structured data schemas for SEO (JSON-LD)
- **Utilities**: Shared utilities in `@/lib/` (includes `cn()` for Tailwind class merging)
- **Path Aliases**: `@/*` maps to `./src/*`

## Code Style & Linting

- **Biome Configuration**: Uses Biome for both linting and formatting instead of ESLint/Prettier
- **Formatting**: 2-space indentation, space-based indenting
- **TypeScript**: Strict mode enabled with ES2017 target
- **Next.js + React Rules**: Biome configured with Next.js and React recommended rules

## UI Component System

- **shadcn/ui**: Pre-configured with New York style and CSS variables
- **Tailwind**: Uses neutral base color with CSS variables for theming
- **Icons**: Lucide React for consistent iconography
- **Utilities**: `cn()` function for conditional class merging (clsx + tailwind-merge)

## Key Configuration Files

- `biome.json`: Linting, formatting, and code organization rules (excludes .claude folder)
- `components.json`: shadcn/ui configuration
- `next.config.ts`: Next.js configuration (minimal setup)
- `tsconfig.json`: TypeScript configuration with path aliases

## Development Workflow

### Code Quality
- **Linting**: Run `npm run lint` before commits - must pass with zero errors
- **Formatting**: Use `npm run format` or `npx biome check --write` for auto-fixes
- **Import Organization**: Biome automatically organizes imports alphabetically

### Commit Strategy
- Commit each phase separately for clean git history
- Use descriptive commit messages with implementation details
- Always run lint check before committing
- Include both technical changes and user-facing improvements in commit descriptions

### Component Architecture
- Use shadcn/ui components as base building blocks
- Custom components in `/components` directory
- Page-specific components can be co-located with pages if needed
- Maintain consistent props and styling patterns

### Data Management
- **Centralized Constants**: All configuration data is in `@/data/constants.ts`
- **Structured Data**: SEO schemas are in `@/data/schema.ts`
- **Feature Flags**: Control feature availability through `FEATURES` constant
- **Single Source of Truth**: Election date, organization info, and URLs are centralized
- **Easy Updates**: Change election date or other constants in one place to update entire app

## Development Approach

**Target Audience**: Nepali citizens with varying levels of tech literacy
- **Accessibility First**: Simple, clear design for users who may struggle with complex interfaces
- **Mobile-Responsive**: Mobile-first approach for widespread smartphone usage in Nepal
- **Static Content**: Currently all pages are static for fast loading and easy deployment
- **SEO Optimized**: Comprehensive metadata for search engine visibility

## Content Strategy

- **Multi-language Support**: Planned for Nepali and English
- **Coming Soon Placeholders**: Used for features not yet implemented
- **Official Links**: External links to government resources (Election Commission of Nepal)
- **Educational Focus**: Emphasis on voter education and democratic participation

## Implementation Status

### ✅ Phase 1 Complete - Foundation & Navigation:
- Responsive header navigation with mobile menu
- Professional footer with Nepali tagline
- Complete page structure for all main routes
- SEO-optimized metadata and OpenGraph tags
- Mobile-first responsive design
- Dark mode support throughout
- Accessibility-focused for varying literacy levels

### ✅ Phase 2 Complete - Enhanced Features:
- Real-time election countdown timer with Kathmandu timezone
- Centralized data management system (`@/data/constants.ts` and `@/data/schema.ts`)
- Comprehensive structured data markup for SEO optimization
- Google Forms integration framework (ready for form URL)
- Feature flag system for controlled rollouts

### 🚧 Phase 3 (Next Priority):
- Multi-language support (next-intl) - Nepali and English
- Performance optimizations and bundle analysis
- Enhanced accessibility features and screen reader support
- Progressive Web App (PWA) capabilities

### 📋 Phase 4 (Future):
- Dynamic candidate database structure
- Search and filter functionality for candidates
- Interactive candidate comparison features

### 📋 Phase 5 (Long-term):
- Real candidate data integration
- User authentication and personalization
- Advanced analytics and tracking
- Mobile app considerations

## Technical Notes

### Date/Time Handling
- Election date: March 5, 2026
- Use Kathmandu timezone (Asia/Kathmandu, UTC+5:45) for countdown timer
- Consider daylight saving time changes if applicable

### Accessibility Requirements
- Large, clear fonts for low-literacy users
- High contrast color schemes
- Simple navigation patterns
- Screen reader compatibility
- Keyboard navigation support

### Design Consistency & Color Scheme Requirements
**CRITICAL**: Always maintain consistent visual identity across all pages and components

#### Primary Color Scheme
- **Primary Blue**: `text-blue-600`, `bg-blue-600` for main elements, badges, buttons
- **Secondary Blue**: `text-blue-500`, `bg-blue-100`, `border-blue-200` for subtle elements
- **Accent Colors**:
  - Blue variants: `bg-blue-50`, `border-blue-300`, `hover:bg-blue-700`
  - Green: `text-green-600` for success states and checkmarks
  - Yellow: `text-yellow-600` for warning/info icons (lightbulb, etc.)
- **Text Colors**:
  - Primary: `text-gray-900` for headings
  - Secondary: `text-blue-500` for metadata, timestamps, small text
  - Descriptions: `text-gray-600` for card descriptions and body text

#### Component Styling Standards
**shadcn/ui Components**: Always apply blue theme overrides to maintain brand consistency
- **Cards**: Add `border-blue-200` to all Card components
- **Buttons**:
  - Outline buttons: `border-blue-300 text-blue-600 hover:bg-blue-50`
  - Primary buttons: `bg-blue-600 hover:bg-blue-700`
- **Badges**:
  - Primary: `bg-blue-600` (for active/selected states)
  - Secondary: `bg-blue-100 text-blue-700` (for category tags)
- **Inputs**: `border-blue-300 focus:border-blue-500`
- **Search sections**: Use `bg-blue-50 border-blue-200` for background containers

#### Icon Color Standards
- **Functional icons**: `text-blue-600` (default)
- **Status indicators**:
  - Success/Complete: `text-green-600`
  - Warning/Info: `text-yellow-600`
  - Error: `text-red-600`
- **Metadata icons**: `text-blue-500` (clocks, calendars)

#### Background Patterns
- **Featured sections**: `bg-blue-50` with `border-blue-200`
- **Newsletter/CTA sections**: `bg-blue-50` with blue text variants
- **Cards**: White background with blue borders and hover effects

#### Hover & Interactive States
- **Cards**: `hover:shadow-lg transition-shadow duration-200`
- **Links/Titles**: `group-hover:text-blue-600 transition-colors`
- **Buttons**: Appropriate blue hover states for each variant
- **Badges**: `hover:bg-blue-200` for interactive categories

#### Implementation Rules
1. **NEVER** use default gray/neutral colors for primary elements
2. **ALWAYS** apply blue theme overrides when using shadcn/ui components
3. **MAINTAIN** color consistency when adding new pages or components
4. **TEST** color contrast for accessibility compliance
5. **PRESERVE** semantic color meanings (green=success, yellow=warning, etc.)

#### Quick Reference: Replace These Default Colors
- `text-gray-500` → `text-blue-500` (metadata, timestamps)
- `border-gray-200` → `border-blue-200` (card borders)
- `bg-gray-50` → `bg-blue-50` (section backgrounds)
- Default Badge colors → Blue-themed variants
- Default Button colors → Blue-themed variants

### Performance Considerations
- Static generation for all current pages
- Image optimization for any future media content
- Minimal JavaScript bundle size
- Fast loading on slow connections (common in Nepal)

### Internationalization Prep
- Text content is currently in English with some Nepali elements
- Future i18n implementation should use next-intl
- Consider right-to-left text support if needed
- Cultural sensitivity in content and design choices

## Deployment

### GitHub Pages Deployment
The application is configured for automatic deployment to GitHub Pages using static export.

#### Configuration
- **Static Export**: Configured via `output: 'export'` in `next.config.ts`
- **Base Path**: Uses `/nirnayaa-web` for GitHub Pages subdirectory
- **Image Optimization**: Disabled (`unoptimized: true`) for static hosting
- **Trailing Slash**: Enabled for better GitHub Pages compatibility

#### Deployment Process
1. **Automatic**: Push to `main` branch triggers GitHub Actions workflow
2. **Manual**: Run `npm run deploy` locally to build static files
3. **Files**: Static files are generated in `out/` directory

#### GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Triggers**: Push to main branch
- **Process**:
  1. Install dependencies
  2. Run linting checks
  3. Build static export
  4. Deploy to GitHub Pages
- **Permissions**: Requires Pages write permission and id-token

#### Local Testing
```bash
# Build for production
npm run build

# Test locally (files in out/ directory)
npm run deploy
```

#### GitHub Repository Settings
To enable GitHub Pages deployment:
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. **For Organization Repos**: The site will be available at: `https://organization-name.github.io/repository-name/`
4. **For User Repos**: The site would be at: `https://username.github.io/repository-name/`

#### Organization vs User Repository
- **Organization repo** (current setup): `https://nirnaya.github.io/nirnayaa-web/`
- Configuration automatically handles the correct base path
- Update `GITHUB_ORGANIZATION` and `GITHUB_REPOSITORY` in `next.config.ts` if different

#### Important Notes
- All pages are pre-rendered as static HTML
- No server-side features (API routes, middleware)
- Images and assets are served from the same domain
- `.nojekyll` file prevents Jekyll processing