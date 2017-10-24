webpackJsonp([3],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/components-mode/components-mode.module": [
		393,
		2
	],
	"../pages/modal-mode/modal-mode.module": [
		394,
		1
	],
	"../pages/tabs/tabs.module": [
		395,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarWeekComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var CalendarWeekComponent = /** @class */ (function () {
    function CalendarWeekComponent() {
        this._weekArray = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this._weekStart = 0;
        this.color = 'primary';
    }
    Object.defineProperty(CalendarWeekComponent.prototype, "weekArray", {
        set: function (value) {
            if (value && value.length === 7) {
                this._weekArray = value.slice();
                this.adjustSort();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekComponent.prototype, "weekStart", {
        set: function (value) {
            if (value === 0 || value === 1) {
                this._weekStart = value;
                this.adjustSort();
            }
        },
        enumerable: true,
        configurable: true
    });
    CalendarWeekComponent.prototype.adjustSort = function () {
        if (this._weekStart === 1) {
            this._weekArray.push(this._weekArray.shift());
        }
    };
    CalendarWeekComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'ion-calendar-week',
                    template: "\n    <ion-toolbar class=\"week-toolbar\" no-border-top>\n      <ul [class]=\"'week-title ' + color\">\n        <li *ngFor=\"let w of _weekArray\">{{w}}</li>\n      </ul>\n    </ion-toolbar>\n  ",
                },] },
    ];
    /** @nocollapse */
    CalendarWeekComponent.ctorParameters = function () { return []; };
    CalendarWeekComponent.propDecorators = {
        'color': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'weekArray': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'weekStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return CalendarWeekComponent;
}());

//# sourceMappingURL=calendar-week.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MONTH_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);


var MONTH_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return MonthComponent; }),
    multi: true,
};
var MonthComponent = /** @class */ (function () {
    function MonthComponent(ref) {
        this.ref = ref;
        this.readonly = false;
        this.color = 'primary';
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._date = [null, null];
        this._isInit = false;
    }
    MonthComponent.prototype.ngAfterViewInit = function () {
        this._isInit = true;
    };
    MonthComponent.prototype.writeValue = function (obj) {
        if (Array.isArray(obj)) {
            this._date = obj;
        }
    };
    MonthComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
    };
    MonthComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    MonthComponent.prototype.trackByTime = function (index, item) {
        return item ? item.time : index;
    };
    MonthComponent.prototype.isEndSelection = function (day) {
        if (!day)
            return false;
        if (this.pickMode !== 'range' || !this._isInit || this._date[1] === null) {
            return false;
        }
        return this._date[1].time === day.time;
    };
    MonthComponent.prototype.isBetween = function (day) {
        if (!day)
            return false;
        if (this.pickMode !== 'range' || !this._isInit) {
            return false;
        }
        if (this._date[0] === null || this._date[1] === null) {
            return false;
        }
        var start = this._date[0].time;
        var end = this._date[1].time;
        return day.time < end && day.time > start;
    };
    MonthComponent.prototype.isStartSelection = function (day) {
        if (!day)
            return false;
        if (this.pickMode !== 'range' || !this._isInit || this._date[0] === null) {
            return false;
        }
        return this._date[0].time === day.time && this._date[1] !== null;
    };
    MonthComponent.prototype.isSelected = function (time) {
        if (Array.isArray(this._date)) {
            if (this.pickMode !== 'multi') {
                if (this._date[0] !== null) {
                    return time === this._date[0].time;
                }
                if (this._date[1] !== null) {
                    return time === this._date[1].time;
                }
            }
            else {
                return this._date.findIndex(function (e) { return e !== null && e.time === time; }) !== -1;
            }
        }
        else {
            return false;
        }
    };
    MonthComponent.prototype.onSelected = function (item) {
        if (this.readonly)
            return;
        item.selected = true;
        if (this.pickMode === 'single') {
            this._date[0] = item;
            this.onChange.emit(this._date);
            return;
        }
        if (this.pickMode === 'range') {
            if (this._date[0] === null) {
                this._date[0] = item;
            }
            else if (this._date[1] === null) {
                if (this._date[0].time < item.time) {
                    this._date[1] = item;
                }
                else {
                    this._date[1] = this._date[0];
                    this._date[0] = item;
                }
            }
            else {
                this._date[0] = item;
                this._date[1] = null;
            }
            this.onChange.emit(this._date);
            return;
        }
        if (this.pickMode === 'multi') {
            var index = this._date.findIndex(function (e) { return e !== null && e.time === item.time; });
            if (index === -1) {
                this._date.push(item);
            }
            else {
                this._date.splice(index, 1);
            }
            this.onChange.emit(this._date.filter(function (e) { return e !== null; }));
        }
    };
    MonthComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'ion-calendar-month',
                    providers: [MONTH_VALUE_ACCESSOR],
                    template: "\n    <div [class]=\"color\">\n      <ng-template [ngIf]=\"pickMode !== 'range'\" [ngIfElse]=\"rangeBox\">\n        <div class=\"days-box\">\n          <ng-template ngFor let-day [ngForOf]=\"month.days\" [ngForTrackBy]=\"trackByTime\">\n            <div class=\"days\">\n              <ng-container *ngIf=\"day\">\n                <button type='button'\n                        [class]=\"'days-btn ' + day.cssClass\"\n                        [class.today]=\"day.isToday\"\n                        (click)=\"onSelected(day)\"\n                        [class.marked]=\"day.marked\"\n                        [class.on-selected]=\"isSelected(day.time)\"\n                        [disabled]=\"day.disable\">\n                  <p>{{day.title}}</p>\n                  <small *ngIf=\"day.subTitle\">{{day?.subTitle}}</small>\n                </button>\n              </ng-container>\n            </div>\n          </ng-template>\n        </div>\n      </ng-template>\n\n      <ng-template #rangeBox>\n        <div class=\"days-box\">\n          <ng-template ngFor let-day [ngForOf]=\"month.days\" [ngForTrackBy]=\"trackByTime\">\n            <div class=\"days\"\n                 [class.startSelection]=\"isStartSelection(day)\"\n                 [class.endSelection]=\"isEndSelection(day)\"\n                 [class.between]=\"isBetween(day)\">\n              <ng-container *ngIf=\"day\">\n                <button type='button'\n                        [class]=\"'days-btn ' + day.cssClass\"\n                        [class.today]=\"day.isToday\"\n                        (click)=\"onSelected(day)\"\n                        [class.marked]=\"day.marked\"\n                        [class.on-selected]=\"isSelected(day.time)\"\n                        [disabled]=\"day.disable\">\n                  <p>{{day.title}}</p>\n                  <small *ngIf=\"day.subTitle\">{{day?.subTitle}}</small>\n                </button>\n              </ng-container>\n\n            </div>\n          </ng-template>\n        </div>\n      </ng-template>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    MonthComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
    ]; };
    MonthComponent.propDecorators = {
        'month': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'pickMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'isSaveHistory': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'readonly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'color': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'onChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
    };
    return MonthComponent;
}());

