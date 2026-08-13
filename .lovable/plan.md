# Plan - Move image 15 to the end of 3D Visualization gallery

I will update the project data to move the 15th image in the "3D Visualization Portfolio" gallery to the last position.

## Proposed Changes

### `src/data/projects.ts`

- Identify the gallery array in the "3D Visualization Portfolio" project (slug: `3d-visualization-portfolio`).
- Locate the 15th item (index 14) which currently corresponds to `{ src: housingPune15.url, caption: "Housing, Pune" }`.
- Move this item to the end of the `gallery` array.

## Verification Plan

### Automated Tests
- I will check the syntax of the modified file using `code--exec`.
- I will verify that the `gallery` array for the 3D Visualization project now has the specified item at the last index.

### Manual Verification
- I will view the 3D Visualization page in the preview to confirm the images are correctly ordered.
