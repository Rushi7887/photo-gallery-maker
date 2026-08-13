# Plan: Resolve SSL/Privacy Error Message

The user is encountering a "Your connection is not private" (NET::ERR_CERT_AUTHORITY_INVALID) error message when trying to access the site via `vnarchitect.in`. This is a DNS/SSL configuration issue outside of the application code itself, but I will provide instructions and updates to help resolve it.

## User-facing changes
- **SEO & Social Metadata**: Update all meta tags to use the production URL `https://vnarchitect.in` to ensure consistent indexing and sharing once the SSL issue is resolved.
- **Documentation/Instructions**: Add a note for the user on how to fix this in their domain provider (GoDaddy/Namecheap/etc) and Lovable dashboard.

## Technical details
1. **Update Site Metadata**: Modify `src/routes/__root.tsx` and `src/routes/home.tsx` to ensure `og:url` and canonical links (if any) point to the custom domain.
2. **Verification**: I will check if there are any hardcoded `http://` links that might be causing mixed content warnings, though the primary issue is the certificate itself.
3. **User Instruction**: Since I cannot manage external DNS/SSL certificates directly, I will explain that the user needs to:
   - Ensure the `A` record points to the Lovable IP.
   - Ensure the `CNAME` for `www` is correctly set.
   - Wait for the SSL certificate to be provisioned by Lovable Cloud (which happens automatically once DNS is correct).

## Permanent Solution
- The SSL error usually occurs if the DNS record was recently changed and the certificate hasn't finished provisioning, or if the domain is being accessed via a protocol/subdomain not covered by the certificate.
- I will verify the `src/routes/__root.tsx` file for any metadata that could be improved.
