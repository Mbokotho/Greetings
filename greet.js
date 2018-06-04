var NameElement = document.querySelector('.Name');
var greetBtnElement = document.querySelector('.greetBtn');
var greetingElement = document.querySelector('.greeting');
var greetingCounterElement = document.querySelector('.greetCounter');
var resetBtnElement = document.querySelector('.resetBtn');


var Names = {};
var Name = "";

if (localStorage.getItem("myNames")) {
  Names = JSON.parse(localStorage.getItem("myNames"))
  greetingCounterElement.innerHTML = Object.entries(Names).length;
}

var getGreet = Greeting();

function clickTheGreetButton() {



  var checkedRadioBtn = document.querySelector("input[name='Language']:checked");
  if (checkedRadioBtn) {
    var language = checkedRadioBtn.value;
  }
  var Name = NameElement.value;
  var name = Name.toUpperCase()

  if (name != "") {


    if (Names[name] === undefined) {

      Names[name] = 0;
      localStorage.setItem("myNames", JSON.stringify(Names));

    }

  }
  getGreet.myGreet(language, Name);


  greetingCounterElement.innerHTML = Object.entries(Names).length;

  greetingElement.innerHTML = getGreet.mygreeting();
  NameElement.value = '';

}

greetBtnElement.addEventListener('click', clickTheGreetButton);



function clickReset() {
  greetingCounterElement.innerHTML = 0;

  greetingElement.innerHTML = "";
  NameElement.value = '';
  var checkedRadioBtn = document.querySelector("input[name='Language']:checked");

}


resetBtnElement.addEventListener('click', clickReset);
