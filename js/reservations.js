var dates = {}
today = new Date();

var calendar = document.getElementById("date-select");
var submit = document.getElementById("pseudo-submit");

function pseudo_check() {
    // Pseudo room availability check.

    const input = calendar.value;
    const selected = new Date(input);

    if (today.getTime() > selected.getTime()) {

        alert("Choose a future date!")

    } else {

        let available;
    
        if (input in dates) {
            available = dates[input]
    
        } else {
            let d = new Date();
            available = (d.getSeconds() % 10) < 5
            dates[input] = available;
        }
        
        if (available) {
            submit.removeAttribute("disabled");
            alert("There are rooms available!")
        } else {
            submit.setAttribute("disabled", true);
            alert("Sorry, our rooms are full at this date.")
        }

    }
}

function pseudo_reserve() {
    for (let i = 0; i < 3; i++) {
        if (document.getElementById("r-" + i).value == "") {
            alert("Please complete the form")
            return
        }
    }

    alert('We have received your reservation')
}