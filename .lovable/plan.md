# Plan: Apply Global Background Color

The user wants to set a global background color for the entire site that matches the hero text color (#954842). 

## User Review Required

> [!IMPORTANT]
> I will update the global background color to `#954842`. Since this is a very strong/dark color, I will also adjust the text colors (foreground) to ensure the website remains readable.

## Proposed Changes

### Global Styles (`src/styles.css`)
- Update the `--background` variable to `#954842` (or its OKLCH equivalent).
- Update the `--foreground` variable to a light color (like off-white) to maintain contrast.
- Update `--secondary` and `--muted` variables to complement the new background.
- Adjust `--ink` and `--ink-foreground` if necessary.

### Home Page (`src/routes/index.tsx`)
- Remove the hardcoded `style={{ color: '#954842' }}` from the hero H1 since it will now be the same as the background. I'll change the hero text color to a contrasting light shade.

## Technical Details
- I will calculate the OKLCH equivalent of `#954842` to stay consistent with the existing Tailwind v4 configuration in `src/styles.css`.
- `#954842` in OKLCH is approximately `oklch(45% 0.12 25)`.
- I will verify that the foreground color `oklch(95.8% 0.008 85)` (current background) provides enough contrast.

## Final Verification
- I will check the Home page, Project pages, and Visualisation page to ensure readability.
