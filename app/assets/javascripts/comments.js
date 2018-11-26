$(function(){
	function buildHTML(message){
		var addImage = (message.image !== null)? `<img src = "${message.image}">`:''
		var content = (message.content !== null)? `${message.content}`:''
		var html = `<div class="main-content__message-chat">
    				<div class="main-content__message-name">
    					${message.user_name}
					</div>
					<div class="main-content__message-time">
						${message.time}
					</div>
					<div class="main-content__message-body">
						${content}
						${addImage}
					</div>
				</div>`;

    return html;
	};

	function scroll(){
		$('.messages').animate({scrollTop: $('.message'[0].scrllHeight)});
	}
	$('#new_message').on('submit', function(e){
	e.preventDefault();
	var formData = new FormData(this);
	var url = $(this).attr('action');
		$.ajax({
			url: url,
			type: "POST",
			data: formData,
			dataType: 'json',
			processData: false,
			contentType: false
		})
		.done(function(data){
			var html = buildHTML(data);
			$('.main-content__message').append(html);
			$('.form__submit').prop('disabled', false);
			$('.form__message').val('');
			$('.hidden').val('');
			scroll()
		})
		.fail(function(){
			alert('error');
		})
	})
})