Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/*path' => 'react#index'
  #get '/*path' => redirect('/')

  mount API => '/api'

end
