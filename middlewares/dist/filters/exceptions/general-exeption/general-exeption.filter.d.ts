import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class GeneralExeptionFilter<T> implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
