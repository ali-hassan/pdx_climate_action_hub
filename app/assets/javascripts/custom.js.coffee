$ ->
  $("#my-signin2").on "click", ->
    window.location.href = "/people/auth/google_oauth2?locale=en";

  $(window).load ->
    if window.location.href.includes("login")
      $(".abcRioButtonContents").text("Log In with Google");
    else
      $(".abcRioButtonContents").text("Continue with Google");