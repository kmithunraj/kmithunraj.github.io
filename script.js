function navbtn() {
    var x = document.getElementById("navbar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  function navclose() {
    var x = document.getElementById("navbar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



  function home() {
    if (document.getElementById("home") !== undefined) {
      if (document.getElementById("home").style.display = "none") {
        document.getElementById("home").style.display = "block";
        document.getElementById("about").style.display = "none";
        document.getElementById("education").style.display = "none";
        document.getElementById("achievements").style.display = "none";
        document.getElementById("skills").style.display = "none";
        document.getElementById("contact").style.display = "none";
      } else {
        document.getElementById("home").style.display = "block";
        document.getElementById("about").style.display = "none";
        document.getElementById("education").style.display = "none";
        document.getElementById("achievements").style.display = "none";
        document.getElementById("skills").style.display = "none";
        document.getElementById("contact").style.display = "none";
        }
      }
    }


  function about() {
    if (document.getElementById("about") !== undefined) {
      if (document.getElementById("about").style.display = "none") {
        document.getElementById("home").style.display = "none";
        document.getElementById("about").style.display = "block";
        document.getElementById("education").style.display = "none";
        document.getElementById("achievements").style.display = "none";
        document.getElementById("skills").style.display = "none";
        document.getElementById("contact").style.display = "none";
      } else {
        document.getElementById("home").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("education").style.display = "none";
        document.getElementById("achievements").style.display = "none";
        document.getElementById("skills").style.display = "none";
        document.getElementById("contact").style.display = "none";
      }
    }
  }


  function education() {
    if (document.getElementById("education") !== undefined) {
      if (document.getElementById("education").style.display = "none") {
        document.getElementById("home").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("education").style.display = "block";
        document.getElementById("achievements").style.display = "none";
        document.getElementById("skills").style.display = "none";
        document.getElementById("contact").style.display = "none";
      } else {
        document.getElementById("home").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("education").style.display = "none";
        document.getElementById("achievements").style.display = "none";
        document.getElementById("skills").style.display = "none";
        document.getElementById("contact").style.display = "none";
      }
    }
  }


  function achievements() {
    if (document.getElementById("achievements") !== undefined) {
      if (document.getElementById("achievements").style.display = "none") {
        document.getElementById("home").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("education").style.display = "none";
        document.getElementById("achievements").style.display = "block";
        document.getElementById("skills").style.display = "none";
        document.getElementById("contact").style.display = "none";
      } else {
        document.getElementById("home").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("education").style.display = "none";
        document.getElementById("achievements").style.display = "none";
        document.getElementById("skills").style.display = "none";
        document.getElementById("contact").style.display = "none";
      }
    }
  }