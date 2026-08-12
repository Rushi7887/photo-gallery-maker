# Plan: Automatic Hero Image Slideshow

Implement an automatic image slideshow for the home page hero section that cycles through selected project images every 5 seconds.

## User-facing changes
- **Automatic Transitions**: The home page hero image will now change automatically every 5 seconds.
- **Visual Variety**: Users will see a revolving gallery of the studio's best work immediately upon landing.
- **Smooth Fades**: Transitions between images will be smooth to maintain the architectural portfolio's elegant feel.

## Technical details
- **File**: `src/routes/index.tsx`
- **Logic**: Use `useState` to track the current image index and `useEffect` with `setInterval` to advance the index every 5000ms.
- **Assets**: Create a new array of featured images (e.g., `heroImages`) in `src/data/projects.ts` or derived from existing project covers.
- **UI**: Wrap the hero image in an animation-ready container (like Framer Motion's `AnimatePresence` or a simple CSS transition) to ensure smooth cross-fades.

## Files to touch
1. `src/data/projects.ts`: Export a list of images for the slideshow.
2. `src/routes/index.tsx`: Implement the slideshow logic and transition UI.
