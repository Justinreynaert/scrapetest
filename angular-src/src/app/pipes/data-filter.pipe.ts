import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(characters: any, term: any): any {
    //check if search term is undefined
    if (term === undefined) return characters;
    // return updated characters
    return characters.filter((character) => {
      return character.info.class.toLowerCase().includes(term.toLowerCase())
    })
  }

}
