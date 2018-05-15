document.addEventListener('DOMContentLoaded', function(){

  var NameElement = document.querySelector('.firstName');
  var greetBtnElement = document.querySelector('.greetBtn');
  var clearBtnElement = document.querySelector('.clearBtn');
  var greetingElement = document.querySelector('.greeting');

  function clickTheGreetButton(){
      var Name = NameElement.value;


    var greetingString = "Hi, <em>" + Name ;

    //var greetingString = greet(firstName);
    console.log(greetingString);

    greetingElement.innerHTML = greetingString;

    NameElement.value = '';

  }

  function greet(name){
    if (name.length > 2){
        return "Hi, " + name;
    }
  }

  greetBtnElement.addEventListener('click', clickTheGreetButton);

  function clickTheClearButton(){
      greetingElement.innerHTML = '';
  };

  clearBtnElement.addEventListener('click', clickTheClearButton);

  function makeRed(){
    greetingElement.classList.toggle('red');
  }

  greetingElement.addEventListener('dblclick', makeRed);

  //console.log(firstNameElement);
  //alert("yo!");

});
