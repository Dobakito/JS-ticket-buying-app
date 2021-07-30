Rails.application.routes.draw do
  resources :genres, only: %i[index] do
    resources :shows, only: %i[index update]
  end
end
