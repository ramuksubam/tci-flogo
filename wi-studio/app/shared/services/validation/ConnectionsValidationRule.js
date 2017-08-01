"use strict";var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var rxjs_extensions_1=require("../../../../common/rxjs-extensions"),validationrule_1=require("../../../../common/models/vrules/validationrule"),validation_1=require("../../../../common/models/validation"),constants_1=require("../../../../common/constants"),ConnectionsValidationRule=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return __extends(n,t),n.newValidationRule=function(){return new n},n.prototype.getContribHook=function(t){return null},n.prototype.getContexts=function(t){return[t]},n.prototype.canValidate=function(t){return!!t.getElements(constants_1.EnumValidationContext.CONNECTOR)},n.prototype.validate=function(t){return rxjs_extensions_1.Observable.create(function(t){t.next(validation_1.ValidationResult.newValidationResult()),t.complete()})},n}(validationrule_1.AbstractValidationRule);exports.ConnectionsValidationRule=ConnectionsValidationRule;