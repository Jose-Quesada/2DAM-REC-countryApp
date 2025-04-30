import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy{




  @Input()
  cadenaDeTexto = 'Valor por defecto';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  private debouncer: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value =>{
      this.onDebounce.emit(value)
    })

  }

  ngOnDestroy(): void {
    this.debouncer.unsubscribe();

  }

  emitValue( value:string){
    this.onValue.emit(value)
  }

  onKeyPress ( searchTearm: string ):void {
    this.debouncer.next(searchTearm);
  }


}
