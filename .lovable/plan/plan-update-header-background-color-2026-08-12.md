# Plan: Update Header Background Color

I will update the background color of the header to match the footer and specific area color previously set (#954842).

## Proposed Changes

### Components
- **SiteHeader (`src/components/site-chrome.tsx`)**:
    - Change the `<header>` background color from `bg-background/90` to `#954842`.
    - Update the text color to white for contrast.
    - Adjust border color if necessary to maintain visual consistency.

## Technical Details
- Apply `style={{ backgroundColor: '#954842' }}` to the header element.
- Change text classes to `text-white` and adjust `text-muted-foreground` to a lighter version for readability on dark background.

## Workflow
1. Modify `src/components/site-chrome.tsx` to update `SiteHeader`.
2. Verify the visual consistency between the header and footer.
3. Run a build to ensure no regressions.
