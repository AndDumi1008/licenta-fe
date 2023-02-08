import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Judge0Service {

  public readonly languages = [
    {
      "id": 50,
      "name": "C (GCC 9.2.0)"
    },
    {
      "id": 54,
      "name": "C++ (GCC 9.2.0)"
    },
    {
      "id": 61,
      "name": "Haskell (GHC 8.8.1)"
    },
    {
      "id": 62,
      "name": "Java (OpenJDK 13.0.1)"
    },
    {
      "id": 65,
      "name": "OCaml (4.09.0)"
    },
    {
      "id": 67,
      "name": "Pascal (FPC 3.0.4)"
    },
    {
      "id": 69,
      "name": "Prolog (GNU Prolog 1.4.5)"
    },
    {
      "id": 71,
      "name": "Python (3.8.1)"
    }
  ];

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
