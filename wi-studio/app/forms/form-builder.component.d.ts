import { OnInit, SimpleChange, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ContribService } from "../contrib/wi-contrib.service";
import { AppModel } from "../../common/models/app/app.model";
import { Flow } from "../../common/models/app/flows";
import { FlowDiagramTask } from "../../common/models/app/task.model";
import { FieldsCollection } from "./providers/form.control";
import { IFormCategory } from "./providers/categories.provider";
import { FieldModel } from "./field-models/field.model";
import { IMapperContext } from "../../common/models/mapper/map-model";
import { FunctionsLookup } from "../mapper/service/map.function.lookup";
import { MapContextValidator } from "../mapper/service/map.context.validator";
import { ScopedOutputSchemaProvider } from "../mapper/service/map.output.schema.provider";
import { ContextInputSchemaProvider } from "../mapper/service/map.input.schema.provider";
import { MappingParser } from "../mapper/service/map.parser";
import { AutoCompleteProvider } from "../mapper/service/auto.complete.provider";
export interface FieldChangeData {
    field: FieldModel;
    value: any;
    category: IFormCategory;
}
export declare class FormBuilderComponent implements OnInit {
    private contribService;
    private functionsLookup;
    private contextValidator;
    private outputSchema;
    private inputSchema;
    private mappingpparser;
    private autoCompleteProvider;
    app: AppModel;
    flow: Flow;
    task: FlowDiagramTask;
    taskFieldValueChanged: EventEmitter<AppModel>;
    categories: IFormCategory[];
    fieldsInfo: {
        inputs: any;
        outputs: any;
        settings: any;
    };
    form: FormGroup;
    fields: FieldsCollection;
    category: IFormCategory;
    currentControls: FormGroup;
    context: IMapperContext;
    mapperContext: IMapperContext;
    private formGenerator;
    private componentReady;
    private contribValidated;
    private subject;
    private showInfo;
    constructor(contribService: ContribService, functionsLookup: FunctionsLookup, contextValidator: MapContextValidator, outputSchema: ScopedOutputSchemaProvider, inputSchema: ContextInputSchemaProvider, mappingpparser: MappingParser, autoCompleteProvider: AutoCompleteProvider);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    ngAfterViewInit(): void;
    private setControls();
    private setCategories();
    private initialize();
    private contribExec();
    private getProxy();
    private genContext();
    private selectCategory(category, noValidate?);
    private validateForm();
    private validateFormControl(field, fieldGroup);
    private isComponentReady();
    private emitValueChange();
    private mappingsChanged(data);
    private fieldValueChanged($event);
    private toggleInfo();
}
