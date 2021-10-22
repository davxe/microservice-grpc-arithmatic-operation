import { Observable } from 'rxjs';

interface INumberArray {
  data: number[];
}
export interface IGrpcService {
  Sum(numberArray: INumberArray): Observable<any>;
  Difference(numberArray: INumberArray): Observable<any>;
  Multiply(numberArray: INumberArray): Observable<any>;
  divide(numberArray: INumberArray): Observable<any>;
}
