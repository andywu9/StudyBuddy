Rails.application.routes.draw do
  get 'add_class/add'

  post 'add_class/addClass'
  get 'add_class/new'

  get 'calendar/myCalendar'

  get 'class_options/new'

  get 'home/homepage'

  devise_for :users
  get 'sign_up/signin'

	get 'timer/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_scope :user do 

  	root :to  => "devise/sessions#new"
  end


 


end
