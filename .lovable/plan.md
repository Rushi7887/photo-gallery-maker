# Plan — Add Manufacturing Unit, Gummidipoondi

Add the new "Manufacturing Unit — Gummidipoondi" project to the Industrial category in the portfolio.

## Proposed Changes

### Portfolio Data
#### [src/data/projects.ts](src/data/projects.ts)
- Import the new asset pointers for the Gummidipoondi project.
- Add the new project entry to the `projects` array with the following details:
  - Title: Manufacturing Unit — Gummidipoondi
  - Category: Industrial
  - Status: In progress
  - Location: Gummidipoondi
  - Include the 4 new images (Master Layout, View 01, View 02, View 03) in the gallery.
- Update indices of all projects to maintain correct ordering.

## Verification Plan
### Automated Tests
- Run `bun run build` to ensure no broken imports or syntax errors.
- Check console for any runtime errors during page load.

### Manual Verification
- Navigate to the Industrial category on the homepage and verify the new project appears.
- Click on the "Manufacturing Unit — Gummidipoondi" project to ensure the detail page loads and the gallery works.
