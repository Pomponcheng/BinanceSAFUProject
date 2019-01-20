(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safuNav {\r\n    background-color: rgb(28, 37, 39)\r\n}\r\n\r\n.safuTealBrand {\r\n    color: rgb(117, 230, 192)\r\n}\r\n\r\n.safuGoldBrand {\r\n    color: rgb(230, 200, 34)\r\n}\r\n\r\n.safuNavLink {\r\n    color: white\r\n}\r\n\r\na {\r\n\r\n    font-size: 18px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBOztJQUVJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWZ1TmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMzcsIDM5KVxyXG59XHJcblxyXG4uc2FmdVRlYWxCcmFuZCB7XHJcbiAgICBjb2xvcjogcmdiKDExNywgMjMwLCAxOTIpXHJcbn1cclxuXHJcbi5zYWZ1R29sZEJyYW5kIHtcclxuICAgIGNvbG9yOiByZ2IoMjMwLCAyMDAsIDM0KVxyXG59XHJcblxyXG4uc2FmdU5hdkxpbmsge1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbmEge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-sm safuNav\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n          <h4 class=\"navbar-brand safuGoldBrand\">\n            BINANCE\n          </h4>\n          <h4 class=\"navbar-brand safuTealBrand\">\n            SAFU_Hackathon <strong>/SINGAPORE</strong>\n          </h4>\n          <li><strong><a class=\"nav-item nav-link safuNavLink\" routerLink=\"/\">Home</a></strong></li>\n          <li><strong><a class=\"nav-item nav-link safuNavLink\" routerLink=\"/query\">Query</a></strong></li>\n          <li><strong><a class=\"nav-item nav-link safuNavLink\" routerLink=\"/submit\">Submit</a></strong></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid\" style=\"color: rgb(38, 51, 54); text-align:center; padding-top: 20px\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'safuApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _submit_page_submit_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submit-page/submit-page.component */ "./src/app/submit-page/submit-page.component.ts");
/* harmony import */ var _query_page_query_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./query-page/query-page.component */ "./src/app/query-page/query-page.component.ts");








// import { EntryService } from './entry.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _submit_page_submit_page_component__WEBPACK_IMPORTED_MODULE_6__["SubmitPageComponent"],
                _query_page_query_page_component__WEBPACK_IMPORTED_MODULE_7__["QueryPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _submit_page_submit_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submit-page/submit-page.component */ "./src/app/submit-page/submit-page.component.ts");
/* harmony import */ var _query_page_query_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query-page/query-page.component */ "./src/app/query-page/query-page.component.ts");




var appRoutes = [
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"], pathMatch: 'full' },
    { path: 'submit', component: _submit_page_submit_page_component__WEBPACK_IMPORTED_MODULE_2__["SubmitPageComponent"] },
    { path: 'query', component: _query_page_query_page_component__WEBPACK_IMPORTED_MODULE_3__["QueryPageComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    color: white\r\n}\r\n\r\n.safuCard {\r\n\r\n    width: 500rem;\r\n    display:inline-block; margin: 0 px 27px 0;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isb0JBQW9CLEVBQUUsbUJBQW1COztBQUU3QyIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4uc2FmdUNhcmQge1xyXG5cclxuICAgIHdpZHRoOiA1MDByZW07XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jazsgbWFyZ2luOiAwIHB4IDI3cHggMDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <div class=\"card card-block\">\n    <h4 class=\"card-title\">Name</h4>\n    <p class=\"card-text\">This is a quote</p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/query-page/query-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/query-page/query-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bodyTextColor {\r\n    color: white\r\n}\r\n\r\n.safuCardSize {\r\n    \r\n    width: 1200px\r\n}\r\n\r\n.safuGoldBrand {\r\n    color: rgb(255, 222, 36)\r\n}\r\n\r\n.safuTealBrand {\r\n    color: rgb(117, 230, 192)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlcnktcGFnZS9xdWVyeS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3F1ZXJ5LXBhZ2UvcXVlcnktcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHlUZXh0Q29sb3Ige1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbi5zYWZ1Q2FyZFNpemUge1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTIwMHB4XHJcbn1cclxuXHJcbi5zYWZ1R29sZEJyYW5kIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyMjIsIDM2KVxyXG59XHJcblxyXG4uc2FmdVRlYWxCcmFuZCB7XHJcbiAgICBjb2xvcjogcmdiKDExNywgMjMwLCAxOTIpXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/query-page/query-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/query-page/query-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul><h2 class=\"bodyTextColor safuTealBrand\">Welcome to the <strong class=\"safuGoldBrand\">QUERY</strong> page!</h2></ul>\n<ul><p class=\"bodyTextColor\">Want to check if a Blockchain Wallet Address is <span class=\"safuGoldBrand\">'SAFU'</span>? Enter the Wallet Address in the search bar below and Hit the \"QUERY\" button</p></ul>\n\n<div style=\"padding-top: 20px; padding-left: 150px\">\n  <div class=\"card card-block safuCardSize\">\n    <ul><h2 class=\"card-title\"><strong>QUERY FUNCTION</strong></h2></ul> \n      <form action=\"\" method=\"POST\">\n        <ul><input style=\"width: 400px;\" type=\"text\" placeholder=\"Enter Blockchain Wallet Address\" name=\"bwa\" id=\"userBWAInput\"/></ul>\n        <ul><button style=\"width: 400px;\" type=\"submit\">QUERY</button></ul>\n      </form>\n  </div> \n</div>"

/***/ }),

/***/ "./src/app/query-page/query-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/query-page/query-page.component.ts ***!
  \****************************************************/
/*! exports provided: QueryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryPageComponent", function() { return QueryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QueryPageComponent = /** @class */ (function () {
    function QueryPageComponent() {
    }
    QueryPageComponent.prototype.ngOnInit = function () {
    };
    QueryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-query-page',
            template: __webpack_require__(/*! ./query-page.component.html */ "./src/app/query-page/query-page.component.html"),
            styles: [__webpack_require__(/*! ./query-page.component.css */ "./src/app/query-page/query-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QueryPageComponent);
    return QueryPageComponent;
}());



/***/ }),

/***/ "./src/app/submit-page/submit-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/submit-page/submit-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bodyTextColor {\r\n    color: white\r\n}\r\n\r\n.safuCardSize {\r\n    \r\n    width: 1200px\r\n}\r\n\r\n.safuGoldBrand {\r\n    color: rgb(255, 222, 36)\r\n}\r\n\r\n.safuTealBrand {\r\n    color: rgb(117, 230, 192)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VibWl0LXBhZ2Uvc3VibWl0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7O0lBRUk7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc3VibWl0LXBhZ2Uvc3VibWl0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5VGV4dENvbG9yIHtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4uc2FmdUNhcmRTaXplIHtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEyMDBweFxyXG59XHJcblxyXG4uc2FmdUdvbGRCcmFuZCB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjIyLCAzNilcclxufVxyXG5cclxuLnNhZnVUZWFsQnJhbmQge1xyXG4gICAgY29sb3I6IHJnYigxMTcsIDIzMCwgMTkyKVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/submit-page/submit-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/submit-page/submit-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <h2 class=\"bodyTextColor safuTealBrand\">Welcome to the <strong class=\"safuGoldBrand\">SUBMIT</strong> page!</h2>\n</ul>\n<ul>\n  <p class=\"bodyTextColor\">Want to submit a Blockchain Wallet Address that isn't <span class=\"safuGoldBrand\">'SAFU'</span>?\n    Fill up the form below and Hit the \"SUBMIT\" button</p>\n</ul>\n\n<div style=\"padding-top: 20px; padding-left: 150px\">\n  <div class=\"card card-block safuCardSize\">\n    <ul>\n      <h2 class=\"card-title\"><strong>SUBMIT FUNCTION</strong></h2>\n    </ul>\n    <form action=\"/walletschema\" method=\"POST\">\n      <ul><input style=\"width: 400px;\" type=\"text\" placeholder=\"Enter Blockchain Wallet Address\" name=\"bwa\" /></ul>\n      <ul><input style=\"width: 400px;\" type=\"text\" placeholder=\"Enter Your Full Name\" name=\"fullName\" /></ul>\n      <ul><input style=\"width: 400px;\" type=\"text\" placeholder=\"Enter Your Email Address\" name=\"email\" /></ul>\n      <ul><input style=\"width: 400px;\" type=\"text\" placeholder=\"Enter Your comments\" name=\"comments\" /></ul>\n      <ul><button style=\"width: 400px;\" type=\"submit\">SUBMIT</button></ul>\n    </form>\n  </div>\n</div>\n\n<!-- <div class=\"container-fluid\">\n  <div style=\"padding-top: 20px; padding-left: 150px\">\n    <div class=\"row\" *ngFor=\"let wa of walletAddresses\">\n      <h2 class=\"card-title\"><strong>SUBMISSION DETAILS</strong></h2>\n      <p class=\"card-text\">Blockchain Wallet Address: {{wa.bwa}}</p>\n      <p class=\"card-text\">Submitter's Name: {{wa.fullName}} </p>\n      <p class=\"card-text\">Submitter's Email: {{wa.email}} </p>\n      <p class=\"card-text\">Submitter's Comments: {{wa.comments}} </p>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/submit-page/submit-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/submit-page/submit-page.component.ts ***!
  \******************************************************/
/*! exports provided: SubmitPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitPageComponent", function() { return SubmitPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { EntryService } from '../entry.service';
// import { safuEntry } from '../safuEntry';
var SubmitPageComponent = /** @class */ (function () {
    function SubmitPageComponent() {
        // edited = false;
        // thisone = "";
        // store: safuEntry[] = [];
        // newEntry: safuEntry;
        this.safuEntries = [];
    }
    // constructor(private entryService: EntryService) {
    //   this.entryService.getAllEntries().subscribe(safuEntries => {this.safuEntries = safuEntries;});
    //  }
    // getEntry(name: string){
    //   this.entryService.getOneEntry(name).subscribe(safuEntries => {this.safuEntries = safuEntries;});
    // }
    SubmitPageComponent.prototype.ngOnInit = function () {
        // this.myForm = this.fb.group({
        // bwa: ['', Validators.required],
        // name: ['', Validators.required],
        // email: ['', [Validators.required, Validators.email]],
        // comments: ['', Validators.required]
        // });
    };
    SubmitPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-submit-page',
            template: __webpack_require__(/*! ./submit-page.component.html */ "./src/app/submit-page/submit-page.component.html"),
            styles: [__webpack_require__(/*! ./submit-page.component.css */ "./src/app/submit-page/submit-page.component.css")]
        })
    ], SubmitPageComponent);
    return SubmitPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular-apps\safuApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map