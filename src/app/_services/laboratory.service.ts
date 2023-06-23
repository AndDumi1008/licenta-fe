import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ILaboratorySummary} from "../_interfaces/ILaboratorySummary";
import {ILaboratory} from "../_interfaces/ILaboratory";
import {HttpClient} from "@angular/common/http";
import {GlobalVariableService} from "./global-variable.service";
import {environment} from "../../environments/environment";
import {IAnswer} from "../_interfaces/IAnswer";
import {ILaboratoryExtended} from "../_interfaces/ILaboratoryExtended";


@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {

  public labsSubject: Subject<ILaboratorySummary[]> = new Subject<ILaboratorySummary[]>()
  public labs:ILaboratorySummary[] = [];
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private header: GlobalVariableService) {
  }

  getLab(labId?: string): Observable<ILaboratory> {
    return this.http.get<ILaboratory>(`${this.apiUrl}/lab/${labId}`, {headers: this.header.getHeaderOptions()})
  }

  getLabList(courseId?: string) {
    this.http.get<ILaboratorySummary[]>(`${this.apiUrl}/lab/course=${courseId}`, {headers: this.header.getHeaderOptions()})
      .subscribe(data => {
        this.labs = data;
        this.labsSubject.next(data)
      })
  }

  putAnswer(answerObject: IAnswer) {
    return this.http.put<boolean>(`${this.apiUrl}/lab/saveAnswer`,
      answerObject,
      {headers: this.header.getHeaderOptions()})
  }

  putLaboratory(laboratory: ILaboratoryExtended): Observable<ILaboratoryExtended> {
    return this.http.put<ILaboratoryExtended>(`${this.apiUrl}/lab`,
      laboratory,
      {headers: this.header.getHeaderOptions()})
  }

  deleteLaboratory(labId: string) {
    return this.http.delete(`${this.apiUrl}/lab/${labId}`,
      {headers: this.header.getHeaderOptions()})
  }
}
