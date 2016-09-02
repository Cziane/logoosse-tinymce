# Tinymce Meteor integration

`meteor add logosse:tinymce`

This pacakge is a light integration of tinymce for meteor.

![Official website of tinymce](https://www.tinymce.com)

## Table of Contents
1. [Getting Started](#getting-started)
	1.1 [Add in your template](#Add-in-your-template)
	1.2 [Get the editor content](#Get-the-editor-content)
	1.3 [More Documentation](#More-Documentation)
2. [Future](#Future)
3. [Lisence](#Lisence)

## 1.Getting Started.

	###1.1 Add in your template

	Nothing is more easy just put in your meteor template :

	`{{> tinymce_editor}}`

	You can also add two parameter :
		-Content : a already made content to add in the text editor. 
		-id : if you want add an id to your editor

  	###1.2 Get the editor content

  	If you want get the content of the editor you can use one of those functions :

  	 	Get the HTML contents of the currently active editor
		`console.debug(tinyMCE.activeEditor.getContent());`

		Get the raw contents of the currently active editor
		`tinyMCE.activeEditor.getContent({format : 'raw'});`

		Get content of a specific editor:
			`tinyMCE.get('<selector>').getContent();`

	###1.3 More Documentation
		You can also read the ![official documentation](https://www.tinymce.com/docs/) of tinymce to have more information.

## 2.Future

	The next step to reach is the possibility to toggle raw version of the editor content.

## 3.Lisence

	**GNU LESSER GENERAL PUBLIC LICENSE**

Feel free to share this project, fork it.