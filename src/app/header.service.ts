import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HeaderService {
  setCount = new Subject<Number>();
  constructor() { }

}