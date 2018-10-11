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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var BookingService = (function () {
    //tickets: ITicket[] = [];
    function BookingService(http) {
        this.http = http;
    }
    BookingService.prototype.getAllTickets = function () {
        return this.http.get("app/ticketlist.json").
            map(function (response) { return response.json(); });
    };
    /*addTicket(ticket: ITicket, tickets: ITicket[]): Observable< ITicket[]> {
        tickets.push(ticket);
        return of(tickets);
    }*/
    BookingService.prototype.addTicket = function (ticket, tickets) {
        tickets.push(Object.assign({}, ticket));
    };
    BookingService.prototype.deleteTicket = function (index, tickets) {
        tickets.splice(index, 1);
    };
    BookingService.prototype.updateTicket = function (ticket, index, tickets) {
        tickets[index] = Object.assign({}, ticket);
    };
    return BookingService;
}());
BookingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BookingService);
exports.BookingService = BookingService;
