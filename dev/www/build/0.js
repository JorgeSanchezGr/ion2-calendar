webpackJsonp([0],{

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadPageModule", function() { return LazyLoadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lazy_load__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LazyLoadPageModule = (function () {
    function LazyLoadPageModule() {
    }
    return LazyLoadPageModule;
}());
LazyLoadPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lazy_load__["a" /* LazyLoadPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lazy_load__["a" /* LazyLoadPage */])
        ]
    })
], LazyLoadPageModule);

//# sourceMappingURL=lazy-load.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyLoadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ion2_calendar__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LazyLoadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LazyLoadPage = (function () {
    function LazyLoadPage(navCtrl, navParams, calendarCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calendarCtrl = calendarCtrl;
    }
    LazyLoadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LazyLoadPage');
    };
    LazyLoadPage.prototype.basic = function () {
        this.calendarCtrl.openCalendar({
            title: 'BASIC',
            canBackwardsSelected: true,
            color: 'cal-color',
            doneIcon: true,
            closeIcon: true
        })
            .then(function (res) {
            console.log(res);
        })
            .catch(function () {
        });
    };
    return LazyLoadPage;
}());
LazyLoadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lazy-load',template:/*ion-inline-start:"/Users/jsanchez/CocktaiLabs/ion2-calendar/dev/src/pages/lazy-load/lazy-load.html"*/'<!--\n  Generated template for the LazyLoadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>lazy-load</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-calendar></ion-calendar>\n\n  <button ion-item (click)="basic()">\n    basic\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/jsanchez/CocktaiLabs/ion2-calendar/dev/src/pages/lazy-load/lazy-load.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__components_ion2_calendar__["a" /* CalendarController */]])
], LazyLoadPage);

//# sourceMappingURL=lazy-load.js.map

/***/ })

});
//# sourceMappingURL=0.js.map