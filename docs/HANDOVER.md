# Handover — soulbliss

_3 Nov 2026_

Website for Soul Bliss, Gavin's coastal holiday rental at 21 Victor Parade, Shoal Bay NSW 2315. Next.js 16 static export (`output: 'export'` → `out/`), Tailwind, markdown blog in `content/blog`. Rebuilt from the Coos & Roos template.

## Current state
- **Site appears DOWN (checked 3 Nov 2026):** `soulbliss.com.au` does not resolve (no A record), its nameservers are still Netlify's NS1 (`dns1-4.p06.nsone.net`), and https://21victorparade.netlify.app returns 404. This matches the Sep 2026 restriction of Gavin's Netlify account, which disabled every site on it (recorded for the INEOS sites; whether soulbliss is on the same Netlify account is not recorded, but the symptoms match). Memory still describes the site as live on Netlify.
- Hosting as recorded in memory: Netlify site `21victorparade`, auto-builds from the `gjd070/21victorparade` mirror (`netlify.toml`: `npm run build`, publish `out`, Node 22). Both remotes are in sync at 210f374.
- Cloudinary fully removed; all images are local in `public/images/` (hero, garden, verandah, plus 3 gallery photos in `public/images/gallery/`).
- CI (`.github/workflows/ci.yml`): lint + build on push/PR; no env vars needed.

## Deploy (as recorded; only with Gavin's OK)
Push BOTH remotes — Netlify watches the mirror:
```bash
git push origin main && git push netlify main
```
(`netlify` remote = https://github.com/gjd070/21victorparade.git.) Adding photos: drop into `public/images/gallery/` and push both.

## Recent changes (`git log --oneline -15`)
```
210f374 chore: remove dead Cloudinary env vars from CI (Cloudinary no longer used)
7fdb484 fix: use front-of-house photo as homepage hero background
96a5de4 fix: navbar links invisible on scrolled state, use text-bark instead of text-text
06f6c77 feat: add 3 Soul Bliss gallery photos from Cloudinary 21victor folder
47aae93 chore: restore Soul Bliss hero images from Cloudinary
1932f4c feat: replace Cloudinary with static local images
6270ccc Initial Soul Bliss website — rebuilt from Coos & Roos template
```

## Open issues
- Site offline: needs new hosting (e.g. Firebase Hosting, as the INEOS sites did on 22 Sep 2026) and DNS moved off Netlify NS1 to the registrar's DNS. Registrar not recorded.
- Template leftovers: contact links use `stay@coosandroos.com.au` (`src/app/page.tsx`, `src/app/contact/page.tsx`); `package.json` name and the `docker-compose.yml` service are still `coos-and-roos`. Confirm the intended contact email with Gavin.
- README is the default create-next-app text.
- `AGENTS.md`/`CLAUDE.md`: this Next.js version has breaking changes — read `node_modules/next/dist/docs/` before coding.

## Next steps
- Decide on new hosting and restore the domain (Gavin to confirm; no deploy without his OK).
- New hero shots: Gavin was collecting them (per memory, Jun 2026).
- Booking link points to Stay Port Stephens (property "soul-bliss-at-shoal-bay").
