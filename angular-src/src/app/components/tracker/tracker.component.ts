import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ArrayObservable } from "rxjs/observable/ArrayObservable";

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  providers: [DbService],
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  characters: Character;

  constructor(
      private dbService: DbService
  ) {

    dbService.getCharacters().subscribe(data => {
      this.characters = data;
      console.log(this.characters);
    })

  }

  ngOnInit() {
  }

}

interface Character {
  name: string;
  _id: number;
  dateupdated: number;
  info: {[key: string]: Info};
}

interface Info {
  'class': string;
  guild: string;
  ilvl: number;
  realm: string;
  zone: string;
}
