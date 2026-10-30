# LJ Fresh Stylez Website

## About the Website

LJ Fresh Stylez is a barber shop website created to provide customers with information about the barber shop, its services and grooming products.

The website gives customers a way to learn about LJ Fresh Stylez, view the services offered, enquire about services and find the contact details and location of the barber shop.

## Website Pages

The website contains the following pages:

- Home – introduction to the barbershop and quick links to other pages
- About Us – the story, mission and values of LJ Fresh Stylez
- Services – list of services offered with pricing and images
- Enquiry – a form for customers to submit questions or booking enquiries
- Contact Us – phone, email, address, business hours and a map

## Services

LJ Fresh Stylez provides a variety of barbering and grooming services, including:

- classic haircut – R70
- low fade – R120
- mid fade – R150
- high fade – R200
- taper fade – R100
- beard trim – R90
- beard shape Up – R80
- full beard grooming – R150
- hairline clean Up & massage – R200
- shaving – R140
- general grooming – R350

## Contact Information

**Phone:** 066 181 7197

**Email:** ljfreshstylez@gmail.com

**Address:** 100 Harrington Street, Salt Lake, Gqeberha, South Africa

**Business Hours:**
- Monday – Friday: 09:00 – 18:00
- Saturday: 08:00 – 16:00
- Sunday: 10:00 – 14:00

## Technologies Used

- HTML5
- CSS3

## Project Structure

```text
LJ STYLEZ BARBERSHOP
│
├── index.html
├── README.md
├── .gitattributes
│
├── css
│   └── style.css
│
├── documents
│
├── images
│   ├── barbershop logo.png
│   ├── beard grooming.jpg
│   ├── classic cut.jpg
│   ├── high fade.jpg
│   ├── low fade.webp
│   ├── massage.webp
│   ├── mid fade.webp
│   ├── shape up.jpg
│   ├── shaving.jpg
│   ├── taper fade.webp
│   ├── trim.jpg
│   └── vip treatment.jpg
│
└── pages
    ├── about.html
    ├── contact.html
    ├── enquiry.html
    └── services.html
```

## How to View the Website

Open `index.html` in a web browser. Use the navigation menu at the top of each page to move between pages.

## Author

Luke January

## References

All images used on this website were Staken personally for this project. All HTML and CSS code was written independently.

The following external resource was used:

- Google Maps Embed – used to embed the business location on the Contact page. https://www.google.com/maps

## Corrections Made (Part 1 Revisions)

The following corrections were made to the Part 1 HTML files and proposal documentation after initial submission:

- Renamed all folders and files to use lowercase naming with hyphens instead of spaces or capital letters (e.g. `Images` → `images`, `Classic cut.jpg` → `classic-cut.jpg`), for consistent and web-safe file naming.
- Moved the `<link>` stylesheet tag into the `<head>` section on `index.html`, `services.html` and `contact.html`, where it had incorrectly been placed outside of `<head>`.
- Fixed a broken `<section>` structure on `contact.html`, where the "Get In Touch" and "Find Us" content was not properly nested inside its own section tags.
- Removed a stray character error (`</section>s`) on `contact.html`.
- Moved `<img>` tags on `services.html` so they are correctly nested inside their related `<li>` list items, instead of sitting outside the list structure.
- Updated all image and page links across the site to match the renamed lowercase files and folders.
- Made the business address consistent across all pages (previously written differently on different pages).
- Corrected a missing space and grammar error in the "Our Story" section on `about.html`.
- Added wireframes for each page to the proposal document, showing the planned layout structure prior to development.
- Added a sitemap to the proposal document, showing the page hierarchy and navigation structure of the website.


### Part 2 — CSS Styling and Responsive Design

