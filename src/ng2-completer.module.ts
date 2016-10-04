import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CompleterCmp } from "./components/ng2-completer/completer-cmp";
import { CompleterListItemCmp } from "./components/ng2-completer/completer-list-item-cmp";
import { CompleterService } from "./components/ng2-completer/services/completer-service";
import { LocalDataFactoryProvider, RemoteDataFactoryProvider } from "./components/ng2-completer/services/completer-data-factory";
import { CtrCompleter } from "./directives/ctr-completer";
import { CtrDropdown } from "./directives/ctr-dropdown";
import { CtrInput } from "./directives/ctr-input";
import { CtrList } from "./directives/ctr-list";
import { CtrRow } from "./directives/ctr-row";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        CompleterListItemCmp,
        CtrCompleter,
        CtrDropdown,
        CtrInput,
        CtrList,
        CtrRow,
        CompleterCmp
    ],
    providers: [
        CompleterService,
        LocalDataFactoryProvider,
        RemoteDataFactoryProvider
    ],
    exports: [
        CompleterCmp,
        CompleterListItemCmp,
        CtrCompleter,
        CtrDropdown,
        CtrInput,
        CtrList,
        CtrRow
    ]
})
export class Ng2CompleterModule {}