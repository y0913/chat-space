Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  get 'messages' => 'messages#index' #後で削除する
  get 'groups/edit' => 'groups#edit' #後で削除する
  get '/groups/1/edit' => 'groups#new'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end