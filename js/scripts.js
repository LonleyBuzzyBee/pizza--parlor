function getVegValues(){
    var vegInputs = document.querySelectorAll(`input[name="vegetable"]:checked`);
    var vegTop = []; 
    vegInputs.forEach((vegInput) => {
      vegTop.push(vegInput.value);
      console.log(vegInput);
    });
    return vegTop.map(_=>_|0).reduce((x,y) => x+y,0);  
  }
function getMeatValues(){
    var vegInputs = document.querySelectorAll(`input[name="vegetable"]:checked`);
    var vegTop = []; 
    vegInputs.forEach((vegInput) => {
      vegTop.push(vegInput.value);
      console.log(vegInput);
    });
    return vegTop.map(_=>_|0).reduce((x,y) => x+y,0);  
  }
function getSauceValues(){
    var vegInputs = document.querySelectorAll(`input[name="vegetable"]:checked`);
    var vegTop = []; 
    vegInputs.forEach((vegInput) => {
      vegTop.push(vegInput.value);
      console.log(vegInput);
    });
    return vegTop.map(_=>_|0).reduce((x,y) => x+y,0);  
  }
function getSizeValues(){
    var vegInputs = document.querySelectorAll(`input[name="vegetable"]:checked`);
    var vegTop = []; 
    vegInputs.forEach((vegInput) => {
      vegTop.push(vegInput.value);
      console.log(vegInput);
    });
    return vegTop.map(_=>_|0).reduce((x,y) => x+y,0);  
  }
function getCheezeValues(){
    var vegInputs = document.querySelectorAll(`input[name="vegetable"]:checked`);
    var vegTop = []; 
    vegInputs.forEach((vegInput) => {
      vegTop.push(vegInput.value);
      console.log(vegInput);
    });
    return vegTop.map(_=>_|0).reduce((x,y) => x+y,0);  
  }
function getDSauceValues(){
    var vegInputs = document.querySelectorAll(`input[name="vegetable"]:checked`);
    var vegTop = []; 
    vegInputs.forEach((vegInput) => {
      vegTop.push(vegInput.value);
      console.log(vegInput);
    });
    return vegTop.map(_=>_|0).reduce((x,y) => x+y,0);  
  }









$(document).ready(function() {
  $("#form2").submit(function(event) {
    event.preventDefault();
    var getVegChecks = getVegValues();
    console.log(getVegChecks);
    
    var getMeatChecks = getMeatValues();
   
    console.log(getMeatChecks);
    
    
    var getSauceChecks = getSauceValues();
    console.log(getSauceChecks);
    
    
    var getSizeChecks = getSizeValues();
    console.log(getSizeChecks);
    
    
    var getCheezeChecks = getCheezeValues();
    console.log(getCheezeChecks);
    
    
    var getDSauceChecks = getDSauceValues();
    console.log(getDSauceChecks);

    

 

  });
});