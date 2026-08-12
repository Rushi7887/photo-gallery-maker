# Plan: Add Floor Plan to Sharon Prayer Hall

I will add the newly uploaded floor plan to the "Sharon Prayer Hall" project gallery.

## Proposed Changes

### Assets
- The new image has been processed as `src/assets/religious/sharon-hall-plan.png.asset.json`.

### `src/data/projects.ts`
- Import the new asset: `import sharonHallPlan from "@/assets/religious/sharon-hall-plan.png.asset.json";`
- Update the "Sharon Prayer Hall" project gallery (lines 161-166) to include the new plan.

## Technical Details
- The image will be added to the `gallery` array with the caption "Floor Plan — interior layout and seating arrangement".

## Verification Plan
- **Syntax Check**: Ensure the import and gallery update are correct.
- **Build Check**: Run `bun run build`.
- **Visual Check**: Inspect the "Sharon Prayer Hall" project page to confirm the new plan appears in the gallery.
