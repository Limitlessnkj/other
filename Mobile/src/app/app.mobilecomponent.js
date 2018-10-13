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
var mobile_service_1 = require("./mobile.service");
var MobileComponent = (function () {
    function MobileComponent(mobileService) {
        this.mobileService = mobileService;
        this.search = '';
        this.index = 0;
        this.path = ['mobile'];
        this.order = 1;
    }
    //Sorting By Mobile Id
    MobileComponent.prototype.sortById = function (id) {
        this.mobileService.sortById(this.mobiles);
    };
    //Sorting By Name
    MobileComponent.prototype.sortByName = function (name) {
        this.mobileService.sortByName(this.mobiles);
    };
    //Sorting By price
    MobileComponent.prototype.sortByPrice = function (price) {
        this.mobileService.sortByPrice(this.mobiles);
    };
    MobileComponent.prototype.changeIndex = function (index) {
        this.index = index;
        console.log("index changed to: " + this.index);
    };
    //Delete Mobile data from List
    MobileComponent.prototype.deleteMobile = function (index) {
        console.log(this.mobiles);
        this.mobileService.deleteMobile(index, this.mobiles);
        console.log("Mobile Deleted");
    };
    //On Initialization method
    MobileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ng-init is called...");
        /* this.mobile = {
             mobId: null,
             mobName: "",
             mobPrice: null
         }*/
        this.mobileService.getAllMobiles().subscribe(function (mobileData) { return _this.mobiles = mobileData; });
    };
    return MobileComponent;
}());
MobileComponent = __decorate([
    core_1.Component({
        selector: '<my-component></my-component>',
        templateUrl: './app.mobilecomponent.html',
        providers: [mobile_service_1.MobileService]
    }),
    __metadata("design:paramtypes", [mobile_service_1.MobileService])
], MobileComponent);
exports.MobileComponent = MobileComponent;
