import { Component, Input, EventEmitter, Output} from '@angular/core';

import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public emitDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] =[{
    name:'Trunks',
    power: 10
  }]

  onDeleteCharacter(id?: string):void{

    (id)
      ? this.emitDeleteCharacter.emit(id)
      :''
  }

}
