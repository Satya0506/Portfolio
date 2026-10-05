# Customize the portfolio

The site uses plain HTML, CSS and JavaScript and can be adapted without a framework or build tool.

## 1. Public profile settings

Edit `data/profile.js`. The page reads these settings through `js/portfolio.js`:

| Setting              | Controls                                                                    |
| -------------------- | --------------------------------------------------------------------------- |
| `name`               | Navigation identity, marked introduction text and portrait alternative text |
| `title`              | Browser title after profile initialization                                  |
| `description`        | Page description after profile initialization                               |
| `years`              | Marked experience statistic                                                 |
| `email`              | Marked email contact link                                                   |
| `linkedin`, `github` | Marked external profile links                                               |
| `portrait`           | Relative path to your portrait image                                        |

Keep contact links as full HTTPS URLs. The portrait path must be relative, such as `assets/my-portrait.webp`. Do not put private keys or passwords in this file: everything in a static site is public.

## 2. Static content and metadata

Edit `index.html` to replace the hero narrative, domain labels, case-study titles and expanded content, independent projects, qualifications, skills, education and footer. Also update the static `<title>` and description: these are the fallback values and the values read by crawlers that do not execute JavaScript.

Profile settings do not rewrite your entire career story. Search the repository for the original name, email, school names, project metrics and links before publishing your copy. Only publish claims that accurately reflect your own experience.

## 3. Images and colors

Replace `assets/headshot.svg` or point `portrait` at your own image. The original portrait is not licensed for reuse. Replace the `SG` favicon with your initials or logo.

Colors, spacing, typography and maximum width are defined in the `:root` section of `style.css`. Responsive rules are at the bottom. Keep the keyboard focus styles and reduced-motion rules when changing the theme.

## 4. Case studies

Each case study uses a native `<details>` / `<summary>` element in `index.html`; no custom accordion library is needed. Duplicate an existing case-study block, replace its content and keep headings structured. The reference array in `data/projects.js` does not automatically generate these cards.

Keep completed work separate from planned work. A repository link is appropriate for a project that has code but no deployed demo; do not label it a live application.

## 5. Check your version

Open the page at desktop and mobile sizes. Check navigation, case-study expansion, portrait cropping, keyboard focus and contact links. Then follow the checks in CONTRIBUTING.md and publish through GitHub Pages.
