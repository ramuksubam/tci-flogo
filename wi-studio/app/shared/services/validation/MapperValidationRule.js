"use strict";var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var constants_1=require("./../../../../common/constants"),rxjs_extensions_1=require("../../../../common/rxjs-extensions"),validation_1=require("../../../../common/models/validation"),validationrule_1=require("../../../../common/models/vrules/validationrule"),validation_2=require("../../../../common/models/validation"),constants_2=require("../../../../common/constants"),contribution_observable_1=require("../../../../common/models/contribution_observable"),lodash=require("lodash"),MapperHook=function(){function t(t,e,n){this.appContext=t,this.flowContext=e,this.activityContext=n}return t.prototype.hook=function(t){var e=this;rxjs_extensions_1.Observable.from(t.getErrors()).map(function(t){var n=new Map;n.set("APPNAME",e.appContext.applicationName),n.set("APPID",e.appContext.id),n.set("FLOWNAME",e.flowContext.name),n.set("FLOWID",e.flowContext._id),n.set("ITEMNAME",e.activityContext.activityTitle),n.set("ITEMID",e.activityContext.id),t.setContext(n)}).subscribe(function(t){})},t}();exports.MapperHook=MapperHook;var MapperValidationRule=function(t){function e(e,n,o){var i=t.call(this)||this;return i.inputProvider=e,i.outputProvider=n,i.tciService=o,i.inputProvider=e,i}return __extends(e,t),e.newValidationRule=function(t,n,o){return new e(t,n,o)},e.prototype.getContribHook=function(t){return null},e.prototype.canValidate=function(t){return!0},e.prototype.getContexts=function(t){var e=t.getElements(constants_2.EnumValidationContext.APPLICATION),n=[];for(var o in e.flows){var i=e.flows[o];for(var r in e.flows[o].items)e.flows[o].items[r].taskType!==constants_2.TASK_TYPE.TASK&&e.flows[o].items[r].taskType!==constants_2.TASK_TYPE.TASK_BRANCH||(n.push(lodash.cloneDeep(t)),n[n.length-1].addElement(constants_2.EnumValidationContext.FLOW,i),(a=lodash.cloneDeep(e.flows[o].items[r])).inputs=[],a.inputs=a.settings.concat(a.inputs),n[n.length-1].addElement(constants_2.EnumValidationContext.ACTIVITY,lodash.cloneDeep(a)));for(var s in i.errorHandler)for(var r in e.flows[o].errorHandler[s].items)if(e.flows[o].errorHandler[s].items[r].type===constants_2.TASK_TYPE.TASK||e.flows[o].errorHandler[s].items[r].type===constants_2.TASK_TYPE.TASK_BRANCH){n.push(lodash.cloneDeep(t)),n[n.length-1].addElement(constants_2.EnumValidationContext.FLOW,i);var a=lodash.cloneDeep(e.flows[o].errorHandler[s].items[r]);a.inputs=[],a.inputs=a.settings.concat(a.attributes.inputs),n[n.length-1].addElement(constants_2.EnumValidationContext.ACTIVITY,lodash.cloneDeep(a))}}return n},e.prototype.start=function(t,e){for(var n=this.getContexts(t),o=0;o<n.length;o++){var i=n[o];if(this.canValidate(i)){var r=new MapperHook(i.getElements(constants_2.EnumValidationContext.APPLICATION),i.getElements(constants_2.EnumValidationContext.FLOW),i.getElements(constants_2.EnumValidationContext.ACTIVITY));this.validationObservables.push(contribution_observable_1.ContributionObservable.eval(this,this.validate,r,i))}}return this.validationObservables},e.prototype.getNode=function(t,e){for(var n in t.paths.nodes)if(t.paths.nodes[n].taskID===e)return t.paths.nodes[n];for(var o in t.errorHandler)for(var n in t.errorHandler[o].paths.nodes)if(t.errorHandler[o].paths.nodes[n].taskID===e)return t.errorHandler[o].paths.nodes[n]},e.prototype.validate=function(t){var e=this;return rxjs_extensions_1.Observable.create(function(n){var o=validation_2.ValidationResult.newValidationResult(),i=t.getElements(constants_2.EnumValidationContext.ACTIVITY),r={};r.app=t.getElements(constants_2.EnumValidationContext.APPLICATION),r.flow=t.getElements(constants_2.EnumValidationContext.FLOW),r.node=e.getNode(r.flow,i.id);var s=e.inputProvider.getSchema(r),a=e.outputProvider.getSchema(r);if(i.inputMappings.mappings)for(var p in i.inputMappings.mappings){var l=p.split("."),d=lodash.cloneDeep(s),c=void 0;for(c=0;c<l.length;c++){if(!d.properties[l[c]]){var u={flowId:r.flow._id,activityId:i.id,mappingsPath:[p]};e.tciService.AppMessaging.emit(constants_1.APP_MESSAGING_VALUES.UPDATE_MAPPING,u);break}d=d.properties[l[c]]}if(c===l.length)if(i.inputMappings.mappings[p].parsedExpressionDetails)for(var m=i.inputMappings.mappings[p].parsedExpressionDetails.memberReferences,f=0;f<m.length;f++){var v=m[f].split("."),h=lodash.cloneDeep(a);for(var _ in v){var g=v[_];if(h.properties&&h.properties[g])h=h.properties[g];else{if(!h.items||!h.items[g]){o.errors.push(validation_1.ValidationError.newError("500","The mapping expression for "+p+" is not correct"));break}h=h.items[g]}}}else o.errors.push(validation_1.ValidationError.newError("500","The mapping expression for "+p+" is not correct"));if(c===l.length&&!lodash.isEmpty(i.inputMappings.mappings[p].mappings)){var E=[p];o=e.handleArrayMapping(i.inputMappings.mappings[p].mappings,E,d.items,t,a,o)}}n.next(o),n.complete()})},e.prototype.handleArrayMapping=function(t,e,n,o,i,r){var s=lodash.cloneDeep(n);for(var a in t){n=s;var p=a.replace("$.","").split("."),l=void 0;for(l=0;l<p.length;l++){if(!n.properties[p[l]]){var d={flowId:o.getElements(constants_2.EnumValidationContext.FLOW)._id,activityId:o.getElements(constants_2.EnumValidationContext.ACTIVITY).id,mappingsPath:e};d.mappingsPath.push(a),this.tciService.AppMessaging.emit(constants_1.APP_MESSAGING_VALUES.UPDATE_MAPPING,d);break}n=n.properties[p[l]]}if(l===p.length)if(t[a].parsedExpressionDetails)for(var c=t[a].parsedExpressionDetails.memberReferences,u=0;u<c.length;u++){var m=c[u].split("."),f=lodash.cloneDeep(i);for(var v in m){var h=m[v];if(f.properties&&f.properties[h])f=f.properties[h];else if(f.items&&f.items.properties&&f.items.properties[h])f=f.items.properties[h];else{if(!(f.items&&f.items.items&&f.items.items[h])){r.errors.push(validation_1.ValidationError.newError("500","The mapping expression for "+a+" is not correct"));break}f=f.items.items[h]}}}else r.errors.push(validation_1.ValidationError.newError("500","The mapping expression for "+a+" is not correct"));if(l===p.length&&!lodash.isEmpty(t[a].mappings)){var _=e;_.push(a),r=this.handleArrayMapping(t[a].mappings,_,n.items,o,i,r)}}return r},e}(validationrule_1.AbstractValidationRule);exports.MapperValidationRule=MapperValidationRule;