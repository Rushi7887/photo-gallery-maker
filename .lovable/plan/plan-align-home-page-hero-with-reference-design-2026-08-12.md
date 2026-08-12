# Plan: Align Home Page Hero with Reference Design

Update the home page hero section to match the uploaded design reference (file-57), focusing on typography, layout, and a small visual accent.

## User-facing changes
- **Hero Title Update**: Change the hero heading to "Vedant Nalawade Architects." with a distinct red dot at the end.
- **Top Metadata Layout**: Ensure the labels for "Architect" and location are appropriately styled above the title.
- **Description Update**: Refine the introductory text to match the reference: "Residential, industrial, interior and landscaping design — drawn with discipline, built with material honesty and made for the way people actually live and work."

## Technical details
- **File**: `src/routes/index.tsx`
- **Typography**: The heading will be styled with `font-black` and a tracking value to match the reference's tight letter spacing.
- **Visual Accent**: Add a `span` with a specific background color (`bg-[#b85c4a]` or similar) to the period at the end of the title.
- **Layout**: Adjust margins and text sizes to match the bold architectural aesthetic in the screenshot.
