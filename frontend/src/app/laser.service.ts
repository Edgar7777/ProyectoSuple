import { Injectable }from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';;
import {Laser} from "./Laser";
import {of} from "rxjs/Observable/of";
import { Observable } from 'rxjs/Observable';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class LaserService {
  private url: string = 'http://localhost:1337/usuario';

  constructor(private http: HttpClient) { }

  addLaser (laser: Laser): Observable<Laser> {
    return this.http.post<Laser>(this.url, laser, httpOptions);
  }
  getLaser(id: number): Observable<Laser> {
    const url = `${this.url}/${id}`;
    return this.http.get<Laser>(url);
  }

}
