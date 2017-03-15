require 'yajl'


file_stream = File.open("yacs.json","r")
count = 10
json = Yajl::Parser.parse(file_stream)

myCourses = Array.new


json['courses'].each do |course| 

	id = "#{course['id']}"
	course_name = "#{course['name']}"
	number = "#{course['number']}"
	max_credits = "#{course['max_credits']}"
	min_credits = "#{course['min_credits']}"
	description = "#{course['description']}"
	department_id = "#{course['department_id']}"
	department_code = ""
	sections = course['sections']
	section_name = ""
	crn = ""
	num_periods  = ""
	sections.each do |myclass|
		
		crn = myclass['crn']
		department_code = "#{myclass['department_code']}"
		section_id = "#{myclass['id']}"
		instructors = myclass['instructors']
		section_name = "#{myclass['name']}"
		num_periods = "#{myclass['num_periods']}"
		periods = myclass['periods']
		seats = myclass['seats']
		seats_taken = "#{myclass['seats_taken']}"

		periods.each do |myPeriod|

			day = myPeriod["day"]
			endTime = myPeriod["end"]
			startTime = myPeriod["start"]
			type = myPeriod["type"]

p = Period.create :department_code => department_code, :course_name=> course_name, :course_number=> number,
   			:section_name=> section_name, :day=> day , :start_time=>startTime , :end_time=>endTime , :course_type=>type 

		end


		

	end

  c  = Course.create :department_code => department_code, :course_name => course_name, :course_number=> number,
   :section_name=> section_name, :crn => crn, :num_periods => num_periods

  





end




file_stream.close()
