const EventCalendar = require('react-event-calendar');
 
const events = [
    {
        start: '2015-07-20',
        end: '2015-07-02',
        title: 'test event',
        description: 'This is a test description of an event',
    },
    {
        start: '2015-07-19',
        end: '2015-07-25',
        title: 'test event',
        description: 'This is a test description of an event',

    },
];
 
<EventCalendar 
    month={7}
    year={2015}
    events={events} 
    onEventClick={(target, eventData, day) => console.log(eventData) 
    />