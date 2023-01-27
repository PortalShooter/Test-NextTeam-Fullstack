import { Injectable } from '@nestjs/common';
import { ISendNumber } from './interface/ISendNumber';
import { IHistory } from './interface/IHistory';
@Injectable()
export class NumberService {
  lastNumber: number | null = null;
  history: IHistory[] = [];

  sendNumber(data: ISendNumber) {
    const { number, isFactional, isNegative } = data;
    const lastNumber = this.lastNumber;
    const averageNumber = lastNumber ? (number + lastNumber) / 2 : number;

    this.lastNumber = number;
    const result: IHistory = { lastNumber, number, averageNumber };
    this.history.push(result);

    return result;
  }
  getAllInfo() {
    return this.history;
  }
}
