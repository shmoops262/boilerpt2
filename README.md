# 11ty Boilerplate

Super basic [11ty](https://www.11ty.dev) starter to get you moving in the right direction and gently introduce some core features like **Passthrough File Copy** for handling images and stylesheets, **layouts**, and templating with [Liquid](https://shopify.github.io/liquid/) and [Markdown](https://www.markdownguide.org).

## Quickstart

1. Create a new repository in your own account from this template.
2. Open the new repository in Codespaces or your own development environment.
3. Make sure you have Node.js installed (this will be automatic if using Codespaces).
4. In your terminal type `npx @11ty/eleventy --serve` to build and view the template.

## How to run this site

Install dependencies and run the dev server locally:

1. npm install
2. npm start

Then visit http://localhost:8080 to see the site. The site uses a Liquid shortcode `itemCard` defined in `.eleventy.js` and a shared layout in `_includes/layout.liquid`.
