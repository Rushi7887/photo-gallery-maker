# Plan — Reorganize Tabs and Add 3D Visualization

I will add the "3D Visualization" category and update the navigation to include a "Projects" (or "Works") tab and a "3D Visualization" tab in the specified sequence.

## User Review Required
> [!IMPORTANT]
> The navigation tabs will be updated to the following sequence: **Projects**, **3D Visualization**, and **Contact**.

## Proposed Changes

### Data and Assets
#### [src/data/projects.ts]
- Add "3D Visualization" to the `categories` array.
- Import the 10 new asset pointers created in the previous step.
- Add a new "3D Visualization Portfolio" project entry.

### Navigation
#### [src/components/site-chrome.tsx]
- Update the header navigation items to:
    1. **Projects** (pointing to the works/projects section on the home page)
    2. **3D Visualization** (pointing to a filtered view or a specific anchor)
    3. **Contact** (pointing to the footer)

## Technical Details
- I will ensure the "3D Visualization" link in the header correctly filters the projects grid on the home page or navigates to the appropriate section.
- The user mentioned "replace works name to projects" in a previous (flagged) message and "this is forth tab index works 3d visualisation and contact" now. I will treat "Works" as the section name and "Projects" as the label if appropriate, or use "Projects" as requested.

## Verification Plan
### Automated Tests
- Run `bun run build` to verify asset imports and TypeScript consistency.

### Manual Verification
- Verify the header navigation displays "Projects", "3D Visualization", and "Contact" in that order.
- Verify clicking "3D Visualization" in the header shows the new 3D portfolio.
- Verify all 10 uploaded images appear in the 3D Visualization gallery.
