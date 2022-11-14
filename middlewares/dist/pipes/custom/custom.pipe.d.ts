import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class CustomPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata): number;
}
