import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  pensamento: Pensamento = {

    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private service: ThoughtService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }

  createThought(){
    this.service.criar(this.pensamento).subscribe(()=>{
      this.router.navigate(['thoughtList'])
    })

  }

  cancelThought(){
    this.router.navigate(['thoughtList'])
  }

}
