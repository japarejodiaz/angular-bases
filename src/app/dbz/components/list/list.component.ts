import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 1000
  }];

  // Emite un valor desde el form
  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void{
    if (!id) return;
    this.onDelete.emit(id);
  }

}
