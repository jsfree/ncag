import { Component, OnInit } from '@angular/core';

import "./home.component.scss";
import "src/assets/jquery/jquery.min.js";
import "src/assets/js/bootstrap.bundle.min.js";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  text:any = {
    Days: "Days",
    Hours: "Hours",
    Minutes: "Minutes",
    Seconds: "Seconds"
  }
timerEnd(){
    document.getElementById("joinUs").innerHTML = "Service is starting soon!"
    document.getElementById("joinUs").style.color = "DarkGrey";
    document.getElementById("joinUs").style.verticalAlign = "middle";
    document.getElementById("joinUs").style.animationDuration = "800ms";
    document.getElementById("joinUs").style.animationName = "blink";
    document.getElementById("joinUs").style.animationIterationCount = "infinite";
    document.getElementById("joinUs").style.animationDirection = "alternate";
}
  ngOnInit() {
  }

}

