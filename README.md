# Jalaludin Umpa — Online Résumé

A single-page résumé for **Jalaludin (JD) Umpa** — bookkeeper and software developer.

**Live:** [https://jd-resume.pages.dev](https://jd-resume.pages.dev)

## What's inside

- Résumé content sourced from `JD Umpa_v01.docx`
- Six verifiable credentials (QuickBooks L1/L2, Xero, Payroll, Intuit Bookkeeping, MAB Academy)
- Hover/tap certificate previews with an on-page viewer
- Direct verification links to Credly and Credsverse
- Print / Save-as-PDF stylesheet for a clean A4 copy

## Structure

```
index.html          # the entire site (HTML, CSS, JS)
assets/
  portrait.jpg
  favicon.svg
  badges/           # the six badge images
  certs/            # certificate scans (watermarked)
JD Umpa_v01.docx    # source résumé (not published)
```

## Local preview

```bash
python -m http.server 8099
# open http://localhost:8099
```

Print the page (Ctrl/Cmd + P) or use the **Print / PDF** button for the A4 layout.

## Deploy

Hosted on Cloudflare Pages (direct upload):

```bash
npx wrangler pages deploy . --project-name=jd-resume
```

Files listed in `.assetsignore` are kept in the repository but excluded from the deployed site.

## Credential verification

- Credly: [credly.com/users/jd-umpa](https://www.credly.com/users/jd-umpa/)
- Credsverse (MAB Academy): [039943b7-733f-4187-8059-371bb2ea6e7a](https://credsverse.com/credentials/039943b7-733f-4187-8059-371bb2ea6e7a)
