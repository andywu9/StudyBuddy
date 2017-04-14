$(document).ready(function() {

    // run the js only on calendar view
    if($('body').is('.myCalendar')) {
  
        $('#calendar').fullCalendar({

            //Calendar Setup
            //======================================================================
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            selectable: true,
            defaultView: 'agendaWeek',
    		editable: true, // allow users to add events
    		minTime: "07:00:00", // set the calendars hourly view restrictions
    	 	maxTime: "22:00:00",
    		events: '/events.json', // use a json feed from the events model to populate
            //======================================================================

            // add events from page itself
            eventRender: function(event, element) {
                element.attr('title', event.tip);
           },
           select: function (start, end, jsEvent, view) {
                        var myEvent = prompt('Enter Title');
                        var allDay = !start.hasTime && !end.hasTime;
                        var addEvent = new Object();
                        addEvent.allDay = false;
                        addEvent.title = myEvent;
                        addEvent.start = start;
                        $('#calendar').fullCalendar('renderEvent', addEvent);

                    }

        });
    }
});

