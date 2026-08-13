# Plan: Update 4th Project — Manufacturing Unit Chhatrapati Sambhajinagar

The user wants to update the 4th project in `src/data/projects.ts` (currently "Manufacturing Unit" in the Industrial category) with a new title, status, scope, and description.

## Changes

### 1. `src/data/projects.ts`

Update the project object with `slug: "manufacturing-unit-chhatrapati-sambhajinagar"`:
- **title**: "Manufacturing Unit" → **"Phase 2 Manufacturing Unit Extension"**
- **status**: "In progress" → **"Proposed"**
- **scope**: "Architecture · Structural Design · Industrial Planning" → **"Architectural Planning & Design Services"**
- **summary**: Replace with: **"This proposed Phase 2 extension introduces a 50×60 meter industrial shed designed to expand manufacturing capacity within the MIDC zone. The facility integrates mezzanine flooring, dedicated utility platforms, and optimized docking areas to support seamless production workflows and material handling operations."**
- **meta**: Update to reflect the new title while keeping the location.

## Verification Plan

- **Syntax Check**: Read `src/data/projects.ts` back after editing to confirm the object is valid.
- **Build Check**: Run `bun run build` to ensure no TypeScript or build regressions.
- **Content Verification**: Confirm the specific 4th project fields match the user's request.
