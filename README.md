# PLAYWAN Gaming

Corporate site for PLAYWAN Gaming. Next.js (static generation) on Vercel, four locales: `ja` (default, no prefix), `en`, `zh-cn`, `zh-tw`.

## Develop

```bash
cp .env.example .env.local
npm install
npm run dev
```

Set `NEXT_PUBLIC_FORMSPREE_ID` to the Formspree form id. Until it is set, the contact form shows a configuration message and does not send.

## Brand

Use files in `public/brand/` as supplied. Do not regenerate or distort the logo. Replace `playwan-logo.png` / `playwan-mark.png` when the official SVG arrives.

Brand green extracted from the supplied logo: `#70a860`.

## Case studies

`src/data/cases.ts` contains public placeholders only. Unpublished names must never enter production HTML, JS, or JSON. Use a gitignored `src/data/cases.preview.ts` for internal preview.

## Launch / DNS

1. Deploy to Vercel and confirm Preview URLs for all four languages.
2. Back up current DNS records before any change.
3. Point **only** the website records for `playwan.jp` to Vercel.
4. Do **not** change or delete MX, SPF, DKIM, or DMARC records used for existing email.
5. Keep the current WPX / WordPress site live until cutover is confirmed.

## Scripts

- `npm run dev` — local server
- `npm run build` — production build
- `npm run start` — serve the production build
