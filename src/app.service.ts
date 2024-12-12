import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Jhimmy Antonio Cuaran Rodriguez';
  }
  /* METODO PARA VER JSON JUNTO CON SERVICIOS
  getHello() {
    return {'Hello World! Jhimmy Antonio Cuaran Rodriguez'
    };
  }*/
}
