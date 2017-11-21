import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactHttpService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:52262/api/contacts';
  }

  get() {
    this.http.get(this.url).subscribe((data) =>
      console.log(data));
  }
}
