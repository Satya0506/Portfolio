<div align="center">

# Satyavathi Gunturi

### Data & Analytics Portfolio

**Different industries. Meaningful problems. One foundation: data.**

[**View the live portfolio ↗**](https://satyavathi-gunturi.github.io/Portfolio/) · [Customize this portfolio](docs/CUSTOMIZATION.md) · [Deployment guide](docs/DEPLOYMENT.md)

</div>

## About this project

A responsive portfolio presenting Satyavathi Gunturi’s experience across FinTech, Retail, Pharma and Supply Chain, with selected engineering case studies and independent AI work. The site brings business context, technical implementation and outcomes together in a format designed for recruiters, collaborators and technical reviewers.

The portfolio is published on **GitHub Pages** and opens directly in an external browser. This repository contains the source code and the instructions needed to adapt the site for another person.

## Features

- A clear professional introduction and portrait-led landing page.
- Expandable case studies with business context, architecture and implementation details.
- An independent-project section linked to Financial Complaint Intelligence.
- Technical skills, education and direct email, LinkedIn and GitHub links.
- Responsive layouts, keyboard focus indicators, a skip link and reduced-motion support.
- Plain HTML, CSS and JavaScript: no framework, server or paid service required to run the site.

## View or run the portfolio

**Online:** [satyavathi-gunturi.github.io/Portfolio](https://satyavathi-gunturi.github.io/Portfolio/)

**Locally:** clone the repository and open `index.html` in a browser. For a local server:

```bash
git clone https://github.com/Satyavathi-Gunturi/Portfolio.git
cd Portfolio
python -m http.server 8000
```

Then visit `http://localhost:8000`. Python is only needed for the optional preview server; the website itself has no Python dependency.

## Make it your own

1. Fork this repository or download a copy.
2. Update `data/profile.js` with your name, links, portrait path and page metadata.
3. Replace the portrait and favicon in `assets/` with your own assets.
4. Edit the introduction, case studies, skills and education in `index.html`.
5. Adjust the design tokens and responsive styles in `style.css`.
6. Publish your copy using the [GitHub Pages deployment guide](docs/DEPLOYMENT.md).

The [customization guide](docs/CUSTOMIZATION.md) explains exactly which content is configurable and which content lives in HTML. Replace all personal details and project claims before publishing your version.

## Source structure

| Path               | Responsibility                                                             |
| ------------------ | -------------------------------------------------------------------------- |
| `index.html`       | Page structure, career narrative and case studies                          |
| `style.css`        | Design tokens, components and responsive layout                            |
| `data/profile.js`  | Public identity, contact links, portrait and metadata                      |
| `data/projects.js` | Reference metadata for the original selected projects; not a page renderer |
| `js/portfolio.js`  | Safe profile binding and progressive enhancement                           |
| `assets/`          | Portrait and favicon                                                       |
| `docs/`            | Customization and deployment instructions                                  |
| `scripts/`         | Static-site validation                                                     |

## Maintenance and code quality

Semantic HTML, descriptive CSS classes and small JavaScript functions keep the implementation easy to review. Profile values are applied as text rather than inserted as HTML. All links and public settings are visible in the source; there is no backend contact form or analytics tracker.

GitHub Actions checks formatting, JavaScript syntax and local asset/anchor references. See [CONTRIBUTING.md](CONTRIBUTING.md) for the development commands.

## Reuse and attribution

The **code is available under the MIT license**. The personal portrait, biography, credentials and career/project claims belong to their respective owners and are not template content to reuse as your own. Replace those materials when adapting the site. A link back to this repository is appreciated.

---

Built and maintained by **Satyavathi Gunturi** · [LinkedIn](https://www.linkedin.com/in/satyavathi06/) · [GitHub](https://github.com/Satyavathi-Gunturi)
