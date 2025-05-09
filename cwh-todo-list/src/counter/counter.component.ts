import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  value = 0
  @Output() val = new EventEmitter<number>();
  @Input() parentValue! : number;
  
  increment() {
    this.value++
    this.val.emit(this.value)
  }
  decrement() {
    this.value--
    this.val.emit(this.value)
  }
  reset() {
    this.value = 0
    this.val.emit(this.value)
  }

}
