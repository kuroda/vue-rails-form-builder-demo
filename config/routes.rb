Rails.application.routes.draw do
  root 'top#index'

  resources :customers, except: [ :show, :destroy ]
end
