class CreatePlanController < ApplicationController
  def index
  	#plan variables
  	gon.keys = StudyPlan.uniq.pluck(:planName).sort
	  gon.planDict = Hash.new

  	gon.keys.each do |plan|
  		gon.planSub_Dict = Hash.new
  		gon.plans =  Course.where(:department_code => plan).pluck(:course_name).sort

  		gon.plans.each do |classy|  # store all sections for the course and dpt
  			gon.sections=  Period.where(" department_code = ? AND course_name = ?", plan, classy).pluck(:section_name).uniq
  			gon.planSub_Dict[classy] = gon.sections
  		end
  		gon.planDict[plan] = gon.planSub_Dict  # set the outer dictionaries value to be the sub dictionary
  	end

  	#class variables
  	gon.classes = Username.uniq.pluck(:course_number).sort
  	gon.classDict = Hash.new

  	gon.classes.each do |c|
  		gon.classSub_Dict = Hash.new
  		gon.classList =  Course.where(:department_code => c).pluck(:course_name).sort

  		gon.classList.each do |cl|  # store all sections for the course and dpt
  			gon.classSections =  Period.where(" department_code = ? AND course_name = ?", c, cl).pluck(:section_name).uniq
  			gon.classSub_Dict[cl] = gon.classSections
  		end
  		gon.classDict[c] = gon.classSub_Dict  # set the outer dictionaries value to be the sub dictionary
  	




	end
  end

  def addPlan
		# StudyPlan.create :planName=> params[:]
  end
end
