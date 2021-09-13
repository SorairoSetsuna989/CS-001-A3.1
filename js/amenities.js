const areas = {
    "Pool":"",
    "Beach Side": "",
    "Dining Area": "",
    "Lodging":"",
    "Sauna": "",
    "Game Club": "",
    "Mini-theater":"",
    "Souvenir Shop":"",
}

const table = document.getElementById("areas");

Object.keys(areas).forEach(
    area => {
    table.innerHTML += `
        <tr>
            <td>${area}</td>
            <td> 
                <img src=${areas[area]}>
            </td>
        </tr>`; 

    }
)