 function Greeting(){
  var Names = {};
  var greeting = "";

var myGreet = function(language,Name){

  if(Name != ''){


 if(Names[Name] === undefined){

 Names[Name] = 0;
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


    return{
           mygreeting,
           myGreet
       }

}
