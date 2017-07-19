webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"center white-text\">\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_quiz_component__ = __webpack_require__("../../../../../src/app/quiz/quiz.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        children: []
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'quiz',
        component: __WEBPACK_IMPORTED_MODULE_4__quiz_quiz_component__["a" /* QuizComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-toolbar></app-toolbar>\n</header>\n\n<main>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n\n\n<footer>\n<app-footer></app-footer>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  body main {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_token__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function AppComponent(authToken) {
        this.authToken = authToken;
        this.title = 'Barrel Web App';
        this.authToken.init(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].token_auth_config);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_token__["Angular2TokenService"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_token__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_dialog_auth_dialog_component__ = __webpack_require__("../../../../../src/app/auth-dialog/auth-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_form_register_form_component__ = __webpack_require__("../../../../../src/app/register-form/register-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__quiz_quiz_component__ = __webpack_require__("../../../../../src/app/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__auth_dialog_auth_dialog_component__["a" /* AuthDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__register_form_register_form_component__["a" /* RegisterFormComponent */],
            __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_16__quiz_quiz_component__["a" /* QuizComponent */],
            __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["a" /* MaterializeModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6_angular2_token__["Angular2TokenService"], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-dialog/auth-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" materialize=\"modal\" [materializeActions]=\"modalActions\">\n\n\n  <div class=\"modal-content\">\n\n    <div class=\"row\">\n\n      <div class=\"row\">\n\n        <span class=\"modal-close right\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n\n      <div class=\"row\">\n        <h3 class=\"grey-text text-darken-2\">{{authMode}}</h3>\n\n        <app-login-form (onFormResult)=\"onLoginFormResult($event)\"\n                        *ngIf=\"isLoginMode()\">\n\n        </app-login-form>\n        <app-register-form (onFormResult)=\"onRegisterFormResult($event)\"\n                           *ngIf=\"isRegisterMode()\">\n\n        </app-register-form>\n      </div>\n\n\n      <div class=\"row\">\n        <span class=\"grey-text text-darken-2\" *ngIf=\"isLoginMode()\">\n          Need an account? <a (click)=\"authMode='register'\">Click here to register</a>\n        </span>\n        <span class=\"grey-text text-darken-2\" *ngIf=\"isRegisterMode()\">\n          Already have an account? <a (click)=\"authMode='login'\">Click here to login</a>\n        </span>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth-dialog/auth-dialog.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth-dialog/auth-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthDialogComponent = (function () {
    function AuthDialogComponent() {
        this.authMode = 'login';
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    AuthDialogComponent.prototype.onLoginFormResult = function (e) {
        if (e.signedIn)
            this.closeDialog();
        else {
            alert(e.err.json().errors[0]);
        }
    };
    AuthDialogComponent.prototype.onRegisterFormResult = function (e) {
        if (e.signedUp)
            this.closeDialog();
        else {
            alert(e.err.json().errors.full_messages[0]);
        }
    };
    AuthDialogComponent.prototype.openDialog = function (mode) {
        if (mode === void 0) { mode = 'login'; }
        this.authMode = mode;
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    AuthDialogComponent.prototype.closeDialog = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    AuthDialogComponent.prototype.ngOnInit = function () {
    };
    AuthDialogComponent.prototype.isLoginMode = function () { return this.authMode == 'login'; };
    AuthDialogComponent.prototype.isRegisterMode = function () { return this.authMode == 'register'; };
    return AuthDialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])('auth-mode'),
    __metadata("design:type", String)
], AuthDialogComponent.prototype, "authMode", void 0);
AuthDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-auth-dialog',
        template: __webpack_require__("../../../../../src/app/auth-dialog/auth-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth-dialog/auth-dialog.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], AuthDialogComponent);

//# sourceMappingURL=auth-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer hide-on-med-and-down transparent\">\n  <div class=\"row\">\n    <div class=\"col s6 offset-s6\">\n      <span class=\"right\">\n        <a class=\"col s4\" href=\"http://www.facebook.com\" target=\"_blank\"><img src=\"/assets/images/SocialMediaIcons/facebook.png\"></a>\n        <a class=\"col s4\" href=\"http://www.twitter.com\" target=\"_blank\"><img src=\"/assets/images/SocialMediaIcons/twitter.png\"></a>\n        <a class=\"col s4\" href=\"http://www.instagram.com\" target=\"_blank\"><img src=\"/assets/images/SocialMediaIcons/instagram.png\"></a>\n      </span>\n    </div>\n  </div>\n</footer>\n\n<footer class=\"page-footer hide-on-med-and-up transparent\">\n  <div class=\"row\">\n    <div class=\"col s6 offset-s6\">\n      <span class=\"right\">\n        <a class=\"col s4\" href=\"http://www.facebook.com\" target=\"_blank\"><img id=\"mobileImg\" src=\"/assets/images/SocialMediaIcons/facebook.png\"></a>\n        <a class=\"col s4\" href=\"http://www.twitter.com\" target=\"_blank\"><img id=\"mobileImg\" src=\"/assets/images/SocialMediaIcons/twitter.png\"></a>\n        <a class=\"col s4\" href=\"http://www.instagram.com\" target=\"_blank\"><img id=\"mobileImg\" src=\"/assets/images/SocialMediaIcons/instagram.png\"></a>\n      </span>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  overflow: hidden; }\n\n#mobileImg {\n  max-width: 80%;\n  height: auto;\n  width: auto\\9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_token__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authTokenService, router) {
        this.authTokenService = authTokenService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authTokenService.userSignedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_token__["Angular2TokenService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<figure id=\"container\" class=\"hide-on-med-and-down white-text top center\">\n    <img id=\"logo\" src=\"/assets/images/logos/SolidWhiteLogo.png\" alt=\"\">\n    <figcaption id=\"phrase\">\n      Wine just got<br> less wanky.\n    </figcaption>\n    <a [routerLink]=\"['/quiz']\">Take our wanky quiz.</a>\n</figure>\n\n<figure id=\"container\" class=\"hide-on-med-and-up white-text top center\">\n    <img id=\"logo-mobile\" src=\"/assets/images/logos/SolidWhiteLogo.png\" alt=\"\">\n    <figcaption id=\"phrase-mobile\">\n      Wine just got<br> less wanky.\n    </figcaption>\n    <a [routerLink]=\"['/quiz']\">Take our wanky quiz.</a>\n</figure>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#logo {\n  max-width: 35%;\n  height: auto;\n  width: auto\\9; }\n\n#phrase {\n  font-size: 30px;\n  font-size: 3.5vw; }\n\n#logo-mobile {\n  max-width: 70%;\n  height: auto;\n  width: auto\\9; }\n\n#phrase-mobile {\n  font-size: 30px;\n  font-size: 6.5vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSignInSubmit()\" #f=\"ngForm\" >\n\n\n  <div class=\"row\">\n\n    <div class=\"input-field col s12\">\n      <input id=\"email\"\n             type=\"email\"\n             required\n             name='email'\n             [(ngModel)]=\"signInUser.email\"\n             class=\"validate\">\n\n      <label for=\"email\">Email</label>\n    </div>\n\n\n    <div class=\"input-field col s12\">\n      <input id=\"password\"\n             type=\"password\"\n             required\n             name='password'\n             [(ngModel)]=\"signInUser.password\"\n             class=\"validate\">\n\n      <label for=\"password\">Password</label>\n    </div>\n\n    <div class=\"col s12 \">\n      <button type=\"submit\"\n              [disabled]=\"!(f.valid)\"\n              [ngClass]=\"{'disabled': !(f.valid)}\"\n              class=\"waves-effect waves-light btn blue right\"\n      >\n        Login </button>\n    </div>\n\n\n  </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFormComponent = (function () {
    function LoginFormComponent(authService) {
        this.authService = authService;
        this.signInUser = {
            email: '',
            password: ''
        };
        this.onFormResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent.prototype.onSignInSubmit = function () {
        var _this = this;
        this.authService.logInUser(this.signInUser).subscribe(function (res) {
            if (res.status == 200) {
                _this.onFormResult.emit({ signedIn: true, res: res });
            }
        }, function (err) {
            console.log('err:', err);
            _this.onFormResult.emit({ signedIn: false, err: err });
        });
    };
    return LoginFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], LoginFormComponent.prototype, "onFormResult", void 0);
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-login-form',
        template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginFormComponent);

var _a;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"center white-text\">\n  quiz works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuizComponent = (function () {
    function QuizComponent() {
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-quiz',
        template: __webpack_require__("../../../../../src/app/quiz/quiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quiz/quiz.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], QuizComponent);

//# sourceMappingURL=quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSignUpSubmit()\" #f=\"ngForm\" >\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <input id=\"email\"\n             type=\"email\"\n             required\n             name='email'\n             [(ngModel)]=\"signUpUser.email\"\n             class=\"validate\">\n      <label for=\"email\">Email</label>\n    </div>\n    <div class=\"input-field col s12\">\n      <input id=\"password\"\n             type=\"password\"\n             required\n             name='password'\n             [(ngModel)]=\"signUpUser.password\"\n             class=\"validate\">\n      <label for=\"password\">Password</label>\n    </div>\n    <div class=\"input-field col s12\">\n      <input id=\"password_confirmation\"\n             type=\"password\"\n             required\n             name='password_confirmation'\n             [(ngModel)]=\"signUpUser.passwordConfirmation\"\n             class=\"validate\">\n      <label for=\"password_confirmation\">Password confirmation</label>\n    </div>\n    <div>\n      <span *ngIf=\"signUpUser.password != signUpUser.passwordConfirmation\"\n            style=\"color:red\">\n        Passwords must match\n      </span>\n    </div>\n    <div>\n      <span> Password must contain 8 characters</span>\n    </div>\n    <div class=\"col s12\">\n      <button type=\"submit\"\n              [disabled]=\"!(f.valid) || !(signUpUser.password == signUpUser.passwordConfirmation)\"\n              class=\"waves-effect waves-light btn blue right\">\n        Sign up\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterFormComponent = (function () {
    function RegisterFormComponent(authSerivce, http) {
        this.authSerivce = authSerivce;
        this.http = http;
        this.signUpUser = {
            email: '',
            password: '',
            passwordConfirmation: ''
        };
        this.onFormResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    RegisterFormComponent.prototype.ngOnInit = function () { };
    RegisterFormComponent.prototype.onSignUpSubmit = function () {
        var _this = this;
        this.authSerivce.registerUser(this.signUpUser).subscribe(function (res) {
            if (res.status == 200) {
                _this.signUpMailerSubmit();
                _this.onFormResult.emit({ signedUp: true, res: res });
            }
        }, function (err) {
            console.log(err.json());
            _this.onFormResult.emit({ signedUp: false, err: err });
        });
    };
    RegisterFormComponent.prototype.signUpMailerSubmit = function () {
        var url = 'https://barrel-backend.herokuapp.com/subscribes';
        this.http.post(url, { email: this.signUpUser.email }).subscribe();
    };
    return RegisterFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], RegisterFormComponent.prototype, "onFormResult", void 0);
RegisterFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-register-form',
        template: __webpack_require__("../../../../../src/app/register-form/register-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register-form/register-form.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* Http */]) === "function" && _b || Object])
], RegisterFormComponent);

