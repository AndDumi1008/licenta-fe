import {Injectable} from '@angular/core';
import {ICourseSummary} from "../_interfaces/ICourseSummary";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ICourseDetails} from "../_interfaces/ICourseDetails";
import {GlobalVariableService} from "./global-variable.service";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private header: GlobalVariableService) {
  }

  getCourses(): Observable<ICourseSummary[]> {
    console.log('Header: ', this.header.getHeaderOptions())
    return this.http.get<ICourseSummary[]>(`${this.apiUrl}/course`, {headers: this.header.getHeaderOptions()})
  }

  getCourse(id?: string): Observable<ICourseDetails> {
    return this.http.get<ICourseDetails>(`${this.apiUrl}/course/${id}`, {headers: this.header.getHeaderOptions()})
  }

}
