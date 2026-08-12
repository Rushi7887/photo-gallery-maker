# Plan: Change Hero Text Color

The user wants to change the color of the hero text ("Ar. Vedant Nalawade Architects") on the homepage to a specific hex code: `#954842`.

## Proposed Changes

### Homepage
#### [src/routes/index.tsx](src/routes/index.tsx)
- Update the `h1` tag in the Hero section to apply the color `#954842`.
- Since the project uses Tailwind v4, I will apply this as an inline style or a utility if defined, but for a specific custom hex code like this, an inline style is the most direct way to satisfy the requirement without modifying the global theme for just one element.

## Technical Details
- Change `className` to include the specific color or use the `style` prop.
- Verify with a build check.
