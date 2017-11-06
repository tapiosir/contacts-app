import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(1, '22', '33', '44', '55', '66'),
      new Contact(2, 'etunimi', 'sukunimi', '21356', 'kujalla', 'kaupungi')
    ];
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
