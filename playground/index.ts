/**
 * This is only for local test
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Component} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AgWordCloudModule} from '../dist/index';
import {AgWordCloudData} from "../dist/ag-wordcloud.directive";


@Component({
    selector: 'app',
    template: `
        <div AgWordCloud [wordData]="wordData"></div>`
})
class AppComponent {

    wordData: Array<AgWordCloudData> = [
        {size: 500, text: 'vitae'},
        {size: 301, text: 'amet'},
        {size: 123, text: 'sit'},
        {size: 321, text: 'eget'},
        {size: 231, text: 'quis'},
        {size: 123, text: 'sem'},
        {size: 346, text: 'massa'},
        {size: 107, text: 'nec'},
        {size: 436, text: 'sed'},
        {size: 731, text: 'semper'},
        {size: 80, text: 'scelerisque'},
        {size: 96, text: 'egestas'},
        {size: 531, text: 'libero'},
        {size: 109, text: 'nisl'},
        {size: 972, text: 'odio'},
        {size: 213, text: 'tincidunt'},
        {size: 294, text: 'vulputate'},
        {size: 472, text: 'venenatis'},
        {size: 297, text: 'malesuada'},
        {size: 456, text: 'finibus'},
        {size: 123, text: 'tempor'},
        {size: 376, text: 'tortor'},
        {size: 93, text: 'congue'},
        {size: 123, text: 'possit'},
    ];
}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, AgWordCloudModule.forRoot()]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
