import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<object>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: object) {
    this.messageSource.next(message)
  }
}