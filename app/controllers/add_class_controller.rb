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

    start =  Period.where(" section_name = ? AND course_name = ? AND department_code = ? ",
     params[:optthree], params[:opttwo], params[:optone]).pluck(:start_time).uniq
    ending  =  Period.where(" section_name = ? AND course_name = ? AND department_code = ? ",
     params[:optthree], params[:opttwo], params[:optone]).pluck(:end_time).uniq

    time1 = start[0][0] + start[0][1] + ':' + start[0][2] + start[0][3]
    time2 = ending[0][0] + ending[0][1] + ':' + ending[0][2] + ending[0][3]

    id = Event.uniq.pluck(:id).sort
    if id == []
      myid = 0
    else
      myid = id[-1] +1
    end

    mySchedule = Event.create :id => myid , :title => params[:opttwo] , :start_time => time1, :end_time => ending[0], :dow => [1,4]

    
  end

end
