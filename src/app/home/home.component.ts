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
  ngOnInit() {
  }

}

