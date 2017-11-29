import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {MaterialComponentsModule} from './material-components/material-components.module';
import {ContactLocalStorageService} from './contact/services/contact-local-storage.service';
import {AddContactComponent} from './contact/add-contact/add-contact.component';
import {RouterModule, Routes} from '@angular/router';
import {ContactAddressPipe} from './contact/pipes/contact-address.pipe';
import {FormsModule} from '@angular/forms';
import {ContactDetailsComponent} from './contact/contact-details/contact-details.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactService} from './contact/services/contact.service';
import {ContactHttpService} from './contact/services/contact-http.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent
  },
  {
    path: 'add-contact',
    component: AddContactComponent
  }, {
    path: 'contacts',
    component: ContactListComponent
  }, {
    path: 'contact-details/:id',
    component: ContactDetailsComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    AddContactComponent,
    ContactAddressPipe,
    ContactDetailsComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    FlexLayoutModule

  ],
  providers: [
    ContactLocalStorageService, ContactService, ContactHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
