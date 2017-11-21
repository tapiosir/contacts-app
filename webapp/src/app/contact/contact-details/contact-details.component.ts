import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactLocalStorageService} from '../services/contact-local-storage.service';

@Component({
  selector: 'ca-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  id: number;
  details: any;

  contact: Contact;


  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactLocalStorageService) {
  }

  showContactList() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    console.log(this.id);
    this.details = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.contact = this.contactService.findContactsById(this.id);
  }

}
