import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.css']
})
export class ThoughtsListComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) =>{
      this.listaPensamentos = listaPensamentos;
    })
  }

}
