import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ILaboratorySummary} from "../_interfaces/ILaboratorySummary";
import {ILaboratory} from "../_interfaces/ILaboratory";
import {HttpClient} from "@angular/common/http";
import {GlobalVariableService} from "./global-variable.service";
import {environment} from "../../environments/environment";
import {IAnswer} from "../_interfaces/IAnswer";

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {

  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private header: GlobalVariableService) {
  }

  getLab(labId?: string): Observable<ILaboratory> {
    return this.http.get<ILaboratory>(`${this.apiUrl}/lab/${labId}`, {headers: this.header.getHeaderOptions()})
  }

  getLabList(courseId?: string): Observable<ILaboratorySummary[]> {
    return this.http.get<ILaboratorySummary[]>(`${this.apiUrl}/lab/course=${courseId}`, {headers: this.header.getHeaderOptions()})
  }

  putAnswer(answerObject: IAnswer) {
    return this.http.put<boolean>(`${this.apiUrl}/lab/saveAnswer`,
      answerObject,
      {headers: this.header.getHeaderOptions()})
  }

  putLaboratory(laboratory: ILaboratory) {
    return this.http.put<boolean>(`${this.apiUrl}/lab/saveAnswer`,
      laboratory,
      {headers: this.header.getHeaderOptions()})
  }
}
