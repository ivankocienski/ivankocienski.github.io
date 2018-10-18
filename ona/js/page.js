
$(function() {

  $("#zone-1 a.scroll-down").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#zone-2").offset().top
      }, 200);

    return false;
  });

  $("#zone-2 a.scroll-down").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#zone-3").offset().top
      }, 200);

    return false;
  });

  $("#zone-3 a.scroll-down").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#zone-4").offset().top
      }, 200);

    return false;
  });

  $("#zone-4 a.scroll-down").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#zone-5").offset().top
      }, 200);

    return false;
  });

  console.log("page loaded");
});

