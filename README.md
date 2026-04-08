# robots.txt Generator for WordPress

> Smart, free, client-side robots.txt generator built specifically for WordPress sites. No backend, no tracking, no signup - just open and go.

**[Live Demo →](https://robots.globus.studio)**

---

## Why

Every WordPress site needs a `robots.txt`. Most online generators spit out a generic file that either blocks too much (breaking Google rendering) or too little (leaking admin pages to search index). This tool understands WordPress internals and generates rules that actually make sense.

## Features

**Core**
- Three security levels - Low / Recommended / High - with WordPress-aware defaults
- Per-engine targeting (Google, Bing, Yandex, DuckDuckGo, Baidu) or wildcard `*`
- AI crawler blocking (GPTBot, ClaudeBot, CCBot, Bytespider, Google-Extended, PerplexityBot, and more)
- Sitemap auto-detection and custom URL support
- Yandex-specific directives: `Host`, `Clean-param`, `Crawl-delay`

**Plugin-Aware Rules**
- WooCommerce - hides `/cart/`, `/checkout/`, `/my-account/`
- Easy Digital Downloads - hides `/purchase-confirmation/`, EDD actions
- WPML - blocks language parameter duplicates
- WPForms - blocks form handler URLs
- BuddyPress - hides `/members/`, `/activity/`, `/groups/`

**UX**
- Syntax-highlighted preview with directive coloring
- Copy to clipboard / download as file
- Live generation with debounced input
- Flash animation on output update
- Line counter
- Form state persisted in `localStorage`
- Light / Dark theme toggle

**i18n & SEO**
- Full Russian and English UI with auto-detection via `navigator.language`
- `?lang=ru` / `?lang=en` URL parameter support
- Proper `hreflang`, `canonical`, Open Graph, Twitter Card meta
- JSON-LD structured data: `SoftwareApplication`, `FAQPage`, `BreadcrumbList`
- Content Security Policy via meta tag

## Tech Stack

| Layer | Tech |
|-------|------|
| UI framework | [oat.css](https://github.com/knadh/oat) 0.5.1 (classless + utilities) |
| JS | Vanilla - zero dependencies, single IIFE |
| CSS | Custom properties on top of oat, `color-scheme` + `light-dark()` for theming |
| Build | None - static HTML, works from `file://` or any HTTP server |
| Security | SRI hashes on CDN resources, CSP meta tag |

## Project Structure

```
├── index.html              # Single-page app
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom styles, syntax highlight, animations
│   └── js/
│       └── app.js          # All logic: i18n, generation, theme, events
└── README.md
```

## How It Works

1. Enter your site URL (HTTPS required)
2. Pick target search engines or leave "All"
3. Choose a security level
4. Toggle plugins your site uses
5. Optionally configure Sitemap, Crawl-delay, Yandex Host, AI blocking
6. Copy or download the generated `robots.txt`

The generator runs **entirely in the browser**. No data is sent anywhere. Form state is saved to `localStorage` for convenience.

## Security Levels Explained

| Level | What it blocks |
|-------|---------------|
| **Low** | `/wp-admin/`, `/wp-login.php`, `/readme.html` |
| **Recommended** | Low + `/?s=`, `/search/`, `/feed/`, `/trackback/` |
| **High** | Recommended + `/wp-includes/`, `/wp-content/cache/`, `/wp-json/`, `/xmlrpc.php`, `/comments/`, `/author/`, `/*?replytocom=*` |

All levels always allow `/wp-admin/admin-ajax.php` (required for many themes/plugins).

## Contributing

Issues and pull requests are welcome. If you want to add a plugin preset, edit the `buildRules()` function in `app.js` and add the plugin checkbox to `index.html`.

## License

MIT

---

Built by [GLOBUS.studio](https://globus.studio) . [Yevhen Leonidov](https://leonidov.dev)
