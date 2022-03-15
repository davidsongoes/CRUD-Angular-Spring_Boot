import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.model';
import { delay, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = 'assets/acursos.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API).pipe(
      tap((cursos: Curso[]) => console.log(cursos)),
      take(1),
      delay(500)
    );
  }
}
