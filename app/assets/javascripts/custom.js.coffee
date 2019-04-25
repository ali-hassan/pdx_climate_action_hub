
# ---
# generated by js2coffee 2.2.0
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

  $(document).ready ->
    setTimeout (->
      lang_text = $(".goog-te-combo option:selected")[0].text;
      if lang_text == "Select Language"
        $(".goog-te-combo option:selected")[0].text = "Language"
        $(".goog-te-combo")[0].style.setProperty('width', '115px');
        $(".goog-te-combo")[0].style.setProperty('background-color', '#e8e8e8');
    ),3000

  googleBoxLoaded = false
  $("body").on 'click', '.lang-href', (e) ->
    e.preventDefault()
    lang=$(this).data('lang')
    $(".goog-te-combo option[value='#{lang}']").attr('selected', 'selected')
    $(".goog-te-combo").trigger('change')
    window.location.hash = "googtrans/#{lang}"
    window.location.reload(true)

  $("body").on "DOMSubtreeModified", ".goog-te-combo", (e) ->
    $selectBox = $(@)
    if $selectBox.find("option").length >= 104

      if googleBoxLoaded
        optList = new Array()
        $selectBox.find("option").each ->
          optList.push({text: @text, value: @value})
        dropDownListContainer = "<div class='toggle-container g-clone-cont home-toolbar-toggle-container home_listing_shapes custom-style'>"
        dropDownListContainer += "<div class=\"toggle with-borders\" data-toggle=\".google-toolbar-share-type-menu\" id=\"google_toolbar-select-share-type\">"
        dropDownListContainer += "<div class='toggle-header-container'>"
        dropDownListContainer += "<div class='toggle-header'>"
        dropDownListContainer += "Select Language"
        dropDownListContainer += "</div>"
        dropDownListContainer += "<i class=\"icon-caret-down icon-dropdown\"></i>"
        dropDownListContainer += "</div>"
        dropDownListContainer += "</div>"
        dropDownListContainer += "<div class='google-toolbar-share-type-menu toggle-menu toggle-menu-custom hidden' data-stop-propagation='true'>"
        $.each optList, (index, hsh) ->
          dropDownListContainer += "<a href='#' data-lang='#{hsh.value || '#'}' class='lang-href'>#{hsh.text}</a>"

        dropDownListContainer += "</div>"
        dropDownListContainer += "</div>"
        if $(".g-clone-cont").length
          $(".g-clone-cont").remove()
        $("#google_translate_element").after(dropDownListContainer)
        toggleMenu($("#google_toolbar-select-share-type"))


      googleBoxLoaded = true

  $("#google_translate_element").on "click", ->
    $(".goog-te-combo")[0].style.setProperty('background-color', '#A9A9A9');
    $(".goog-te-combo")[0].style.setProperty('width', '115px');
    $(".goog-te-combo")[0].style.setProperty('color', 'white');

  $(".goog-te-combo").on "change", ->
    $(".goog-te-combo option:selected")[0].text = "Language"
    $(".goog-te-combo")[0].style.setProperty('width', '115px');
    $(".goog-te-combo")[0].style.setProperty('background-color', '#e8e8e8');

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
