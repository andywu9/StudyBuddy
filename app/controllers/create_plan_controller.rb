class CreatePlanController < ApplicationController
  def index
  	gon.keys = StudyPlan.uniq.pluck(:planName).sort  #sort all plan names in the StudyPlan db
  end
end
