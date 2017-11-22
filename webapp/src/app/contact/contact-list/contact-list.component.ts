import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactLocalStorageService} from '../services/contact-local-storage.service';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contacts = [];
  }

  ngOnInit() {
    // this.contacts = this.contactService.findContacts();
    this.contactService.findContacts().subscribe((contacts: Contact []) => {
      this.contacts = contacts;
    });
  }

}
