# Edit README.md

## usersテーブル
|column|type|option|
|------|-------|----------------------------|
|id|intager|null: false, foreign_key: true|
|name|string |null: false, unique: true|
|e-mail|string |null: false, unique: true|

### Assosiation
-has_many :group-users

-has_many :messages

## groupsテーブル
|column|type|option|
|------|-------|----------------------------|
|id|intager|null: false, foreign_key: true|
|name|string|null : alse, unique: true|

### Association
-has_many :group-users

-has_many :messages

## group-usersテーブル
|column|type|option|
|--------|-------|----------------------------|
|id|intager|null:false, foreign_key: true|
|user_id |integer|null: false, unique: true|
|group_id|integer|null: false, unique: true|

### Association
-beliongs_to :users

-belongs_to :groups

## messagesテーブル
|column|type|option|
|--------|-------|----------------------------|
|id|intager|null:false, foreign_key: true|
|user_id|integer|null: false, unique: true|
|group_id|integer|null: false, unique: true|
|message|text|null: false|

### Association
-belongs_to :users

-belongs_to :groups
