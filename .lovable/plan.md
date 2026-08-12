# Plan: Update Cover Image for Manufacturing Unit — Gummidipoondi

I will update the cover image for the "Manufacturing Unit — Gummidipoondi" project using the newly uploaded master layout image.

## Proposed Changes

### Assets
- The new image has been processed as `src/assets/industrial/gummidipoondi/master-layout-v2.png.asset.json`.

### `src/data/projects.ts`
- Import the new asset: `import gundiLayoutV2 from "@/assets/industrial/gummidipoondi/master-layout-v2.png.asset.json";`
- Update the "Manufacturing Unit — Gummidipoondi" project:
    - Set `cover` to `gundiLayoutV2.url`.
    - Update the gallery to include the new master layout as the first item (replacing or preceding the old one).

## Technical Details
- The existing `gundiLayout` import will be kept or replaced depending on whether the user wants both. The request specifically asks to "change cover image" to the attached file (which is a master layout). I will replace the old layout in the gallery and cover with this higher quality/updated one.

## Verification Plan
- **Syntax Check**: Ensure the import and property assignment are correct.
- **Build Check**: Run `bun run build` to verify no broken imports.
- **Visual Check**: Check the project page for "Manufacturing Unit — Gummidipoondi" to confirm the new cover is displayed.
