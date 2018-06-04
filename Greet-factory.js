 function Greeting(){
  var Names = {};
  var greeting = "";

var myGreet = function(language,Name){

  var name = Name.toUpperCase();




  if(Name != ''){


 if(Names[name] === undefined){

 Names[name] = 0;
   }

}
   if (language === 'English') {
     greeting = "Hello, " + Name;
   }
   if(language === 'Mandarin'){
     greeting = "Nǐ hǎo, " + Name;
   }
   if (language === 'IsiXhosa') {
     greeting = "Mholo, " + Name
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
