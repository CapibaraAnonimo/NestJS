import { LoggerService, LogLevel } from '@nestjs/common';

export class MyCustomLogger implements LoggerService {
  error(message: any, ...optionalParams: any[]): any {
    console.log(
      `Este es un error tradicional ${new Date().getFullYear()} | CONTENT: ${message} | EXTRAS: ${optionalParams}`,
    );
  }

  log(message: any, ...optionalParams: any[]): any {
    console.log(
      `Este es un tradicional ${new Date().getFullYear()} | CONTENT: ${message} | EXTRAS: ${optionalParams}`,
    );
  }

  warn(message: any, ...optionalParams: any[]): any {
    console.log(
      `Este es un warn tradicional ${new Date().getFullYear()} | CONTENT: ${message} | EXTRAS: ${optionalParams}`,
    );
  }
}
