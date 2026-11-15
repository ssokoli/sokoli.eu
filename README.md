# sokoli.eu

Jekyll website hosted on GitHub Pages.

## Content

- Pages: `*.md`
- Journal: `_posts/`
- Data: `_data/`
- Images: `assets/`
- Visual asset index: `_data/visual_assets.csv` (category, title, file, year)
- Style: `assets/css/style.css`

Images already referenced in pages retain their original file paths. New publication covers are stored in `assets/visuals/publications/` and linked from `_data/publications.yml`. Other curated visuals are under `assets/visuals/conferences/` and `assets/visuals/people/`.

## Preview

```sh
bundle install
bundle exec jekyll serve
```
