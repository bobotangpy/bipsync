$(document).ready(() => {
  $(".eyeWrapper").click((e) => {
    e.preventDefault();

    let pwdType = $(".pwd").attr("type");

    if (pwdType === "password") {
      $(".bi.bi-eye").addClass("hidden");
      $(".bi.bi-eye-slash").removeClass("hidden");
      $(".pwd").attr("type", "text");
    } else {
        $(".bi.bi-eye-slash").addClass("hidden");
      $(".bi.bi-eye").removeClass("hidden");
      $(".pwd").attr("type", "password");
    }
  });

  $(".btn").click(() => {
    console.log($("input[name=id]").val())
    console.log($("input[name=password]").val())
  })
});
