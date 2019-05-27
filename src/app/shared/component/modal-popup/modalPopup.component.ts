import { Component,Input, Output, EventEmitter, OnInit } from "@angular/core";
import { GlobalVariable }  from '../../../global';

@Component({
    selector : 'pm-modal',
    templateUrl : './modalpopup.component.html'
})

export class  ModalPopupComponent  implements  OnInit {

    language = GlobalVariable.LanguageResourse;
    
// tslint:disable-next-line: no-input-rename
    @Input('show-modal') showModal : boolean;
// tslint:disable-next-line: no-input-rename
    @Input('title') title: string;
// tslint:disable-next-line: no-input-rename
    @Input('sub-title') subTitle: string;
// tslint:disable-next-line: no-input-rename
    @Input('cancel-label') cancelLabel: string;
// tslint:disable-next-line: no-input-rename
    @Input('positive-label') positiveLabel: string;


// tslint:disable-next-line: no-output-rename
    @Output('closeAction') closeAction = new EventEmitter();
    @Output('okAction') OkAction = new EventEmitter();

// tslint:disable-next-line: no-output-rename
    @Output('loaded') loadedEmitter = new EventEmitter();

    cancelAction() {
        this.showModal =  false;
        this.closeAction.next();
    }

    okAction() {
        this.showModal =  false;
        this.OkAction.next();
    }

    ngOnInit() {
        this.loadedEmitter.next();
    }
}