# Edit README.md

## usersテーブル
|column|type|option|
|------|-------|----------------------------|
|name|string |null: false, unique: true, index|

### Assosiation
-has_many :groups, through: :groups_users

-has_many :groups_users

-has_many :messages

## groupsテーブル
|column|type|option|
|------|-------|----------------------------|
|name|string|null : false, unique: true, index|

### Association
-has_many :users, thorough: :groups_users

-has_many :groups_users

-has_many :messages

## groups_usersテーブル
|column|type|option|
|--------|-------|----------------------------|
|user_id |integer|null: false, unique: true, foreign_key: true|
|group_id|integer|null: false, unique: true, foreign_key: true|

### Association
-beliongs_to :user

-belongs_to :group

## messagesテーブル
|column|type|option|
|--------|-------|----------------------------|
|user_id|integer|null: false, foreign_key: true, index|
|group_id|integer|null: false, foreign_key: true, index|
|body|text|null: false|
|image|string|foreign_key:true, index|

### Association
-belongs_to :user

-belongs_to :group
