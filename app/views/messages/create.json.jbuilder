json.user_name @message.user.name
json.image @message.image.url
json.content @message.content
json.time @message.created_at.in_time_zone('Tokyo').strftime("%Y年/%m月/%d日 %H時:%M分")
json.id @message.id
