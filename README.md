# Edit README.md

## usersテーブル
|column|type|option|
|------|-------|----------------------------|
|name|string |null: false, unique: true|

### Assosiation
-has_many :groups, through: :group_users
-has_many :messages

## groupsテーブル
|column|type|option|
|------|-------|----------------------------|
|name|string|null : alse, unique: true|

### Association
-has_many :users, thorough: :group_users
-has_many :messages

## group_usersテーブル
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

### Association
-belongs_to :user
-belongs_to :group
