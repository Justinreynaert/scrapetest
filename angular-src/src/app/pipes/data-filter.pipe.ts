import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(characters: any, term: any, searchValue:any): any {
    //check if search term is undefined

    if (term === undefined) return characters;
    // return updated characters
    return characters.filter((character) => {

      switch(searchValue) {
        case "info.class":
          return character.info.class.toLowerCase().includes(term.toLowerCase())

        case "name":
          return character.name.toLowerCase().includes(term.toLowerCase())

        case "realm":
          return character.info.realm.toLowerCase().includes(term.toLowerCase())

        case "info.style":
          return character.info.style.toLowerCase().includes(term.toLowerCase())

        case "info.guild":
          return character.info.guild.toLowerCase().includes(term.toLowerCase())

        case "btag":
          return character.btag.toLowerCase().includes(term.toLowerCase())

        case "lastupdated":
          return character.lastupdated.toLowerCase().includes(term.toLowerCase())


        default:
          return character.name.toLowerCase().includes(term.toLowerCase())
      }


    })
  }

}
