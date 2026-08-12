# Plan: Add Next/Previous Navigation to 3D Visualisation Lightbox

The user wants to add "next" and "previous" buttons to the lightbox in the 3D Visualisation page to make the images "slidable" (clickable navigation).

## Proposed Changes

### 1. `src/routes/visualisation.tsx`
- Add "Next" and "Previous" navigation buttons to the lightbox overlay.
- Ensure the buttons are accessible and styled consistently with the dark architectural theme.
- Add click handlers to transition between images in the gallery.

### 2. `src/routes/projects.$slug.tsx` (For consistency)
- Apply the same "Next" and "Previous" buttons to the project details lightbox for a unified experience across the site.

## Technical Details
- Use absolute positioning for the navigation buttons (left/right sides of the screen).
- Use icons or simple text (e.g., "←" and "→") that fit the minimalist aesthetic.
- Buttons should prevent event propagation to avoid closing the lightbox when clicked (since the overlay itself has a `setLightbox(null)` click handler).

## Verification Plan
- **Manual Verification**:
    - Open the 3D Visualisation page and click an image.
    - Click the "Next" button and verify it shows the next image.
    - Click the "Previous" button and verify it shows the previous image.
    - Repeat the same for a project details page.
- **Automated Verification**:
    - Run `bun run build` to ensure no build regressions.
