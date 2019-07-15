import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    function updateTransition() {
      var el = document.querySelector("div.box");
       
      if (el) {
        el.className = "box1";
      } else {
        el = document.querySelector("div.box1");
        el.className = "box";
      }
       
      return el;
    }
    
    var intervalID = window.setInterval(updateTransition, 1000);
  }
  ngOnInit() {
  }

}
