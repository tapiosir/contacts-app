import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ContactLocalStorageService} from '../services/contact-local-storage.service';
import {Contact} from '../contact';

@Component({
  selector: 'ca-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {


  contact: Contact;

  constructor(private router: Router, private contactService: ContactLocalStorageService) {


  }

  showContactList() {
    this.router.navigate(['']);
  }

  addContact(): void {
    this.contactService.addContact(this.contact);

  }

  ngOnInit() {
    this.contact = new Contact;
  }

}
