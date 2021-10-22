import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import {
  INumberArray,
  ISumOfNumberArray,
  IDifferenceOfNumberArray,
  IDivideOfNumberArray,
  IMultiplyOfNumberArray,
} from './interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'Add')
  sum(numberArray: INumberArray): ISumOfNumberArray {
    return { sum: this.appService.add(numberArray.data) };
  }

  @GrpcMethod('AppController', 'Difference')
  difference(numberArray: INumberArray): IDifferenceOfNumberArray {
    return { difference: this.appService.difference(numberArray.data) };
  }

  @GrpcMethod('AppController', 'Multiply')
  multiply(numberArray: INumberArray): IMultiplyOfNumberArray {
    return { multiply: this.appService.multiply(numberArray.data) };
  }

  @GrpcMethod('AppController', 'Divide')
  divide(numberArray: INumberArray): IDivideOfNumberArray {
    return { divide: this.appService.division(numberArray.data) };
  }
}