//# sourceMappingURL=month.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ION_CAL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);




var ION_CAL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return CalendarComponent; }),
    multi: true
};
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calSvc) {
        this.calSvc = calSvc;
        this._view = 'days';
        this._calendarMonthValue = [null, null];
        this._showToggleButtons = true;
        this._showMonthPicker = true;
        this.format = 'YYYY-MM-DD';
        this.type = 'string';
        this.readonly = false;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.monthChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._onChanged = function () { };
        this._onTouched = function () { };
    }
    Object.defineProperty(CalendarComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            this._options = value;
            this.initOpt();
            if (this.monthOpt && this.monthOpt.original) {
                this.monthOpt = this.createMonth(this.monthOpt.original.time);
            }
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ionViewDidLoad = function () {
    };
    CalendarComponent.prototype.ngOnInit = function () {
        this.initOpt();
        this.monthOpt = this.createMonth(new Date().getTime());
    };
    CalendarComponent.prototype.initOpt = function () {
        if (this._options && this._options.showToggleButtons === false) {
            this._showToggleButtons = false;
        }
        if (this._options && this._options.showMonthPicker === false) {
            this._showMonthPicker = false;
        }
        this._d = this.calSvc.safeOpt(this._options || {});
    };
    CalendarComponent.prototype.writeValue = function (obj) {
        if (obj) {
            this._writeValue(obj);
            if (this._calendarMonthValue[0]) {
                this.monthOpt = this.createMonth(this._calendarMonthValue[0].time);
            }
            else {
                this.monthOpt = this.createMonth(new Date().getTime());
            }
        }
    };
    CalendarComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
    };
    CalendarComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    CalendarComponent.prototype.createMonth = function (date) {
        return this.calSvc.createMonthsByPeriod(date, 1, this._d)[0];
    };
    CalendarComponent.prototype.switchView = function () {
        this._view = this._view === 'days' ? 'month' : 'days';
        return this._view;
    };
    CalendarComponent.prototype.prev = function () {
        if (this._view === 'days') {
            this.backMonth();
        }
        else {
            this.prevYear();
        }
    };
    CalendarComponent.prototype.next = function () {
        if (this._view === 'days') {
            this.nextMonth();
        }
        else {
            this.nextYear();
        }
    };
    CalendarComponent.prototype.prevYear = function () {
        var backTime = __WEBPACK_IMPORTED_MODULE_3_moment__(this.monthOpt.original.time).subtract(1, 'year').valueOf();
        this.monthOpt = this.createMonth(backTime);
    };
    CalendarComponent.prototype.nextYear = function () {
        var nextTime = __WEBPACK_IMPORTED_MODULE_3_moment__(this.monthOpt.original.time).add(1, 'year').valueOf();
        this.monthOpt = this.createMonth(nextTime);
    };
    CalendarComponent.prototype.nextMonth = function () {
        var nextTime = __WEBPACK_IMPORTED_MODULE_3_moment__(this.monthOpt.original.time).add(1, 'months').valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(nextTime)
        });
        this.monthOpt = this.createMonth(nextTime);
    };
    CalendarComponent.prototype.canNext = function () {
        if (!this._d.to || this._view !== 'days')
            return true;
        return this.monthOpt.original.time < __WEBPACK_IMPORTED_MODULE_3_moment__(this._d.to).valueOf();
    };
    CalendarComponent.prototype.backMonth = function () {
        var backTime = __WEBPACK_IMPORTED_MODULE_3_moment__(this.monthOpt.original.time).subtract(1, 'months').valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(backTime)
        });
        this.monthOpt = this.createMonth(backTime);
    };
    CalendarComponent.prototype.canBack = function () {
        if (!this._d.from || this._view !== 'days')
            return true;
        return this.monthOpt.original.time > __WEBPACK_IMPORTED_MODULE_3_moment__(this._d.from).valueOf();
    };
    CalendarComponent.prototype.monthOnSelect = function (month) {
        this._view = 'days';
        var newMonth = __WEBPACK_IMPORTED_MODULE_3_moment__(this.monthOpt.original.time).month(month).valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(newMonth)
        });
        this.monthOpt = this.createMonth(newMonth);
    };
    CalendarComponent.prototype.onChanged = function ($event) {
        switch (this._d.pickMode) {
            case 'single':
                var date = this._handleType($event[0].time);
                this._onChanged(date);
                this.onChange.emit(date);
                break;
            case 'range':
                if ($event[0] && $event[1]) {
                    var rangeDate = {
                        from: this._handleType($event[0].time),
                        to: this._handleType($event[1].time)
                    };
                    this._onChanged(rangeDate);
                    this.onChange.emit(rangeDate);
                }
                break;
            case 'multi':
                var dates = [];
                for (var i = 0; i < $event.length; i++) {
                    if ($event[i] && $event[i].time) {
                        dates.push(this._handleType($event[i].time));
                    }
                }
                this._onChanged(dates);
                this.onChange.emit(dates);
                break;
            default:
        }
    };
    CalendarComponent.prototype._writeValue = function (value) {
        var _this = this;
        if (!value)
            return;
        switch (this._d.pickMode) {
            case 'single':
                this._calendarMonthValue[0] = this._createCalendarDay(value);
                break;
            case 'range':
                if (value.from) {
                    this._calendarMonthValue[0] = this._createCalendarDay(value.from);
                }
                if (value.to) {
                    this._calendarMonthValue[1] = this._createCalendarDay(value.to);
                }
                break;
            case 'multi':
                if (Array.isArray(value)) {
                    this._calendarMonthValue = value.map(function (e) {
                        return _this._createCalendarDay(e);
                    });
                }
                else {
                    this._calendarMonthValue = [];
                }
                break;
            default:
        }
    };
    CalendarComponent.prototype._createCalendarDay = function (value) {
        var date;
        if (this.type === 'string') {
            date = __WEBPACK_IMPORTED_MODULE_3_moment__(value, this.format);
        }
        else {
            date = __WEBPACK_IMPORTED_MODULE_3_moment__(value);
        }
        return this.calSvc.createCalendarDay(date.valueOf(), this._d);
    };
    CalendarComponent.prototype._handleType = function (value) {
        var date = __WEBPACK_IMPORTED_MODULE_3_moment__(value);
        switch (this.type) {
            case 'string':
                return date.format(this.format);
            case 'js-date':
                return date.toDate();
            case 'moment':
                return date;
            case 'time':
                return date.valueOf();
            case 'object':
                return date.toObject();
        }
        return date;
    };
    CalendarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'ion-calendar',
                    providers: [ION_CAL_VALUE_ACCESSOR],
                    template: "\n    <div class=\"title\">\n      <ng-template [ngIf]=\"_showMonthPicker ? _showMonthPicker || !readonly : false\" [ngIfElse]=\"title\">\n        <button type=\"button\"\n                ion-button\n                clear\n                class=\"switch-btn\"\n                [disabled]=\"readonly\"\n                (click)=\"switchView()\">\n          {{monthOpt.original.time | date: _d.monthFormat}}\n          <ion-icon *ngIf=\"!readonly\"\n                    class=\"arrow-dropdown\"\n                    [name]=\"_view === 'days' ? 'md-arrow-dropdown' : 'md-arrow-dropup'\"></ion-icon>\n        </button>\n      </ng-template>\n      <ng-template #title>\n        <div class=\"switch-btn\">\n          {{monthOpt.original.time | date: _d.monthFormat}}\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"_showToggleButtons\">\n        <button type='button' ion-button clear class=\"back\" [disabled]=\"!canBack() || readonly\" (click)=\"prev()\">\n          <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </button>\n        <button type='button' ion-button clear class=\"forward\" [disabled]=\"!canNext() || readonly\"\n                (click)=\"next()\">\n          <ion-icon name=\"ios-arrow-forward\"></ion-icon>\n        </button>\n      </ng-template>\n    </div>\n    \n    <ng-template [ngIf]=\"_view === 'days'\" [ngIfElse]=\"monthPicker\">\n      <ion-calendar-week color=\"transparent\"\n                         [weekArray]=\"_d.weekdays\"\n                         [weekStart]=\"_d.weekStart\">\n      </ion-calendar-week>\n\n      <ion-calendar-month [(ngModel)]=\"_calendarMonthValue\"\n                          [month]=\"monthOpt\"\n                          [readonly]=\"readonly\"\n                          (onChange)=\"onChanged($event)\"\n                          [pickMode]=\"_d.pickMode\"\n                          [color]=\"_d.color\">\n      </ion-calendar-month>\n    </ng-template>\n\n    <ng-template #monthPicker>\n      <ion-calendar-month-picker [color]=\"_d.color\" \n                                 [monthFormat]=\"_options?.monthPickerFormat\"\n                                 (onSelect)=\"monthOnSelect($event)\"\n                                 [month]=\"monthOpt\">\n      </ion-calendar-month-picker>\n    </ng-template>\n  ",
                },] },
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["a" /* CalendarService */], },
    ]; };
    CalendarComponent.propDecorators = {
        'format': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'readonly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'onChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
        'monthChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
        'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return CalendarComponent;
}());

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_calendar_modal__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_calendar_service__ = __webpack_require__(47);




