# sokoli.eu

Personal research and professional website, built with **Jekyll** and **GitHub Pages**.

## Editing the site

- Pages such as `index.md`, `about.md`, `research.md` and `teaching.md` are Markdown.
- The top menu is in `_data/navigation.yml`.
- Publication, project, filmography and talk listings are in `_data/*.yml`.
- Journal posts are in `_posts/`. Use `featured: true` in a post's front matter to feature it on the Writing page.
- Short observations are imported into `_data/notes.json` and displayed on separate annual pages under `/notes/YYYY/`.
- The homepage boxes are controlled by `assets/css/style.css`.
- Optional black subtitle-style statements are stored as `sub:` in page front matter. To **show** them, change `show_subtitles: false` to `true` in `_config.yml`. They are **off by default**.
- Journal and annual Notes page filters are enhanced by `assets/js/archive.js` and do not need a server.
- Machine-readable information for search engines and AI tools, not visible on the pages:
  - `_includes/structured-data.html` adds schema.org JSON-LD (Person on every page, ProfilePage on the homepage and About page, publications on the Research page from `_data/publications.yml`). The role, affiliations and profile links are written into that file: update them there when they change on the About or Contact page.
  - `llms.txt` generates `/llms.txt`, a plain-text guide to the site. Page descriptions come from each page's `dek` and publications from `_data/publications.yml`; the summary paragraph is written in the file.

Any commit to `main` triggers a GitHub Pages rebuild automatically if Pages is configured.

## Local preview

If Jekyll is installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

This site does not require paid hosting or a database.

## Portrait and talk videos

The homepage and About page share the optimised portrait `assets/portrait-stavroula.avif`. The source was provided by the site owner; the deployed image is 420 × 420 pixels and uses AVIF compression.

The Talks page features two video embeds and a thumbnail gallery generated from video IDs already listed in `_data/talks.yml`, `_data/presentations.yml`, and `_data/recordings.yml`. To add another **confirmed** recording, add its YouTube video ID to the appropriate YAML item. Do not present conference videos featuring other speakers as the site owner's talks.

Event photos on third-party sites are linked, not copied. Download and republish them only after confirming reuse permission.
