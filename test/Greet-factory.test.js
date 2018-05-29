describe('Greeting widget', function(){

    it('Greet name in English', function(){

      var getGreet = Greeting();
      getGreet.myGreet("English", "Lwando");

      assert.equal( getGreet.mygreeting(), "Hello, Lwando");


});
it('Greet name in Mandarin', function(){

  var getGreet = Greeting();
  getGreet.myGreet("Mandarin", "Lwando");

  assert.equal( getGreet.mygreeting(), "Nǐ hǎo Lwando");


});

});
