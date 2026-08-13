# Plan - Fix Missing Images on Vercel

The user reported that images are not showing after deploying to Vercel. This is likely due to the way static assets are being handled in TanStack Start/Nitro when using Lovable's asset JSON format. In some environments, the JSON metadata might not be correctly resolved or the assets might not be correctly routed. I will ensure all image references use the correct URL property from the imported asset metadata and verify the build configuration.

## Proposed Changes

### 1. Project Data Refinement
- Verify `src/data/projects.ts` to ensure all asset imports are being correctly accessed via `.url`.
- Ensure that if an asset is missing or failing to import, there's a fallback or a clearer error.

### 2. Environment Compatibility Check
- Check `vite.config.ts` to ensure it's compatible with Vercel's deployment model for TanStack Start.
- The `nitro` target in `defineConfig` should ideally be set or detected correctly for Vercel.

### 3. Image Component Resilience
- Update `src/routes/home.tsx`, `src/routes/projects.$slug.tsx`, and `src/routes/visualisation.tsx` to handle potential null/undefined URLs gracefully.

## Technical Details
- The assets are managed via `.asset.json` files which contain the actual R2/Cloudflare URL.
- TanStack Start/Vite bundles these, but if the `public` path or the proxying is misconfigured in Vercel, the images might fail.
- I will check if `nitro: { preset: 'vercel' }` needs to be explicitly set if the auto-detection is failing, although `defineConfig` usually handles this.
- Most importantly, I'll ensure that the `.url` property is accessed reliably.

## Verification Plan
- Since I cannot deploy to Vercel directly, I will perform a local build (`bun run build`) to see if any assets are missing from the build output or if there are any bundling errors.
- I will use `code--read_network_requests` and `code--read_console_logs` to check for current preview errors (though the user specifically mentioned Vercel).
- I will simulate a production build and inspect the manifest.
