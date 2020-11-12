Rails.application.routes.draw do
  root to: 'quizs#new'
  resources :quizs
end
