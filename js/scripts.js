$(document).ready(function() {
  $("#form2").submit(function(event) {
    event.preventDefault();
    var getChecks = checkBox();
    console.log(getChecks);
function checkBox(){
    var vegInputs = document.querySelectorAll(`input[name="vegetable"]:checked`);
    var vegTop = []; 
    console.log(vegTop);
    console.log(vegInputs);
    
    vegInputs.forEach((vegInput) => {
      vegTop.push(vegInput.value);
      console.log(vegInput);
    });
    return vegTop;  
  }
   
    

  });
});