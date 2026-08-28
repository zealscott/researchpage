# CLAUDE.md (barron-style branch)

**Before doing anything else, read `TODO.md` in the repo root and remind the
user of any open items.**

This branch (`barron-style`) is the source of the live site at yuntaodu.me.
Full repo documentation lives in master's CLAUDE.md: `git show master:CLAUDE.md`.

## Style rules

- Never use em dashes (`—` / `&mdash;`) anywhere in site content. Use a
  period, comma, or colon instead.
- Venue names use conventional abbreviations (e.g. `ACM CCS`, `NDSS`,
  `USENIX Security`, `IEEE ICDE`), kept consistent everywhere: bib `abbr`
  fields, news items, and page text.

## Publication ordering in `_bibliography/papers.bib`

File order = render order (jekyll-scholar has no sort configured). Keep
entries grouped by year, newest year first. Within each year:

1. First-author papers come first (first principle). Co-first (`*` marker,
   Yuntao listed second) ranks between first-author and non-first-author.
2. Papers from the same venue stay adjacent (second principle). When the two
   principles conflict, keep the venue group together and place the whole
   group at the position its best-ranked (first-author) paper would get;
   order inside the group: first author, then co-first, then non-first.

Apply this when inserting any new entry.