- Created an external stylesheet (`style.css`) and linked it to all HTML pages.
- Added a base CSS style across the website, including a consistent font, colour scheme and box-sizing reset.
- Added styling for headings and paragraphs, including font sizes, letter spacing and text alignment.
- Used Flexbox to organise the header, navigation menu and main content areas.
- Used CSS Grid to arrange the services and grooming lists in a clear layout.
- Added hover and focus effects to interactive elements such as navigation links and form buttons.
- Styled the enquiry form, including input fields, select menus and text areas, with consistent spacing and focus effects.
- Added responsive media queries for tablet screens (`max-width: 48rem`) and mobile screens (`max-width: 30rem`).
- Used relative units such as `rem`, `%` and `fr` instead of fixed pixel values to help the website adjust to different screen sizes.
- Made images responsive by using `max-width: 100%` so they can scale down on smaller screens.
- Added styling for the contact address, embedded Google Maps section and footer to keep them consistent with the website's overall design.
- Tested the website layout at desktop, tablet and mobile screen sizes using browser developer tools to make sure the content remains readable and usable.


## Responsive Design Screenshot Evidence

Screenshots below show the website at desktop, tablet and mobile screen widths, confirming the responsive breakpoints work as intended.

### Home Page

**Desktop (1440px)**
[Home page desktop view](documents/screenshots/home desktop.png)


**Tablet (768px)**
[Home page tablet view](documents/screenshots/home tablet.png)

**Mobile (400px)**
[Home page mobile view](documents/screenshots/home mobile.png)

### Services Page

**Desktop (1440px)**
[Services page desktop view](documents/screenshots/service desktop.png)

**Tablet (768px)**
[Services page tablet view](documents/screenshots/service tablet.png)

**Mobile (400px)**
[Services page mobile view](documents/screenshots/service mobile.png)

---

# Part 3 — Enhancing Functionality and SEO

**Live website:** [ADD YOUR LIVE LINK HERE]
**GitHub repository:** [ADD YOUR REPOSITORY LINK HERE]

## JavaScript Enhancements

### Interactive Elements

- Tabs (Our Story / Mission / Values) on the About Us page.
- Accordion (frequently asked questions, one panel open at a time) on the Contact Us page.
- Image gallery with a lightbox (click to enlarge, next/previous buttons, Esc and arrow-key support).
- Interactive map built with Leaflet and OpenStreetMap, with a marker and popup, on the Contact Us page.
- Mobile navigation menu toggle and a back-to-top button on all pages.
- "Open now / Closed now" badge calculated from the business hours.

### Animations and Transitions

- Content fades and slides in as it scrolls into view.
- Cards lift and images zoom slightly on hover.
- Animations are switched off for visitors who have "reduce motion" enabled.

### Advanced DOM Manipulation

- Elements are created and inserted with `document.createElement`.
- Classes and ARIA attributes are updated dynamically.
- User text is inserted with `textContent`, never `innerHTML`, to prevent script injection.

### Dynamic Content, Search, Filter and Sort

- The "Popular Services" section on the Home page is loaded with JavaScript.
- The Services page has a live search box, category filter buttons (All, Haircuts, Beard, Grooming) and a sort menu (price low to high, price high to low, name A-Z).
- A result counter and a "no results" message are shown.

## Form Functionality and Validation

### Enquiry Form (enquiry.html)

- Fields: full name, email, phone number, service, preferred date, preferred time and an optional message.
- After validation, the page shows the service cost, estimated time and whether the requested slot is within opening hours. The service data is loaded with `fetch` (AJAX) from `data/services.json`.

### Contact Form (contact.html)

- Fields: full name, email, phone number, type of message and a full message.
- After validation, the details are compiled into an email addressed to ljfreshstylez@gmail.com, with a preview and a "Send email" button.
- Submission uses AJAX (`fetch`) so the page does not reload. A hidden honeypot field blocks spam.

### Validation Rules

| Field | Rule |
|---|---|
| Name | Required, 2-50 characters, letters, spaces, hyphens and apostrophes only |
| Email | Required, valid email format |
| Phone | Required, valid South African number (0xx xxx xxxx or +27 xx xxx xxxx) |
| Service / message type | Required selection |
| Date | Required, valid date, not in the past, within 60 days |
| Time | Required, within business hours for the chosen day |
| Message | Required, minimum and maximum length with a live character counter |

- HTML5 attributes (`required`, `type="email"`, `type="tel"`, `minlength`, `maxlength`) are used on all fields.
- JavaScript validation runs on blur, while typing and on submit.
- Error messages appear under each field, invalid fields are highlighted and the first invalid field receives focus.
- Each form uses the `action` attribute to specify where the data is sent.