var CalendarController = /** @class */ (function () {
    function CalendarController(modalCtrl, calSvc) {
        this.modalCtrl = modalCtrl;
        this.calSvc = calSvc;
    }
    /**
     * @deprecated
     * @param {CalendarModalOptions} calendarOptions
     * @param {ModalOptions} modalOptions
     * @returns {any}
     */
    CalendarController.prototype.openCalendar = function (calendarOptions, modalOptions) {
        if (modalOptions === void 0) { modalOptions = {}; }
        var options = this.calSvc.safeOpt(calendarOptions);
        var calendarModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_calendar_modal__["a" /* CalendarModal */], Object.assign({
            options: options,
        }, options), modalOptions);
        calendarModal.present();
        return new Promise(function (resolve, reject) {
            calendarModal.onDidDismiss(function (data) {
                if (data) {
                    resolve(data);
                }
                else {
                    reject('cancelled');
                }
            });
        });
    };
    CalendarController.prototype.setHistory = function (param) {
        localStorage.setItem("ion-calendar-" + param.id, JSON.stringify(param.date));
    };
    CalendarController.prototype.getHistory = function (id) {
        var _history = localStorage.getItem("ion-calendar-" + id);
        if (_history) {
            return JSON.parse(_history);
        }
    };
    CalendarController.prototype.removeHistory = function (id) {
        localStorage.removeItem("ion-calendar-" + id);
    };
    CalendarController.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
    ];
    /** @nocollapse */
    CalendarController.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__services_calendar_service__["a" /* CalendarService */], },
    ]; };
    return CalendarController;
}());

//# sourceMappingURL=calendar.controller.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar_model__ = __webpack_require__(361);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_calendar_modal__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__components_calendar_modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_calendar_week_component__ = __webpack_require__(270);
/* unused harmony reexport CalendarWeekComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_month_component__ = __webpack_require__(271);
/* unused harmony reexport MonthComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_calendar_component__ = __webpack_require__(272);
/* unused harmony reexport CalendarComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_module__ = __webpack_require__(364);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__calendar_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_controller__ = __webpack_require__(273);
/* unused harmony reexport CalendarController */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(337);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/components-mode/components-mode.module#ComponentsModePageModule', name: 'ComponentsModePage', segment: 'components-mode', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal-mode/modal-mode.module#ModalModePageModule', name: 'ModalModePage', segment: 'modal-mode', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__["b" /* CalendarModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CalendarMonth */
/* unused harmony export PrivateCalendarOptions */
/* unused harmony export CalendarResult */
var CalendarMonth = /** @class */ (function () {
    function CalendarMonth() {
    }
    return CalendarMonth;
}());

var PrivateCalendarOptions = /** @class */ (function () {
    function PrivateCalendarOptions() {
    }
    return PrivateCalendarOptions;
}());

var CalendarResult = /** @class */ (function () {
    function CalendarResult() {
    }
    return CalendarResult;
}());

