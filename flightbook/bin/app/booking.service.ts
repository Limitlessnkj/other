import { Injectable } from '@angular/core';
import { ITicket } from './ticket';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import "rxjs/add/operator/map"

@Injectable()
export class BookingService {
    //tickets: ITicket[] = [];
    constructor(private http: Http) {
        
    }
    getAllTickets():Observable< ITicket[]> {
            return this.http.get("app/ticketlist.json").
            map((response: Response) => <ITicket[]>response.json());
    }
    
    /*addTicket(ticket: ITicket, tickets: ITicket[]): Observable< ITicket[]> {
        tickets.push(ticket);
        return of(tickets);
    }*/
    addTicket(ticket: ITicket, tickets: ITicket[]) {
        tickets.push(ticket);
    }
    deleteTicket(index: number, tickets: ITicket[]) {
        tickets.splice(index, 1);
    }
    updateTicket(ticket: ITicket, index: number, tickets: ITicket[]) {
        tickets[index] = Object.assign({}, ticket);
    }
}