import { Injectable } from '@nestjs/common';
import { ISendNumber } from './interface/ISendNumber';

@Injectable()
export class NumberService {
  lastNumber: number | null = null;

  sendNumber(data: ISendNumber) {
    const { number, isFactional, isNegative } = data;
    const lastNumber = this.lastNumber;
    const averageNumber = lastNumber ? (number + lastNumber) / 2 : number;

    this.lastNumber = number;

    return { lastNumber, number, averageNumber };
  }
  getInfo() {
    return 555;
  }
}
