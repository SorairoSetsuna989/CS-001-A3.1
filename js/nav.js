const nav = document.getElementById("navbar");

const pages = [
    ["Home", "index.html"],
    ["Amenities", "amenities.html"],
    ["Room Rates", "roomrates.html"],
    ["Reservations", "reservations.html"],
    ["About Us", "about.html"]
]

nav.innerHTML += "<div id=brand>Sorairo's Resort</div>";

for (let i = 0; i < pages.length; i++) {
    const txt = pages[i][0]
    const src = pages[i][1];
    
    f = (i == index) ? "id=focus":"";

    nav.innerHTML += `
        <a href=${src} ${f}>${txt}</a>
    `
}