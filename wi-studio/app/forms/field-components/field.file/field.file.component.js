"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),__decorate=this&&this.__decorate||function(e,t,n,o){var i,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(l=(a<3?i(l):a>3?i(t,n,l):i(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var field_base_component_1=require("../field.base/field.base.component"),core_1=require("@angular/core"),field_file_model_1=require("../../field-models/field.file.model"),canvas_service_1=require("../../../canvas/canvas.service"),lodash=require("lodash"),FormFieldFileComponent=function(e){function t(t){var n=e.call(this)||this;return n.canvasService=t,n.valueChanged=new core_1.EventEmitter,n}return __extends(t,e),t.prototype.ngOnInit=function(){this.field.value&&this.field.value.filename&&(this.file=this.field.value.filename)},t.prototype.changed=function(e){var t=e.target.files;if(t&&t.length>0){var n=lodash.first(t);this.file=n.name,this.getBase64(n)}else this.field.value=void 0,this.emitValue()},t.prototype.getBase64=function(e){var t=this,n=new FileReader;n.readAsDataURL(e),n.onload=function(){var o={filename:e.name,content:n.result};t.field.value=o,t.emitValue()},n.onerror=function(n){var o={filename:e.name,content:null};t.field.value=o,t.emitValue()}},t.prototype.getExtensions=function(){return lodash.get(this.field.taskField,"display.fileExtensions",[]).join()},t.prototype.emitValue=function(){this.valueChanged.emit(this.field.value)},t}(field_base_component_1.FormFieldBaseComponent);__decorate([core_1.Input(),__metadata("design:type",field_file_model_1.FieldFile)],FormFieldFileComponent.prototype,"field",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],FormFieldFileComponent.prototype,"valueChanged",void 0),FormFieldFileComponent=__decorate([core_1.Component({selector:"input-field",moduleId:module.id,template:'\n    <div class="input-group">\n      <label class="input-group-btn">\n        <span class="btn btn-primary">\n          Browse&hellip; <input type="file" style="display: none;" (change)="changed($event)" [accept]="getExtensions()">\n        </span>\n      </label>\n      <input type="text" class="form-control" readonly [(ngModel)]="file">\n    </div>\n  '}),__metadata("design:paramtypes",[canvas_service_1.CanvasService])],FormFieldFileComponent),exports.FormFieldFileComponent=FormFieldFileComponent;