import { Injectable } from '@angular/core';
import {ICourseSummary} from "../interfaces/ICourseSummary";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ICourseDetails} from "../interfaces/ICourseDetails";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly apiUrl = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getCourses() : Observable<ICourseSummary[]> {
    return this.http.get<ICourseSummary[]>(`${this.apiUrl}/course`)
  }

  getCourse(id?: string) : Observable<ICourseDetails> {
    return this.http.get<ICourseDetails>(`${this.apiUrl}/course/${id}`)
  }
}
