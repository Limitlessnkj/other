import { Component, OnInit } from '@angular/core';
import { IMobile } from "./mobile";
import { MobileService } from "./mobile.service";
@Component( {
    selector: '<my-component></my-component>',
    templateUrl: './app.mobilecomponent.html',
    providers: [MobileService]
} )
//Mobile list class
export class MobileComponent implements OnInit {
    mobiles: IMobile[];
    mobile: IMobile;
    search: string = '';
    index: number = 0;
    path: string[] = ['mobile'];
    order: number = 1;
//Sorting By Mobile Id
    sortById( id: number ) {
        this.mobileService.sortById(this.mobiles);
    }
  //Sorting By Name
    sortByName( name: string ) {
        this.mobileService.sortByName(this.mobiles);   
    }
  //Sorting By price
    sortByPrice( price: number ) {
        this.mobileService.sortByPrice(this.mobiles);
    }
    changeIndex( index: number ): void {
        this.index = index;
        console.log( "index changed to: " + this.index );
    }
    constructor( private mobileService: MobileService ) {
    }
//Delete Mobile data from List
    deleteMobile( index: number ) {
        console.log( this.mobiles );
        this.mobileService.deleteMobile( index, this.mobiles );
        console.log( "Mobile Deleted" );
    }
//On Initialization method
    ngOnInit(): void {
        console.log( "ng-init is called..." );
       /* this.mobile = {
            mobId: null,
            mobName: "",
            mobPrice: null
        }*/
        this.mobileService.getAllMobiles().subscribe(( mobileData ) => this.mobiles = mobileData );
    }
}