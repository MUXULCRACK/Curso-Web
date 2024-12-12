import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  /* METODO PARA VER JSON JUNTO CON CONTROLADOR
  @Get()
  getHello(){
    return this.appService.getHello();
  }*/
}
