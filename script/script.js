
let form = document.querySelector("form");
let error = document.querySelector("#error");
let name = document.querySelector("#name");
let email = document.querySelector("#email");

//prevent submit from submitting
$("form").submit(function (e){
  e.preventDefault();

  var error = "";

  if ($("#name").val() == ""){
    error += "The name field is required!</br>";
  }

  if ($("#email").val() == ""){
    error += "The Email field is required!</br>";
  }

  if ($("#message").val() == ""){
    error += "A Message is required!</br>";
  }

  if (error != ""){
    $("#error").html('<div class="alert alert-danger" role="alert"> <strong>There are errors in the form:</strong></br>' + error + '</div>');
  } else {
      $("form").unbind("submit").submit();
  }
});

/* Smooth Scroll */
$("a[href*='#']").click(function(e) {
  e.preventDefault()

  let position = $($(this).attr('href')).offset().top;

  $("html, body").animate(
    {
      scrollTop: position 
    }, 600, 'linear'
  );
});

let bounce = document.querySelector("#bounce");

$("#bounce").click(function(){
  let position = $(this).offset().top + 150 + "px";

  $("html, body").animate(
    {
      scrollTop: position 
    }, 600, 'linear'
  );
})
