Template.tinymce_editor.onCreated(function () {
  console.log(Template.currentData().id);
    tinymce.init({
        selector: Template.currentData().id!=null ?'#'+Template.currentData().id : "textarea",
        height: 300,
        menubar: false,
        toolbar1: 'bold italic strikethrough bullist numlist blockquote hr alignleft aligncenter alignright link unlink',
        toolbar2: 'styleselect underline alignjustify forecolor paste removeformat outdent indent undo redo',
        plugins: [
          'advlist autolink lists link image charmap hr anchor pagebreak',
          ' media    contextmenu ',
          ' template paste textcolor colorpicker textpattern '
        ]
    });
});

Template.tinymce_editor.helpers({
  content(){
      if(Template.currentData().content){
        return Template.currentData().content;
      }
      else{
        return '';
      }
  }
});