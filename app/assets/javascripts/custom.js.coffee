$ ->
  $(".trans-button").on "click", (event) ->
    event.preventDefault();
    window.location.href = "/people/auth/google_oauth2?locale=en";

  $(window).load ->
    if window.location.href.includes("login")
      $(".abcRioButtonContents").text("Log In with Google");
    else
      $(".abcRioButtonContents").text("Continue with Google");

  $(document).ready ->
    setTimeout (->
      $("#u_0_3").innerHTML = "";
      return
    ),8000


  username  = $(".username").data("user")
  href      = window.location.href
  if href.includes("listing") or href.includes(username)
    modal = document.getElementById('myModal')
    btn = document.getElementById('myBtn')
    span = document.getElementsByClassName('close')[0]
    unless btn == null
      btn.onclick = ->
        modal.style.display = 'block'
        return
      span.onclick = ->
        modal.style.display = 'none'
        return
      window.onclick = (event) ->
        if event.target == modal
          modal.style.display = 'none'
        return
