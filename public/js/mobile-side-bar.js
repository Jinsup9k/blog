$(document).ready(function () {
  $(".menu-icon-div").click(function () {
    if ($(this).length > 0) {
      setTimeout(function () {
        $(".sidebar").css("left", "0");
        $(".sidebar").css(
          "background",
          ' url("/public/img/ss1.jpg") #006600 no-repeat'
        );
        $(".sidebar").css("background-size", "100% 19rem");
        $(".menu-icon-div").css("display", "none");
      }, 200);
    } else {
      return false;
    }
  });

  $(".content").click(function () {
    setTimeout(function () {
      $(".sidebar").css("left", "-250px");
      $(".menu-icon-div").css("display", "block");
    }, 200);
  });
});
