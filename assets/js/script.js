document.addEventListener("DOMContentLoaded", function () {
    var currentDate = new Date();
    var options = { month: "long", day: "numeric", year: "numeric" };
    var formattedDate = currentDate.toLocaleDateString(undefined, options);

    document.getElementById("currentDay").textContent = formattedDate;

    var jokeFetched = false;
    var tipFetched = false;

    document.querySelector(".joke").addEventListener("click", function () {
        if (!jokeFetched) {
            fetchJoke();
            jokeFetched = true;
        }
    });

    document.querySelector(".tips").addEventListener("click", function () {
        if (!tipFetched) {
            fetchTip();
            tipFetched = true;
        }
    });
});

function updateTestContent(content) {
    var testElement = document.getElementById("testContent");
    testElement.innerHTML = content;
}

function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(function (response) {
            return response.json();
        })
        
        .then(function (data) {
            var joke = "<strong>Setup:</strong> " + data.setup + "<br><strong>Punchline:</strong> " + data.punchline;
            updateTestContent(joke);
        })
        
        .catch(function (error) {
            console.log("Error fetching joke:", error);
        });
}

function fetchTip() {
    fetch("https://api.adviceslip.com/advice")
        .then(function (response) {
            return response.json();
        })
        
        .then(function (data) {
            var tip = "<strong>Today's tip:</strong> " + data.slip.advice;
            updateTestContent(tip);
        })
        
        .catch(function (error) {
            console.log("Error fetching tip:", error);
        });
}
