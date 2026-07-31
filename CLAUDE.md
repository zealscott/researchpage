# CLAUDE.md

Personal academic website of Yuntao Du (yuntaodu.me), built with Jekyll.
Keep this file updated as development continues.

## Two site versions, two source branches

This repo holds **two complete versions of the site** on separate branches:

| Source branch | Design | Builds to (via Actions) |
|---|---|---|
| `master` | al-folio theme | `gh-pages` |
| `barron-style` | Custom "Barron" redesign (three research pillars, annotated selected papers) | `barron-pages` |

- **The live site at yuntaodu.me is the `barron-style` version**, served from
  `barron-pages` (repo Settings → Pages → source branch). To switch versions,
  change the Pages source branch — do not repoint the deploy workflows.
- `gh-pages` and `barron-pages` are build artifacts. Never edit them directly.
- Each source branch has its own copy of `.github/workflows/deploy.yml` and of
  all content files. **Content changes for the live site must be made on
  `barron-style`**; changes on `master` build to `gh-pages`, which is not served.

## Where content lives (same layout on both branches)

- Publications: `_bibliography/papers.bib` (jekyll-scholar). Entries use custom
  fields: `abbr` (venue badge), `topic`, `selected`, `manuscript`, `preview`,
  `summary` (barron-style only).
- Homepage: `_pages/about.md`. Honors: `_data/honors.yml`. Services:
  `_data/services.yml`. News: `_news/*.md`. Resume PDF: `files/Yuntao_Du_Resume.pdf`.
- `_data/cv.yml` is unused — `/resume/` redirects straight to the PDF.
- The publications list is intentionally curated; it need not include every
  paper on the resume.

## Hiding an unpublished paper

Comment out its bib entry with a leading `% ` on every line **and remove the
`@` before the entry type**. bibtex-ruby (used by jekyll-scholar) treats any
`@` as the start of an entry even mid-line, so `%`-prefixing alone does not
hide it. See the commented-out `manuscript_dataset_mip` entry for the pattern.

## Deploying and verifying

- Pushing a source branch triggers its `deploy` workflow (also runnable via
  `gh workflow run deploy --ref <branch>`); a `pages build and deployment` run
  follows. Watch with `gh run list` / `gh run watch`.
- Verify on the live site with `curl -s https://yuntaodu.me/... | grep ...`
  after both runs complete; the CDN can lag a minute.

## Working style

- Keep changes minimal — make exactly the requested edit and nothing else
  (no opportunistic wording/consistency fixes) unless asked.
