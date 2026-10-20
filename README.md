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

Any commit to `main` triggers a GitHub Pages rebuild automatically if Pages is configured.

## Local preview

If Jekyll is installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

This site does not require paid hosting or a database.
