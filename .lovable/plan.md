# Plan — Add 3D Visualization Tab

I will add a new category "3D Visualization" and a corresponding project that showcases the 10 uploaded renders.

## User Review Required
> [!IMPORTANT]
> The images will be added to a new project named "3D Visualization Portfolio" under a new "3D Visualization" tab on the homepage.

## Proposed Changes

### Data and Assets
#### [src/data/projects.ts]
- Add "3D Visualization" to the `categories` array.
- Import the 10 new asset pointers created from the uploaded files.
- Add a new project entry at the end of the `projects` array with:
    - Title: "3D Visualization Portfolio"
    - Category: "3D Visualization"
    - Gallery: All 10 uploaded renders with appropriate captions based on filenames.

## Technical Details
- The new category will automatically appear as a filter tab on the homepage due to the existing dynamic category rendering.
- No changes are needed to the routing or UI components as they already handle new categories and projects dynamically.

## Verification Plan
### Automated Tests
- Run `bun run build` to ensure all asset imports are valid and the TypeScript types match.

### Manual Verification
- View the homepage and verify the "3D Visualization" tab appears.
- Click the tab and verify the "3D Visualization Portfolio" project is visible.
- Click the project and verify all 10 images are rendered in the gallery with captions.
