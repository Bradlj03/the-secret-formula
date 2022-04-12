let enterText = document.querySelector("#userText");
let submitText = document.querySelector("#textSubmit");
let form = document.querySelector("form");

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(enterText.value)
    // From here, use Javascript to make it so that when the submit button is clicked,
    //the page displays the text inside of the text input as a browser alert.
    alert (enterText.value);
    enterText.value = "";
})

let multigrainBread = document.querySelector("#MultigrainWheat");
let whiteBread = document.querySelector("#WhiteBread");
let turkey = document.querySelector("#Turkey-Meat");
let chicken = document.querySelector("#Chicken-Meat");
let brisket = document.querySelector("#Brisket");
let bologna = document.querySelector("#Bologna")
let americanCheese = document.querySelector("#American-cheese");
let swissCheese = document.querySelector("#swiss-cheese");
let lettuce = document.querySelector("#lettuce");
let tomato = document.querySelector("#tomato");
let mayo = document.querySelector("#Mayo");

let makeSandwhich = document.querySelector("#Sandwich-submit")
//create a function that will remove all check boxes onve the form is submitted. 
function uncheckAll() {
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }
}

makeSandwhich.addEventListener('click', function(event){
    event.preventDefault();

    let sandwhichContains = " Your sandwhich contains: ";
    if (multigrainBread.checked){
        sandwhichContains += " multigrain bread, ";
    }

    if (turkey.checked){
        sandwhichContains += "turkey, ";
    }

    if (whiteBread.checked){
        sandwhichContains += "white bread, ";
    }

    if (chicken.checked){
        sandwhichContains += "chicken, ";
    }

    if (brisket.checked){
        sandwhichContains += "brisket, ";
    }

    if (bologna.checked){
        sandwhichContains += "bologna, ";
    }

    if (americanCheese.checked){
        sandwhichContains += "american cheese, ";
    }

    if (swissCheese.checked){
        sandwhichContains += "swiss cheese, ";
    }

    if (lettuce.checked){
        sandwhichContains += "lettuce, ";
    }

    if (tomato.checked){
        sandwhichContains += "tomato, ";
    }

    if (mayo.checked){
        sandwhichContains += "mayo, ";
    }

console.log(sandwhichContains);
alert(sandwhichContains)
uncheckAll()

})


const haircutForm = document.querySelector("#haircut-form");
const haircutDate = document.querySelector("#haircut-date");
const haircutText = document.querySelector("#haircut-text");
const haircutLong = document.querySelector("#haircut-long");
const haircutShort = document.querySelector("#haircut-short");

haircutForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let str =
    "Schedule haircut appoint for " +
    haircutDate.value +
    "with " +
    haircutText.value +
    "for ";
  if (haircutLong.checked) {
    str += "long hair.";
  } else if (haircutShort.checked) {
    str += "short hair.";
  }
  alert(str);
});

const usernameText = document.querySelector("#userNameText");
const emailText = document.querySelector("#email");
const passwordText = document.querySelector("#password");
const confirmPasswordText = document.querySelector("#confirmPassword");
const emailAccount = document.querySelector("#emailAccount")

emailAccount.addEventListener("submit", function (event) {
  event.preventDefault();

  let str =
    "Account Successfully" +
    usernameText.value +
    " with the following e-mail address: " +
    emailText.value +
    " .";
  alert(str);
});
