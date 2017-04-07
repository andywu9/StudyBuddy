Rails.application.routes.draw do

  resources :events
  get 'add_class/add' 
  post 'add_class/add'

  get 'calendar/myCalendar'

  get 'class_options/new'

  get 'home/homepage'

  get 'timer/index'

  devise_for :users
  get 'sign_up/signin'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_scope :user do 

  	root :to  => "devise/sessions#new"
  end


 


end
