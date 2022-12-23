import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IExercise} from "../_interfaces/IExercise";
import {GlobalVariableService} from "./global-variable.service";

@Injectable({
  providedIn: 'root'
})
export class ExerciseDetailsService {

  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private header: GlobalVariableService) {
  }

  getExercise(labId?: string): Observable<IExercise> {
    return this.http.get<IExercise>(`${this.apiUrl}/exercise/${labId}`, {headers: this.header.getHeaderOptions()})
  }
}
