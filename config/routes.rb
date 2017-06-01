Rails.application.routes.draw do
  root 'top#index'
  get 'static' => 'top#static', as: :static
  get 'spa' => 'top#spa', as: :spa

  resources :customers, except: [ :show, :destroy ]
  namespace :api do
    resources :customers, except: [ :show ]
  end
end
