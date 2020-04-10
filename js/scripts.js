$(document).ready(function() {
  $("#form2").submit(function(event) {
    event.preventDefault();
    var v1Input = parseInt($("input#v-1:checked").val());
    var v2Input = parseInt($("input#v-2:checked").val());
    var v3Input = parseInt($("input#v-3:checked").val());
    var v4Input = parseInt($("input#v-4:checked").val());
    var vegTop = v1Input + v2Input + v3Input + v4Input;
    console.log(v1Input);
    console.log(vegTop);
  });
});