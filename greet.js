
  var NameElement = document.querySelector('.Name');
  var greetBtnElement = document.querySelector('.greetBtn');
  var greetingElement = document.querySelector('.greeting');
  var greetingCounterElement = document.querySelector('.greetCounter');
  var resetBtnElement = document.querySelector('.reBtn');

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
          greeting = "Hello, " +NameElement.value;
        }
        if(language === 'Mandarin'){
          greeting = "Nǐ hǎo, " +NameElement.value;
        }
        if (language === 'IsiXhosa') {
          greeting = "Mholo, " + NameElement.value }


          console.log(Names);




          greetingCounterElement.innerHTML = Object.entries(Names).length ;

          greetingElement.innerHTML = greeting;
          NameElement.value = '';
          // greetingCounterElement.innerHTML = Object.keys(Names).length - 1;






        }

        greetBtnElement.addEventListener('click', clickTheGreetButton);


        function clickTheClearButton(){
              greetingElement.innerHTML = '';
          };


  resetBtnElement.addEventListener('click', clickTheClearButton);





  //console.log(firstNameElement);
  //alert("yo!");
