import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgWordCloudDirective} from './ag-wordcloud.directive';

export * from './ag-wordcloud.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AgWordCloudDirective
    ],
    exports: [
        AgWordCloudDirective
    ]
})
export class AgWordCloudModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AgWordCloudModule
        };
    }
}
