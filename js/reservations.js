var dates = {}
today = new Date();
var form = document.getElementById("form");
var calendar = document.getElementById("date-select");
var submit = document.getElementById("pseudo-submit");
function pseudo_check() {
    // Pseudo room availability based on seconds of current date.

    const selected = new Date(calendar.value);

    if (today.getTime() > selected.getTime()) {

        alert("Choose a future date!")

    } else {

        const input = calendar.value;

        let is_available;
    
        if (input in dates) {
            is_available = dates[input]
    
        } else {
            let d = new Date();
            let c = d.getSeconds();
            is_available = c < 15 || c >= 15 && c < 45;
            dates[input] = is_available;
        }
        
        if (is_available) {
            submit.removeAttribute("disabled");
            alert("There are rooms available!")
        } else {
            submit.setAttribute("disabled", true);
            alert("Sorry, our rooms are full at this date.")
        }

    }
}