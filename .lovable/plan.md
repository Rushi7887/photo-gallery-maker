# Plan - Implement Manifesto Layout and Text

I will update the "Manifesto" section on the home page to match the provided reference image layout, including the tools list placement and the specific quote text.

## User Review Required

> [!IMPORTANT]
> The reference image shows a "Tools" list (AutoCAD, SketchUp, etc.) positioned above the manifesto quote. I will move the existing tools list from its current full-width bar to this new position above the quote.

## Proposed Changes

### 1. Home Page (`src/routes/index.tsx`)
- Modify the "Manifesto" section layout:
    - Move the `tools` list (AutoCAD, SketchUp, etc.) inside the manifesto section, positioned at the top in a horizontal row.
    - Style the tools list with a subtle background and monospace font as seen in the reference.
    - Update the manifesto quote text to match the reference exactly: "Every plot has a logic of its own — light, wind, road and family. Our work is to listen first, then draw a building that belongs there."
    - Ensure "then draw a building that belongs there" is highlighted (using the accent color).
    - Update the author signature to: "- VEDANT NALAWADE, V.N." (all caps as shown in the visual).

### 2. Styling (`src/styles.css` if needed)
- Ensure the layout matches the clean, minimalist look with appropriate spacing between the tools header and the quote.

## Verification Plan

### Automated Tests
- Build check: `bun run build` to ensure no syntax errors.

### Manual Verification
- View the home page in the preview.
- Verify the tools list is now above the quote.
- Verify the quote text and formatting matches the reference.
- Verify the author name is in caps.
