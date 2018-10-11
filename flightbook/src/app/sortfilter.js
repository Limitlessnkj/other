"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (tickets, path, order) {
        // Check if is not null
        if (!tickets || !path || !order)
            return tickets;
        return tickets.sort(function (ticket1, ticket2) {
            // We go for each property followed by path
            path.forEach(function (property) {
                ticket1 = ticket1[property];
                ticket2 = ticket2[property];
            });
            // Order * (-1): We change our order
            return ticket1 > ticket2 ? order : order * (-1);
        });
    };
    return SortPipe;
}());
SortPipe = __decorate([
    core_1.Pipe({
        name: 'sortPipe'
    })
], SortPipe);
exports.SortPipe = SortPipe;
