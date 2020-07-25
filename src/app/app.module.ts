import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './actions/menu/menu.component';
import { PmcComponent } from './actions/pmc/pmc.component';
import { ListItemHighlightDirective } from './Directives/list-item-highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { ActionsComponent } from './actions/actions.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './actions/home/home.component';
import { AsiComponent } from './actions/asi/asi.component';
import { AncComponent } from './actions/anc/anc.component';
import { OcaComponent } from './actions/oca/oca.component';
import { YctComponent } from './actions/yct/yct.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AbComponent } from './actions/ab/ab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PmcComponent,
    ListItemHighlightDirective,
    ActionsComponent,
    HomeComponent,
    AsiComponent,
    AncComponent,
    OcaComponent,
    YctComponent,
    LoginComponent,
    FooterComponent,
    AbComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
