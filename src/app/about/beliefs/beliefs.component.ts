import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-beliefs',
  templateUrl: './beliefs.component.html',
  styleUrls: ['./beliefs.component.scss']
})
export class BeliefsComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
arrBeliefs: string [];
  ngOnInit() {
    this.httpService.get('assets/documents/beliefs.json').subscribe(
      data => {
        this.arrBeliefs = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  };

}