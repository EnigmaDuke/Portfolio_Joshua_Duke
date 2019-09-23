



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
