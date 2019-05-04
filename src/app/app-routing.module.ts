import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { PageNotFoundComponent } from './error';
import { ShellComponent, WelcomeComponent } from './home';

const appRoutes: Routes = [
    {
        path : '',
        component :  ShellComponent,
        children : [
             { path : 'welcome', component : WelcomeComponent },
             {
                path: 'user',
                loadChildren: './user/user.module#UserModule'
            },
             { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [RouterModule]
})
export  class  AppRoutingModule {

}
