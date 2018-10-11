import {  Pipe, PipeTransform }      from '@angular/core';
import { ITicket } from "./ticket";

@Pipe({
  name: 'sortPipe'
  
})
export class SortPipe implements PipeTransform {
    transform(tickets: ITicket[], path: string[], order: number): ITicket[] {
            // Check if is not null
            if (!tickets || !path || !order) return tickets;

            return tickets.sort((ticket1: ITicket, ticket2: ITicket) => {
              // We go for each property followed by path
              path.forEach(property => {
                ticket1 = ticket1[property];
                ticket2 = ticket2[property];
              })

              // Order * (-1): We change our order
              return ticket1 > ticket2 ? order : order * (- 1);
            })
          }
    
}
