# Stratum.ai 
Static marketing site for Stratum.ai, a networking agency offering colocation to small businesses.

Black-and-grey visual language: slate photography, stratified rules,
condensed display type.

## Structure

- `index.html` — single page: hero, services, why-us, process, pricing, FAQ, contact
- `styles.css` — all styling (no framework, no build step)
- `script.js` — mobile nav, client-side contact-form validation
- `assets/` — stone photography used as section backgrounds

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Contact form

Submission is currently client-side only: it validates and shows a confirmation
message. To collect real leads, point the form at a backend or a form service
(Formspree, Basin, or an API route) in `script.js`.
