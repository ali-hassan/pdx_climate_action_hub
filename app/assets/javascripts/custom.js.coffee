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

#  $(document).ready ->
#    setTimeout (->
#      $(".goog-logo-link")[0].innerHTML = "";
#      $g_div = $(".goog-te-gadget")
#      $g_div.html($g_div.html().split("Powered by ").join(""));
#      return
#    ),2000


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
  $(document).ready ->
    $(this).scrollTop 0


  $(document).on "click", "#submit_locals_form", (e) ->
    valueArray = $('#locale-selection').val()
    options = new Array()
    options.push("<select name='enabled_locales[]' multiple='multiple'>")
    $form = $("<form class='enable-locals-custom-form' style='display:none;' action='#{$(@).data("url")}' method='post' >")

    $.each valueArray, (index, value) ->
      options.push("<option value='#{value}' selected></option>")
    options.push("</select>")
    options.push("</form>")
    $form.html(options.join(""))
    $('.enable-locals-custom-form').remove()
    $('body').prepend($form.clone())
    $('.enable-locals-custom-form').submit()