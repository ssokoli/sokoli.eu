# Site setup

A Jekyll site, built to run on GitHub Pages, pointed at your own domain.

## 1. Push it to GitHub

```bash
cd site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Two options for the repo:
- `YOUR-USERNAME.github.io` — GitHub treats this specially and serves it at
  the root of that GitHub domain automatically.
- Any other repo name — works the same way once you turn on Pages (step 2),
  just served at `YOUR-USERNAME.github.io/YOUR-REPO/` until you attach your
  own domain.

Either is fine since you're using a custom domain regardless.

## 2. Turn on GitHub Pages

In the repo: **Settings → Pages → Build and deployment → Source: Deploy from
a branch → Branch: `main`, folder `/ (root)`**. Save. GitHub builds the
Jekyll site automatically — no build step to configure yourself.

## 3. Point your domain at it

Edit two files first:
- `CNAME` — replace `www.yourdomain.com` with your actual domain.
- `_config.yml` — update the `url:` field to match.

Then, at your domain registrar, add DNS records. Which ones depends on
whether you're using the bare domain (`yourdomain.com`) or a subdomain
(`www.yourdomain.com`):

**Apex/bare domain** (`yourdomain.com`): add four `A` records pointing to:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Subdomain** (`www.yourdomain.com` or similar): add one `CNAME` record
pointing to `YOUR-USERNAME.github.io`.

Most people do both: apex domain via the four `A` records, plus a `www` CNAME
that redirects to it, so both `yourdomain.com` and `www.yourdomain.com` work.

Back in **Settings → Pages**, enter your custom domain in the "Custom
domain" field and wait for the DNS check to go green, then tick "Enforce
HTTPS" once it's available (can take a few hours after DNS propagates).

## 4. What to edit before publishing

Search the repo for `EDIT` — every placeholder is flagged that way:
- `index.md`, `research.md`, `teaching.md`, `practice.md`, `contact.md` —
  bio details, course info, links, email.
- `_config.yml` — site title, description, URL.
- `CNAME` — your real domain.
- `_posts/2026-07-11-starting-the-journal.md` — replace or delete.

## 5. Adding a new journal entry later

Add a file to `_posts/` named `YYYY-MM-DD-a-short-title.md`:

```markdown
---
title: "Your title"
lang: EN
---

Your text.
```

Commit and push — it appears on `/journal/` automatically, newest first.

## 6. Preview locally (optional)

Only needed if you want to see changes before pushing. Requires Ruby.

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.
