class AddClassController < ApplicationController


  def add
  	
 
  	gon.keys = Course.uniq.pluck(:department_code).sort
  	gon.dict = Hash.new
  	

  	gon.keys.each do |course|
  		gon.sub_dict = Hash.new
  		gon.courses =  Course.where(:department_code => course).pluck(:course_name).sort
  		gon.courses.each do |classy|
  			gon.sections=  Period.where(" department_code = ? AND course_name = ?", course, classy).pluck(:section_name).uniq
  			gon.sub_dict[classy] = gon.sections
  		end
  		gon.dict[course] = gon.sub_dict

  	end
  end


  def addClass

    myClass = Username.create :department_code => params[:optone],  :course_number=> params[:opttwo],
        :section_name=> params[:optthree]
    
  end

end
