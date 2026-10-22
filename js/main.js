// ===== Leaflet map (contact page only) =====
const mapElement = document.getElementById("map");

if (mapElement && typeof L !== "undefined") {
    const shopLocation = [-33.9608, 25.6022]; // replace with exact coordinates

    const map = L.map("map").setView(shopLocation, 16);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
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
    const sortSelect = document.getElementById("service-sort");
    const noResults = document.getElementById("no-results");

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

            const title = document.createElement("h3");
            title.textContent = service.name;

            const category = document.createElement("p");
            category.textContent = service.category;

            const price = document.createElement("p");
            price.className = "service-price";
            price.textContent = "R" + service.price;

            card.append(img, title, category, price);
            servicesList.appendChild(card);
        });
    }

    function updateServices() {
        const term = searchInput.value.trim().toLowerCase();

        let results = services.filter(function (service) {
            return service.name.toLowerCase().includes(term) ||
                   service.category.toLowerCase().includes(term);
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
    sortSelect.addEventListener("change", updateServices);

    updateServices();
}