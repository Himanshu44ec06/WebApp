import { FAQ } from './FAQ';
import { Inclusions } from './Inclusions';
import { Exclusions } from './Exclusions';

export  class  Base  {

      Meta: object;
      FAQ: FAQ[];
      Inclusions: Inclusions[];
      Exclusions: Exclusions[];
      DisplayCode: string;
    constructor(){
           this.Meta = {};
           this.FAQ = [];
           this.Inclusions = [];
           this.Exclusions = [];
           this.DisplayCode = '';
    }

}
