import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-inicio',
  templateUrl: './page-inicio.component.html',
  styleUrls: ['./page-inicio.component.css']
})
export class PageInicioComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _router: Router ) { }

  ngOnInit() {
  }

  irAInfo() {
      const url = [
        'home'
      ];
      this._router.navigate(url);
      location.reload(true);
    }

    irAInfoDatos() {
        const url = [
          'inicio','usuario',':id'
        ];
        this._router.navigate(url);
        location.reload(true);
      }

}
