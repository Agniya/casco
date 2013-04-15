var View = function(){
	this.init();
};

View.prototype = {
	data: {},
	completed: false,
	additionalField:
		'<tr><td>Ваш номер телефона:</td><td><input type = "text" name="Phone" id = "Ваш номер телефона"></td></tr>',
	additionalFieldsPodp:
		'<tr><td>Интересующая тематика новостей</td><td><input type="text" name = "Theme" id = "Интересующая тематика новостей"></td></tr>'+
		'<tr><td>Периодичность рассылки</td><td><input type="text" name = "Period" id = "Периодичность рассылки"></td></tr>',
	init: function(){
		$('.add').click($.proxy(this.addFormPodp,this));
		$('.consult').click($.proxy(this.addForm,this));		
	},
	addForm: function(){
		$('#question').before(this.additionalField);
		$('.consult').hide();
	},
	addFormPodp: function(){
		$('#userData').append(this.additionalFieldsPodp);
		$('.add').hide();
	}
}