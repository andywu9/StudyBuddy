class RemoveClassController < ApplicationController

	def remove
		# Stores the current user's courses used to populate dropdown field
		gon.keys = Username.uniq.pluck(:course_number).sort
	end		

	# Used to remove a course from my courses and updates calendar to reflect changes
	def removeClass
		Username.destroy_all(:course_number => params[:optone])
		Event.destroy_all(:title => params[:optone])
	end


end
