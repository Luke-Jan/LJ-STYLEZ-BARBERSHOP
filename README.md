# LJ Fresh Stylez Website

**Live website:** https://luke-jan.github.io/LJ-STYLEZ-BARBERSHOP/
**GitHub repository:** https://github.com/Luke-Jan/LJ-STYLEZ-BARBERSHOP

## About the Website

LJ Fresh Stylez is a barber shop website created to provide customers with information about the barber shop, its services and grooming products.

The website gives customers a way to learn about LJ Fresh Stylez, view the services offered, enquire about services and find the contact details and location of the barber shop.

## Website Pages

The website contains the following pages:

- Home – introduction to the barbershop, a photo gallery and quick links to other pages
- About Us – the story, mission and values of LJ Fresh Stylez
- Services – list of services offered with pricing and images, with search, filter and sort tools
- Enquiry – a form for customers to submit questions or booking enquiries
- Contact Us – phone, email, address, business hours, an interactive map and a message form

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
- JavaScript (ES6) – gallery lightbox, services search/filter/sort, form validation and form processing
- Leaflet.js 1.9.4 – interactive map (Leaflet, n.d.)
- Formspree – receives the enquiry form submissions (Formspree, n.d.)
- Git and GitHub – version control
- GitHub Pages – hosting (GitHub, n.d.)

## Project Structure

