$(document).ready(function() {

  
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        selectable: true,
        defaultView: 'agendaWeek',
		editable: true,
		minTime: "07:00:00",
	 	maxTime: "22:00:00",
		events: '/events.json',
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
});

