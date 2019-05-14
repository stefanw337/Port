      function textboxMove(){
        var textbox = document.getElementById('ok');
        textbox.classList.add("textboxMove")
      }

      function textboxMoveStop(){
        var textbox = document.getElementById('ok');
        textbox.classList.remove("textboxMove");
      }

      function biggerMe(){
        elem = event.target;
        elem.style.transform= "scale(1.2)";
      }

      var objekte = document.getElementsByClassName("big");
      // var seite = document.documentElement;
      seite.addEventListener("click", biggerMe);

      var bigObjects = document.getElementById("rr");
      // var bigObjects = document.getElementsByName("ok")
      bigObjects.addEventListener('click', biggerMe);


      // document.body.onload = textboxMove;
