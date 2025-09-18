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
  - Custom components in `@/components/` (Header, Footer)
- **Pages**:
  - `/` - Homepage with project overview
  - `/candidates` - Candidate information (coming soon)
  - `/voting-info` - Voting registration and polling information
  - `/voter-education` - Educational content about voting rights
  - `/feedback` - User feedback form and contact information
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

- `biome.json`: Linting, formatting, and code organization rules
- `components.json`: shadcn/ui configuration
- `next.config.ts`: Next.js configuration (minimal setup)
- `tsconfig.json`: TypeScript configuration with path aliases

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

## Upcoming Features (Implementation Priority)

### Phase 1 (Next):
- Election countdown timer (March 5, 2026)
- Enhanced SEO with structured data
- Improved accessibility features

### Phase 2:
- Multi-language support (next-intl)
- Google Forms integration for feedback
- Candidate database structure

### Phase 3:
- Dynamic candidate profiles
- Search and filter functionality
- Interactive features for candidate comparison