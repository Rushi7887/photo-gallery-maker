# Plan: Openable images in 3D Visualisation

The user wants to make images in the **3D Visualisation** page openable (likely a lightbox), similar to the architectural project pages.

## Proposed Changes

### 1. `src/routes/visualisation.tsx`
- Import `useState` and `useEffect` from `react`.
- Implement a `lightbox` state to track the currently selected image index.
- Add a keyboard listener for `Escape`, `ArrowRight`, and `ArrowLeft` keys to navigate the lightbox.
- Wrap the gallery images in a `button` to trigger the lightbox.
- Add the Lightbox UI (modal) at the end of the component, matching the style used in `src/routes/projects.$slug.tsx`.

## Verification Plan

### Automated
- Run `bun run build` to ensure no syntax or type errors were introduced.

### Manual
- Verify that clicking an image in the 3D Visualisation page opens the lightbox.
- Verify that keyboard navigation (Esc, Left, Right) works in the lightbox.
- Verify that clicking outside the image closes the lightbox.