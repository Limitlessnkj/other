import {  Pipe, PipeTransform }      from '@angular/core';
import { ITicket } from "./ticket";

@Pipe({
  name: 'searchPipe',
  pure:false
  
})
export class SearchPipe implements PipeTransform {
    transform(tickets: any, search: any, index: number): any {
       if(search == null || search == undefined) return tickets;
       return tickets.filter(function(ticket :any) {
           console.log(ticket);
           let val: any;
           switch(index) {
               case 1: val = ticket.id.toString().includes(search); break;
               case 2: val = ticket.airline.toLowerCase().includes(search.toLowerCase()); break;
               case 3: val = ticket.price.toString().includes(search); break;
               case 4: val = ticket.date.includes(search); break;
               case 5: val = ticket.from.toLowerCase().includes(search.toLowerCase()); break;
               case 6: val = ticket.to.toLowerCase().includes(search.toLowerCase()); break;
               case 7: val = ticket.departureTime.includes(search); break;
               case 8: val = ticket.arrivalTime.includes(search); break;
               default: console.log("Something is wrong");
           }
           return val;
       })
    }
    
}
