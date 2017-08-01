"use strict";var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var constants_1=require("../../../../common/constants"),rxjs_extensions_1=require("../../../../common/rxjs-extensions"),validation_1=require("../../../../common/models/validation"),validationrule_1=require("../../../../common/models/vrules/validationrule"),validation_2=require("../../../../common/models/validation"),constants_2=require("../../../../common/constants"),contribution_observable_1=require("../../../../common/models/contribution_observable"),lodash=require("lodash"),NodeHook=function(){function t(t,n,e){this.appContext=t,this.flowContext=n,this.nodeContext=e}return t.prototype.hook=function(t){var n=this;rxjs_extensions_1.Observable.from(t.getErrors()).map(function(t){var e=new Map;e.set("APPNAME",n.appContext.applicationName),e.set("APPID",n.appContext.id),e.set("FLOWNAME",n.flowContext.name),e.set("FLOWID",n.flowContext._id),e.set("NODEID",n.nodeContext.id),t.setContext(e)}).subscribe(function(t){})},t}();exports.NodeHook=NodeHook;var NodeValidationRule=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return __extends(n,t),n.newValidationRule=function(){return new n},n.prototype.getContribHook=function(t){return null},n.prototype.canValidate=function(t){return!0},n.prototype.getContexts=function(t){var n=t.getElements(constants_2.EnumValidationContext.APPLICATION),e=[];for(var o in n.flows){var a=n.flows[o];this.getFlowContext(a,a,t).map(function(t){return e.push(t)});for(var r in a.errorHandler)this.getFlowContext(a,a.errorHandler[r],t).map(function(t){return e.push(t)})}return e},n.prototype.start=function(t,n){for(var e=this.getContexts(t),o=0;o<e.length;o++){var a=e[o];if(this.canValidate(a)){var r=new NodeHook(a.getElements(constants_2.EnumValidationContext.APPLICATION),a.getElements(constants_2.EnumValidationContext.FLOW),a.getElements(constants_2.EnumValidationContext.NODE));this.validationObservables.push(contribution_observable_1.ContributionObservable.eval(this,this.validate,r,a))}}return this.validationObservables},n.prototype.validate=function(t){return rxjs_extensions_1.Observable.create(function(n){var e=validation_2.ValidationResult.newValidationResult(),o=t.getElements(constants_2.EnumValidationContext.FLOW),a=t.getElements(constants_2.EnumValidationContext.FLOW_IS_MAIN),r=t.getElements(constants_2.EnumValidationContext.NODE);if(""===r.taskID||r.type===constants_1.FLOW_DIAGRAM_NODE_TYPE.NODE_ADD){var i=a?"flow ":"error handler of flow ";e.setValid(!1),e.errors.push(validation_1.ValidationError.newError("500","Error: Empty space among activities in "+i+o.name))}n.next(e),n.complete()})},n.prototype.getFlowContext=function(t,n,e){var o=[];for(var a in n.paths.nodes)if(n.paths.nodes[a].type===constants_1.FLOW_DIAGRAM_NODE_TYPE.NODE_ADD){var r=lodash.cloneDeep(e);r.addElement(constants_2.EnumValidationContext.FLOW,t),r.addElement(constants_2.EnumValidationContext.NODE,lodash.cloneDeep(n.paths.nodes[a])),r.addElement(constants_2.EnumValidationContext.FLOW_IS_MAIN,t===n),o.push(r)}return o},n}(validationrule_1.AbstractValidationRule);exports.NodeValidationRule=NodeValidationRule;