import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './actions/menu/menu.component';
import { PmcComponent } from './actions/api/pmc/pmc.component';
import { ListItemHighlightDirective } from './Directives/list-item-highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { ActionsComponent } from './actions/actions.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './actions/home/home.component';
import { AsiComponent } from './actions/api/asi/asi.component';
import { AncComponent } from './actions/api/anc/anc.component';
import { OcaComponent } from './actions/api/oca/oca.component';
import { YctComponent } from './actions/api/yct/yct.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AbComponent } from './actions/api/ab/ab.component';
import { SimpleComponent } from './overlays/simple/simple.component';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomerComponent } from './actions/home/customer/customer.component';
import { AccountsComponent } from './actions/home/accounts/accounts.component';
import { DealsComponent } from './actions/home/deals/deals.component';
import { CardsComponent } from './actions/home/cards/cards.component';
import { ForexComponent } from './actions/home/forex/forex.component';
import { EnquiryComponent } from './actions/home/enquiry/enquiry.component';
import { MainComponent } from './actions/home/main/main.component';
import { ApiComponent } from './actions/api/api.component';
import { AeComponent } from './actions/api/ae/ae.component';
import { AsComponent } from './actions/api/as/as.component';
import { CaaComponent } from './actions/api/caa/caa.component';
import { ItaComponent } from './actions/api/ita/ita.component';
import { GenericComponent } from './actions/api/generic/generic.component';
import { DynamicFormComponent } from './actions/api/generic/dynamic-form/dynamic-form.component';

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
    SimpleComponent,
    CustomerComponent,
    AccountsComponent,
    DealsComponent,
    CardsComponent,
    ForexComponent,
    EnquiryComponent,
    MainComponent,
    ApiComponent,
    AeComponent,
    AsComponent,
    CaaComponent,
    ItaComponent,
    GenericComponent,
    DynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [],
  entryComponents: [SimpleComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
