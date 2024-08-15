import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo : 'I Love Angular',
    autoria: 'Ciuco',
    modelo : 'modelo2'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
