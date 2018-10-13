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
//@Injectable to show dependencies
var MobileService = (function () {
    function MobileService(http) {
        this.http = http;
    }
    MobileService.prototype.getAllMobiles = function () {
        return this.http.get("app/mobile.json").
            map(function (response) { return response.json(); });
    };
    //Sorting By Mobile Id
    MobileService.prototype.sortById = function (mobiles) {
        mobiles.sort(function (Id1, Id2) {
            console.log("sorting by Id");
            if (Id1.mobId < Id2.mobId) {
                return -1;
            }
            else if (Id1.mobId > Id2.mobId) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    //Sorting By Name
    MobileService.prototype.sortByName = function (mobiles) {
        mobiles.sort(function (Name1, Name2) {
            console.log("sorting by Name");
            if (Name1.mobName < Name2.mobName) {
                return -1;
            }
            else if (Name1.mobName > Name2.mobName) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    //Sorting By price
    MobileService.prototype.sortByPrice = function (mobiles) {
        mobiles.sort(function (Price1, Price2) {
            console.log("sorting by Price");
            if (Price1.mobPrice < Price2.mobPrice) {
                return -1;
            }
            else if (Price1.mobPrice > Price2.mobPrice) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    //Delete Mobile data from List
    MobileService.prototype.deleteMobile = function (index, mobiles) {
        mobiles.splice(index, 1);
    };
    return MobileService;
}());
MobileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MobileService);
exports.MobileService = MobileService;
