"use strict";var __decorate=this&&this.__decorate||function(o,e,t,r){var s,n=arguments.length,i=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(o,e,t,r);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var flowsList_service_1=require("./flowsList.service"),core_1=require("@angular/core"),common_1=require("@angular/common"),router_1=require("@angular/router"),ng2_bootstrap_1=require("ng2-bootstrap"),flowsList_component_1=require("./flowsList.component"),angular2_notifications_1=require("angular2-notifications"),FlowsListModule=function(){return function(){}}();FlowsListModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule,ng2_bootstrap_1.ModalModule.forRoot(),angular2_notifications_1.SimpleNotificationsModule.forRoot(),router_1.RouterModule.forChild([{path:"flowslist",component:flowsList_component_1.FlowsListComponent}])],exports:[flowsList_component_1.FlowsListComponent],declarations:[flowsList_component_1.FlowsListComponent],entryComponents:[flowsList_component_1.FlowsListComponent],providers:[flowsList_service_1.FlowsListService],bootstrap:[]})],FlowsListModule),exports.FlowsListModule=FlowsListModule;