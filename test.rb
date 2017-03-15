dict = Hash.new
keys = Course.uniq.pluck(:department_code).sort

  	
  	sub_dict = Hash.new

  	keys.each do |courses|
  		miss =  Course.uniq.where(:department_code => courses).pluck(:course_name)
  		miss.each do |classy|
  			sections=  Course.uniq.where(:department_code => courses).where(:course_name => classy).pluck(:section_name)
  			sub_dict[classy] = sections
  		end
  		puts courses
  		dict[courses] = sub_dict




  	end
