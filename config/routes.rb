Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :movies, param: :slug, only: [:index, :show]
    end
  end

  get '*paths', to: 'pages#index', via: :all
end
