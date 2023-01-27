import { ISendNumber } from './interface/ISendNumber';
import { NumberService } from './number.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('/number')
export class NumberController {
  constructor(private readonly numberService: NumberService) {}

  @Post()
  sendNumber(@Body() data: ISendNumber) {
    return this.numberService.sendNumber(data);
  }
  @Get()
  getAllInfo() {
    return this.numberService.getAllInfo();
  }
}
