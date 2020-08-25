import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { HomeComponent } from './actions/home/home.component';
import { PmcComponent } from './actions/api/pmc/pmc.component';
import { AsiComponent } from './actions/api/asi/asi.component';
import { YctComponent } from './actions/api/yct/yct.component';
import { AncComponent } from './actions/api/anc/anc.component';
import { OcaComponent } from './actions/api/oca/oca.component';
import { AbComponent } from './actions/api/ab/ab.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './actions/home/customer/customer.component';
import { AccountsComponent } from './actions/home/accounts/accounts.component';
import { EnquiryComponent } from './actions/home/enquiry/enquiry.component';
import { DealsComponent } from './actions/home/deals/deals.component';
import { CardsComponent } from './actions/home/cards/cards.component';
import { ForexComponent } from './actions/home/forex/forex.component';
import { MainComponent } from './actions/home/main/main.component';
import { ApiComponent } from './actions/api/api.component';
import { ActionsService } from './Services/actions.service';
import { AeComponent } from './actions/api/ae/ae.component';
import { AsComponent } from './actions/api/as/as.component';
import { CaaComponent } from './actions/api/caa/caa.component';
import { ItaComponent } from './actions/api/ita/ita.component';
import { GenericComponent } from './actions/api/generic/generic.component';

const actions = new ActionsService();
const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'actions', component: ActionsComponent, children: [
        {path: '', component: HomeComponent, children: [
            {path: '', component: MainComponent, pathMatch: 'full'},
            {path: 'customer', component: CustomerComponent},
            {path: 'accounts', component: AccountsComponent},
            {path: 'enquiry', component: EnquiryComponent},
            {path: 'deals', component: DealsComponent},
            {path: 'cards', component: CardsComponent},
            {path: 'forex', component: ForexComponent}    
        ]},
        {path: 'api', component: ApiComponent, children: [
            {path: actions.getLink(0), component: PmcComponent, data: {heading: actions.getHeading(0)}},
            {path: actions.getLink(1), component: AsiComponent, data: {heading: actions.getHeading(1)}},
            {path: actions.getLink(2), component: YctComponent, data: {heading: actions.getHeading(2)}},
            {path: actions.getLink(3), component: AncComponent, data: {heading: actions.getHeading(3)}},
            {path: actions.getLink(4), component: OcaComponent, data: {heading: actions.getHeading(4)}},
            {path: actions.getLink(5), component: AbComponent, data: {heading: actions.getHeading(5)}},
            {path: actions.getLink(6), component: AeComponent, data: {heading: actions.getHeading(6)}},
            {path: actions.getLink(7), component: AsComponent, data: {heading: actions.getHeading(7)}},
            {path: actions.getLink(8), component: CaaComponent, data: {heading: actions.getHeading(8)}},
            {path: actions.getLink(9), component: ItaComponent, data: {heading: actions.getHeading(9)}},
            {path: 'generic', component: GenericComponent}
        ]},
    ]},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{enableTracing: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}