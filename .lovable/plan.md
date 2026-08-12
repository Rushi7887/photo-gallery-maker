# Plan: Change Tab Name Colors

The user wants to change the text color for the "Selected Projects" heading (on the Index page) and the "Visualising the Future" heading (on the Visualisation page) to match the project's accent color (#954842).

## Proposed Changes

### Index Page (`src/routes/index.tsx`)
- Update the `h2` heading "Selected Projects" to use the accent color `#954842` for the "Projects" part or the whole heading. I will apply it to the whole heading for consistency.

### Visualisation Page (`src/routes/visualisation.tsx`)
- Update the `h1` heading "Visualising the Future." to use the accent color `#954842`.

## Technical details
- I will apply the inline style `style={{ color: '#954842' }}` to the respective headings, matching the style already used for the main hero text.

## Verification Plan
- I will check the preview to confirm the color change.
- I will run a build check to ensure no syntax errors were introduced.
