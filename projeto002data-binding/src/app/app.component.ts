import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'projeto002data-binding';

  valor: number = 5;

  apresentar: boolean = false;

  criar() {
    this.apresentar = true;
  }

  mudarValor() {
    this.valor++;
  }

  destruir() {
    this.apresentar = false;
  }
}