```text
LJ STYLEZ BARBERSHOP
│
├── index.html
├── README.md
├── robot.txt
├── sitemap.xml
├── .gitattributes
│
├── css
│   └── style.css
│
├── js
│   ├── main.js
│   └── services-data.js
│
├── documents
│   └── screenshots
│       ├── home desktop.png
│       ├── home mobile.png
│       ├── home tablet.png
│       ├── service desktop.png
│       ├── service mobile.png
│       └── service tablet.png
│
├── images
│   ├── barbershop-Logo.png.png
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

Visit the live website at https://luke-jan.github.io/LJ-STYLEZ-BARBERSHOP/.

To view it on your own computer, open `index.html` in a web browser. Use the navigation menu at the top of each page to move between pages. An internet connection is needed for the interactive map and for sending the enquiry form.

## Author

Luke January

## References

All images used on this website were taken personally for this project. All HTML and CSS code was written independently.

The full, Harvard-style reference list for the external resources used is at the end of this document (see **Reference List**).

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
[Home page desktop view](documents/screenshots/home%20desktop.png)


**Tablet (768px)**
[Home page tablet view](documents/screenshots/home%20tablet.png)

**Mobile (400px)**
[Home page mobile view](documents/screenshots/home%20mobile.png)

### Services Page

**Desktop (1440px)**
[Services page desktop view](documents/screenshots/service%20desktop.png)

**Tablet (768px)**
[Services page tablet view](documents/screenshots/service%20tablet.png)

**Mobile (400px)**
[Services page mobile view](documents/screenshots/service%20mobile.png)

---

# Part 3 — Enhancing Functionality and SEO

**Live website:** https://luke-jan.github.io/LJ-STYLEZ-BARBERSHOP/
**GitHub repository:** https://github.com/Luke-Jan/LJ-STYLEZ-BARBERSHOP

## JavaScript Enhancements

JavaScript is kept in the `js` folder and linked with the `defer` attribute, so it runs after the page has loaded. `services-data.js` holds the list of services and is used by the Home, Services and Enquiry pages. `main.js` holds the rest of the site's scripts.

### Interactive Elements

- **Gallery with lightbox (modal):** clicking any photo in the "Our Work" gallery on the Home page, the gallery on the Services page, or a service card photo opens the picture enlarged over a dark background. It closes when the visitor clicks anywhere or presses the Esc key.
- **Interactive map:** the Contact Us page has a map built with Leaflet (Leaflet, n.d.). It can be zoomed and dragged, and it shows a marker with a popup giving the shop name and address. The map tiles come from Esri and the data from OpenStreetMap contributors (Esri, n.d.; OpenStreetMap contributors, n.d.). A link opens the same address in Google Maps for directions (Google, n.d.b).
- **Expandable FAQ:** the Services page has a "Frequently Asked Questions" section where each answer opens and closes when the question is clicked. This uses the HTML `<details>` element (MDN Web Docs, n.d.b), so it needs no JavaScript.

### Animations and Transitions

- The page content fades in and slides up slightly when a page loads (CSS animation).
- Service cards lift up and gallery photos zoom slightly when the mouse moves over them (CSS transitions).
- Navigation links and form buttons change colour and size smoothly on hover and focus.

### Advanced DOM Manipulation

- The service cards on the Services page are created in JavaScript with `document.createElement` and added to the page (MDN Web Docs, n.d.c).
- The category filter and the "Select a Service" dropdown on the Enquiry page are built from the services list, so a new service added to `services-data.js` appears in both automatically.
- Text from the visitor or the data is inserted with `textContent` (MDN Web Docs, n.d.e).
- The lightbox is shown and hidden by changing the `hidden` attribute, and the clicked photo's file and description are copied into it.

### Dynamic Content, Search, Filter and Sort

- The Services page builds its list of services from `services-data.js` instead of fixed HTML.
- **Search:** a search box filters the services as the visitor types, matching the name, category or description.
- **Filter:** a category menu (All, Haircuts, Beard, Extras) shows only the chosen group.
- **Sort:** a sort menu orders the services by price (low to high or high to low) or by name (A to Z).
- If nothing matches, the message "No services match your search." is shown.
- Every service card has an "Enquire about this" link that opens the Enquiry page with that service already selected.

## Form Functionality and Validation

Both forms use `novalidate`, so the website's own clear error messages are shown instead of the browser's pop-ups. The error message appears in red under the field with the problem, and is cleared and checked again each time the form is submitted.

### Enquiry Form (enquiry.html)

- **Fields:** full name, email address, phone number (optional), service (dropdown), preferred date (optional) and the enquiry message.
- **Response:** once the input passes validation, the page shows a response that includes the name of the service, its price and the shop's opening hours. If a preferred date was entered, it also says the shop will confirm availability for that date.
- **AJAX submission:** the enquiry is sent with `fetch` to the Formspree address in the form's `action` attribute (MDN Web Docs, n.d.d; Formspree, n.d.). The page does not reload. A message tells the visitor if the enquiry was sent, or gives the shop's phone number if it failed. The form is cleared after a successful send.
- The date picker does not allow dates in the past.

### Contact Form (contact.html)

- **Fields:** full name, email address, phone number (optional), type of message (General question, Booking, Compliment or Complaint), subject and the message.
- **Email:** once the input passes validation, the details are compiled into an email addressed to ljfreshstylez@gmail.com. The subject is the visitor's subject, and the body contains their name, email, phone number, type of message and message. The visitor's email app opens with the email filled in, and the visitor presses Send to deliver it.
- A message under the form tells the visitor the email is ready to send.

### Validation Rules

| Field | Rule |
|---|---|
| Name | Required, at least 2 characters (contact form: no more than 50) |
| Email | Required, must be in a valid format such as name@example.com |
| Phone | Optional. If entered, it must be 10 digits starting with 0 (spaces are ignored) |
| Service (enquiry form) | Required selection |
| Type of message (contact form) | Required selection |
| Subject (contact form) | Required, at least 3 characters (no more than 100) |
| Preferred date (enquiry form) | Optional. Cannot be in the past |
| Message | Required, at least 10 characters (contact form: no more than 500) |

- HTML5 attributes (`required`, `type="email"`, `type="tel"`, `minlength` and `maxlength`) are used on the form fields (MDN Web Docs, n.d.a).
- JavaScript checks every field when the form is submitted, and the form is only processed when all fields are valid.
- Each form uses the `action` attribute to say where the data goes: the enquiry form to Formspree, and the contact form to the shop's email address.

## Search Engine Optimisation (SEO)

### On-Page SEO

- **Keyword research:** the keywords chosen are barber shop Salt Lake Gqeberha, barber Gqeberha, fade haircut, classic haircut, taper fade, beard grooming and shaving. They are used naturally in page headings, paragraphs, image descriptions and the meta description of each page.
- **Title tags:** each of the five pages has its own title that describes the page and includes the shop name, for example "LJ FRESH STYLEZ | BARBER SHOP IN SALT LAKE, GQEBERHA" for the Home page (Google, n.d.c).
- **Meta descriptions:** each of the five pages has its own short description that mentions what the page offers and where the shop is (Google, n.d.a).
- **Header tags:** every page has one `<h1>` for the page title, followed by `<h2>` section headings and `<h3>` headings where needed, in a logical order.
- **Image optimisation:** every image has descriptive alt text, and the gallery and service card images use `loading="lazy"` so they only load when needed.
- **URL structure:** the pages are in a `pages` folder with short, lowercase names such as `about.html`, `services.html`, `enquiry.html` and `contact.html`.
- **Internal linking:** pages link to each other through the navigation menu and the call-to-action buttons (for example "View Our Services", "Make an Enquiry" and "Contact Us").
- **Mobile-friendliness:** every page has the viewport meta tag, and the stylesheet uses responsive breakpoints for tablets and phones.
- **Social sharing and local search data:** the Home, About Us and Contact Us pages include Open Graph tags and a canonical link, and the Home and Contact Us pages include `BarberShop` structured data in JSON-LD format with the shop's address, phone number, email and opening hours (Schema.org, n.d.).

### Off-Page SEO

The following is the plan for promoting the website outside the site itself:

- **Backlinks:** list LJ Fresh Stylez on free local business directories, claim a Google Business Profile, and ask local clients and community pages to link to the website.
- **Social media:** put the website link in the shop's social media pages and share photos from the "Our Work" gallery with a link back to the site.
- **Local SEO:** the shop name, address and phone number are written the same way everywhere they appear, and they match the structured data, so search engines can match the business to the same location.

### Additional SEO Requests

- **Crawler instructions:** `robot.txt` allows all search engines to crawl the site and points to the sitemap.
- **Sitemap:** `sitemap.xml` lists the Home page and the four pages in the `pages` folder, using the live website addresses (Sitemaps.org, n.d.).
- **Page speed:** the site's scripts use `defer`, the gallery and service card images load lazily, no large frameworks are used, and the Leaflet map files only load on the Contact Us page.
- **Security:** the website is served over HTTPS by GitHub Pages, text from visitors and the data file is inserted with `textContent` instead of `innerHTML`, the external Google Maps link uses `rel="noopener"`, and the enquiry form is sent to Formspree over HTTPS.

## Deployment

- **Platform:** GitHub Pages (GitHub, n.d.)
- **Live link:** https://luke-jan.github.io/LJ-STYLEZ-BARBERSHOP/
- The website is published directly from the GitHub repository, so changes pushed to the published branch appear on the live website.

## Changelog

### Part 2 Feedback Corrections

| Feedback received | Change made | File(s) edited |
|---|---|---|
| References (0/5): "Missing reference list." | Added a Harvard-style **Reference List** at the end of this README, listing every external resource used (Leaflet, Esri, OpenStreetMap, Formspree, Google, GitHub Pages, MDN Web Docs, Schema.org, Sitemaps.org and Google Search Central). In-text citations such as (Leaflet, n.d.) were added to the sections that use them, and the old References section now points to the list. | README.md |
| README Document Contains All Relevant Information (3/5) | Expanded the README so it describes the finished website: added the live and repository links, updated the technologies and project structure to include the `js` folder, `sitemap.xml` and `robot.txt`, and added full Part 3 sections for JavaScript, forms and validation, SEO and deployment. | README.md |

### Part 3 Changes

- Added a `js` folder with `main.js` and `services-data.js`, linked to the pages with the `defer` attribute.
- Added a gallery with a lightbox to the Home and Services pages, and made the service card photos open in the lightbox too.
- Replaced the embedded Google Maps iframe on the Contact Us page with an interactive Leaflet map with a marker and popup, and kept an "Open in Google Maps" link for directions.
- Added the Services page search box, category menu and sort menu, and built the service cards in JavaScript from `services-data.js`, with a message when nothing matches.
- Added an "Enquire about this" link on each service card that opens the Enquiry page with that service selected.
- Rebuilt the Enquiry page form: the service dropdown is built from `services-data.js`, the date picker blocks past dates, and a response shows the service price and opening hours after validation.
- Added JavaScript validation with error messages under each field to the Enquiry and Contact forms.
- Added AJAX (`fetch`) submission of the Enquiry form to Formspree, with a message for success and for failure.
- Added the Contact form email feature, which compiles the validated details into an email to ljfreshstylez@gmail.com and opens it in the visitor's email app.
- Added gallery, lightbox, service card, filter and hover transition styles to `style.css`.
- Added unique title tags and meta descriptions to all five pages, and Open Graph tags and canonical links to the Home, About Us and Contact Us pages.
- Added `BarberShop` JSON-LD structured data to the Home and Contact Us pages.
- Added descriptive alt text and lazy loading to the gallery and service images.
- Added `sitemap.xml` and `robot.txt` to the project root.
- Fixed the screenshot links in this README so they open (spaces in the file names are written as `%20`).
- Published the website on GitHub Pages.

## Reference List

Esri (n.d.) *World Street Map* [Map tile service]. Available at: https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer (Accessed: 2 November 2026).

Formspree (n.d.) *Formspree* [Online form service]. Available at: https://formspree.io (Accessed: 2 November 2026).

GitHub (n.d.) *GitHub Pages documentation*. Available at: https://docs.github.com/en/pages (Accessed: 2 November 2026).

Google (n.d.a) *Control your snippets in search results*. Google Search Central. Available at: https://developers.google.com/search/docs/appearance/snippet (Accessed: 2 November 2026).

Google (n.d.b) *Google Maps*. Available at: https://www.google.com/maps (Accessed: 2 November 2026).

Google (n.d.c) *Influencing your title links in Google Search*. Google Search Central. Available at: https://developers.google.com/search/docs/appearance/title-link (Accessed: 2 November 2026).

Leaflet (n.d.) *Leaflet: an open-source JavaScript library for interactive maps*. Available at: https://leafletjs.com (Accessed: 2 November 2026).

MDN Web Docs (n.d.a) *Constraint validation*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation (Accessed: 2 November 2026).

MDN Web Docs (n.d.b) *\<details\>: The Details disclosure element*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details (Accessed: 2 November 2026).

MDN Web Docs (n.d.c) *Document: createElement() method*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement (Accessed: 2 November 2026).

MDN Web Docs (n.d.d) *Fetch API*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API (Accessed: 2 November 2026).

MDN Web Docs (n.d.e) *Node: textContent property*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent (Accessed: 2 November 2026).

OpenStreetMap contributors (n.d.) *Copyright and license*. OpenStreetMap Foundation. Available at: https://www.openstreetmap.org/copyright (Accessed: 2 November 2026).

Schema.org (n.d.) *BarberShop*. Available at: https://schema.org/BarberShop (Accessed: 2 November 2026).

Sitemaps.org (n.d.) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 2 November 2026).