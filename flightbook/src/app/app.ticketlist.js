"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var booking_service_1 = require("./booking.service");
var TicketList = (function () {
    function TicketList(bookingService) {
        this.bookingService = bookingService;
        this.search = '';
        this.index = 0;
        this.updIndex = 0;
        this.path = ['ticket'];
        this.order = 1;
    }
    TicketList.prototype.sortTable = function (prop) {
        this.path = prop.split('.');
        this.order = this.order * (-1); // change order
        return false; // do not reload
    };
    TicketList.prototype.changeIndex = function (index) {
        this.index = index;
        console.log("index changed to: " + this.index);
    };
    TicketList.prototype.addTicket = function () {
        console.log(this.tickets);
        //this.bookingService.addTicket(this.ticket, this.tickets).subscribe();
        this.bookingService.addTicket(this.ticket, this.tickets);
        //this.tickets.push(this.ticket);
        console.log("Ticket Added");
    };
    TicketList.prototype.deleteTicket = function (id) {
        var index = null;
        console.log(this.tickets);
        for (var i = 0; i <= this.tickets.length; i++) {
            if (this.tickets[i].id == id)
                index = i;
            break;
        }
        this.bookingService.deleteTicket(index, this.tickets);
        console.log("Ticket Deleted");
    };
    TicketList.prototype.showTicket = function (index) {
        this.updIndex = index;
        this.ticket1 = Object.assign({}, this.tickets[index]);
        //this.ticket1 = this.tickets[index];
        console.log(this.ticket1);
        console.log("Ticket displayed to be Updated...");
    };
    TicketList.prototype.updateTicket = function () {
        console.log(this.tickets);
        this.bookingService.updateTicket(this.ticket1, this.updIndex, this.tickets);
    };
    TicketList.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ng-init called...");
        this.ticket = {
            id: null,
            airline: "",
            price: null,
            date: "",
            from: "",
            to: "",
            departureTime: "",
            arrivalTime: ""
        };
        this.ticket1 = Object.assign({}, this.ticket);
        this.bookingService.getAllTickets().subscribe(function (ticketData) { return _this.tickets = ticketData; });
    };
    return TicketList;
}());
TicketList = __decorate([
    core_1.Component({
        selector: '<my-component></my-component>',
        templateUrl: './app.ticketcomponent.html',
        providers: [booking_service_1.BookingService]
    }),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], TicketList);
exports.TicketList = TicketList;
