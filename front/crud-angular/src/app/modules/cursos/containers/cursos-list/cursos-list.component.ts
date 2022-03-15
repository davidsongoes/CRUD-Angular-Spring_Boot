import { MatSnackBarConfig } from '@angular/material/snack-bar';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Curso } from 'src/app/models/curso.model';
import { CursosService } from 'src/app/services/cursos.service';
import { GenericSnackBarComponent } from 'src/app/shared/generic-snack-bar/generic-snack-bar.component';

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
  @ViewChild('snackBar')
  snackBar!: GenericSnackBarComponent;

  constructor(private cursoService: CursosService) {
    this.cursos$ = this.cursoService.getAll().pipe(
      catchError((error) => {
        console.log(error);
        this.open(`${error.status} - ${error.statusText}`, 'fechar', {
          duration: 5000,
        });
        return of([]);
      })
    );
  }

  ngOnInit(): void {}
  open(message: string, action: string, config: MatSnackBarConfig) {
    this.snackBar.openSnackBar(message, action, config);
  }
}
