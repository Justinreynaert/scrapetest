import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DbService {

  constructor(private http: Http) {
    console.log('db con')
  }

  getCharacters() {
    return this.http.get('http://localhost:5000/api/characters')
        .map(res => res.json());
  }

}
