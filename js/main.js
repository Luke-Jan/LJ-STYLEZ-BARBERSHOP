// ===== Helpers =====
function showError(id, message) {
    const el = document.getElementById(id + "-error");
    if (el) el.textContent = message;
}

function clearErrors(form) {
    form.querySelectorAll(".error").forEach(function (e) { e.textContent = ""; });
}

function value(form, id) {
    const el = form.querySelector("#" + id);
    return el ? el.value.trim() : "";
}

function validateForm(form) {
    clearErrors(form);
    let valid = true;

    const name = value(form, "name");
    const email = value(form, "email");
    const phone = value(form, "phone").replace(/\s/g, "");
    const message = value(form, "message");

    if (name.length < 2) {
        showError("name", "Please enter your full name.");
        valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError("email", "Enter a valid email address.");
        valid = false;
    }
    if (phone && !/^0\d{9}$/.test(phone)) {
        showError("phone", "Enter a 10-digit number starting with 0.");
        valid = false;
    }
    if (form.querySelector("#service") && !value(form, "service")) {
        showError("service", "Please choose a service.");
        valid = false;
    }
    if (form.querySelector("#type") && !value(form, "type")) {
        showError("type", "Please choose a message type.");
        valid = false;
    }
    if (form.querySelector("#subject") && value(form, "subject").length < 3) {
        showError("subject", "Please enter a subject.");
        valid = false;
    }
    if (message.length < 10) {
        showError("message", "Message must be at least 10 characters.");
        valid = false;
    }

    const date = value(form, "date");
    if (date) {
        const chosen = new Date(date + "T00:00:00");
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (chosen < today) {
            showError("date", "Please choose today or a future date.");
            valid = false;
        }
    }

    return valid;
}

// ===== Leaflet map (contact page only) =====
const mapElement = document.getElementById("map");

if (mapElement && typeof L !== "undefined") {
    const shopLocation = [-33.9608, 25.6022]; // REPLACE with your exact coordinates

    const map = L.map("map").setView(shopLocation, 16);

    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        maxZoom: 19,
        attribution: "Tiles &copy; Esri &mdash; Source: Esri, HERE, Garmin, OpenStreetMap contributors"
    }).addTo(map);

    L.marker(shopLocation)
        .addTo(map)
        .bindPopup("<strong>LJ Fresh Stylez</strong><br>100 Harrington Street, Salt Lake, Gqeberha")
        .openPopup();
}

// ===== Dynamic services (services page only) =====
const servicesList = document.getElementById("services-list");

if (servicesList && typeof services !== "undefined") {
    const searchInput = document.getElementById("service-search");
    const categorySelect = document.getElementById("service-category");
    const sortSelect = document.getElementById("service-sort");
    const noResults = document.getElementById("no-results");

    // Build the category filter from the data
    const categories = [];
    services.forEach(function (s) {
        if (categories.indexOf(s.category) === -1) {
            categories.push(s.category);
        }
    });
    categories.forEach(function (name) {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        categorySelect.appendChild(option);
    });

    function renderServices(list) {
        servicesList.innerHTML = "";
        noResults.hidden = list.length > 0;

        list.forEach(function (service) {
            const card = document.createElement("article");
            card.className = "service-card";

            const img = document.createElement("img");
            img.src = service.image;
            img.alt = service.name + " at LJ Fresh Stylez barbershop";
            img.loading = "lazy";
            img.onerror = function () { img.hidden = true; };

            const title = document.createElement("h3");
            title.textContent = service.name;

            const category = document.createElement("p");
            category.className = "service-category";
            category.textContent = service.category;

            const description = document.createElement("p");
            description.textContent = service.description;

            const price = document.createElement("p");
            price.className = "service-price";
            price.textContent = "R" + service.price;

            const link = document.createElement("a");
            link.href = "enquiry.html?service=" + encodeURIComponent(service.id);
            link.textContent = "ENQUIRE ABOUT THIS";

            card.append(img, title, category, description, price, link);
            servicesList.appendChild(card);
        });
    }

    function updateServices() {
        const term = searchInput.value.trim().toLowerCase();
        const chosenCategory = categorySelect.value;

        const results = services.filter(function (s) {
            const matchesText =
                s.name.toLowerCase().includes(term) ||
                s.category.toLowerCase().includes(term) ||
                s.description.toLowerCase().includes(term);
            const matchesCategory =
                chosenCategory === "all" || s.category === chosenCategory;
            return matchesText && matchesCategory;
        });

        const sortBy = sortSelect.value;

        if (sortBy === "price-low") {
            results.sort(function (a, b) { return a.price - b.price; });
        } else if (sortBy === "price-high") {
            results.sort(function (a, b) { return b.price - a.price; });
        } else if (sortBy === "name") {
            results.sort(function (a, b) { return a.name.localeCompare(b.name); });
        }

        renderServices(results);
    }

    searchInput.addEventListener("input", updateServices);
    categorySelect.addEventListener("change", updateServices);
    sortSelect.addEventListener("change", updateServices);

    updateServices();
}

