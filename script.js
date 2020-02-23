// submit button function
function validateTheForm() {
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
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
//   function for what we do-responsiveness
  $(document).ready(function() {
    $("#design-Img").click(function() {
      $("#dsgn").show("2000");
      $("#design-Img").hide("slow")
    });
    $("#dsgn").click(function() {
      $("#design-Img").show("2000");
      $("#dsgn").hide("slow")
    });
    $("#develop-Img").click(function() {
      $("#dvlpmnt").show("2000");
      $("#develop-Img").hide("slow")
    });
    $("#dvlpmnt").click(function() {
      $("#develop-Img").show("2000");
      $("#dvlpmnt").hide("slow")
    });
    $("#product-Img").click(function() {
      $("#prdct").show("2000");
      $("#product-Img").hide("slow")
    }); 
    $("#prdct").click(function() {
      $("#product-Img").show("2000");
      $("#prdct").hide("slow")
    });
//    function for portfolio-responsivesness  
    $("#work1").hover(
      function() {
        $("#txt1").show("2000");
      },
      function() {
        $("#txt1").hide("2000");
      }
    );
    $("#work2").hover(
      function() {
        $("#txt2").show("2000");
      },
      function() {
        $("#txt2").hide("2000");
      }
    );
    $("#work3").hover(
      function() {
        $("#txt3").show("2000");
      },
      function() {
        $("#txt3").hide("2000");
      }
    );
    $("#work4").hover(
      function() {
        $("#txt4").show("2000");
      },
      function() {
        $("#txt4").hide("2000");
      }
    );
    $("#work5").hover(
      function() {
        $("#txt5").show("2000");
      },
      function() {
        $("#txt5").hide("2000");
      }
    );
    $("#work6").hover(
      function() {
        $("#txt6").show("2000");
      },
      function() {
        $("#txt6").hide("2000");
      }
    );
    $("#work7").hover(
      function() {
        $("#txt7").show("2000");
      },
      function() {
        $("#txt7").hide("2000");
      }
    );
    $("#work8").hover(
      function() {
        $("#txt8").show("2000");
      },
      function() {
        $("#txt8").hide("2000");
      }
    );
  });