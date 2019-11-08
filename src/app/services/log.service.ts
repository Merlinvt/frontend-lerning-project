import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { Log } from '../models/log';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date
      ('12/24/2019 12:54:23')},
      {id: '2', text: 'Added login', date: new Date
      ('12/24/2019 12:54:23')},
      {id: '3', text: 'Some stuf', date: new Date
      ('12/24/2019 12:54:23')},
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log)
  }

  addLog(log: Log) {
    this.logs.unshift(log)
  }

  updateLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id) {
        this.logs.splice(index,1)
      }
    })
    this.logs.unshift(log)
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id) {
        this.logs.splice(index,1)
      }
    })
  }
}