// ===== Image lightbox (gallery and service cards) =====
const lightbox = document.getElementById("lightbox");

if (lightbox) {
    const lightboxImg = document.getElementById("lightbox-img");

    function closeLightbox() {
        lightbox.hidden = true;
    }

    // One listener covers the gallery and the dynamically built service cards
    document.addEventListener("click", function (e) {
        const img = e.target.closest(".gallery img, .service-card img");
        if (!img) return;
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.hidden = false;
    });

    lightbox.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeLightbox();
    });
}

// ===== Enquiry page: dropdown, validation, response, AJAX =====
const enquiryForm = document.getElementById("enquiry-form");

if (enquiryForm && typeof services !== "undefined") {
    const serviceSelect = document.getElementById("service");
    const otherOption = serviceSelect.querySelector('option[value="other"]');
    const groups = {};

    // Build the dropdown from the services data
    services.forEach(function (service) {
        if (!groups[service.category]) {
            const group = document.createElement("optgroup");
            group.label = service.category;
            groups[service.category] = group;
            serviceSelect.insertBefore(group, otherOption);
        }

        const option = document.createElement("option");
        option.value = service.id;
        option.textContent = service.name + " (R" + service.price + ")";
        groups[service.category].appendChild(option);
    });

    // Preselect the service from the link (enquiry.html?service=low-fade)
    const wanted = new URLSearchParams(window.location.search).get("service");
    if (wanted) serviceSelect.value = wanted;

    // Do not allow dates in the past
    const dateInput = document.getElementById("date");
    if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];

    const response = document.getElementById("enquiry-response");

    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!validateForm(enquiryForm)) return;

        const name = value(enquiryForm, "name");
        const chosen = services.find(function (s) { return s.id === serviceSelect.value; });
        const dateText = value(enquiryForm, "date");

        let text;
        if (chosen) {
            text = "Thank you, " + name + ". " + chosen.name + " costs R" + chosen.price + ". " +
                   "We are open Mon-Fri 09:00-18:00, Sat 08:00-16:00 and Sun 10:00-14:00.";
            if (dateText) {
                text += " We will confirm availability for " + dateText + " shortly.";
            }
        } else {
            text = "Thank you, " + name + ". We will reply to your question shortly.";
        }

        response.hidden = false;
        response.textContent = text;

        // AJAX submission (no page reload)
        fetch(enquiryForm.action, {
            method: "POST",
            body: new FormData(enquiryForm),
            headers: { Accept: "application/json" }
        }).then(function (res) {
            if (res.ok) {
                response.textContent = text + " Your enquiry has been sent.";
                enquiryForm.reset();
            } else {
                response.textContent = text + " We could not send your enquiry. Please call us on 066 181 7197.";
            }
        }).catch(function () {
            response.textContent = text + " We could not send your enquiry. Please call us on 066 181 7197.";
        });
    });
}

// ===== Contact page: validation and compiled email =====
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    const contactResponse = document.getElementById("contact-response");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!validateForm(contactForm)) return;

        const body =
            "Name: " + value(contactForm, "name") + "\n" +
            "Email: " + value(contactForm, "email") + "\n" +
            "Phone: " + (value(contactForm, "phone") || "Not provided") + "\n" +
            "Type: " + value(contactForm, "type") + "\n\n" +
            value(contactForm, "message");

        contactResponse.hidden = false;
        contactResponse.textContent =
            "Your email is ready. Please press Send in your email app to deliver it to LJ Fresh Stylez.";

        window.location.href = "mailto:ljfreshstylez@gmail.com" +
            "?subject=" + encodeURIComponent(value(contactForm, "subject")) +
            "&body=" + encodeURIComponent(body);
    });
}