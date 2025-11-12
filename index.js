let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let spinnerEl = document.getElementById("spin");
let speedTypingCont = document.getElementById("speedTypingTest");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");

let submitEl = document.getElementById("submitBtn");
let resetEl = document.getElementById("resetBtn");


let count = 0;


let uniquecode = setInterval(function() {
    count = count + 1;
    timerEl.textContent = count;

}, 1000);


let options = {
    method: "GET"
};


    fetch("https://quotes.domiadi.com/api")
  .then(response => response.json())
  .then(data => {
    quoteDisplayEl.textContent = data.quote;
    spinnerEl.classList.add("d-none");
    speedTypingCont.classList.remove("d-none");
  })
  .catch(error => {
    console.error("Error fetching quote:", error);
    spinnerEl.classList.add("d-none");
    speedTypingCont.classList.remove("d-none");
    quoteDisplayEl.textContent = "Error loading quote. Try again!";
  });


let submitFunction = function(event) {
    event.preventDefault();
    let inputContent = quoteInputEl.value;
    let quote = quoteDisplayEl.textContent;

    if (quote === inputContent) {
        clearInterval(uniquecode);
        let timerValue = timerEl.textContent;
        resultEl.textContent = "You typed in " + timerValue + " seconds.";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
}
submitEl.addEventListener("click", submitFunction);

let resetFunction = function() {
    clearInterval(uniquecode);
    timerEl.textContent = 0;
    quoteInputEl.value = "";
    let count = 0;
    uniquecode = setInterval(function() {
        count = count + 1;
        timerEl.textContent = count;

    }, 1000);


    let options = {
        method: "GET"
    };
  
    fetch("https://quotes.domiadi.com/api")
  .then(response => response.json())
  .then(data => {
    quoteDisplayEl.textContent = data.quote;
    spinnerEl.classList.add("d-none");
    speedTypingCont.classList.remove("d-none");
  })
  .catch(error => {
    console.error("Error fetching quote:", error);
    spinnerEl.classList.add("d-none");
    speedTypingCont.classList.remove("d-none");
    quoteDisplayEl.textContent = "Error loading quote. Try again!";
  });


};
resetEl.addEventListener("click", resetFunction);