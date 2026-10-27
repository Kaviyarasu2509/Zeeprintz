# Zee7 Printz Website

React website powered by Vite. The first implemented component is the responsive navbar.

Run `npm run dev` for the local preview and `npm run build` for a production build.
Only the navbar is implemented; content pages will be added next.

## Structure

```text
public/
  images/
    brand/                 Logos and brand assets
    services/              Printing product photos
    projects/              Completed work photos
    shop/                  Shop entrance, team and equipment
  fonts/                   Local font files
src/
  app/                     Pages and route metadata
    about/
    services/[slug]/       Individual printing services
    work/[slug]/           Individual project examples
    pricing/
    contact/
    guides/[slug]/         Customer printing guides
  components/
    layout/                Navigation and footer
    ui/                    Shared controls
    home/                  Homepage sections
    services/              Service page sections
    forms/                 Quote and contact forms
    seo/                   Structured data components
  content/
    services/              Confirmed service details
    projects/              Actual completed work
    guides/                Printing advice
  config/                  Business details and navigation
  lib/                     Shared utilities
  styles/                  Design tokens and shared styles
docs/                      Content and SEO planning
tests/                     Workflow checks
```

During implementation, sitemap and robots files belong in `public`.
Only verified prices, business details and project claims should be published.
