# Plan: Update "Manufacturing Unit — Tamil Nadu" Project Details

The user wants to update the third project in `src/data/projects.ts` (currently "Manufacturing Unit — Tamil Nadu") with new naming, scope, and description details.

## Changes

### 1. `src/data/projects.ts`

Update the project object with `slug: "manufacturing-unit-gummidipoondi"`:
- **title**: "Manufacturing Unit — Tamil Nadu" → **"Industrial manufacturing Facility"**
- **scope**: "Architecture · Master Planning · Industrial Design" → **"Internal Planning & Full-plant Modeling and Visualization"**
- **summary**: Replace existing description with: **"This on-going industrial project focuses on the internal planning and spatial optimization of an existing manufacturing shed measuring 100×42 meters in Gummidipoondi, Tamil Nadu. The primary objective is to design and implement an efficient storage racking system that maximizes rack capacity while ensuring safe and functional gangways for forklift operations and personnel movement."**
- **meta**: Update to reflect the new title/type while keeping the location.

## Verification Plan

- **Syntax Check**: Verify `src/data/projects.ts` remains a valid TypeScript file.
- **Build Check**: Run `bun run build` to ensure no regressions.
- **Content Verification**: Read the file back to confirm the specific project was updated correctly.
