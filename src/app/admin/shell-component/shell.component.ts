import { Component } from '@angular/core';
import { GlobalVariable} from '../../global';

@Component({
    templateUrl : './shell.component.html',
    styles : [`
        .vertical-menu {
            width: 200px; /* Set a width if you like */
          }
          .vertical-menu a {
            background-color: #eee; /* Grey background color */
            color: black; /* Black text color */
            display: block; /* Make the links appear below each other */
            padding: 12px; /* Add some padding */
            text-decoration: none; /* Remove underline from links */
          }
          .vertical-menu a:hover {
            background-color: #ccc; /* Dark grey background on mouse-over */
          }
          .vertical-menu a.active {
            background-color: #4CAF50; /* Add a green color to the "active/current" link */
            color: white;
          }`
    ]
})
export class ShellComponent {

    language =  GlobalVariable.LanguageResourse;
}