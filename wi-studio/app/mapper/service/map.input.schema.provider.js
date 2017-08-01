"use strict";var __decorate=this&&this.__decorate||function(e,t,r,i){var o,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,r,n):o(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),constants_1=require("../../../common/constants"),schema=require("generate-schema"),contributionHelper_1=require("../../../common/util/contributionHelper"),ContextInputSchemaProvider=function(){function e(){}return e.prototype.getSchema=function(e){return this.inputSchema={type:"object",title:"Inputs",properties:{},required:[]},this.app=e.app,this.flow=e.flow,this.node=e.node,this.getItemFromNode(this.node),this.inputSchema},e.prototype.getItemFromNode=function(e){if(this.task=this.flow.items[e.taskID],!this.task)for(var t in this.flow.errorHandler)if(this.task=this.flow.errorHandler[t].items[e.taskID],this.task)break;this.task.type===constants_1.TASK_TYPE.TASK_BRANCH?(this.inputSchema.required.push("condition"),this.inputSchema.properties.condition={type:"boolean"}):this.inputSchema.properties=this.getInputSchema()},e.prototype.getInputSchema=function(){for(var e={},t=0,r=this.task.inputs;t<r.length;t++){var i=r[t];if(!i.display||!1!==i.display.visible&&!0===i.display.mappable)if(i.display&&!0===i.display.required&&this.inputSchema.required.push(i.name),"string"===i.type||"number"===i.type||"boolean"===i.type){var o={type:"",required:!1};o.type=i.type,e[i.name]=o}else if("complex_object"===i.type)if("texteditor"===i.display.type){if(i.value&&i.value.value)if(this.isJson(i.value.value))try{e[i.name]=schema.json(JSON.parse(i.value.value))}catch(e){}else try{e[i.name]=JSON.parse(i.value.value)}catch(e){}}else if("params"===i.display.type.toLowerCase()&&i.value&&i.value.value)try{var a=JSON.parse(i.value.value);e[i.name]=JSON.parse(contributionHelper_1.ContributionHelper.jsonToSchema(a))}catch(e){}}return e},e.prototype.isJson=function(e){try{e=JSON.parse(e)}catch(t){e={}}return!e.type||!e.properties&&!e.items},e}();ContextInputSchemaProvider=__decorate([core_1.Injectable()],ContextInputSchemaProvider),exports.ContextInputSchemaProvider=ContextInputSchemaProvider;