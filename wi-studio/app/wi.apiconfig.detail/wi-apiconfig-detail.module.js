"use strict";var __decorate=this&&this.__decorate||function(e,o,i,t){var r,n=arguments.length,c=n<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,i):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,o,i,t);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(n<3?r(c):n>3?r(o,i,c):r(o,i))||c);return n>3&&c&&Object.defineProperty(o,i,c),c};Object.defineProperty(exports,"__esModule",{value:!0});var router_1=require("@angular/router"),core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wi_apiconfig_detail_component_1=require("./wi-apiconfig-detail.component"),WiApiConfigModule=function(){return function(){}}();WiApiConfigModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,router_1.RouterModule.forChild([{path:"apiconfigdetail",component:wi_apiconfig_detail_component_1.WiApiconfigDetailComponent}])],exports:[wi_apiconfig_detail_component_1.WiApiconfigDetailComponent],declarations:[wi_apiconfig_detail_component_1.WiApiconfigDetailComponent],bootstrap:[]})],WiApiConfigModule),exports.default=WiApiConfigModule;