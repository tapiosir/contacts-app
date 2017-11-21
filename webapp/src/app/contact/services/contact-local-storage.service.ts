import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import *as _ from'lodash';

@Injectable()
export class ContactLocalStorageService {

  private contacts: Contact[];

  private localStorageKey: string;

  constructor() {

    this.localStorageKey = 'ca-contacts';

    /*
    this.contacts = [
      new Contact(1, 'es', 'jonne', '44', '55', '66'),
      new Contact(2, 'etunimi', 'sukunimi', '21356', 'kujalla', 'kaupungi')
    ];
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    */
    this.initializeLocalStorage();


  }

  addContact(contact: Contact) {

    const contacts = this.readLocalStorageContacts();
    console.log(contacts);
    const ids = contacts.map(c => c.id);
    console.log(ids);
    const latestId = Math.max(...ids);
    console.log(latestId);
    contact.id = latestId + 1;

    contacts.push(contact);
    this.writeLocalStorageContacts(contacts);

    // localStorage.setItem('contacts', JSON.stringify(this.contacts));

  }

  // Add local storage handling methods
  public findContacts(): Contact[] {
    return this.readLocalStorageContacts();
  }
  public findContactsById(id: number): Contact {
    return _.find(this.findContacts(), {id: id});

  }

  private initializeLocalStorage() {
    if (!localStorage.getItem(this.localStorageKey)) {
      // Create default contacts array for development time purposes
      const contacts = [
        new Contact(1, 'es', 'jonne', '44', '55', '66'),
        new Contact(2, 'etunimi', 'sukunimi', '21356', 'kujalla', 'kaupungi')
      ];
      localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
    }
  }

  private readLocalStorageContacts(): Contact[] {
    const data = localStorage.getItem(this.localStorageKey);
    return JSON.parse(data) as Contact[];
  }

  private writeLocalStorageContacts(contacts) {
    const data = JSON.stringify(contacts);
    localStorage.setItem(this.localStorageKey, data);
  }
}
