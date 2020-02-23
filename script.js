function validateTheForm() {
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var key = "http://eepurl.com/gIAK4r";
    if (Name == "") {
      alert("please fill in your Name");
      return false;
    } else if (Email == "") {
      alert("Please fill in your name and Email");
      return false;
    } else {
      alert(
        Name +
          ", we have received your message. Thank you for reaching out to us."
      );
    }
    event.preventDefault();
  }
  $(document).ready(function() {
    $("#design-Img").click(function() {
      $("#design").show("2000");
      $("#design-Img").hide("slow")
    });
    $("#design").click(function() {
      $("#design-Img").show("2000");
      $("#design").hide("slow")
    });
    $("#develop-Img").click(function() {
      $("#development").show("2000");
      $("#develop-Img").hide("slow")
    });
    $("#development").click(function() {
      $("#develop-Img").show("2000");
      $("#development").hide("slow")
    });
    $("#product-Img").click(function() {
      $("#product").show("2000");
      $("#product-Img").hide("slow")
    }); 
    $("#product").click(function() {
      $("#product-Img").show("2000");
      $("#product").hide("slow")
    });
  
    $("#project1").hover(
      function() {
        $("#text1").show("2000");
      },
      function() {
        $("#text1").hide("2000");
      }
    );
    $("#project2").hover(
      function() {
        $("#text2").show("2000");
      },
      function() {
        $("#text2").hide("2000");
      }
    );
    $("#project3").hover(
      function() {
        $("#text3").show("2000");
      },
      function() {
        $("#text3").hide("2000");
      }
    );
    $("#project4").hover(
      function() {
        $("#text4").show("2000");
      },
      function() {
        $("#text4").hide("2000");
      }
    );
    $("#project5").hover(
      function() {
        $("#text5").show("2000");
      },
      function() {
        $("#text5").hide("2000");
      }
    );
    $("#project6").hover(
      function() {
        $("#text6").show("2000");
      },
      function() {
        $("#text6").hide("2000");
      }
    );
    $("#project7").hover(
      function() {
        $("#text7").show("2000");
      },
      function() {
        $("#text7").hide("2000");
      }
    );
    $("#project8").hover(
      function() {
        $("#text8").show("2000");
      },
      function() {
        $("#text8").hide("2000");
      }
    );
  });