## Search Engine Optimisation (SEO)

### On-Page SEO

- **Keyword research:** barber Gqeberha, barbershop Salt Lake Gqeberha, fade haircut Gqeberha, taper fade, beard trim, beard grooming, shaving, men's grooming. Keywords are used naturally in headings, text, alt text and meta tags.
- **Title tags and meta descriptions:** every page has a unique title and meta description, plus Open Graph tags.
- **Header tags:** one `<h1>` per page, with `<h2>` and `<h3>` in logical order.
- **Image optimisation:** descriptive file names (e.g. `low-fade.webp`), meaningful alt text and `loading="lazy"`.
- **URL structure:** short, lowercase, hyphenated file names.
- **Internal linking:** pages link to each other through the navigation, footer and call-to-action buttons.
- **Mobile-friendliness:** viewport meta tag, responsive breakpoints and a mobile menu.
- **Structured data:** `BarberShop` JSON-LD added for local SEO.

### Off-Page SEO

- **Backlinks:** list the business on free local directories, claim a Google Business Profile and ask local clients and community pages to link to the site.
- **Social media:** share buttons added to the footer, and the website link is placed in the shop's social media bios.
- **Local SEO:** the address and phone number are identical on every page and in the structured data.

### Additional SEO Requests

- **robots.txt:** allows all crawlers and points to the sitemap.
- **sitemap.xml:** lists the home page and the four pages in the `pages` folder.
- **Page speed:** scripts use `defer`, images are lazy-loaded and no heavy frameworks are used.
- **Security:** user input is never inserted with `innerHTML`, external links use `rel="noopener noreferrer"`, the contact form has a honeypot and the site is served over HTTPS.

## Deployment

- **Platform:** [Netlify / GitHub Pages]
- **Live link:** [ADD YOUR LIVE LINK HERE]
- The GitHub repository is connected to the platform, so the site redeploys whenever changes are pushed to the main branch.

## Changelog

### Part 2 Feedback Corrections

| Feedback received | Change made | File(s) edited |
|---|---|---|
| [Paste Part 2 feedback point here] | [Describe exactly what you changed and why] | [e.g. css/style.css] |
| [Paste Part 2 feedback point here] | [Describe exactly what you changed and why] | [e.g. pages/services.html] |

### Part 3 Changes

- Added a `js` folder with `main.js`, `services.js`, `forms.js` and `map.js`, linked with the `defer` attribute.
- Added tabs on the About Us page, an accordion on the Contact Us page and a gallery with lightbox on the Home and Services pages.
- Replaced the embedded Google Maps iframe with an interactive Leaflet map and kept a Google Maps directions link.
- Added scroll animations, hover transitions and a back-to-top button, with a reduced-motion fallback.
- Added a dynamically loaded "Popular Services" section on the Home page.
- Added live search, category filtering and sorting on the Services page.
- Added an "Open now / Closed now" badge on the Contact Us page.
- Rebuilt the enquiry form with validation and a cost and availability response loaded through `fetch` from `data/services.json`.
- Rebuilt the contact form with validation, a character counter, AJAX submission and a compiled email to ljfreshstylez@gmail.com.
- Added error messages, field highlighting and focus on the first invalid field.
- Added unique title tags, meta descriptions, Open Graph tags and canonical links to every page.
- Reviewed heading structure and added keyword-based alt text to all images.
- Added `BarberShop` JSON-LD structured data.
- Added `robots.txt` and `sitemap.xml` to the project root.
- Added social share buttons to the footer.
- Added the `data` folder containing `services.json`.
- Deployed the website to a free hosting platform.
- Committed all changes with descriptive commit messages and pushed them to the remote repository.

## Part 3 References

- Leaflet.js: https://leafletjs.com
- OpenStreetMap (© OpenStreetMap contributors): https://www.openstreetmap.org/copyright
- Schema.org BarberShop: https://schema.org/BarberShop
- Sitemaps protocol: https://www.sitemaps.org/protocol.html
- Netlify: https://www.netlify.com
- MDN Web Docs (Fetch API, form validation): https://developer.mozilla.org