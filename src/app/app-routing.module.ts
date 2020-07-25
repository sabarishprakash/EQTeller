import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { HomeComponent } from './actions/home/home.component';
import { PmcComponent } from './actions/pmc/pmc.component';
import { AsiComponent } from './actions/asi/asi.component';
import { YctComponent } from './actions/yct/yct.component';
import { AncComponent } from './actions/anc/anc.component';
import { OcaComponent } from './actions/oca/oca.component';
import { AbComponent } from './actions/ab/ab.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'actions', component: ActionsComponent, children: [
        {path: '', component: HomeComponent, pathMatch: 'full'},
        {path: '1', component: PmcComponent},
        {path: '2', component: AsiComponent},
        {path: '3', component: YctComponent},
        {path: '4', component: AncComponent},
        {path: '5', component: OcaComponent},
        {path: '6', component: AbComponent}
    ]},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}