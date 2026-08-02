# Ajeet Kumar Portfolio

Static multi-page portfolio converted from Figma using reusable HTML, CSS, and vanilla JavaScript.

## Run locally

From the `portfolio-site` directory:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Structure

- `index.html` — home
- `about/`, `work/`, `contact/` — primary pages
- `work/*/` — six nested portfolio category pages
- `projects/*/` — reusable project-detail templates
- `assets/css/style.css` — tokens, layout, responsive rules, animation
- `assets/js/site.js` — shared components, page data, interactions
- `assets/images/` — localized Figma imagery
