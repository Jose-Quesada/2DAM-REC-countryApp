import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input()
  cadenaDeTexto = 'Valor por defecto';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue( value:string){
    this.onValue.emit(value)
  }

}
