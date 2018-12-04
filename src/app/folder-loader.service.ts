import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';
import { Http } from '@angular/http';
//import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FolderLoaderService {

  constructor(private http: Http /*HttpClient*/) { }

  loadFirstLevelItems(){
    return this.http.get('/assets/JSONs/server.json');
  }

  loadChildren(id: number) {
    return this.http.get('/assets/JSONs/' + id + '.json');
  }
}
