import { Controller, Get } from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

/*   @Get('getData')
  getData() {
    const data = '<h1>Data from API...</h1><p>is working!</p>';
    console.log(data)
    return { data }
  } 
}
*/
