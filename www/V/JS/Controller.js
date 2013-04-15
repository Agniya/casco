var Controller = function(){
	this.start();
};

Controller.prototype = {
	completed: false,
	start: function(){
		var view = new View();
		$('[type = text]').val('');
		
		this.sendConsultForm();
		this.sendAsignForm();		
	},
	sendConsultForm: function(){
		var that = this;
		var modelConsult = new Model();
		$('.letSent').click(function(){
			$('.consult').hide();
			var form = document.forms.consulting;
			modelConsult.data = that.isComplete(form);
			var str = JSON.stringify(modelConsult.data);
		
			if(that.completed == true){	
				$.post('index.php?C=Base', str, function(){
				$('#consulting').html('');
				$('#consulting').append('<span id = "msg">Ваше сообщение отправлено</span>');
				});				
			};
		});
	},
	sendAsignForm: function(){
		var that = this;
		var modelAsign = new Model();
		$('.submit').click(function(){		
			$('.add').hide();
			var form = document.forms.userForm;
			modelAsign.data = that.isComplete(form);
			var str = JSON.stringify(modelAsign.data);
			
			if(that.completed == true){		
				$.post('index.php?C=Base', str, function(){
					$('#userForm').html('');
					$('#userForm').append('<span id = "msg">Ваше сообщение отправлено</span>');				
				});	
			};	
		});
	},
	isComplete: function(form){
		var obj = {};
		var elems = form.elements;
		for(var i = 0; i < elems.length; i++)
		{
			var input = elems[i];
			var tag = input.tagName;
			var typeI = input.getAttribute('type'); 
			var nameI = input.getAttribute('name'); 
			var idI = input.getAttribute('id');
			if(typeI == 'text' || tag == 'TEXTAREA'){
				var parentI = input.parentNode;
				this.resetError(parentI);
				var valueI = input.value;
				if(valueI){obj[nameI] = valueI;this.completed = true;}
				else{
					this.showError(parentI, ' Заполните поле ' +'"'+ idI +'"');
					this.completed = false;
				}
			};
		}
		return obj;
	},
	showError: function(container, errorMessage) {
		container.className = 'error';
		var msgElem = document.createElement('span');
		msgElem.className = "error-message";
		msgElem.innerHTML = errorMessage;
		container.appendChild(msgElem);
	},
	resetError: function(container) {
		container.className = '';
		if (container.lastChild.className == "error-message") {
			container.removeChild(container.lastChild);
		};
	}
}