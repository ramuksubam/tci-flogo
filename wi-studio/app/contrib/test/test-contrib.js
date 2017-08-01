"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),__decorate=this&&this.__decorate||function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),rxjs_extensions_1=require("../../../common/rxjs-extensions"),validation_1=require("../../../common/models/validation"),wi_contrib_1=require("../wi-contrib"),Field1Provider=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.getFieldValue=function(e){return rxjs_extensions_1.Observable.create(function(e){e.next("")})},t}(wi_contrib_1.AbstractContribFieldProvider);exports.Field1Provider=Field1Provider;var Field1ValidationProvider=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.validate=function(e){return rxjs_extensions_1.Observable.create(function(e){var t=validation_1.ValidationResult.newValidationResult();e.next(t)})},t}(wi_contrib_1.AbstractContribValidationProvider);exports.Field1ValidationProvider=Field1ValidationProvider;var TestContribService=function(){return function(){}}();TestContribService=__decorate([wi_contrib_1.WiContrib({validationProviders:[{field:"field1",useClass:Field1ValidationProvider}],fieldProviders:[{field:"field1",useClass:Field1Provider}]}),core_1.Injectable()],TestContribService),exports.TestContribService=TestContribService;