"use strict";var __decorate=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,c=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(a<3?o(c):a>3?o(t,r,c):o(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),icons_service_1=require("./service/icons.service"),BreadcrumbsComponent=function(){function e(e){this.iconsService=e}return e.prototype.ngOnChanges=function(e){e.inputNode&&this.inputNode&&(this.branch=this.extractBranch(this.inputNode))},e.prototype.getIcon=function(e){return this.iconsService.getIcon(e)},e.prototype.extractBranch=function(e){for(var t=[e];e.parent;)e=e.parent,t.unshift(e);return t},e}();__decorate([core_1.Input(),__metadata("design:type",Object)],BreadcrumbsComponent.prototype,"inputNode",void 0),BreadcrumbsComponent=__decorate([core_1.Component({moduleId:module.id,selector:"tibco-mapper-breadcrumbs",styles:[".breadcrumbs { margin: 0; padding: 0; list-style: none;  }\n            .breadcrumb { display: inline-block; padding: 0; margin: 0; }\n            .breadcrumb__icon { margin-right: 8px; }\n            .breadcrumb__separator { color: #dedede; margin-right: 12px; margin-left: 12px; }\n            .breadcrumb:last-child .breadcrumb__separator { display: none }\n    "],template:'\n    <ul class="breadcrumbs">\n        <li class="breadcrumb" *ngFor="let node of branch">\n            <svg class="tibco-mapper-icon breadcrumb__icon">\n                <use [tibcoMapperInlineHref]="getIcon(node)"></use>\n            </svg>\n            {{ node.label }}\n            <span class="breadcrumb__separator fa fa-angle-right"></span>\n        </li>\n    </ul>\n   '}),__metadata("design:paramtypes",[icons_service_1.IconsService])],BreadcrumbsComponent),exports.BreadcrumbsComponent=BreadcrumbsComponent;