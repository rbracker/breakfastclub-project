document.addEventListener("DOMContentLoaded", function () {
    var currentDate = new Date();
    var options = { month: "long", day: "numeric", year: "numeric" };
    var formattedDate = currentDate.toLocaleDateString(undefined, options);

    document.getElementById("currentDay").textContent = formattedDate;

});

var response = fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function (response) { return response.json() })
    .then(
        function(data) {
            console.log(data)
        
        }
    )

    var response = fetch("https://api.adviceslip.com/advice")
    .then(function (response) { return response.json() })
    .then(
        function(data) {
            console.log(data)
        
        }
    )