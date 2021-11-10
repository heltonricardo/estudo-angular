import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'https://heltonricardo.github.io';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver = false;

  nomeDoCurso: string = 'Angular';

  meuValor: number = 5;

  constructor() {}

  getValor() {
    return 11;
  }

  getGostandoCurso() {
    return true;
  }

  botaoClicado() {
    alert('Clicou!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento:any) {
    console.log(evento.novoValor)
  }

  ngOnInit(): void {}
}
