import {Injectable} from '@angular/core';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';

@Injectable()
export class ContactService {

  constructor(private localStorage: ContactLocalStorageService, private http: ContactHttpService) {
  }

  findContacts() {
    this.http.get();
    return [];
    // return this.localStorage.findContacts();
  }


  findContactById(id: number) {
    return this.localStorage.findContactsById(id);
  }

  addContact(contact: Contact) {
    return this.localStorage.addContact(contact);
  }


}
