class Event < ApplicationRecord
	
	 # dow in fullcalendar is an array and must be converted from a 
	 #sequence of bytes to array form
	 serialize :dow,Array  
end

