import { Injectable } from '@angular/core';
import {ICourse} from "../interfaces/ICourse";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

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

  getCourses() : Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.apiUrl}/getCourses`)
  }
}
