Rails.application.routes.draw do
  resources :events
  get 'add_class/add' 

  post 'add_class/addClass'

  get 'remove_class/remove'
  post 'remove_class/removeClass'

  get 'calendar/myCalendar'

  get 'class_options/new'

  get 'home/homepage'

  get 'timer/index'
  
  get 'create_plan/index'
  post 'create_plan/addPlan'


  devise_for :users
  get 'sign_up/signin'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_scope :user do 

  	root :to  => "devise/sessions#new"
  end


 


end
