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
- **Components**: shadcn/ui components in `@/components/ui/`
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