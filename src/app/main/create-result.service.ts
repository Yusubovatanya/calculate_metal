import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CreateResultService {
  createResult = new Subject<string>();
  createResultObserver$ = this.createResult.asObservable();

  constructor() { }

  createDataResult(dataForm) {
    this.createResult.next(dataForm);
  }

  getCircleResult([D, d = 0, lengthWorkPiece, length, densityWrite, coefficient]: any[]) {
    return ((Math.PI * ((+D) ** 2 - (+d) ** 2) * (+lengthWorkPiece + +length) * (+densityWrite)) * +coefficient) / (4 * (10 ** 9));
  }

  getRectResult([weight, height, lengthWorkPiece, length, densityWrite, coefficient]: any[]) {
    return ((((+weight) * (+height)) * (+lengthWorkPiece + +length) * (+densityWrite)) * +coefficient) / (10 ** 9);
  }

  getHexagonResult([hexagon, lengthWorkPiece, length, coefficient]: any[]) {
    return (((+lengthWorkPiece + +length) * (+hexagon)) * +coefficient) / (10 ** 3);
  }



}
