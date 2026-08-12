# Plan — Update Interior Project and Hero Image

I will update the "Interior" project with the newly uploaded images and set the project's living room image as the main hero on the landing page.

## Proposed Changes

### `src/data/projects.ts`
- Import the new asset pointers for the interior project.
- Update the `Teak & Travertine Apartment` (Interior category) project:
    - Set `cover` to the new living room image (`living-room-sofa`).
    - Update the `gallery` with all 6 new images and appropriate captions.
- Update `heroImage` to use the same `living-room-sofa` asset.

## Verification Plan

### Automated Tests
- I will check the build to ensure the new imports are valid.
- I will read the file back to verify the structure.

### Manual Verification
- I will check the preview to confirm the hero image on the home page has changed.
- I will navigate to the "Teak & Travertine Apartment" project page to verify the new gallery images are visible.
