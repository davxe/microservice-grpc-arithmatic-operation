import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  add(data: number[]): number {
    let result = 0;
    const addOperation = data.map((ele) => {
      result += ele;
    });
    console.log(addOperation);
    return result;
  }

  difference(data: number[]): number {
    const differenceOperation = data.reduce((a, b) => a - b);
    return differenceOperation;
  }

  multiply(data: number[]): number {
    const multiplyOperation = data.reduce((a, b) => a * b);
    return multiplyOperation;
  }

  division(data: number[]): number {
    const divisionOperation = data.reduce((a, b) => a / b);
    return divisionOperation;
  }
}
