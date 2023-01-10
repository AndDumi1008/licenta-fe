import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Judge0Service {

  private readonly apiUrl = environment.judge0.url;
  private readonly apiHeaders = environment.judge0.headers;

  constructor(private http: HttpClient) { }

  getAbout() {
    return this.http.get(`${this.apiUrl}/about`, {headers: this.apiHeaders})
  }

  getSubmision(token: string) {
    return this.http.get(`${this.apiUrl}/submissions/${token}?base64_encoded=true&fields=stdout,stderr,status_id,language_id`, {headers: this.apiHeaders})
  }

  postSubmision(languageId: number, sourceCode: string, codeInput: string): Observable<any> {
    // const encodedSourceCode: string = Buffer.from(sourceCode, 'utf8').toString('base64');
    // const encodedCodeInput: string = Buffer.from(codeInput, 'utf8').toString('base64');

    const encodedSourceCode: string = btoa(sourceCode);
    const encodedCodeInput: string = btoa(codeInput);
    return this.http.post<any>(
      `${this.apiUrl}/submissions?base64_encoded=true&fields=*`,
      {
        "language_id": languageId,
        "source_code": encodedSourceCode,
        "stdin": encodedCodeInput
      },
      {headers: this.apiHeaders})
  }


}
