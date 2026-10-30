# Ducky OS beta landing page

Static GitHub Pages page at `/ducky-os/`, linked by the banner on the main site.
Run locally from the repo root with `python3 -m http.server 8765` and open
`http://localhost:8765/ducky-os/`.

The signup form deliberately fails closed until `BETA_SIGNUP_ENDPOINT` in
`signup.js` is set to the deployed HTTPS Ducky OS web route
`/api/beta/signup`. It must never contain a Twenty credential. The web route
must be configured with its server-side reCAPTCHA secret, the internal API token,
and the correct organization-bound Twenty connection, as described in the Ducky
OS backend's `docs/DUCKY-OS-BETA-SIGNUP.md`. Do not publish an unverified form.

## Checkpoint — 2026-10-30

Landing page and homepage banner render at desktop/mobile sizes; HTML parsed,
signup JavaScript syntax checked, and Git whitespace check passed. **BLOCKED**
for live signup until the public Ducky OS HTTPS URL, backend secrets/organization,
CRM People-create permission, end-to-end test, and scoped publication approval
are in place. No commit, push, or live signup was performed. Resume only on
Dustin's explicit request.

## Publication handoff — 2026-10-30

Dustin explicitly requested pushing the website updates to make them live.
Homepage banner now uses the public `/ducky-os/` path instead of a local
filesystem link. Until the documented backend prerequisites are met, signup
email/submit controls are disabled and the page visibly says signup is not
available. This publishes the preview, not a functioning signup service.
Before activation, configure and verify the backend, then enable the controls
and remove the unavailable notice. Do not claim live contact collection.

Checks: JavaScript syntax, local HTML asset/link targets, whitespace, and staged
credential-pattern scan. GitHub Pages is configured for main at repository root.
Next: verify the pushed commit deploys; no automatic follow-up work scheduled.
