# Deploy with GitHub Pages

## This portfolio

The published site is available at:

**https://satyavathi-gunturi.github.io/Portfolio/**

GitHub renders the README as the repository landing page. GitHub Pages serves `index.html` as the actual interactive website. The prominent README live-site link makes the website easy to find.

## Publish your own copy

1. Fork or copy the repository into your GitHub account.
2. Customize all personal content and images.
3. Open your repository’s **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose your default branch and the **`/ (root)`** folder, then save.
6. Wait for GitHub’s Pages deployment to complete. Use the **Visit site** link in Pages settings to get the actual published URL.

For a repository named `Portfolio`, the usual address is `https://YOUR-USERNAME.github.io/Portfolio/`. Repository names and path capitalization matter. Replace the live-site links in your README with the URL GitHub gives you.

The site uses relative asset paths so it can run under a repository subdirectory. No credit card, database or server credentials are required for this public static-site setup.

## Repository website link

On the repository homepage, edit the **About** section and set its Website field to the published URL. This exposes the portfolio in the repository sidebar as well as the README.

## Troubleshooting

- **404:** confirm the branch/folder, wait for deployment and check the actual Pages URL.
- **Missing images or CSS:** check relative paths and filename capitalization.
- **Old content:** confirm the latest Pages deployment succeeded, then refresh the browser.
- **Changed repository name:** update the README URL and any custom-domain configuration.

The validation workflow in this repository checks source files. It does not replace GitHub’s branch-based Pages deployment.

Reference: [GitHub Pages publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
