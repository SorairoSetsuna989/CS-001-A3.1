var dates = {}
today = new Date();

var calendar = document.getElementById("date-select");
var submit = document.getElementById("pseudo-submit");

function pseudo_check() {
    // Simulates the checking of room availability.

    const input = calendar.value;
    const selected = new Date(input);

    if (today.getTime() > selected.getTime()) {

        alert("Choose a future date!")

    } else {

        let available;
        
        // loads the result of the date if it was already selected.
        if (input in dates) {
            available = dates[input]
    
        } else {
            let d = new Date();
            available = (d.getSeconds() % 10) < 5 // Every 5 seconds the result changes

            // Saves the result to a dictionary with the date as key
            dates[input] = available;
        }
        

        //Disables or Enables the submit button
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
    // Simulates a server's response to a reservation

    for (let i = 0; i < 3; i++) {
        // I can't use jQuery hence the lazy getElement call
        if (document.getElementById("r-" + i).value == "") {
            alert("Please complete the form")
            return // Stops once one item is not filled.
        }
    }

    alert('We have received your reservation')
}