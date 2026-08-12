# Plan: Add Slider Navigation to Project and Visualization Lightboxes

The user wants to add slider navigation (Next/Previous buttons) to the images in the lightboxes for both the Project Detail page and the 3D Visualization page.

## User Review Required

> [!IMPORTANT]
> I will be adding clickable arrow buttons to the sides of the full-screen images so you can easily browse through the gallery.

## Proposed Changes

### Project Detail Page (`src/routes/projects.$slug.tsx`)
- Import `ChevronLeft` and `ChevronRight` from `lucide-react`.
- Update the lightbox UI to include fixed "Next" and "Previous" buttons.
- Ensure the buttons stop propagation of click events to prevent the lightbox from closing.

### Visualization Page (`src/routes/visualisation.tsx`)
- Import `ChevronLeft` and `ChevronRight` from `lucide-react`.
- Update the lightbox UI to include fixed "Next" and "Previous" buttons.
- Ensure the buttons stop propagation of click events.

## Technical Details

- Use absolute positioning for the arrow buttons within the lightbox container.
- Use `e.stopPropagation()` on button clicks to distinguish between "change image" and "close lightbox" actions.
- Style the buttons with hover effects to match the dark architectural theme.

## Alternative Considerations
- We could implement a full swiper/slider library, but since we already have a robust lightbox with keyboard navigation, adding explicit buttons is more efficient and maintains the current lightweight architecture.
