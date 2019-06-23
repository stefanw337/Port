var submitButton =   document.getElementById("button");
var custom1 = document.getElementsByName("custom1")[0].value;



// submitButton.onclick = function() { ok();  };


function ok(){
  document.getElementsByTagName("p")[0].innerHTML = custom1;
}
