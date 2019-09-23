
let form = document.querySelector("form");
let error = document.querySelector("#error");
let name = document.querySelector("#name");
let email = document.querySelector("#email");

//prevent submit from submitting
$("form").submit(function (e){
  e.preventDefault();

  var error = "";

  if ($("#name").val() == ""){
    error += "<p>The name field is required!</p>";
  }

  if ($("#email").val() == ""){
    error += "<p>The Email field is required!</p>";
  }

  if ($("#message").val() == ""){
    error += "<p>A Message is required!</p>";
  }

  $("#error").html(error);
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
