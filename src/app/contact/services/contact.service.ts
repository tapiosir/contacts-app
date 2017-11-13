import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(1, 'es', 'jonne', '44', '55', '66'),
      new Contact(2, 'etunimi', 'sukunimi', '21356', 'kujalla', 'kaupungi')
    ];
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
