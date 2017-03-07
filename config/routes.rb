Rails.application.routes.draw do
	get 'timer/index'

	root 'timer#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
