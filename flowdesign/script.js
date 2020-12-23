function thanks() {
  var thx = document.getElementById("thanks");
  var body = document.getElementById("body")
  if (thx.style.display === "block") {
    thx.style.display = "none";
    body.style.height = "auto"
    body.style.overflow = "auto"
  } else {
    thx.style.display = "block";
    body.style.height = "100%"
    body.style.overflow = "hidden"
  }
}

$('a[href^="#"]').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top - 10;
    $('body, html').animate({scrollTop: scrollTo+'vh'}, 1000);
  }
});