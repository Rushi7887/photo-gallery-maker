# Plan: Update Manufacturing Unit Cover Image

The user wants to use the uploaded image `user-uploads://file-23` (Master Layout (1).png) as the cover image for the "Manufacturing Unit" project in the portfolio.

## Proposed Changes

### 1. Create Asset Pointer
- Create an asset pointer for `user-uploads://file-23` at `src/assets/industrial/manufacturing-unit-cover.png.asset.json`.

### 2. Update `src/data/projects.ts`
- Import the new asset.
- Update the `projects` array entry for "Manufacturing Unit" (slug: `manufacturing-unit-chhatrapati-sambhajinagar`) to use this new asset as its `cover`.
- Add the image to its `gallery` as well.

## Verification Plan

### Automated Tests
- Run `bun run build` to ensure no syntax or type errors were introduced.

### Manual Verification
- View the project list on the homepage to confirm the "Manufacturing Unit" thumbnail has updated.
- Navigate to the project detail page to verify the cover and gallery.
