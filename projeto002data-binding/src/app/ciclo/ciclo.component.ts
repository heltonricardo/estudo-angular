import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css'],
})
// Anotação 01
export class CicloComponent
  implements
    OnInit,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() valorInicial: number = 10;

  log(hook: string) {
    console.log('Executando ' + hook);
  }

  constructor() {
    this.log('constructor');
  }

  ngOnChanges(): void {
    this.log('ngOnChanges');
  }
  ngOnInit(): void {
    this.log('ngOnInit');
  }
  ngDoCheck(): void {
    this.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }
}

/* Não é necessário mas é uma boa prática inserir todas as interfaces
 * implementadas no componente, para enfatizar que as utilizarmos.
 */
