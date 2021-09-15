const nav = document.getElementById("navbar");

// the page titles and filenames
const pages = [
    ["Home", "index.html"],
    ["Amenities", "amenities.html"],
    ["Room Rates", "roomrates.html"],
    ["Reservations", "reservations.html"],
    ["About Us", "about.html"]
]

nav.innerHTML += "<div id=brand>Sorairo's Resort</div>";

// Adds the nav bar links
for (let i = 0; i < pages.length; i++) {
    const txt = pages[i][0]
    const src = pages[i][1];
    
    // Visual cue to know the current page. 
    let f = (i == index) ? "id=focus":"";

    nav.innerHTML += `<a href=${src} ${f}>${txt}</a>`
}