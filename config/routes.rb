Rails.application.routes.draw do
  devise_for :users

  resources :blogs do
    resources :comments
  end
  resources :comments do
    resources :comments
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#home'
  get 'static_pages/skill'
  get 'static_pages/education'
  get 'static_pages/about'
  get 'static_pages/experience'
end
