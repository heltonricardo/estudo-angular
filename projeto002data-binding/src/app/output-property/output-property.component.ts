import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
  @Input('valorInicial') valor: number = 0;

  @Output() mudouValor: EventEmitter<any> = new EventEmitter();

  constructor() {}

  decrementa() {
    this.valor = Math.max(this.valor - 1, 0);
    this.mudouValor.emit({ novoValor: this.valor });
  }
  
  incrementa() {
    this.valor = Math.min(this.valor + 1, 10);
    this.mudouValor.emit({ novoValor: this.valor });
  }

  ngOnInit(): void {}
}
