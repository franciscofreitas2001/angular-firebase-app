import { initializeApp, database } from 'firebase';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA5PDvF3DaxXXcC-zJoxGiy-1Mw3W9iFLY",
      authDomain: "angularfirebasecursoudemyvasco.firebaseapp.com",
      databaseURL: "https://angularfirebasecursoudemyvasco.firebaseio.com",
      projectId: "angularfirebasecursoudemyvasco",
      storageBucket: "angularfirebasecursoudemyvasco.appspot.com",
      messagingSenderId: "1040350357505"
    };
    firebase.initializeApp(config);

    //Associa o DB com o root node
    var root = firebase.database().ref();
    root.on('value', function (snap) {
      console.log(snap.val());
    });
  }


}
