import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../thought';

@Component({
  selector: 'app-update-thought',
  templateUrl: './update-thought.component.html',
  styleUrls: ['./update-thought.component.css']
})
export class UpdateThoughtComponent implements OnInit {

  pensamento: Pensamento = {

    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
            private service: ThoughtService,
            private router: Router,
            private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) =>{
      this.pensamento = pensamento
    })
  }

  updateThought(){
    this.service.editar(this.pensamento).subscribe(()=>{
      this.router.navigate(['/thoughtList'])
    })
  }

  cancel(){
    this.router.navigate(['/thoughtList'])
  }

}
