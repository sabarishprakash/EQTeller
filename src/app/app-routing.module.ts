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
import { CustomerComponent } from './actions/home/customer/customer.component';
import { AccountsComponent } from './actions/home/accounts/accounts.component';
import { EnquiryComponent } from './actions/home/enquiry/enquiry.component';
import { DealsComponent } from './actions/home/deals/deals.component';
import { CardsComponent } from './actions/home/cards/cards.component';
import { ForexComponent } from './actions/home/forex/forex.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'actions', component: ActionsComponent, children: [
        {path: 'home', component: HomeComponent, children: [
            {path: 'customer', component: CustomerComponent},
            {path: 'accounts', component: AccountsComponent},
            {path: 'enquiry', component: EnquiryComponent},
            {path: 'deals', component: DealsComponent},
            {path: 'cards', component: CardsComponent},
            {path: 'forex', component: ForexComponent}    
        ]},
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