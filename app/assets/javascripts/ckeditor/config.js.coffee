CKEDITOR.editorConfig = (config) ->
  config.language = 'en'
  config.toolbar_Pure = [
    { name: 'document',    items: [ 'Save','Preview' ] },
    { name: 'clipboard',   items: [ 'Cut','Copy','Paste','Undo','Redo' ] },
#    { name: 'editing',     items: [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
#    { name: 'tools',       items: [ 'Maximize', 'ShowBlocks','-','About' ] }
    { name: 'basicstyles', items: [ 'Bold','Italic','Underline' ] },
#    { name: 'paragraph',   items: [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
#    { name: 'links',       items: [ 'Link','Unlink','Anchor' ] },
#    '/',
#    { name: 'styles',      items: [ 'Styles','Format','Font','FontSize' ] },
#    { name: 'colors',      items: [ 'TextColor','BGColor' ] },
#    { name: 'insert',      items: [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak' ] },
  ]
  config.toolbar = 'Pure'
  true