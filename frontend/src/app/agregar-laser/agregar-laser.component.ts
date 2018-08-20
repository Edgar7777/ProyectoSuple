import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agregar-laser',
  templateUrl: './agregar-laser.component.html',
  styleUrls: ['./agregar-laser.component.css']
})
export class AgregarLaserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _router: Router ) { }

  ngOnInit() {
  }
  irAInfo() {
      const url = [
        'inicio',`id`,'laser'
      ];
      this._router.navigate(url);
      location.reload(true);
    }

}
