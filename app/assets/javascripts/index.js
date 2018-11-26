$(function() {

var user_list = $("#user-search-result");
function appendUsers(user) {
   var html = `<div class="chat-group-user clearfix">
				<p class="chat-group-user__name">
				${user.name}
				</p>
				<a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
				</div>`
    user_list.append(html);
 }
 function appendUser(user) {
    var html = `
                  <div class='a.chat-group-user__name'>${user}</div>`
    user_list.append(html);
  }

function appendMembers(name, user_id) {
}


  $("input#user-search-field").on("keyup", function() {
    var input = $("input#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(members) {
      $("#user-search-result").empty();
      if (members.length !== 0) {
        members.forEach(function(user){
          appendUsers(user);
        });
      }
      else {
      	$("#user-search-result").empty();
        appendUser("一致するメンバーはいません");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });
});

 $(function(){
 	$(document).on("click", '.user_search_add', function(){
 		var name = $(this).attr("data-user-name");
 		console.log(this)
 		var user_id = $(this).attr("data-user-id");
 		$(this).parent().remove();
 		appendMembers(name, user_id);
 	});
 })