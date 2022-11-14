import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CustomPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const newValue = Number(value);
    console.log(typeof newValue);
    if (isNaN(newValue)) {
      throw new BadRequestException('el id de usuario debe ser un número');
    }
    return newValue;
  }
}
