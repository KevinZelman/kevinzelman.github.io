# kevin-zelman â€” personal site

Personal portfolio / digital business card for Kevin Zelman, hosted free on **GitHub Pages**.

## Stack

Plain HTML + CSS + a small progressive-enhancement `script.js`. No build step, no framework, no dependencies â€” edit a file, commit, push, and GitHub Pages redeploys automatically within a minute or two.

| File | Purpose |
|---|---|
| `index.html` | The whole site (single page) |
| `styles.css` | All styling |
| `script.js` | Nav toggle, reveal-on-scroll, **contact-info assembly, vCard download** |
| `Kevin-Zelman-Resume.pdf` | The downloadable resume (regenerate via `build_resume_director.py` in the private career-audit folder, then copy here) |
| `favicon.svg` | Tab icon |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Anti-scraper design (don't undo this)

The email address and phone number are **deliberately absent from the HTML source**. They're stored reversed in `script.js` and assembled at runtime, and the vCard ("Save contact") is generated client-side as a Blob â€” there is no static `.vcf` file. Humans see and click everything normally; address-harvesting bots scraping the page source find nothing. If you edit contact info, edit the reversed strings in `script.js` only â€” never paste a plain email/phone into `index.html`.

## Updating the site

```
# edit files, then:
git add -A
git commit -m "Update <what>"
git push
```

Pages redeploys from `main` automatically. Check Settings â†’ Pages if it ever doesn't.

## Custom domain (when ready, ~$10â€“12/yr)

1. Buy the domain at a registrar that sells at cost (Cloudflare Registrar or Porkbun) â€” e.g. `kevinzelman.com`.
2. Repo â†’ Settings â†’ Pages â†’ Custom domain â†’ enter the domain (GitHub commits a `CNAME` file).
3. At the DNS host, add:
   - Four apex `A` records â†’ `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` CNAME â†’ `kevinzelman.github.io`
4. Back in Settings â†’ Pages, tick **Enforce HTTPS** once the certificate provisions (minutes to an hour).

The old `kevinzelman.github.io` URL keeps working and redirects to the domain.
