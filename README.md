# American Honey Show Training Council Website

This project converts a Figma design into a responsive website using React and the Carbon Design System. It features a clean, professional design for the American Honey Show Training Council with dark and light theme options.

![AHSTC Website Preview](public/website-preview.png)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Design Implementation](#design-implementation)
- [Theme Toggling](#theme-toggling)
- [Project Structure](#project-structure)
- [Development Tools](#development-tools)
- [Future Enhancements](#future-enhancements)

## Overview

This project transforms a Figma design for the American Honey Show Training Council into a functional website. The implementation uses the Carbon Design System, IBM's open-source design system for products and digital experiences, to ensure a professional and accessible user interface.

## Features

- **Responsive Layout**: Works on desktop and mobile devices
- **Theme Toggling**: Switch between light (Carbon White) and dark (g-100) themes
- **Image Integration**: Images from Figma design incorporated into content
- **Carbon Components**: Leverages Carbon Design System components for UI consistency
- **Content Sections**: 
  - Navigation header
  - Upcoming Shows section with details and images
  - Recent Shows section with entry information
  - Informational sections about show help and certification
  - Call-to-action buttons
  - Footer with organization information

## Technology Stack

- **React**: UI library for building component-based interfaces
- **Vite**: Front-end build tool for fast development and optimized production builds
- **Carbon Design System**: IBM's design system for consistent UI components and patterns
- **CSS**: Custom styling to enhance the Carbon components
- **Figma MCP**: Used to extract design assets and specifications
- **Browser MCP**: Used for automated browser testing and interaction

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v7.0.0 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd figmamcpcarbon
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Design Implementation

This project implements a design from Figma, specifically focusing on the "Proposed Change 2: Add Honey Show Information to main page" design. The implementation includes:

- Header with navigation menu
- Welcome section
- Upcoming Shows section with image tiles
- Recent Shows section with image tiles
- Informational sections about show help and certification
- Call-to-action buttons
- Footer with organization information

## Theme Toggling

The website implements a theme toggle feature allowing users to switch between:

- **Dark Theme** (Carbon g-100): A darker color palette suitable for low-light environments
- **Light Theme** (Carbon White): A brighter color palette for standard use

The theme toggle affects the entire UI, including header, content, tiles, and footer.

## Project Structure

```
src/
  ├── App.css            # Main application styles
  ├── App.jsx            # Main application component
  ├── index.css          # Global styles
  ├── main.jsx           # Application entry point
  └── assets/
      └── images/        # Images for honey show tiles extracted from Figma
```

## Development Tools

### BrowserMCP Integration

This project utilized BrowserMCP, a powerful tool for browser automation and testing during development. BrowserMCP was specifically used for:

1. **Live Preview Testing**: Enabled real-time viewing of the application during development without manual browser refreshing
2. **UI Interaction Testing**: Automated testing of the theme toggle functionality and navigation elements
3. **DOM Inspection**: Facilitated examination of the rendered components and their accessibility structure
4. **Console Monitoring**: Provided immediate feedback on JavaScript errors and warnings
5. **Cross-theme Verification**: Ensured consistent rendering across both light and dark themes

BrowserMCP significantly improved the development workflow by providing immediate visual feedback and allowing for rapid iterative testing of UI components and interactions without leaving the development environment.

### Figma MCP Integration

The Figma MCP tool was instrumental in translating the design into code:

1. **Asset Extraction**: Directly downloaded image assets from the Figma design
2. **Layout Analysis**: Provided detailed information about component positioning and styling
3. **Design Inspection**: Allowed for precise measurement and color sampling from the original design
4. **Component Hierarchy**: Helped understand the intended structure of the UI components

The combination of BrowserMCP and Figma MCP created a seamless workflow from design to implementation, ensuring the final product closely matched the original design vision.

## Future Enhancements

Potential future improvements include:

- Adding more interactive elements to the shows sections
- Implementing a content management system for easy updates
- Adding analytics to track user engagement
- Enhancing accessibility features
- Building out additional pages based on other sections of the Figma design

---

Created on May 6, 2025
