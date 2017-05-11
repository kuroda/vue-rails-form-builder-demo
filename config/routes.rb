Rails.application.routes.draw do
  root 'top#index'
  get 'static' => 'top#static', as: :static

  resources :customers, except: [ :show, :destroy ]
end