var _a, _b;
//# sourceMappingURL=register-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_token__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(authService) {
        var _this = this;
        this.authService = authService;
        this.userSignedIn$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.authService.validateToken().subscribe(function (res) { return res.status == 200 ? _this.userSignedIn$.next(res.json().success) : _this.userSignedIn$.next(false); });
    }
    AuthService.prototype.logOutUser = function () {
        var _this = this;
        return this.authService.signOut().map(function (res) {
            _this.userSignedIn$.next(false);
            return res;
        });
    };
    AuthService.prototype.registerUser = function (signUpData) {
        var _this = this;
        return this.authService.registerAccount(signUpData).map(function (res) {
            _this.userSignedIn$.next(true);
            return res;
        });
    };
    AuthService.prototype.logInUser = function (signInData) {
        var _this = this;
        return this.authService.signIn(signInData).map(function (res) {
            _this.userSignedIn$.next(true);
            return res;
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_token__["Angular2TokenService"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "    <nav class=\"transparent\">\n       <div class=\"nav-wrapper\">\n         <a ref=\"#!\" [routerLink]=\"['']\" id=\"logo-container\" class=\"brand-logo\"></a>\n         <a href=\"#\" id=\"side-nav-button\" materialize=\"sideNav\" data-activates=\"mobile-navBar\" data-beloworigin=\"true\" class=\"dropdown-button btn white-text transparent hide-on-med-and-up\"><i class=\"material-icons\">menu</i></a>\n\n          <ul class=\"left hide-on-med-and-down\" id=\"navBar\">\n            <li *ngIf=\"this.router.url !== '/about'\"> <a [routerLink]=\"['/about']\">About</a></li>\n            <li *ngIf=\"this.router.url !== '/'\"> <a [routerLink]=\"['/home']\">Home</a></li>\n            <li *ngIf=\"!(authService.userSignedIn$ | async)\"> <a (click)=\"presentAuthDialog()\" >Login</a></li>\n            <li *ngIf=\"!(authService.userSignedIn$ | async)\"> <a (click)=\"presentAuthDialog('register')\">Register</a></li>\n            <li *ngIf=\"(authService.userSignedIn$ | async)\"><a (click)=\"logOut()\">Logout</a></li>\n          </ul>\n\n          <ul class=\"dropdown-content transparent\" id=\"mobile-navBar\">\n            <li *ngIf=\"this.router.url !== '/about'\"> <a [routerLink]=\"['/about']\">About</a></li>\n            <li *ngIf=\"this.router.url !== '/'\"> <a [routerLink]=\"['/home']\">Home</a></li>\n            <li *ngIf=\"!(authService.userSignedIn$ | async)\"> <a class=\"white-text\" (click)=\"presentAuthDialog()\" >Login</a></li>\n            <li *ngIf=\"!(authService.userSignedIn$ | async)\"> <a class=\"white-text\" (click)=\"presentAuthDialog('register')\">Register</a></li>\n            <li *ngIf=\"(authService.userSignedIn$ | async)\"><a class=\"white-text\" (click)=\"logOut()\">Logout</a></li>\n          </ul>\n        </div>\n      </nav>\n\n    <app-auth-dialog #authDialog ></app-auth-dialog>\n"

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\n#mobile-navBar {\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n  color: white; }\n\n#side-nav-button {\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_dialog_auth_dialog_component__ = __webpack_require__("../../../../../src/app/auth-dialog/auth-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ToolbarComponent = (function () {
    function ToolbarComponent(authService, router, http) {
        this.authService = authService;
        this.router = router;
        this.http = http;
    }
    ToolbarComponent.prototype.ngOnInit = function () { };
    ToolbarComponent.prototype.ngAfterViewInit = function () {
        jQuery(".button-collapse").sideNav();
    };
    ToolbarComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logOutUser().subscribe(function () { return _this.router.navigate(['/']); });
    };
    ToolbarComponent.prototype.presentAuthDialog = function (mode) {
        this.authDialog.openDialog(mode);
    };
    return ToolbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('authDialog'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_dialog_auth_dialog_component__["a" /* AuthDialogComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_dialog_auth_dialog_component__["a" /* AuthDialogComponent */]) === "function" && _a || Object)
], ToolbarComponent.prototype, "authDialog", void 0);
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-toolbar',
        template: __webpack_require__("../../../../../src/app/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/toolbar/toolbar.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["f" /* Http */]) === "function" && _d || Object])
], ToolbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    token_auth_config: {
        apiBase: 'https://barrel-backend.herokuapp.com/'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map
