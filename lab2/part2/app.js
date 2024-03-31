const FlightTicket = require('./FlightTicketModule');
const myTicket = new FlightTicket(
50,
'F20',
'ABC',
'XYZ',
'31-3-2024'
);

myTicket.displayInfo();

const TicketInfo = myTicket.getTicketInfo();
console.log('Ticket Information' , TicketInfo);

myTicket.updateTicket({

    seatNum : 25,
    arrivalAirport : 'KLM',
});

myTicket.displayInfo();

