class FlightTicket{
constructor(seatNum , flightNum , departureAirport , arrivalAirport , travellingDate){
this.seatNum = seatNum;
this.flightNum = flightNum;
this.departureAirport = departureAirport;
this.arrivalAirport = arrivalAirport;
this.travellingDate = travellingDate;
}

displayInfo(){
console.log(`FLight Ticket Info:
Seat number : ${this.seatNum}
Flight number : ${this.flightNum}
Departure Airport : ${this.departureAirport}
Arrival Airport : ${this.arrivalAirport}
Travelling date : ${this.travellingDate}
`);
}


getTicketInfo(){
return {
seatNum : this.seatNum,
flightNum : this.flightNum,
departureAirport : this.departureAirport,
arrivalAirport : this.arrivalAirport,
travellingDate : this.travellingDate,
};
}



updateTicket(updatedInfo){
if(updatedInfo.seatNum) {this.seatNum = updatedInfo.seatNum}
if(updatedInfo.flightNum) {this.flightNum = updatedInfo.flightNum}
if(updatedInfo.departureAirport) {this.departureAirport = updatedInfo.departureAirport}
if(updatedInfo.arrivalAirport) {this.arrivalAirport = updatedInfo.arrivalAirport}
if(updatedInfo.travellingDate) {this.travellingDate = updatedInfo.travellingDate}

}

}
module.exports = FlightTicket;
