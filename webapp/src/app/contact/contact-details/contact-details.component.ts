import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactLocalStorageService} from '../services/contact-local-storage.service';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  id: number;
  details: any;

  contact: Contact;


  constructor(private router: Router, private contactService: ContactService, private route: ActivatedRoute, private contactLocalService: ContactLocalStorageService) {
  this.contact = new Contact;
  }

  showContactList() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.details = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    // this.contactLocalService.findContactsById(this.id);
    this.contactService.findContactById(this.id).subscribe((contact) => {
      this.contact = contact;
    });
  }

}
