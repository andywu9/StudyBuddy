class RemoveClassController < ApplicationController

	def remove
		gon.keys = Username.uniq.pluck(:course_number).sort

		gon.keys.each do |course|
			puts course
		end
	end		

	
	def removeClass
		Username.destroy_all(:course_number => params[:optone])
	end


end
