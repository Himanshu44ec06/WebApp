import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../global';
@Component({
// tslint:disable-next-line: component-selector
    selector: 'pm-nav',
    templateUrl: './nav.component.html'
})
export  class  NavComponent implements OnInit {
    language =  GlobalVariable.LanguageResourse;
    ngOnInit() {

    }
}
