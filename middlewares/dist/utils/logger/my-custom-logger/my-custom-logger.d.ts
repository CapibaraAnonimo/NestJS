import { LoggerService } from '@nestjs/common';
export declare class MyCustomLogger implements LoggerService {
    error(message: any, ...optionalParams: any[]): any;
    log(message: any, ...optionalParams: any[]): any;
    warn(message: any, ...optionalParams: any[]): any;
}
