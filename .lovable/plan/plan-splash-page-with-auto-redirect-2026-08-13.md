# Plan: Splash Page with Auto-Redirect

I will implement a splash page that appears before the home page. It will feature a branded animation and automatically redirect to the portfolio home page after 3.5 seconds.

### User Impact
Visitors will first see a clean, professional intro screen with the architect's branding before being smoothly transitioned to the main portfolio content.

### Technical Details

**Files to modify:**
- `src/components/site-chrome.tsx`: Update navigation links to point to `/home` instead of `/`.
- `src/routes/home.tsx`: Move current `src/routes/index.tsx` logic here.
- `src/routes/index.tsx`: Implement the splash page with `useEffect` timer for redirect.
- `src/routes/__root.tsx`: (Verification only) Ensure routing context is correct.

**Implementation Steps:**
1.  **Backup/Move**: Copy `src/routes/index.tsx` content to a new file `src/routes/home.tsx`.
2.  **Splash Logic**: Update `src/routes/index.tsx` to be a minimal, high-impact splash screen.
    - Use Framer Motion (if available) or simple CSS transitions for a "fade-in, fade-out" effect.
    - Title: "Ar. Vedant Nalawade Architects." with the red dot accent.
    - Theme: Dark background, consistent with the brand.
    - Auto-redirect using `useNavigate` from `@tanstack/react-router` after 3500ms.
3.  **Navigation Update**: Change all header/footer links that point to the "Index" to point to `/home` so the splash doesn't repeat unnecessarily when navigating the site.
4.  **Verification**: Confirm the flow works: Splash -> Home.
