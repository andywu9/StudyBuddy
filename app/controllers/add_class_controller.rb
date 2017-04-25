class AddClassController < ApplicationController

  # Used to add courses to the drop down sections on the add courses page
  # we have a dictionary that holds another dictionary fo the form {dpt_code : { course_name : section}}
  # so we can populate the fields
  def add
  	
  	gon.keys = Course.uniq.pluck(:department_code).sort
  	gon.dict = Hash.new

  	gon.keys.each do |course|
  		gon.sub_dict = Hash.new
  		gon.courses =  Course.where(:department_code => course).pluck(:course_name).sort

  		gon.courses.each do |classy|  # store all sections for the course and dpt
  			gon.sections=  Period.where(" department_code = ? AND course_name = ?", course, classy).pluck(:section_name).uniq
  			gon.sub_dict[classy] = gon.sections
  		end
  		gon.dict[course] = gon.sub_dict  # set the outer dictionaries value to be the sub dictionary

  	end
  end


  # Used to update the users calendar when courses are added by adding to the event models databse
  def addClass

    #select a random color from a set of colors
    colors = ["light green", "orange", "green" , "blue" , "pink", "yellow", "teal", "purple", "light blue", "silver", "grey","peru","darkred", "cadetblue","blueviolet","greenyellow","plum","olive","seagreen","wheat","orchid"]
    r = Random.new
    mycolor = r.rand(0...20)  # range of random colors

    #add the class info to the users table to show on the home screen
    myClass = Username.create :department_code => params[:optone],  :course_number=> params[:opttwo],
        :section_name=> params[:optthree]

    #determine the start and end time of the class by searching the db
    start =  Period.where(" section_name = ? AND course_name = ? AND department_code = ? ",
     params[:optthree], params[:opttwo], params[:optone]).pluck(:start_time).uniq
    ending  =  Period.where(" section_name = ? AND course_name = ? AND department_code = ? ",
     params[:optthree], params[:opttwo], params[:optone]).pluck(:end_time).uniq

    #store the times in form that fullcalendar recognizes
    time1 = start[0][0] + start[0][1] + ':' + start[0][2] + start[0][3]
    time2 = ending[0][0] + ending[0][1] + ':' + ending[0][2] + ending[0][3]

    # determine the days of the week by a db call
    days  =  Period.where(" section_name = ? AND course_name = ? AND department_code = ? ",
    params[:optthree], params[:opttwo], params[:optone]).pluck(:day).uniq

    #set the id to be the next available id 
    id = Event.uniq.pluck(:id).sort
    if id == []
      myid = 0
    else
      myid = id[-1] +1
    end
    
    # add the event to the events db using the  title , start, end and days of week info, and randomized color
    mySchedule = Event.create :id => myid , :title => params[:opttwo] , :start_time => time1, :end_time => ending[0], :dow => days , :color => colors[mycolor]

  end

end
