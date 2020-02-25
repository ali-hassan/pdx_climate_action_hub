(function() {
  CKEDITOR.editorConfig = function(config) {
    config.language = 'en';
    config.toolbar_Pure = [
      {
        name: 'basicstyles',
        items: ['Bold', 'Italic']
      }, {
        name: 'paragraph',
        items: ['NumberedList', 'BulletedList', 'Outdent', 'Indent', 'Link', 'Unlink']
      }, {
        name: 'clipboard',
        items: ['Undo', 'Redo']
      }
    ];
    config.toolbar = 'Pure';
    return true;
  };

  CKEDITOR.on('dialogDefinition', function(ev) {
    var dialogDefinition, dialogName, targetField, targetName, targetTab;
    dialogName = ev.data.name;
    dialogDefinition = ev.data.definition;
    if (dialogName === 'link') {
      targetTab = dialogDefinition.getContents('target');
      targetField = targetTab.get('linkTargetType');
      targetName = targetTab.get('linkTargetName');
      targetField['default'] = '_blank';
      targetName['default'] = '_blank';
    }
  });

}).call(this);
