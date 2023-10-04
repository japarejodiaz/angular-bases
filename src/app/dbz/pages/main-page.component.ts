import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Character} from "../interfaces/character.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

 constructor( private _dbzService: DbzService  ) {
 }

  get characters(): Character[] {
    return [...this._dbzService.characters]
  }

  onDeleteCharacter( id: string ): void {
    this._dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character ): void {
    this._dbzService.addCharacter(character);
  }
}
