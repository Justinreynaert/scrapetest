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

  filters = [
    {name: "name", display: "Name"},
    {name: "info.class", display: "Class"},
    {name: "info.realm", display: "Realm"},
    {name: "info.style", display:"Raiding Style"},
    {name: "info.guild", display:"Guild"},
    {name: "btag", display:"Battle Tag"},
    {name: "lastupdated", display:"Last update"},



  ];

  characters: Character;

  constructor(
      private dbService: DbService
  ) {

    dbService.getCharacters().subscribe(data => {
      this.characters = data;
    })

  }

  ngOnInit() {
  }

  addToList(id) {

    this.dbService.updateContact(id);

  }

  change() {
    console.log(this.characters.contact)
  }

}

interface Character {
  name: string;
  _id: number;
  dateupdated: number;
  info: {[key: string]: Info};
  contact: boolean;
}

interface Info {
  'class': string;
  guild: string;
  ilvl: number;
  realm: string;
  zone: string;
}
