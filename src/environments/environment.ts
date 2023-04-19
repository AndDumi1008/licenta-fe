// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {HttpHeaders} from "@angular/common/http";

export const environment = {
  production: false,
  // localApiUrl below
  // apiUrl: "http://localhost:5000/api",
  apiUrl: "http://codexamapi.eu-central-1.elasticbeanstalk.com/api",

  judge0: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '6924b33edbmsh11c66cad7c53da9p1f6c29jsn90ff413d49f1',
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    }),
    url: "https://judge0-ce.p.rapidapi.com"
  },
  codeMirrorOptions: {
    // Find other language filters https://codemirror.net/5/mode/clike/
    // at the bottom
    mode: "text/x-c++src",
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    lineWrapping: false,
    extraKeys: {"Ctrl-Space": "autocomplete"},
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
    viewportMargin: Infinity
  },

  firebase: {
    projectId: 'codexam-a9bc6',
    appId: '1:409610493792:web:4f33943223b27a00ae4805',
    databaseURL: 'https://codexam-a9bc6-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'codexam-a9bc6.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyB2PWYwfaJhAmOCSWEVv3ygph8jGhwxoas',
    authDomain: 'codexam-a9bc6.firebaseapp.com',
    messagingSenderId: '409610493792',
    measurementId: 'G-8SZ9KYC0QJ',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
