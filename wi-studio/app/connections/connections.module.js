"use strict";var __decorate=this&&this.__decorate||function(n,o,e,t){var c,i=arguments.length,r=i<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(n,o,e,t);else for(var d=n.length-1;d>=0;d--)(c=n[d])&&(r=(i<3?c(r):i>3?c(o,e,r):c(o,e))||r);return i>3&&r&&Object.defineProperty(o,e,r),r};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),http_1=require("@angular/http"),connections_list_component_1=require("./connections-list.component"),salesforce_component_1=require("./salesforce.component"),connections_add_connection_component_1=require("./connections.add-connection.component"),router_1=require("@angular/router"),ng2_bootstrap_1=require("ng2-bootstrap"),connections_addEdit_connectionDetails_component_1=require("./connections.addEdit-connectionDetails.component"),connections_connectionsdetails_service_1=require("./connections.connectionsdetails.service"),index_1=require("./form-builder/fields/index"),form_builder_component_1=require("./form-builder/components/form-builder.component"),ConnectionsModule=function(){function n(){}return n.prototype.ngDoBootstrap=function(){},n}();ConnectionsModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,http_1.HttpModule,router_1.RouterModule.forChild([{path:"connections",component:connections_list_component_1.ConnectionsListComponent},{path:"connectiondetails",component:connections_addEdit_connectionDetails_component_1.AddEditConnectionDetailsComponent}]),ng2_bootstrap_1.ModalModule.forRoot(),router_1.RouterModule.forChild([{path:"connections",component:connections_list_component_1.ConnectionsListComponent},{path:"connectiondetails",component:connections_addEdit_connectionDetails_component_1.AddEditConnectionDetailsComponent}])],exports:[salesforce_component_1.SalesforceComponent,connections_add_connection_component_1.AddNewConnectionComponent,connections_addEdit_connectionDetails_component_1.AddEditConnectionDetailsComponent],declarations:[salesforce_component_1.SalesforceComponent,connections_add_connection_component_1.AddNewConnectionComponent,connections_addEdit_connectionDetails_component_1.AddEditConnectionDetailsComponent,index_1.ConnectionsFormBuilderFieldsBase,index_1.ConnectionsFormBuilderFieldsListBox,index_1.ConnectionsFormBuilderFieldsNumber,index_1.ConnectionsFormBuilderFieldsObject,index_1.ConnectionsFormBuilderFieldsRadio,index_1.ConnectionsFormBuilderFieldsTextArea,index_1.ConnectionsFormBuilderFieldsTextBox,form_builder_component_1.ConnectorsFormBuilderComponent],entryComponents:[connections_add_connection_component_1.AddNewConnectionComponent,connections_list_component_1.ConnectionsListComponent,connections_addEdit_connectionDetails_component_1.AddEditConnectionDetailsComponent],providers:[connections_connectionsdetails_service_1.ConnectionsFieldDetailService],bootstrap:[]})],ConnectionsModule),exports.ConnectionsModule=ConnectionsModule;