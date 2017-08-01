"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),__decorate=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),fields_base_component_1=require("../fields.base/fields.base.component"),ng2_translate_1=require("ng2-translate"),lodash=require("lodash"),ConnectionsFormBuilderFieldsObject=function(e){function t(t){var o=e.call(this,t)||this;return o.translate=t,o}return __extends(t,e),t.prototype.ngOnInit=function(){if(lodash.isNumber(this._info.value)||lodash.isString(this._info.value)||lodash.isBoolean(this._info.value))this._value=""+this._info.value;else if(this._info.value)try{this._value=""+JSON.stringify(this._info.value)}catch(e){}},t}(fields_base_component_1.ConnectionsFormBuilderFieldsBase);ConnectionsFormBuilderFieldsObject=__decorate([core_1.Component({selector:"connections-form-builder-fields-object",styleUrls:["fields.object.css","../fields.base/fields.base.css"],moduleId:module.id,templateUrl:"fields.object.tpl.html",inputs:["_info:info","_fieldObserver:fieldObserver"]}),__metadata("design:paramtypes",[ng2_translate_1.TranslateService])],ConnectionsFormBuilderFieldsObject),exports.ConnectionsFormBuilderFieldsObject=ConnectionsFormBuilderFieldsObject;