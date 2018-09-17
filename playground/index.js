"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/**
 * This is only for local test
 */
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var index_1 = require("../dist/index");
var AppComponent = (function () {
    function AppComponent() {
        this.wordData = [
            { size: 500, text: 'vitae' },
            { size: 301, text: 'amet' },
            { size: 123, text: 'sit' },
            { size: 321, text: 'eget' },
            { size: 231, text: 'quis' },
            { size: 123, text: 'sem' },
            { size: 346, text: 'massa' },
            { size: 107, text: 'nec' },
            { size: 436, text: 'sed' },
            { size: 731, text: 'semper' },
            { size: 80, text: 'scelerisque' },
            { size: 96, text: 'egestas' },
            { size: 531, text: 'libero' },
            { size: 109, text: 'nisl' },
            { size: 972, text: 'odio' },
            { size: 213, text: 'tincidunt' },
            { size: 294, text: 'vulputate' },
            { size: 472, text: 'venenatis' },
            { size: 297, text: 'malesuada' },
            { size: 456, text: 'finibus' },
            { size: 123, text: 'tempor' },
            { size: 376, text: 'tortor' },
            { size: 93, text: 'congue' },
            { size: 123, text: 'possit' },
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_2.Component({
        selector: 'app',
        template: "\n        <div AgWordCloud [wordData]=\"wordData\"></div>"
    })
], AppComponent);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [AppComponent],
        declarations: [AppComponent],
        imports: [platform_browser_1.BrowserModule, index_1.AgWordCloudModule.forRoot()]
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
