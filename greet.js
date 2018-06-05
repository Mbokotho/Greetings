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

// if (localStorage.getItem("myNames")) {
//   Names = JSON.parse(localStorage.getItem("myNames"))
//   greetingCounterElement.innerHTML = Object.entries(Names).length;
// }

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




  greetingElement.innerHTML =  getGreet.myGreet(language, Name);
  greetingCounterElement.innerHTML = getGreet.myCounter();
  NameElement.value = '';

      if (Name === "") {
        greetingElement.innerHTML = 'Please enter name !!'
      }

       if (!checkedRadioBtn) {
      greetingElement.innerHTML = 'Please enter a name and select language !!'
      }

}

greetBtnElement.addEventListener('click', clickTheGreetButton);



function clickReset() {
  getGreet.resetFunction();
  greetingCounterElement.innerHTML = 0;
  greetingElement.innerHTML = "";
  NameElement.value = '';
  localStorage.clear();

}


resetBtnElement.addEventListener('click', clickReset);
