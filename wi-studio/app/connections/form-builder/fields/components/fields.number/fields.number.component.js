"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),__decorate=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),fields_base_component_1=require("../fields.base/fields.base.component"),ng2_translate_1=require("ng2-translate"),ConnectionsFormBuilderFieldsNumber=function(e){function t(t){var r=e.call(this,t)||this;return r.translate=t,r}return __extends(t,e),t}(fields_base_component_1.ConnectionsFormBuilderFieldsBase);ConnectionsFormBuilderFieldsNumber=__decorate([core_1.Component({selector:"connections-form-builder-fields-number",styleUrls:["fields.number.css","../fields.base/fields.base.css"],moduleId:module.id,templateUrl:"fields.number.tpl.html",inputs:["_info:info","_fieldObserver:fieldObserver"]}),__metadata("design:paramtypes",[ng2_translate_1.TranslateService])],ConnectionsFormBuilderFieldsNumber),exports.ConnectionsFormBuilderFieldsNumber=ConnectionsFormBuilderFieldsNumber;