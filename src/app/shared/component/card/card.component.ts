import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
    selector: 'pm-card',
    templateUrl  :  './card.component.html'
})
export class CardComponent implements OnInit {

    @Output('loaded') loadedEmitter= new EventEmitter();

    ngOnInit() {
        this.loadedEmitter.next();
    }

}
