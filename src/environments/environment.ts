// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * Go to Firebase console (console.firebase.google.com)
 * and find your credentials, and add them here. And to environment.prod.ts
 */

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCGTk0pRkwY52zfEMko3PyhjkFfKZwSTkw",
    authDomain: "my-nice-project-name.firebaseapp.com",
    databaseURL: "https://my-nice-project-name.firebaseio.com",
    projectId: "my-nice-project-name",
    storageBucket: "my-nice-project-name.appspot.com",
    messagingSenderId: "113069583485",
    appId: "1:113069583485:web:f7609f061a63949595d514",
    measurementId: "G-GLG86J45CG"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
