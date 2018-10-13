import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import "rxjs/add/operator/map"
import { IMobile } from "./mobile";
//@Injectable to show dependencies
@Injectable()
export class MobileService {
    
    constructor(private http: Http) {
        
    }
    getAllMobiles():Observable<IMobile[]> {
            return this.http.get("app/mobile.json").
            map((response: Response) => <IMobile[]>response.json());
    }
//Sorting By Mobile Id
    sortById(mobiles: IMobile[]){
        mobiles.sort(function(Id1, Id2) {
            console.log("sorting by Id");
                if ( Id1.mobId < Id2.mobId ){
                    return -1;
                }else if( Id1.mobId > Id2.mobId ){
                    return 1;
                }else{
                    return 0;   
                }
        });
        }
//Sorting By Name
        sortByName(mobiles: IMobile[]){
            mobiles.sort(function(Name1, Name2) {
                console.log("sorting by Name");
                    if (Name1.mobName < Name2.mobName){
                        return -1;
                    }else if( Name1.mobName> Name2.mobName ){
                        return 1;
                    }else{
                        return 0;   
                    }
            });
            }
//Sorting By price
        sortByPrice(mobiles: IMobile[]){
            mobiles.sort(function(Price1, Price2) {
                console.log("sorting by Price");
                    if (Price1.mobPrice < Price2.mobPrice){
                        return -1;
                    }else if(Price1.mobPrice > Price2.mobPrice){
                        return 1;
                    }else{
                        return 0;   
                    }
            });
        }
//Delete Mobile data from List
    deleteMobile(index: number, mobiles: IMobile[]) {
        mobiles.splice(index, 1);
    }
   
}