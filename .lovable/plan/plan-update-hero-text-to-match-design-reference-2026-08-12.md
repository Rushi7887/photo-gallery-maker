# Plan: Update Hero Text to Match Design Reference

The user wants to update the hero heading text to exactly match the provided design reference (image `file-60`). Based on the image, the text should be "Ar. Vedant Nalawade Architects." with specific typography:
- Font: Black/Heavy weight.
- Tracking: Tight.
- Line spacing: Tight.
- Color: #954842 (already partially implemented but needs full verification against the image style).
- Punctuation: A square dot/period at the end in the same color (already present as a block but may need adjustment).

## Proposed Changes

### 1. `src/routes/index.tsx`
- Update the `h1` content in the Hero section.
- Ensure the layout matches the 3-line structure seen in the image:
  - Line 1: "Ar. Vedant"
  - Line 2: "Nalawade"
  - Line 3: "Architects."
- Adjust the typography classes to ensure they match the "Ar. Vedant Nalawade Architects." visual style perfectly.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no syntax errors.

### Manual Verification
- View the preview to compare the rendered text with `file-60`.
- Check responsiveness (mobile vs desktop scaling).
