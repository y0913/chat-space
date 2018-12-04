$(function(){
	function buildHTML(message){
		var addImage = (message.image == null)? '':`<img src = "${message.image}">`
		var html = `<div class="main-content__message-chat" data-message-id = "${message.id}">
    				<div class="main-content__message-name">
    					${message.user_name}
					</div>
					<div class="main-content__message-time">
						${message.time}
					</div>
					<div class="main-content__message-body">
						${message.content}
						${addImage}
					</div>
				</div>`;

    return html;
	};
//非同期通信
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
			if (data.content || data.image != null){
			$('.main-content__message').append(html);
			$('.form__submit')
			$('.form__message').val('');
			$('.hidden').val('');
			$('.main-content__body').animate({scrollTop: $('.main-content__body')[0].scrollHeight});
		}else{alert('メッセージを入力してください');}
		})
		.fail(function(){
			alert('メッセージを入力してください');
		})
		.always(function(){
			$('.form__submit').prop('disabled', false);
		})
	})

	//自動更新
	$(function(){
		$(function(){
			if(location.href.match(/\/groups\/\d+\/messages/)){
				setInterval(update, 5000);
			}
		});
		function update(){
			if($('.main-content__message-chat')[0]){
				var message_id = $('.main-content__message-chat:last').data('message-id');
			}else{
			}
			$.ajax({
				url: location.href,
				type: 'GET',
				data: {
				message: {id: message_id}
				},
				dataType:'json'
			})
			.done(function(data){
				data.forEach(function(data){
					var html = buildHTML(data)
					$('.main-content__message').append(html);
					$('.main-content__body').animate({scrollTop: $('.main-content__body')[0].scrollHeight});
				})
			})
			.fail(function(data){
				alert('自動更新に失敗しました')
			})
		}
	})
})