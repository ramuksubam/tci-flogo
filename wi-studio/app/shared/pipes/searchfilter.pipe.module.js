"use strict";var __decorate=this&&this.__decorate||function(e,r,t,o){var i,c=arguments.length,l=c<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,r,t,o);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(l=(c<3?i(l):c>3?i(r,t,l):i(r,t))||l);return c>3&&l&&Object.defineProperty(r,t,l),l};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),searchfilter_pipe_1=require("./searchfilter.pipe"),sortby_pipe_1=require("./sortby.pipe"),SearchFilterModule=SearchFilterModule_1=function(){function e(){}return e.forRoot=function(){return{ngModule:SearchFilterModule_1,providers:[]}},e}();SearchFilterModule=SearchFilterModule_1=__decorate([core_1.NgModule({imports:[],declarations:[searchfilter_pipe_1.SearchFilterPipe,sortby_pipe_1.SortPipe],exports:[searchfilter_pipe_1.SearchFilterPipe,sortby_pipe_1.SortPipe]})],SearchFilterModule),exports.SearchFilterModule=SearchFilterModule;var SearchFilterModule_1;