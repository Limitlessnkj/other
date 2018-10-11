import { Component, OnInit } from '@angular/core';
import { ITicket } from './ticket';
import { BookingService } from './booking.service';

@Component({
    selector: '<my-component></my-component>',
    templateUrl: './app.ticketcomponent.html',
    providers: [BookingService]
})

export class TicketList implements OnInit {
    tickets: ITicket[];
    ticket: ITicket;
    ticket1: ITicket;
    search: string = '';
    index: number = 0;
    updIndex: number = 0;
    path: string[] = ['ticket'];
    order: number = 1;

    sortTable(prop: string ) {
        this.path = prop.split( '.' )
        this.order = this.order * ( -1 ); // change order
        return false; // do not reload
    }
    changeIndex(index: number): void {
        this.index = index;
        console.log("index changed to: " + this.index);
    }
    constructor(private bookingService: BookingService) {
        
    }
    addTicket() {
        console.log(this.tickets);
        //this.bookingService.addTicket(this.ticket, this.tickets).subscribe();
        this.bookingService.addTicket(this.ticket, this.tickets);
        //this.tickets.push(this.ticket);
        console.log("Ticket Added");
    }
    deleteTicket(index: number) {
        console.log(this.tickets);
        this.bookingService.deleteTicket(this.index, this.tickets);
        console.log("Ticket Deleted");
    }
    showTicket(index: number) {
        this.updIndex = index;
        this.ticket1 = Object.assign({}, this.tickets[index]);
        //this.ticket1 = this.tickets[index];
        console.log(this.ticket1);
        console.log("Ticket displayed to be Updated...");
    }
    updateTicket() {
        console.log(this.tickets);
        this.bookingService.updateTicket(this.ticket1, this.updIndex, this.tickets);
    }
    ngOnInit(): void {
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
        }
        this.ticket1 = this.ticket;
        this.bookingService.getAllTickets().subscribe((ticketData) => this.tickets = ticketData);
    }
}