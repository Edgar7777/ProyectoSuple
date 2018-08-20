import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router";



@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _router: Router ) { }

  ngOnInit() {
  }
  irAInfo() {
      const url = [
        'inicio'
      ];
      this._router.navigate(url);
      location.reload(true);
    }

}
