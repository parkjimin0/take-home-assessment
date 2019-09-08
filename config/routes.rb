Rails.application.routes.draw do
  # get 'jimin/index'
  get 'jimin' => 'jimin#index'
  get 'home' => 'home#index'
  get 'home/timestamp'
  get 'time' => 'home#time'

  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
