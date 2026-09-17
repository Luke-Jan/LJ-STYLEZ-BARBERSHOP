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

- Classic Haircut – R70
- Low Fade – R120
- Mid Fade – R150
- High Fade – R200
- Taper Fade – R100
- Beard Trim – R90
- Beard Shape Up – R80
- Full Beard Grooming – R150
- Hairline Clean Up & Massage – R200
- Shaving – R140
- General Grooming – R350

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