class CreatePlanController < ApplicationController
  def index
  	gon.keys = StudyPlan.uniq.pluck(:planName).sort

  	

  end
end
