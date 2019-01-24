import { Injectable } from '@angular/core';
import { Leader} from "../shared/leader";
// import { LEADERS} from "../shared/leaders";
import { Observable, of } from 'rxjs';
import {delay, map} from 'rxjs/operators';

import { HttpClient } from "@angular/common/http";
import { baseURL } from "../shared/baseurl";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient) { }

  getLeaders(): Observable<Leader[]>{
    // return Promise.resolve(LEADERS);
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS), 2000);
    // });
    // return of(LEADERS).pipe(delay(2000));
    return this.http.get<Leader[]>(baseURL + 'leadership/');
  }

  getLeader(id: string): Observable<Leader>{
    // return Promise.resolve(LEADERS.filter((leader) =>{ leader.id === id})[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS.filter((leader) =>{ leader.id === id})[0]), 2000);
    // });
    // return of(LEADERS.filter((leader) =>{ leader.id === id})[0]).pipe(delay(2000));
    return this.http.get<Leader>(baseURL + 'leadership' + id);
  }

  getFeaturedLeader(): Observable<Leader> {
    // return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
    // });
    // return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
    return this.http.get<Leader>(baseURL + 'leadership?featured=true')
      .pipe(map(leaders => leaders[0]));
  }
}