//# sourceMappingURL=calendar.model.js.map

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 152,
	"./af.js": 152,
	"./ar": 153,
	"./ar-dz": 154,
	"./ar-dz.js": 154,
	"./ar-kw": 155,
	"./ar-kw.js": 155,
	"./ar-ly": 156,
	"./ar-ly.js": 156,
	"./ar-ma": 157,
	"./ar-ma.js": 157,
	"./ar-sa": 158,
	"./ar-sa.js": 158,
	"./ar-tn": 159,
	"./ar-tn.js": 159,
	"./ar.js": 153,
	"./az": 160,
	"./az.js": 160,
	"./be": 161,
	"./be.js": 161,
	"./bg": 162,
	"./bg.js": 162,
	"./bm": 163,
	"./bm.js": 163,
	"./bn": 164,
	"./bn.js": 164,
	"./bo": 165,
	"./bo.js": 165,
	"./br": 166,
	"./br.js": 166,
	"./bs": 167,
	"./bs.js": 167,
	"./ca": 168,
	"./ca.js": 168,
	"./cs": 169,
	"./cs.js": 169,
	"./cv": 170,
	"./cv.js": 170,
	"./cy": 171,
	"./cy.js": 171,
	"./da": 172,
	"./da.js": 172,
	"./de": 173,
	"./de-at": 174,
	"./de-at.js": 174,
	"./de-ch": 175,
	"./de-ch.js": 175,
	"./de.js": 173,
	"./dv": 176,
	"./dv.js": 176,
	"./el": 177,
	"./el.js": 177,
	"./en-au": 178,
	"./en-au.js": 178,
	"./en-ca": 179,
	"./en-ca.js": 179,
	"./en-gb": 180,
	"./en-gb.js": 180,
	"./en-ie": 181,
	"./en-ie.js": 181,
	"./en-nz": 182,
	"./en-nz.js": 182,
	"./eo": 183,
	"./eo.js": 183,
	"./es": 184,
	"./es-do": 185,
	"./es-do.js": 185,
	"./es-us": 186,
	"./es-us.js": 186,
	"./es.js": 184,
	"./et": 187,
	"./et.js": 187,
	"./eu": 188,
	"./eu.js": 188,
	"./fa": 189,
	"./fa.js": 189,
	"./fi": 190,
	"./fi.js": 190,
	"./fo": 191,
	"./fo.js": 191,
	"./fr": 192,
	"./fr-ca": 193,
	"./fr-ca.js": 193,
	"./fr-ch": 194,
	"./fr-ch.js": 194,
	"./fr.js": 192,
	"./fy": 195,
	"./fy.js": 195,
	"./gd": 196,
	"./gd.js": 196,
	"./gl": 197,
	"./gl.js": 197,
	"./gom-latn": 198,
	"./gom-latn.js": 198,
	"./gu": 199,
	"./gu.js": 199,
	"./he": 200,
	"./he.js": 200,
	"./hi": 201,
	"./hi.js": 201,
	"./hr": 202,
	"./hr.js": 202,
	"./hu": 203,
	"./hu.js": 203,
	"./hy-am": 204,
	"./hy-am.js": 204,
	"./id": 205,
	"./id.js": 205,
	"./is": 206,
	"./is.js": 206,
	"./it": 207,
	"./it.js": 207,
	"./ja": 208,
	"./ja.js": 208,
	"./jv": 209,
	"./jv.js": 209,
	"./ka": 210,
	"./ka.js": 210,
	"./kk": 211,
	"./kk.js": 211,
	"./km": 212,
	"./km.js": 212,
	"./kn": 213,
	"./kn.js": 213,
	"./ko": 214,
	"./ko.js": 214,
	"./ky": 215,
	"./ky.js": 215,
	"./lb": 216,
	"./lb.js": 216,
	"./lo": 217,
	"./lo.js": 217,
	"./lt": 218,
	"./lt.js": 218,
	"./lv": 219,
	"./lv.js": 219,
	"./me": 220,
	"./me.js": 220,
	"./mi": 221,
	"./mi.js": 221,
	"./mk": 222,
	"./mk.js": 222,
	"./ml": 223,
	"./ml.js": 223,
	"./mr": 224,
	"./mr.js": 224,
	"./ms": 225,
	"./ms-my": 226,
	"./ms-my.js": 226,
	"./ms.js": 225,
	"./my": 227,
	"./my.js": 227,
	"./nb": 228,
	"./nb.js": 228,
	"./ne": 229,
	"./ne.js": 229,
	"./nl": 230,
	"./nl-be": 231,
	"./nl-be.js": 231,
	"./nl.js": 230,
	"./nn": 232,
	"./nn.js": 232,
	"./pa-in": 233,
	"./pa-in.js": 233,
	"./pl": 234,
	"./pl.js": 234,
	"./pt": 235,
	"./pt-br": 236,
	"./pt-br.js": 236,
	"./pt.js": 235,
	"./ro": 237,
	"./ro.js": 237,
	"./ru": 238,
	"./ru.js": 238,
	"./sd": 239,
	"./sd.js": 239,
	"./se": 240,
	"./se.js": 240,
	"./si": 241,
	"./si.js": 241,
	"./sk": 242,
	"./sk.js": 242,
	"./sl": 243,
	"./sl.js": 243,
	"./sq": 244,
	"./sq.js": 244,
	"./sr": 245,
	"./sr-cyrl": 246,
	"./sr-cyrl.js": 246,
	"./sr.js": 245,
	"./ss": 247,
	"./ss.js": 247,
	"./sv": 248,
	"./sv.js": 248,
	"./sw": 249,
	"./sw.js": 249,
	"./ta": 250,
	"./ta.js": 250,
	"./te": 251,
	"./te.js": 251,
	"./tet": 252,
	"./tet.js": 252,
	"./th": 253,
	"./th.js": 253,
	"./tl-ph": 254,
	"./tl-ph.js": 254,
	"./tlh": 255,
	"./tlh.js": 255,
	"./tr": 256,
	"./tr.js": 256,
	"./tzl": 257,
	"./tzl.js": 257,
	"./tzm": 258,
	"./tzm-latn": 259,
	"./tzm-latn.js": 259,
	"./tzm.js": 258,
	"./uk": 260,
	"./uk.js": 260,
	"./ur": 261,
	"./ur.js": 261,
	"./uz": 262,
	"./uz-latn": 263,
	"./uz-latn.js": 263,
	"./uz.js": 262,
	"./vi": 264,
	"./vi.js": 264,
	"./x-pseudo": 265,
	"./x-pseudo.js": 265,
	"./yo": 266,
	"./yo.js": 266,
	"./zh-cn": 267,
	"./zh-cn.js": 267,
	"./zh-hk": 268,
	"./zh-hk.js": 268,
	"./zh-tw": 269,
	"./zh-tw.js": 269
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 363;

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export calendarController */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_controller__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_calendar_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_index__ = __webpack_require__(365);





