import { Component, HostListener, Output, EventEmitter, OnInit } from '@angular/core';
import { GlobalVariable } from '../../global';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
// tslint:disable-next-line: component-selector
    selector : 'create-user',
    templateUrl : './createUser.component.html'
})
export class  CreateUserComponent  implements OnInit  {

    language = GlobalVariable.LanguageResourse;
    form: FormGroup;
    disabledSubmitButton = true;
    optionsSelect: Array<any>;

// tslint:disable-next-line: no-output-rename
    @Output('cancel') cancelEmitter = new EventEmitter();

    @HostListener('input') oninput() {

        if (this.form.valid) {
          this.disabledSubmitButton = false;
        }
      }

      ngOnInit(){
        this.optionsSelect = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
            ];
      }

      constructor(private fb: FormBuilder) {
          this.form =  fb.group({
              Username : ['', Validators.required],
              Email : ['', Validators.compose([Validators.required, Validators.email])],
              Roles : ['', Validators.required]
          });
      }

    cancel(): void {
        this.cancelEmitter.next();
    }

}
