# Plan: Custom Background Colors for Specific Areas

I will update the background colors of specific sections in the project to enhance the visual hierarchy, following the architectural theme.

## Proposed Changes

### Styles
- Update `src/styles.css` to define a new color variable for the hero section background to allow for a subtle distinction.

### Components & Routes
- **Home Page (`src/routes/index.tsx`)**:
    - Change the main container background to a slightly different shade or ensure the "Works" section has a distinct background.
    - I will apply a subtle off-white/warm gray to the Hero section and a clean white to the Works section, or vice versa, to create "areas".
    - Specifically, I'll wrap the Hero in a `div` with a custom background class.

- **3D Visualisation Page (`src/routes/visualisation.tsx`)**:
    - Update the background of the gallery area to contrast with the header.

## Technical Details
- Using CSS variables in `src/styles.css` for easy adjustments.
- Applying Tailwind classes or inline styles for specific hex values if requested (currently assuming thematic colors).

## Workflow
1. Update `src/styles.css` with new background tokens.
2. Update `src/routes/index.tsx` to apply these backgrounds to the Hero and Works sections.
3. Verify the layout and transitions between "areas".
