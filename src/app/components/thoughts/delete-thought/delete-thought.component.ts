import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Pensamento } from '../thought';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo:''
  }

  constructor(private service: ThoughtService,
              private Router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=>{
      this.pensamento = pensamento
    })
  }

  deleteThought(){
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(() =>{
        this.Router.navigate(['/thoughtList'])
      })
    }
  }

  cancelar(){
    this.Router.navigate(['/thoughtList'])
  }

}
