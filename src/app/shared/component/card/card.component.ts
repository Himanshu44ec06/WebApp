import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
    selector: 'pm-card',
    templateUrl  :  './card.component.html'
})
export class CardComponent implements OnInit {

// tslint:disable-next-line: no-output-rename
    @Output('loaded') loadedEmitter = new EventEmitter();
// tslint:disable-next-line: no-input-rename
    @Input('card-class')  cardClass;

    ngOnInit() {
        this.loadedEmitter.next();
    }

}
