$(function() {
    if (!$.cookie("dpp-accepted")) {
      $("#cookieBand").addClass("active");
    } else {
      $("#cookieBand").removeClass("active");
    }

    $(document).on("click", '[data-role="cookie"]', function(e) {
      e.preventDefault();
      $.cookie("dpp-accepted", 1, {
        expires: 365,
        path: "/"
      });
      
      setTimeout(function() {
        $("#cookieBand").removeClass("active");
      }, 500);
    });
  });