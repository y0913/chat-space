json.user_name @message.user.name
json.image @message.image.url
json.content @message.content
json.id @message.id
json.time @message.created_at.strftime("%Y/%m/%d %H:%M")
