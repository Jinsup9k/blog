$(document).ready(function () {
  $(".menu-icon-div").click(function () {
    if ($(".sidebar").css("left") == "-300px") {
      $(".sidebar").animate({ width: "show", left: "0" }, 200, function () {});
    } else {
      $(".sidebar").animate(
        { width: "hide", left: "-300px" },
        200,
        function () {}
      );
    }
  });

  // $(".content").click(function () {
  //   if ($(".menu-icon-div").length > 0) {
  //     $(".sidebar").animate({ width: "toggle" }, 200, function () {});
  //     //   $(".menu-icon-div").css("display", "block");
  //   }
  // });
});
