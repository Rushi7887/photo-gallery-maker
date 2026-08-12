# Plan: Reorder Portfolio Projects

The user wants to reorder the portfolio projects based on a provided screenshot (`file-22`) of a file explorer. The sequence should follow the numbering in the folder names (01, 02, etc.), excluding "3D Visualization".

## Proposed Changes

### 1. Update `src/data/projects.ts`
- Reorder the `projects` array to match the sequence from the reference image:
    1. **01. Engineering and...** (Engineering & Automotive Manufacturing)
    2. **02. Interior, Residen...** (Teak & Travertine Apartment - Interior)
    3. **03. Manufacturing...** (Manufacturing Unit - Gummidipoondi)
    4. **04. Manufacturing...** (Manufacturing Unit - Chhatrapati Sambhajinagar)
    5. **05. Sharon Prayer...** (Sharon Prayer Hall)
    6. **06. Commercial,...** (Commercial Complex)
    7. **07. Advanced...** (Advanced Manufacturing Plant - Shendra)
    8. **08. Farmhouse,...** (Farmhouse - Gangapur)
- Update the `index` property of each project to reflect its new position (01 to 08).
- Ensure the `slug` and other metadata remain correct for each project.

## Verification Plan

### Automated Tests
- Run `bun run build` to ensure no syntax or type errors were introduced.
- Verify project retrieval logic (`getProject`) still works by inspecting the updated file.

### Manual Verification
- View the project list in the preview to confirm the new order.
- Click on individual projects to ensure routes and data loading are still functional.
