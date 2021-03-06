webpackJsonp([1,4],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DbService = (function () {
    function DbService(http) {
        this.http = http;
        console.log('db con');
    }
    DbService.prototype.getCharacters = function () {
        return this.http.get('https://stormy-cliffs-93064.herokuapp.com/api/characters')
            .map(function (res) { return res.json(); });
    };
    DbService.prototype.updateContact = function (id) {
        this.http.get('http://localhost:5000/api/toggleContact/' + id);
    };
    DbService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], DbService);
    return DbService;
    var _a;
}());
//# sourceMappingURL=C:/Sites/scrapetest/angular-src/src/db.service.js.map

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 431;


/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(551);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Sites/scrapetest/angular-src/src/main.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(716),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Sites/scrapetest/angular-src/src/app.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tracker_tracker_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_datatable__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_db_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_data_filter_pipe__ = __webpack_require__(555);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'tracker', component: __WEBPACK_IMPORTED_MODULE_8__components_tracker_tracker_component__["a" /* TrackerComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_tracker_tracker_component__["a" /* TrackerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_data_filter_pipe__["a" /* DataFilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_9_angular2_datatable__["DataTableModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_db_service__["a" /* DbService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Sites/scrapetest/angular-src/src/app.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(717),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Sites/scrapetest/angular-src/src/home.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(718),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=C:/Sites/scrapetest/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_db_service__ = __webpack_require__(360);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackerComponent = (function () {
    function TrackerComponent(dbService) {
        var _this = this;
        this.dbService = dbService;
        this.filters = [
            { name: "name", display: "Name" },
            { name: "info.class", display: "Class" },
            { name: "info.realm", display: "Realm" },
            { name: "info.style", display: "Raiding Style" },
            { name: "info.guild", display: "Guild" },
            { name: "btag", display: "Battle Tag" },
            { name: "lastupdated", display: "Last update" },
        ];
        dbService.getCharacters().subscribe(function (data) {
            _this.characters = data;
        });
    }
    TrackerComponent.prototype.ngOnInit = function () {
    };
    TrackerComponent.prototype.addToList = function (id) {
        this.dbService.updateContact(id);
    };
    TrackerComponent.prototype.change = function () {
        console.log(this.characters.contact);
    };
    TrackerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tracker',
            template: __webpack_require__(719),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_db_service__["a" /* DbService */]],
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_db_service__["a" /* DbService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_db_service__["a" /* DbService */]) === 'function' && _a) || Object])
    ], TrackerComponent);
    return TrackerComponent;
    var _a;
}());
//# sourceMappingURL=C:/Sites/scrapetest/angular-src/src/tracker.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (characters, term, searchValue) {
        //check if search term is undefined
        if (term === undefined)
            return characters;
        // return updated characters
        return characters.filter(function (character) {
            switch (searchValue) {
                case "info.class":
                    return character.info.class.toLowerCase().includes(term.toLowerCase());
                case "name":
                    return character.name.toLowerCase().includes(term.toLowerCase());
                case "realm":
                    return character.info.realm.toLowerCase().includes(term.toLowerCase());
                case "info.style":
                    return character.info.style.toLowerCase().includes(term.toLowerCase());
                case "info.guild":
                    return character.info.guild.toLowerCase().includes(term.toLowerCase());
                case "btag":
                    return character.btag.toLowerCase().includes(term.toLowerCase());
                case "lastupdated":
                    return character.lastupdated.toLowerCase().includes(term.toLowerCase());
                default:
                    return character.name.toLowerCase().includes(term.toLowerCase());
            }
        });
    };
    DataFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dataFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], DataFilterPipe);
    return DataFilterPipe;
}());
//# sourceMappingURL=C:/Sites/scrapetest/angular-src/src/data-filter.pipe.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Sites/scrapetest/angular-src/src/environment.js.map

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ".monk {\r\n    color: #00FF96;\r\n}\r\n\r\n.shaman {\r\n    color: #0070DE;\r\n}\r\n\r\n.druid {\r\n    color: #FF7D0A;\r\n}\r\n\r\n.paladin {\r\n    color: #F58CBA;\r\n}\r\n\r\n.mage {\r\n    color: #69CCF0;\r\n}\r\n\r\n.deathknight {\r\n    color: #C41F3B;\r\n}\r\n\r\n.warlock {\r\n    color: #9482C9;\r\n}\r\n\r\n.warrior {\r\n    color: #C79C6E;\r\n}\r\n\r\n.priest {\r\n    color: #FFFFFF;\r\n}\r\n\r\n.demon_hunter {\r\n    color: #A330C9;\r\n}\r\n\r\n.rogue {\r\n    color: #FFF569;\r\n}\r\n\r\n.hunter {\r\n    color: #ABD473;\r\n}\r\n\r\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<p>\nI r baba and I r making stuffs xd\n  <a href=\"http://essenceguild.com/test/\">soon tm</a>\n</p>\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Q4XK5CzBUfo?list=PLL86CHBMdzHGaNm5-jNjrOnHzSGncQxcq\" frameborder=\"0\" allowfullscreen></iframe>\n\n"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Wow Tracker</a>\n    </div>\n    <div class=\"navbar-right\">\n       <ul class=\"nav navbar-nav\">\n        <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a></li>\n        <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['tracker']\">Tracker</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n\r\n\r\n\r\n  <select class=\"form-control\" [(ngModel)]=\"searchValue\">\r\n    <label>Filter by {{searchValue}}:</label>\r\n    <option *ngFor=\"let filter of filters\" [ngValue]=\"filter.name\">{{filter.display}}</option>\r\n  </select>\r\n\r\n  <input class=\"form-control\" [(ngModel)]=\"term\"/>\r\n\r\n  <h1 class=\"jumbotron\">{{searchValue}}</h1>\r\n\r\n  <table class=\"table table-striped\" [mfData]=\"characters\" #mf=\"mfDataTable\">\r\n\r\n    <thead>\r\n\r\n    <tr>\r\n      <th>\r\n        <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\r\n      </th>\r\n      <th>\r\n        <mfDefaultSorter by=\"info.class\">Class</mfDefaultSorter>\r\n      </th>\r\n\r\n      <th>\r\n        <mfDefaultSorter by=\"info.ilvl\">Ilvl</mfDefaultSorter>\r\n      </th>\r\n\r\n      <th>\r\n        <mfDefaultSorter by=\"progression\">Prog</mfDefaultSorter>\r\n      </th>\r\n\r\n      <th>\r\n        <mfDefaultSorter by=\"info.realm\">Realm</mfDefaultSorter>\r\n      </th>\r\n      <th>\r\n        <mfDefaultSorter by=\"info.style\">Raiding Style</mfDefaultSorter>\r\n      </th>\r\n      <th>\r\n        <mfDefaultSorter by=\"info.guild\">Current Guild</mfDefaultSorter>\r\n      </th>\r\n      <th>\r\n        <mfDefaultSorter by=\"btag\">Btag</mfDefaultSorter>\r\n      </th>\r\n\r\n      <th>\r\n        <mfDefaultSorter by=\"lastupdated\">Last Update</mfDefaultSorter>\r\n      </th>\r\n\r\n\r\n    </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n\r\n    <tr *ngFor=\"let character of mf.data | dataFilter: term:searchValue\">\r\n\r\n      <td><a class=\"{{character.info.class}}\" target=\"_blank\" href=\"https://www.wowprogress.com/character/{{character.info.zone}}/{{character.info.realm}}/{{character.name}}\">{{character.name}}</a></td>\r\n      <td class=\"{{character.info.class}}\">{{character.info.class}}</td>\r\n      <td>{{character.info.ilvl}}</td>\r\n      <td>{{character.progression}}/10</td>\r\n      <td>{{character.info.realm}}</td>\r\n      <td>{{character.info.style}}</td>\r\n      <td>{{character.info.guild}}</td>\r\n      <td>{{character.btag}}</td>\r\n      <td>{{character.lastupdated}}</td>\r\n      <td><a target=\"_blank\" href=\"https://www.wowprogress.com/character/{{character.info.zone}}/{{character.info.realm}}/{{character.name}}\">wowp</a></td>\r\n      <td><a target=\"_blank\" href=\"http://eu.battle.net/wow/en/character/{{character.info.realm}}/{{character.name}}/simple\">armory</a></td>\r\n      <td><input type=\"button\" (click)=\"change()\" value=\"{{character.contact}}\"></td>\r\n    </tr>\r\n\r\n    </tbody>\r\n    <tfoot>\r\n    <tr>\r\n    </tr>\r\n    </tfoot>\r\n\r\n  </table>\r\n</div>"

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(432);


/***/ })

},[987]);
//# sourceMappingURL=main.bundle.map