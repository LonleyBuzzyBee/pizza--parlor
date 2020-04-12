function getVegValues(){
    var vegInputs = document.querySelectorAll(`input[name="vegetable"]:checked`);
    var vegTop = []; 
    vegInputs.forEach((vegInput) => {
      vegTop.push(vegInput.value);
    });
    return vegTop.map(_=>_|0).reduce((x,y) => x+y,0);  
  }
function getMeatValues(){
    var meatInputs = document.querySelectorAll(`input[name="meat"]:checked`);
    var meatTop = []; 
    meatInputs.forEach((meatInput) => {
      meatTop.push(meatInput.value);
    });
    return meatTop.map(_=>_|0).reduce((x,y) => x+y,0);  
  }
function getSauceValues(){
    var sauceInputs = document.querySelectorAll(`input[name="sauce"]:checked`);
    var sauceTop = []; 
    sauceInputs.forEach((sauceInput) => {
      sauceTop.push(sauceInput.value);
    });
    return sauceTop.map(_=>_|0).reduce((x,y) => x+y,0);  
  }
function getSizeValues(){
    var sizeInputs = document.querySelectorAll(`input[name="size"]:checked`);
    var sizeTop = []; 
    sizeInputs.forEach((sizeInput) => {
      sizeTop.push(sizeInput.value);
    });
    return sizeTop.map(_=>_|0).reduce((x,y) => x+y,0);  
  }
function getCheeseValues(){
    var cheeseInputs = document.querySelectorAll(`input[name="cheese"]:checked`);
    var cheeseTop = []; 
    cheeseInputs.forEach((cheeseInput) => {
      cheeseTop.push(cheeseInput.value);
    });
    return cheeseTop.map(_=>_|0).reduce((x,y) => x+y,0);  
  }
function getDSauceValues(){
    var dSauceInputs = document.querySelectorAll(`input[name="dSauce"]:checked`);
    var dSauceTop = []; 
    dSauceInputs.forEach((dSauceInput) => {
      dSauceTop.push(dSauceInput.value);
    });
    return dSauceTop.map(_=>_|0).reduce((x,y) => x+y,0);  
  }

function Pizza(vTopping,mTopping,sTopping,pSize,cTopping,dSauce) {
  this.vTopping = vTopping,
  this.mTopping = mTopping,
  this.sTopping = sTopping,
  this.pSize = pSize,
  this.cTopping = cTopping,
  this.dSauce = dSauce,
  this.cost = 0;
}
Pizza.prototype.addToppings = function() {
  var total = this.cost + this.vTopping + this.sTopping + this.pSize + this.cTopping + this.dSauce;
  console.log(total);
  return this.printCost(total);
}
Pizza.prototype.printCost = function (finalTotal) {

$("#cost2").html(finalTotal);
}
function Classic(classicPizza) {
  this.classicPizza = classicPizza;
  this.cost = 0;
}
Classic.prototype.addClassic = function () {
  if (this.classicPizza === "hawaiian"){
    return this.printClassic(this.cost = 12);
  }else if (this.classicPizza === "peperoni"){
    return this.printClassic(this.cost = 11);
  }else if (this.classicPizza === "fourCheese"){
    return this.printClassic(this.cost = 13);
  }else if (this.classicPizza === "buffaloChicken") {
    return this.printClassic(this.cost = 14);
  }else{
    return this.printClassic(this.cost);
  }

}
Classic.prototype.printClassic = function () {
  // classicCost.addClassic();

  $("#cost1").html(this.cost);
}






$(document).ready(function() {
  $("#form2").submit(function(event) {
    event.preventDefault();
    var getVegChecks = getVegValues();
    var getMeatChecks = getMeatValues();
    var getSauceChecks = getSauceValues();
    var getSizeChecks = getSizeValues();
    var getCheezeChecks = getCheeseValues();
    var getDSauceChecks = getDSauceValues();
    var pizza = new Pizza (getVegChecks,getMeatChecks,getSauceChecks,getSizeChecks,getCheezeChecks,getDSauceChecks);

    pizza.addToppings();
    
  });

  $("#form1").submit(function(event) {
    event.preventDefault();
    var classicPizza = $(".classic").val();
    var classic = new Classic (classicPizza);
    console.log(classic);
    classic.addClassic();

  });
});