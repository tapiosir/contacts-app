import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Contact} from './contact/contact';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {

  }



  showContactList() {
    this.router.navigate(['']);
  }

  showAddContact() {
    this.router.navigate(['/add-contact']);
  }
}
