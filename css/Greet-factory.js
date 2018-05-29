var myName = function(){

  var Name = '';
  var greeting ="";
  var Names = {};



function greetingFunction(Language,Name){

    if(Names[Name] === undefined){

    Names[Name] = 0;
      }

    if (language === 'English') {
      greeting = "Hello " + Name;
    }
    if(language === 'Mandarin'){
      greeting = "Nǐ hǎo " + Name;
    }
    if (language === 'Swahili') {
      greeting = "JamboNǐ hǎo " + Name }
  }

  function myGreeting(){
    return greeting;
  }

  function greetCounter(){
    return Object.keys(Names).length;
  }

  function nameMap(){
    return Names
  }

  return {
    greetingFunction,
    myGreeting,
    greetCounter,

  }
}
