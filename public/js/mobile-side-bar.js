$(document).ready(function () {
  $(".menu-icon-div").click(function () {
    if ($(".sidebar").css("left") == "-250px") {
      $(".sidebar").animate({ width: "show", left: "0" }, 200, function () {});
      //   $(".menu-icon-div").css("display", "none");
    } else {
      $(".sidebar").animate(
        { width: "hide", left: "-250px" },
        200,
        function () {}
      );
      $(".menu-icon-div").css("color", "#797979");
    }
  });

  $(".content").click(function () {
    if ($(".menu-icon-div").length > 0) {
      $(".sidebar").animate({ width: "toggle" }, 200, function () {});
      //   $(".menu-icon-div").css("display", "block");
    }
  });
});
