 function Greeting(){
  var Names = {};
  var greeting = "";
  var Name ="";

var myGreet = function(language,Name){
  var name = Name.toUpperCase();

    if (Name != "") {

      if (Names[name] === undefined) {

        Names[name] = 0;

      }

    }


  if ( language === 'IsiXhosa') {
    greeting = "Mholo, " +  Name;
  }
  if (language === 'Mandarin') {

     greeting = "Nǐ hǎo, " + Name;

  } if ( language === 'English') {
      greeting = "Hello, " + Name;
  }

}

 function mygreeting(){

  return greeting;
}

function myCounter() {
  return Object.entries(Names).length ;

}

    return{
           mygreeting,
           myGreet,myCounter

       }

}
