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
      "name": "C (GCC 9.2.0)",
      "language": "text/x-csrc"
    },
    {
      "id": 54,
      "name": "C++ (GCC 9.2.0)",
      "language": "text/x-c++src"
    },
    {
      "id": 61,
      "name": "Haskell (GHC 8.8.1)",
      "language": "text/x-c++src"
    },
    {
      "id": 62,
      "name": "Java (OpenJDK 13.0.1)",
      "language": "text/x-java"
    },
    {
      "id": 65,
      "name": "OCaml (4.09.0)",
      "language": "text/x-ocaml"
    },
    {
      "id": 67,
      "name": "Pascal (FPC 3.0.4)",
      "language": "text/x-pascal"
    },
    {
      "id": 69,
      "name": "Prolog (GNU Prolog 1.4.5)",
      "language": "text/x-python"
    },
    {
      "id": 71,
      "name": "Python (3.8.1)",
      "language": "text/x-python"
    }
  ];

  private readonly apiUrl = environment.judge0.url;
  private readonly apiHeaders = environment.judge0.headers;

  constructor(private http: HttpClient) { }

  getSubmision(token: string) {
    return this.http.get(`${this.apiUrl}/submissions/${token}?base64_encoded=true&fields=stdout,expected_output,compile_output`, {headers: this.apiHeaders})
  }

  postSubmision(languageId: number, sourceCode: string, codeInput: string, codeOutput: string): Observable<any> {
    const encodedSourceCode: string = btoa(sourceCode);
    const encodedCodeInput: string = btoa(codeInput);
    const encodedExpectedOutput: string = btoa(codeOutput);
    return this.http.post<any>(
      `${this.apiUrl}/submissions?base64_encoded=true&fields=*`,
      {
        "language_id": languageId,
        "source_code": encodedSourceCode,
        "stdin": encodedCodeInput,
        "expected_output": encodedExpectedOutput
      },
      {headers: this.apiHeaders})
  }
}
