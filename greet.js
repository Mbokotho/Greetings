document.addEventListener('DOMContentLoaded', function(){

  var NameElement = document.querySelector('.Name');
  var greetBtnElement = document.querySelector('.greetBtn');
  var greetingElement = document.querySelector('.greeting');

  function clickTheGreetButton(){
      var Name = NameElement.value;


    var greetingString = "Hello, <em>" + Name;

    //var greetingString = greet(firstName);
    console.log(greetingString);

    greetingElement.innerHTML = greetingString;

    NameElement.value = '';

  }

  function greet(name){
    if (name.length > 2){
        return "Hello " +  name;
    }
  }

  greetBtnElement.addEventListener('click', clickTheGreetButton);




  //console.log(firstNameElement);
  //alert("yo!");

});
