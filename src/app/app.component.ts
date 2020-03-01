import { Component } from '@angular/core';
import "./app.component.scss";
import "src/assets/jquery/jquery.min.js";
import "src/assets/js/bootstrap.bundle.min.js";


@Component({
  selector: 'app-root',
  template: `
<app-navbar></app-navbar>
<div class="container">
  <router-outlet></router-outlet>
</div>
<app-footer></app-footer>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'New Covenant Assembly of God';
}