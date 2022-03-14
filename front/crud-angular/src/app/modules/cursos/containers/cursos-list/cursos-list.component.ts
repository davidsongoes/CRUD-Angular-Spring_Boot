import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso.model';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'crud-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('*', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms 0s ease-in-out'),
      ]),
    ]),
  ],
})
export class CursosListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category'];
  cursos$: Observable<Curso[]>;

  constructor(private cursoService: CursosService) {
    this.cursos$ = this.cursoService.getAll();
  }

  ngOnInit(): void {}
}
