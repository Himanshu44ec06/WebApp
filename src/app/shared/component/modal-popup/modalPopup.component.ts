import { Component,Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector : '<pm-modal></pm-modal>',
    templateUrl : './modalpopup.component.html'
})

export class  ModalPopupComponent  implements  OnInit {


    @Input('show-modal') showModal : boolean;
    @Input('title') title: string;
    @Input('sub-title') subTitle: string;
    @Input('cancel-label') cancelLabel: string;
    @Input('positive-label') positiveLabel: string;


    @Output() closeAction = new EventEmitter();
    @Output('loaded') loadedEmitter= new EventEmitter();

    cancelAction(){
        this.showModal =  false;
        this.closeAction.next();
    }

    ngOnInit(){
        
        this.loadedEmitter.next();
    }
}