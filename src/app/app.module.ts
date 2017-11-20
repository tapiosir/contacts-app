import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {MaterialComponentsModule} from './material-components/material-components.module';
import {ContactService} from './contact/services/contact.service';
import {AddContactComponent} from './contact/add-contact/add-contact.component';
import {RouterModule, Routes} from '@angular/router';
import {ContactAddressPipe} from './contact/pipes/contact-address.pipe';
import {FormsModule} from '@angular/forms';
import {ContactDetailsComponent} from './contact/contact-details/contact-details.component';
import {FlexLayoutModule} from '@angular/flex-layout';

const routes: Routes = [
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
    BrowserModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    FlexLayoutModule

  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
