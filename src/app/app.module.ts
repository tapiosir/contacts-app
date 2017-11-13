import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list/contact-list-item/contact-list-item.component';
import {MaterialComponentsModule} from './material-components/material-components.module';
import {ContactService} from './contact/services/contact.service';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import {RouterModule, Routes} from '@angular/router';
import { ContactAddressPipe } from './contact/pipes/contact-address.pipe';

const routes: Routes = [
  {
    path: 'add-contact',
    component: AddContactComponent
  }, {
    path: 'contacts',
    component: ContactListComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    AddContactComponent,
    ContactAddressPipe
  ],
  imports: [
    BrowserModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
