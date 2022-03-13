import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';


const DATA: Curso[] = [
  {
    _id: '1',
    name: 'JavaScript',
    category: 'Programação'
  }
];
@Component({
  selector: 'crud-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category'];
  dataSource = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
