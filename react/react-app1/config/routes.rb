Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #root to: 'users#login'
  # post 'send_to_api_with_get' => 'users#send_to_api_with_get'
  # post 'send_to_api_with_post' => 'users#send_to_api_with_post'
  # resources :users

  mount API => '/api'
  #match '/api', to: API, via: :all
  #mount API, at: '/api'
end
