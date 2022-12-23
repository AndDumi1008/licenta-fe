// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // localApiUrl below
  // apiUrl: "http://localhost:5000/api",
  apiUrl: "http://codexamapi.eu-central-1.elasticbeanstalk.com/api",

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
