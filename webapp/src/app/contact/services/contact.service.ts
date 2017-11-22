import {Injectable} from '@angular/core';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs/Observable';
import *as _ from 'lodash';
import 'rxjs/add/observable/of';


@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor(private localStorage: ContactLocalStorageService, private contactHttpService: ContactHttpService) {
    this.contacts = [];
  }

  findContacts(): Observable<Contact[]> {
    // this.contactHttpService.get();
    return this.contactHttpService.get();
    // return this.localStorage.findContacts();
  }


  findContactById(id: number): Observable<Contact> {

    return this.contactHttpService.getById(id);
   // const cached = _.find(this.contacts, {'id': id});
   // if (cached) {
    //  return Observable.of(cached);
   // }
   // else {
    //  return this.contactHttpService.getById(id).map((contact) => {
     //   this.contacts.push(contact);
       // return contact;
      // });
   // }

    // return this.localStorage.findContactsById(id);
  }

  addContact(contact: Contact) {
    return this.localStorage.addContact(contact);
  }


}
