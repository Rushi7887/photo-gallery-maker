# Plan: Move 3D Visualisation to a Dedicated Page

I will move the "3D Visualization" project from the homepage grid to its own dedicated page.

## Proposed Changes

### 1. `src/routes/visualisation.tsx` (New File)
- Create a new route for 3D Visualisation.
- This page will display the "3D Visualization Portfolio" content directly.
- It will feature the same high-end grid as the homepage but focused purely on the 3D work.
- Add SEO metadata specific to architectural visualization.

### 2. `src/data/projects.ts`
- Remove "3D Visualization" from the `categories` array.
- Keep the `projects` entry for "3D Visualization Portfolio" but mark it as a "Featured" or special project so it doesn't appear in the general "Works" list on the home page.
- Update `projects` filtering logic if necessary.

### 3. `src/components/site-chrome.tsx`
- Update the header navigation.
- Change the "03 3D Visualisation" link from a hash link (`to="/" hash="works"`) to a direct route link (`to="/visualisation"`).
- Remove the custom event dispatch since it's now a real page.

### 4. `src/routes/index.tsx`
- The homepage will now only show Architectural projects (Residential, Industrial, Commercial, Interior, Others).
- Remove the "set-filter" listener as it's no longer needed for header navigation.

## Technical Details
- **Route Architecture**: Using TanStack Router's file-based routing.
- **Component Reuse**: Leveraging `SiteHeader`, `SiteFooter`, and existing gallery patterns to maintain visual consistency.
- **Navigation**: Clean URL transition from `/` to `/visualisation`.

## Verification Plan
1. **Manual Check**: Verify "03 3D Visualisation" in the header navigates to the new page.
2. **Manual Check**: Verify the homepage no longer shows the "3D Visualization" tab or project in the grid.
3. **Build Check**: Run `bun run build` to ensure no broken links or route errors.
4. **Console Log**: Check for any navigation or rendering errors in the preview.
