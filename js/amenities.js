const areas = [
    "Pool",
    "Beach Side",
    "Dining Area",
    "Lodging",
    "Sauna",
    "Game Club",
    "Mini-theater",
    "Souvenir Shop"
]

const table = document.getElementById("areas");
const views = document.getElementById("views");

// Filename must match the area name
for (let i = 0; i < areas.length; i+=2) {
    views.innerHTML += `
    <div class="area">
        ${areas[i]}
        <img src="../media/${areas[i]}.jpg">
    </div>
    <div class="area">
        ${areas[i+1]}
        <img src="../media/${areas[i+1]}.jpg">
    </div>`
}