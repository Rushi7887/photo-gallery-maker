# Plan: Immersive Architectural Splash Page Redesign

I will redesign the splash page into a premium, high-energy, modern architectural experience. This will include full-screen immersive visuals, staggered animations, and a sophisticated design language.

### User Impact
Visitors will be greeted with a dramatic, high-end architectural intro that immediately communicates creativity and professional excellence, setting the tone for the entire portfolio.

### Technical Details

**Files to modify:**
- `src/routes/index.tsx`: Completely redesign the splash page.
- `src/routes/home.tsx`: Minor adjustments if needed to ensure smooth entry from splash.
- `src/styles.css`: Add custom utilities for grid lines and subtle architectural patterns if needed.

**Design Features:**
- **Hero**: 100vh section with a staggered slideshow of high-quality architectural images from the project data.
- **Overlay**: Dark glassmorphism with subtle technical grid lines and coordinate markers.
- **Typography**: Large, bold architectural headings ("WE SHAPE SPACES. WE CREATE EXPERIENCES.") with refined supporting text.
- **Motion**: 
  - Framer Motion (or simple CSS transitions if Framer is absent) for staggered text reveals.
  - Image scale/zoom effects.
  - Smooth page-load transitions.
- **CTA**: Two premium buttons ("EXPLORE OUR WORK", "START A PROJECT") with modern hover states.
- **Navigation**: Transparent overlay nav bar that integrates with the hero.

### Implementation Steps

1.  **Enhance `src/routes/index.tsx`**:
    - Add a background slideshow using `heroSlideshow` images.
    - Implement the "WE SHAPE SPACES..." copy.
    - Add the technical architectural details (grid, coordinates) using CSS/SVG.
    - Implement staggered animations for the logo and text.
    - Add the new CTA buttons.
2.  **Navigation Integration**: Ensure the splash page has a clean, high-end header.
3.  **Refine Redirection**: Keep the auto-redirect but allow it to be longer (5-7 seconds) to let the user enjoy the animation, while making the "Explore" button lead to `/home` immediately.
4.  **Verification**: Confirm responsiveness and visual impact.
