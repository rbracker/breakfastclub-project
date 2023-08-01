var jokeBtn = document.querySelector(".joke");
var tipBtn = document.querySelector(".tips");
var jokeFetched = false;
var tipFetched = false;
var jokeSaveBtn = document.querySelector(".saveJokeBtn");
var tipSaveBtn = document.querySelector(".saveTipBtn");


document.addEventListener("DOMContentLoaded", function () {
    var currentDate = new Date();
    var options = { month: "long", day: "numeric", year: "numeric" };
    var formattedDate = currentDate.toLocaleDateString(undefined, options);

    document.getElementById("currentDay").textContent = formattedDate;


});

jokeSaveBtn.addEventListener("click", function(event){
    event.preventDefault();
    var jokeResult = document.querySelector("#jokeContent").innerHTML;

    localStorage.setItem("joke", jokeResult);
});

tipSaveBtn.addEventListener("click", function(event){
    event.preventDefault();
    var tipResult = document.querySelector("#tipContent").innerHTML;
    
    localStorage.setItem("tip", tipResult);
});


function updateJokeContent(content){
    var jokeText = document.getElementById("jokeContent")
    jokeText.innerHTML = content; 
};

function updateTipContent(contentTwo){
    var tipText = document.getElementById("tipContent")
    tipText.innerHTML = contentTwo;
};

function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(function (response) {
            return response.json();
        })
        
        .then(function (data) {
            var joke = "<strong>Setup:</strong> " + data.setup + "<br><strong>Punchline:</strong> " + data.punchline;
            updateJokeContent(joke);
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
            updateTipContent(tip);
        })
        
        .catch(function (error) {
            console.log("Error fetching tip:", error);
        });
}

jokeBtn.addEventListener("click", function () {
    if (!jokeFetched) {
        fetchJoke();
        jokeFetched = true;
    }
});

tipBtn.addEventListener("click", function () {
    if (!tipFetched) {
        fetchTip();
        tipFetched = true;
    }
});

