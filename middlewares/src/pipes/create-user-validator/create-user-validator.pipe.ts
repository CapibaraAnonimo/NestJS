import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { CreateUserDto } from '../../users/dto/create-user.dto';

@Injectable()
export class CreateUserValidatorPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(createSchema: CreateUserDto, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(createSchema);
    if (error) {
      console.log(error);
      const errorMessage = 'Body request invalido';
      throw new BadRequestException({
        message: errorMessage,
        error: error,
      });
    }
    return createSchema;
  }
}
