import { Component,Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector : 'pm-modal',
    templateUrl : './modalpopup.component.html'
})

export class  ModalPopupComponent  implements  OnInit {


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


    @Output('closeAction') closeAction = new EventEmitter();
    @Output('loaded') loadedEmitter= new EventEmitter();

    cancelAction(){
        this.showModal =  false;
        this.closeAction.next();
    }

    ngOnInit(){
        
        this.loadedEmitter.next();
    }
}