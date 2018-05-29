
  var NameElement = document.querySelector('.Name');
  var greetBtnElement = document.querySelector('.greetBtn');
  var greetingElement = document.querySelector('.greeting');
  var greetingCounterElement = document.querySelector('.greetCounter');

  var greeting = "";
  var Names = {};


  function clickTheGreetButton(){
    //
    // / console.log(JSON.stringify(names));
    // var MyNames = [];
    // //take the names from localStorage
    // if (localStorage['MyNames']) {
    //   MyNames = JSON.parse(localStorage['MyNames']);
    // }
    //
    //
    //   localStorage['MyNames'] = JSON.stringify(MyNames);
    // });

          var checkedRadioBtn = document.querySelector("input[name='Language']:checked");
    if (checkedRadioBtn){
        var language = checkedRadioBtn.value;

    }
       var Name = NameElement.value;
       if(Name != ''){


      if(Names[Name] === undefined){

      Names[Name] = 0;
        }

  }
        if (language === 'English') {
          greeting = "Hello, " + Name;
        }
        if(language === 'Mandarin'){
          greeting = "Nǐ hǎo " + Name;
        }
        if (language === 'IsiXhosa') {
          greeting = "Mholo " + Name }
          console.log(Names);





          greetingCounterElement.innerHTML = Object.entries(Names).length ;

          greetingElement.innerHTML = greeting;
          NameElement.value = '';
          // greetingCounterElement.innerHTML = Object.keys(Names).length - 1;






        }

  // function greet(name){
  //   if (name.length > 2){
  //       return "Hello " +  name;
  //   }
  // }

  greetBtnElement.addEventListener('click', clickTheGreetButton);




  //console.log(firstNameElement);
  //alert("yo!");
