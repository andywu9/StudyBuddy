

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require turbolinks





//= require react
//= require react_ujs
//= require components
//= require moment 
//= require fullcalendar
	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultView: 'agendaWeek',
			editable: true,
			minTime: "07:00:00",
 			maxTime: "22:00:00",
			events: [
				
				{
					title: 'Operating Systems',
					url: 'http://www.cs.rpi.edu/~goldsd/csci4210-spring2017.php',
					start: '10:00', 
    				end: '11:50',	
    				dow: [ 1, 4 ]
					
				},
				

				{
					title: 'Cognitive Psychology',
					color: 'purple',
					start: '12:00', 
    				end: '13:50',	
    				dow: [ 1, 4 ]
				},
				{
					title: 'Drug Society and Behavior',
					color: 'orange',
					start: '18:00', 
    				end: '19:50',	
    				dow: [ 1, 4 ]
				},
				
				{
					title: 'Intro to AI',
					color: 'green',
					url: 'http://www.cs.rpi.edu/~xial/Teaching/2017S/AI2017S.htm',
					start: '12:00', 
    				end: '13:50',	
    				dow: [ 2, 5 ]
				},
				
				{
					title: 'RCOS',
					color: 'grey',
					start: '16:00', 
    				end: '17:50',	
    				dow: [ 2,5 ]
				},
				{
					title: 'Introduction to Algorithms',
					color: 'black',
					url: 'http://www.cs.rpi.edu/~zaki/www-new/pmwiki.php/IntroAlgorithms/Main',
					start: '10:00', 
    				end: '13:50',	
    				dow: [ 3 ]
				},



				
			]
		})
		
	});




