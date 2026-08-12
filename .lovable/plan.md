# Plan: Add "Ar." prefix to "Vedant Nalawade"

The user wants to add the architectural prefix "Ar." before the name "Vedant Nalawade" across the site to maintain professional branding.

## User Review Required
> [!IMPORTANT]
> I will apply "Ar. Vedant Nalawade" to all occurrences of the name (Header, Hero section, and SEO metadata). Please confirm if you want this prefix applied anywhere else.

## Proposed Changes

### Header
#### [src/components/site-chrome.tsx](src/components/site-chrome.tsx)
- Update the logo text from "VN Architects — Vedant Nalawade" to "VN Architects — Ar. Vedant Nalawade".

### Homepage
#### [src/routes/index.tsx](src/routes/index.tsx)
- Update the hero section's H1 text from "Vedant Nalawade Architects" to "Ar. Vedant Nalawade Architects".
- Update the page metadata (title and description) to include the "Ar." prefix.

## Technical Details
- The changes are strictly text-based within JSX and metadata objects.
- No changes to component structure or CSS are required.
- I will verify each change with a build check.
