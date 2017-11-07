Rails.application.routes.draw do
  root 'home#index'

  get 'static' => 'example#static', as: :static
  get 'spa' => 'example#spa', as: :spa

  resources :customers, except: [ :show, :destroy ]
  namespace :api do
    resources :customers, except: [ :show ]
  end
end