function calendarController(modalCtrl, calSvc) {
    return new __WEBPACK_IMPORTED_MODULE_1__calendar_controller__["a" /* CalendarController */](modalCtrl, calSvc);
}
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */]],
                    declarations: __WEBPACK_IMPORTED_MODULE_4__components_index__["a" /* CALENDAR_COMPONENTS */],
                    exports: __WEBPACK_IMPORTED_MODULE_4__components_index__["a" /* CALENDAR_COMPONENTS */],
                    entryComponents: __WEBPACK_IMPORTED_MODULE_4__components_index__["a" /* CALENDAR_COMPONENTS */],
                    providers: [{
                            provide: __WEBPACK_IMPORTED_MODULE_1__calendar_controller__["a" /* CalendarController */],
                            useFactory: calendarController,
                            deps: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__services_calendar_service__["a" /* CalendarService */]],
                        }, __WEBPACK_IMPORTED_MODULE_3__services_calendar_service__["a" /* CalendarService */]],
                    schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
                },] },
    ];
    /** @nocollapse */
    CalendarModule.ctorParameters = function () { return []; };
    return CalendarModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CALENDAR_COMPONENTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar_modal__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_week_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__month_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__month_picker_component__ = __webpack_require__(366);





var CALENDAR_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__calendar_modal__["a" /* CalendarModal */],
    __WEBPACK_IMPORTED_MODULE_1__calendar_week_component__["a" /* CalendarWeekComponent */],
    __WEBPACK_IMPORTED_MODULE_2__month_component__["a" /* MonthComponent */],
    __WEBPACK_IMPORTED_MODULE_3__calendar_component__["a" /* CalendarComponent */],
    __WEBPACK_IMPORTED_MODULE_4__month_picker_component__["a" /* MonthPickerComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var MonthPickerComponent = /** @class */ (function () {
    function MonthPickerComponent() {
        this.color = 'primary';
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._thisMonth = new Date();
        this._monthFormat = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    }
    Object.defineProperty(MonthPickerComponent.prototype, "monthFormat", {
        get: function () {
            return this._monthFormat;
        },
        set: function (value) {
            if (Array.isArray(value) && value.length === 12) {
                this._monthFormat = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MonthPickerComponent.prototype._onSelect = function (month) {
        this.onSelect.emit(month);
    };
    MonthPickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'ion-calendar-month-picker',
                    template: "\n    <div [class]=\"'month-picker ' + color\">\n      <div class=\"month-packer-item\"\n           [class.this-month]=\"\n           i === _thisMonth.getMonth() \n           && month.original.year === _thisMonth.getFullYear()\"\n           *ngFor=\"let item of _monthFormat; let i = index\">\n        <button type=\"button\" (click)=\"_onSelect(i)\">{{item}}</button>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    MonthPickerComponent.ctorParameters = function () { return []; };
    MonthPickerComponent.propDecorators = {
        'month': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'color': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'onSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
        'monthFormat': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return MonthPickerComponent;
}());

//# sourceMappingURL=month-picker.component.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'TabsPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/jsanchez/CocktaiLabs/ion2-calendar/lazyload-demo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jsanchez/CocktaiLabs/ion2-calendar/lazyload-demo/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);



var CalendarService = /** @class */ (function () {
    function CalendarService() {
    }
    CalendarService.prototype.safeOpt = function (calendarOptions) {
        var _disableWeeks = [];
        var _daysConfig = [];
        var _a = calendarOptions || {}, _b = _a.autoDone, autoDone = _b === void 0 ? false : _b, _c = _a.from, from = _c === void 0 ? new Date() : _c, _d = _a.to, to = _d === void 0 ? 0 : _d, _e = _a.cssClass, cssClass = _e === void 0 ? '' : _e, _f = _a.weekStart, weekStart = _f === void 0 ? 0 : _f, _g = _a.canBackwardsSelected, canBackwardsSelected = _g === void 0 ? false : _g, _h = _a.disableWeeks, disableWeeks = _h === void 0 ? _disableWeeks : _h, _j = _a.closeLabel, closeLabel = _j === void 0 ? 'CANCEL' : _j, _k = _a.closeIcon, closeIcon = _k === void 0 ? false : _k, _l = _a.doneLabel, doneLabel = _l === void 0 ? 'DONE' : _l, _m = _a.doneIcon, doneIcon = _m === void 0 ? false : _m, _o = _a.id, id = _o === void 0 ? '' : _o, _p = _a.pickMode, pickMode = _p === void 0 ? 'single' : _p, _q = _a.color, color = _q === void 0 ? 'primary' : _q, _r = _a.isSaveHistory, isSaveHistory = _r === void 0 ? false : _r, _s = _a.monthFormat, monthFormat = _s === void 0 ? 'MMM yyyy' : _s, _t = _a.title, title = _t === void 0 ? 'CALENDAR' : _t, _u = _a.defaultTitle, defaultTitle = _u === void 0 ? '' : _u, _v = _a.defaultSubtitle, defaultSubtitle = _v === void 0 ? '' : _v, _w = _a.weekdays, weekdays = _w === void 0 ? ['S', 'M', 'T', 'W', 'T', 'F', 'S'] : _w, _x = _a.daysConfig, daysConfig = _x === void 0 ? _daysConfig : _x, _y = _a.countNextMonths, countNextMonths = _y === void 0 ? 3 : _y, _z = _a.showYearPicker, showYearPicker = _z === void 0 ? false : _z;
        return {
            defaultTitle: defaultTitle,
            defaultSubtitle: defaultSubtitle,
            autoDone: autoDone,
            from: from,
            to: to,
            cssClass: cssClass,
            weekStart: weekStart,
            canBackwardsSelected: canBackwardsSelected,
            closeLabel: closeLabel,
            closeIcon: closeIcon,
            doneLabel: doneLabel,
            doneIcon: doneIcon,
            id: id,
            pickMode: pickMode,
            color: color,
            isSaveHistory: isSaveHistory,
            defaultScrollTo: calendarOptions.defaultScrollTo || from,
            defaultDate: calendarOptions.defaultDate || null,
            defaultDates: calendarOptions.defaultDates || null,
            defaultDateRange: calendarOptions.defaultDateRange || null,
            disableWeeks: disableWeeks,
            monthFormat: monthFormat,
            title: title,
            weekdays: weekdays,
            daysConfig: daysConfig,
            countNextMonths: countNextMonths,
            showYearPicker: showYearPicker,
        };
    };
    CalendarService.prototype.createOriginalCalendar = function (time) {
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth();
        var firstWeek = new Date(year, month, 1).getDay();
        var howManyDays = __WEBPACK_IMPORTED_MODULE_2_moment__(time).daysInMonth();
        return {
            time: time,
            date: new Date(time),
            year: year,
            month: month,
            firstWeek: firstWeek,
            howManyDays: howManyDays,
        };
    };
    CalendarService.prototype.findDayConfig = function (day, opt) {
        if (opt.daysConfig.length <= 0)
            return null;
        return opt.daysConfig.find(function (n) { return day.isSame(n.date, 'day'); });
    };
    CalendarService.prototype.createCalendarDay = function (time, opt) {
        var _time = __WEBPACK_IMPORTED_MODULE_2_moment__(time);
        var isToday = __WEBPACK_IMPORTED_MODULE_2_moment__().isSame(_time, 'days');
        var dayConfig = this.findDayConfig(_time, opt);
        var _rangeBeg = __WEBPACK_IMPORTED_MODULE_2_moment__(opt.from).valueOf();
        var _rangeEnd = __WEBPACK_IMPORTED_MODULE_2_moment__(opt.to).valueOf();
        var isBetween = true;
        var disableWee = opt.disableWeeks.indexOf(_time.toDate().getDay()) !== -1;
        if (_rangeBeg > 0 && _rangeEnd > 0) {
            if (!opt.canBackwardsSelected) {
                isBetween = !_time.isBetween(_rangeBeg, _rangeEnd, 'days', '[]');
            }
            else {
                isBetween = __WEBPACK_IMPORTED_MODULE_2_moment__(_time).isBefore(_rangeBeg) ? false : isBetween;
            }
        }
        else if (_rangeBeg > 0 && _rangeEnd === 0) {
            if (!opt.canBackwardsSelected) {
                var _addTime = _time.add(1, 'day');
                isBetween = !_addTime.isAfter(_rangeBeg);
            }
            else {
                isBetween = false;
            }
        }
        var _disable = false;
        if (dayConfig && Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["g" /* isBoolean */])(dayConfig.disable)) {
            _disable = dayConfig.disable;
        }
        else {
            _disable = disableWee || isBetween;
        }
        var title = new Date(time).getDate().toString();
        if (dayConfig && dayConfig.title) {
            title = dayConfig.title;
        }
        else if (opt.defaultTitle) {
            title = opt.defaultTitle;
        }
        var subTitle = '';
        if (dayConfig && dayConfig.subTitle) {
            subTitle = dayConfig.subTitle;
        }
        else if (opt.defaultSubtitle) {
            subTitle = opt.defaultSubtitle;
        }
        return {
            time: time,
            isToday: isToday,
            title: title,
            subTitle: subTitle,
            selected: false,
            marked: dayConfig ? dayConfig.marked || false : false,
            cssClass: dayConfig ? dayConfig.cssClass || '' : '',
            disable: _disable,
        };
    };
    CalendarService.prototype.createCalendarMonth = function (original, opt) {
        var days = new Array(6).fill(null);
        var len = original.howManyDays;
        for (var i = original.firstWeek; i < len + original.firstWeek; i++) {
            var itemTime = new Date(original.year, original.month, i - original.firstWeek + 1).getTime();
            days[i] = this.createCalendarDay(itemTime, opt);
        }
        var weekStart = opt.weekStart;
        if (weekStart === 1) {
            if (days[0] === null) {
                days.shift();
                days.push(null);
            }
            else {
                days.unshift.apply(days, new Array(6).fill(null));
            }
        }
        return {
            original: original,
            days: days,
        };
    };
    CalendarService.prototype.createMonthsByPeriod = function (startTime, monthsNum, opt) {
        var _array = [];
        var _start = new Date(startTime);
        var _startMonth = new Date(_start.getFullYear(), _start.getMonth(), 1).getTime();
        for (var i = 0; i < monthsNum; i++) {
            var time = __WEBPACK_IMPORTED_MODULE_2_moment__(_startMonth).add(i, 'M').valueOf();
            var originalCalendar = this.createOriginalCalendar(time);
            _array.push(this.createCalendarMonth(originalCalendar, opt));
        }
        return _array;
    };
    CalendarService.prototype.getHistory = function (id) {
        var _savedDatesCache = localStorage.getItem("ion-calendar-" + id);
        var _savedDates;
        if (_savedDatesCache === 'undefined' || _savedDatesCache === 'null' || !_savedDatesCache) {
            _savedDates = [null, null];
        }
        else {
            _savedDates = JSON.parse(_savedDatesCache);
        }
        return _savedDates;
    };
    CalendarService.prototype.savedHistory = function (savedDates, id) {
        localStorage.setItem("ion-calendar-" + id, JSON.stringify(savedDates));
    };
    CalendarService.prototype.wrapResult = function (original, pickMode) {
        var _this = this;
        var result;
        switch (pickMode) {
            case 'single':
                result = this.multiFormat(original[0].time);
                break;
            case 'range':
                result = {
                    from: this.multiFormat(original[0].time),
                    to: this.multiFormat(original[1].time),
                };
                break;
            case 'multi':
                result = original.map(function (e) { return _this.multiFormat(e.time); });
                break;
            default:
                result = original;
        }
        return result;
    };
    CalendarService.prototype.multiFormat = function (time) {
        var _moment = __WEBPACK_IMPORTED_MODULE_2_moment__(time);
        return {
            time: _moment.valueOf(),
            unix: _moment.unix(),
            dateObj: _moment.toDate(),
            string: _moment.format('YYYY-MM-DD'),
            years: _moment.year(),
            months: _moment.month() + 1,
            date: _moment.date()
        };
    };
    CalendarService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
    ];
    /** @nocollapse */
    CalendarService.ctorParameters = function () { return []; };
    return CalendarService;
}());

//# sourceMappingURL=calendar.service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calendar_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);




var CalendarModal = /** @class */ (function () {
    function CalendarModal(_renderer, _elementRef, params, viewCtrl, ref, calSvc) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.ref = ref;
        this.calSvc = calSvc;
        this.datesTemp = [null, null];
        this.monthFormatFilterStr = '';
        this.weekdays = [];
        this.weekStart = 0;
        this.debug = true;
        this._s = true;
        this._color = 'primary';
        this.findCssClass();
        this.init();
        this.getHistory();
        this.initDefaultDate();
    }
    CalendarModal.prototype.ionViewDidLoad = function () {
        this.scrollToDefaultDate();
    };
    CalendarModal.prototype.init = function () {
        var params = this.params;
        this._d = this.calSvc.safeOpt(params.get('options'));
        var startTime = __WEBPACK_IMPORTED_MODULE_3_moment__(this._d.from).valueOf();
        var endTime = __WEBPACK_IMPORTED_MODULE_3_moment__(this._d.to).valueOf();
        this.options = {
            start: startTime,
            end: endTime,
            isRadio: params.get('isRadio'),
            pickMode: this._d.pickMode,
            range_beg: startTime,
            range_end: endTime,
            daysConfig: params.get('daysConfig'),
            disableWeeks: params.get('disableWeeks'),
            monthFormat: params.get('monthFormat'),
        };
        this.defaultScrollTo = this._d.defaultScrollTo;
        this.scrollBackwards = this._d.canBackwardsSelected;
        this.weekStart = this._d.weekStart;
        this._id = this._d.id;
        this._color = this._d.color;
        this.monthFormatFilterStr = this._d.monthFormat;
        this.weekdays = this._d.weekdays;
        this.title = this._d.title;
        this.closeLabel = this._d.closeLabel;
        this.closeIcon = this._d.closeIcon;
        this.doneLabel = this._d.doneLabel;
        this.doneIcon = this._d.doneIcon;
        this.isSaveHistory = this._d.isSaveHistory;
        this.countNextMonths = this._d.countNextMonths;
        if (this.countNextMonths < 1) {
            this.countNextMonths = 1;
        }
        this.showYearPicker = this._d.showYearPicker;
        if (this.showYearPicker) {
            this.createYearPicker(startTime, endTime);
        }
        else {
            this.calendarMonths = this.calSvc.createMonthsByPeriod(startTime, this.findInitMonthNumber(this.defaultScrollTo) + this.countNextMonths, this._d);
        }
    };
    CalendarModal.prototype.initDefaultDate = function () {
        var _this = this;
        switch (this._d.pickMode) {
            case 'single':
                if (this._d.defaultDate) {
                    this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(this._d.defaultDate), this._d);
                }
                break;
            case 'range':
                if (this._d.defaultDateRange) {
                    if (this._d.defaultDateRange.from) {
                        this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(this._d.defaultDateRange.from), this._d);
                    }
                    if (this._d.defaultDateRange.to) {
                        this.datesTemp[1] = this.calSvc.createCalendarDay(this._getDayTime(this._d.defaultDateRange.to), this._d);
                    }
                }
                break;
            case 'multi':
                if (this._d.defaultDates && this._d.defaultDates.length) {
                    this.datesTemp = this._d.defaultDates.map(function (e) { return _this.calSvc.createCalendarDay(_this._getDayTime(e), _this._d); });
                }
                break;
            default:
                this.datesTemp = [null, null];
        }
    };
    CalendarModal.prototype.findCssClass = function () {
        var _this = this;
        var cssClass = this.params.get('cssClass');
        if (cssClass) {
            cssClass.split(' ').forEach(function (cssClass) {
                if (cssClass.trim() !== '')
                    _this._renderer.setElementClass(_this._elementRef.nativeElement, cssClass, true);
            });
        }
    };
    CalendarModal.prototype.onChange = function (data) {
        this.datesTemp = data;
        this.calSvc.savedHistory(data, this._id);
        this.ref.detectChanges();
        if (this._d.pickMode !== 'multi' && this._d.autoDone && this.canDone()) {
            this.done();
        }
    };
    CalendarModal.prototype.onCancel = function () {
        this.viewCtrl.dismiss(null, 'cancel');
    };
    CalendarModal.prototype.done = function () {
        this.viewCtrl.dismiss(this.calSvc.wrapResult(this.datesTemp, this._d.pickMode), 'done');
    };
    CalendarModal.prototype.canDone = function () {
        if (!Array.isArray(this.datesTemp)) {
            return false;
        }
        switch (this._d.pickMode) {
            case 'single':
                return !!(this.datesTemp[0] && this.datesTemp[0].time);
            case 'range':
                return !!(this.datesTemp[0] && this.datesTemp[1]) && !!(this.datesTemp[0].time && this.datesTemp[1].time);
            case 'multi':
                return this.datesTemp.length > 0 && this.datesTemp.every(function (e) { return !!e && !!e.time; });
            default:
                return false;
        }
    };
    CalendarModal.prototype.getHistory = function () {
        if (this.isSaveHistory) {
            this.datesTemp = this.calSvc.getHistory(this._id);
        }
    };
    CalendarModal.prototype.createYearPicker = function (startTime, endTime) {
        // init year array
        this.years = [];
        // getting max and be sure, it is in future (maybe parameter?)
        var maxYear = (new Date(endTime)).getFullYear();
        if (maxYear <= 1970) {
            maxYear = (new Date(this.defaultScrollTo)).getFullYear() + 10;
            this.options.end = new Date(maxYear, 12, 0).getTime();
        }
        // min year should be okay, either it will be set or something like 1970 at min
        var minYear = (new Date(startTime)).getFullYear();
        // calculating the needed years to be added to array
        var neededYears = (maxYear - minYear);
        // pushing years to selection array
        for (var y = 0; y <= neededYears; y++) {
            this.years.push(maxYear - y);
        }
        this.years.reverse();
        // selection-start-year of defaultScrollTo
        this.year = this.defaultScrollTo.getFullYear();
        var firstDayOfYear = new Date(this.year, 0, 1);
        var lastDayOfYear = new Date(this.year, 12, 0);
        // don't calc over the start / end
        if (firstDayOfYear.getTime() < this.options.start) {
            firstDayOfYear = new Date(this.options.start);
        }
        if (lastDayOfYear.getTime() > this.options.end) {
            lastDayOfYear = new Date(this.options.end);
        }
        // calcing the month
        this.calendarMonths = this.calSvc.createMonthsByPeriod(firstDayOfYear.getTime(), this.findInitMonthNumber(this.defaultScrollTo) + this.countNextMonths, this._d);
        // sets the range new
        // checking whether the start is after firstDayOfYear
        this.options.range_beg = firstDayOfYear.getTime() < startTime ? startTime : firstDayOfYear.getTime();
        // checking whether the end is before lastDayOfYear
        this.options.range_end = lastDayOfYear.getTime() > endTime ? endTime : lastDayOfYear.getTime();
    };
    CalendarModal.prototype.nextMonth = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        var len = this.calendarMonths.length;
        var final = this.calendarMonths[len - 1];
        var nextTime = __WEBPACK_IMPORTED_MODULE_3_moment__(final.original.time).add(1, 'M').valueOf();
        var rangeEnd = this.options.range_end ? __WEBPACK_IMPORTED_MODULE_3_moment__(this.options.range_end).subtract(1, 'M') : 0;
        if (len <= 0 || (rangeEnd !== 0 && __WEBPACK_IMPORTED_MODULE_3_moment__(final.original.time).isAfter(rangeEnd))) {
            infiniteScroll.enable(false);
            return;
        }
        (_a = this.calendarMonths).push.apply(_a, this.calSvc.createMonthsByPeriod(nextTime, 1, this._d));
        infiniteScroll.complete();
        var _a;
    };
    CalendarModal.prototype.backwardsMonth = function () {
        var first = this.calendarMonths[0];
        var firstTime = __WEBPACK_IMPORTED_MODULE_3_moment__(first.original.time).subtract(1, 'M').valueOf();
        (_a = this.calendarMonths).unshift.apply(_a, this.calSvc.createMonthsByPeriod(firstTime, 1, this._d));
        this.ref.detectChanges();
        var _a;
    };
    CalendarModal.prototype.scrollToDefaultDate = function () {
        var _this = this;
        var defaultDateIndex = this.findInitMonthNumber(this.defaultScrollTo);
        var defaultDateMonth = this.monthsEle.nativeElement.children["month-" + defaultDateIndex].offsetTop;
        if (defaultDateIndex === 0 || defaultDateMonth === 0)
            return;
        setTimeout(function () {
            _this.content.scrollTo(0, defaultDateMonth, 128);
        }, 300);
    };
    CalendarModal.prototype.onScroll = function ($event) {
        var _this = this;
        if (!this.scrollBackwards)
            return;
        if ($event.scrollTop <= 200 && this._s) {
            this._s = !1;
            var lastHeight_1 = this.content.getContentDimensions().scrollHeight;
            setTimeout(function () {
                _this.backwardsMonth();
                var nowHeight = _this.content.getContentDimensions().scrollHeight;
                _this.content.scrollTo(0, nowHeight - lastHeight_1, 0)
                    .then(function () {
                    _this._s = !0;
                });
            }, 180);
        }
    };
    CalendarModal.prototype.findInitMonthNumber = function (date) {
        var startDate = __WEBPACK_IMPORTED_MODULE_3_moment__(this.options.start);
        var defaultScrollTo = __WEBPACK_IMPORTED_MODULE_3_moment__(date);
        var isAfter = defaultScrollTo.isAfter(startDate);
        if (!isAfter)
            return 0;
        if (this.showYearPicker) {
            startDate = __WEBPACK_IMPORTED_MODULE_3_moment__(new Date(this.year, 0, 1));
        }
        return defaultScrollTo.diff(startDate, 'month');
    };
    CalendarModal.prototype.changedYearSelection = function () {
        var _this = this;
        // re-enabling infinite scroll
        if (this.infiniteScroll !== undefined) {
            this.infiniteScroll.enable(true);
        }
        // getting first day and last day of the year
        var firstDayOfYear = new Date(this.year, 0, 1);
        var lastDayOfYear = new Date(this.year, 12, 0);
        // don't calc over the start / end
        if (firstDayOfYear.getTime() < this.options.start) {
            firstDayOfYear = new Date(this.options.start);
        }
        if (lastDayOfYear.getTime() > this.options.end) {
            lastDayOfYear = new Date(this.options.end);
        }
        // sets the range new
        // checking whether the start is after firstDayOfYear
        this.options.range_beg = firstDayOfYear.getTime() < this.options.start ? this.options.start : firstDayOfYear.getTime();
        // checking whether the end is before lastDayOfYear
        this.options.range_end = lastDayOfYear.getTime() > this.options.end ? this.options.end : lastDayOfYear.getTime();
        // calcing the months
        var monthCount = (this.findInitMonthNumber(firstDayOfYear) + this.countNextMonths);
        this.calendarMonths = this.calSvc.createMonthsByPeriod(firstDayOfYear.getTime(), monthCount <= 1 ? 3 : monthCount, this._d);
        // scrolling to the top
        setTimeout(function () {
            _this.content.scrollTo(0, 0, 128);
        }, 300);
    };
    CalendarModal.prototype._getDayTime = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(__WEBPACK_IMPORTED_MODULE_3_moment__(date).format('YYYY-MM-DD')).valueOf();
    };
    CalendarModal.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'ion-calendar-modal',
                    template: "\n    <ion-header>\n\n      <ion-navbar [color]=\"_color\">\n\n        <!--<ion-buttons start [hidden]=\"!showYearPicker\">-->\n        <!--<ion-select [(ngModel)]=\"year\" (ngModelChange)=\"changedYearSelection()\" interface=\"popover\">-->\n        <!--<ion-option *ngFor=\"let y of years\" value=\"{{y}}\">{{y}}</ion-option>-->\n        <!--</ion-select>-->\n        <!--</ion-buttons>-->\n\n        <ion-buttons start>\n          <button type='button' ion-button icon-only clear (click)=\"onCancel()\">\n            <span *ngIf=\"closeLabel !== '' && !closeIcon\">{{closeLabel}}</span>\n            <ion-icon *ngIf=\"closeIcon\" name=\"close\"></ion-icon>\n          </button>\n        </ion-buttons>\n\n        <ion-title>{{title}}</ion-title>\n\n        <ion-buttons end>\n          <button type='button' ion-button icon-only *ngIf=\"!_d.autoDone\" clear [disabled]=\"!canDone()\" (click)=\"done()\">\n            <span *ngIf=\"doneLabel !== '' && !doneIcon\">{{doneLabel}}</span>\n            <ion-icon *ngIf=\"doneIcon\" name=\"checkmark\"></ion-icon>\n          </button>\n\n        </ion-buttons>\n\n      </ion-navbar>\n\n      <ion-calendar-week\n        [color]=\"_color\"\n        [weekArray]=\"weekdays\"\n        [weekStart]=\"weekStart\">\n      </ion-calendar-week>\n\n    </ion-header>\n\n    <ion-content (ionScroll)=\"onScroll($event)\" class=\"calendar-page\"\n                 [ngClass]=\"{'multi-selection': options.pickMode === 'multi'}\">\n\n      <div #months>\n        <ng-template ngFor let-month [ngForOf]=\"calendarMonths\" [ngForTrackBy]=\"trackByTime\" let-i=\"index\">\n          <div class=\"month-box\" [attr.id]=\"'month-' + i\">\n            <h4 class=\"text-center month-title\">{{month.original.date | date:monthFormatFilterStr}}</h4>\n            <ion-calendar-month [month]=\"month\"\n                                [pickMode]=\"options.pickMode\"\n                                [isSaveHistory]=\"isSaveHistory\"\n                                [id]=\"_id\"\n                                [color]=\"_color\"\n                                (onChange)=\"onChange($event)\"\n                                [(ngModel)]=\"datesTemp\">\n\n            </ion-calendar-month>\n          </div>\n        </ng-template>\n\n      </div>\n\n      <ion-infinite-scroll (ionInfinite)=\"nextMonth($event)\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </ion-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    CalendarModal.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], },
        { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__services_calendar_service__["a" /* CalendarService */], },
    ]; };
    CalendarModal.propDecorators = {
        'content': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */], args: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */],] },],
        'monthsEle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */], args: ['months',] },],
    };
    return CalendarModal;
}());

//# sourceMappingURL=calendar.modal.js.map

/***/ })

},[318]);
//# sourceMappingURL=main.js.map