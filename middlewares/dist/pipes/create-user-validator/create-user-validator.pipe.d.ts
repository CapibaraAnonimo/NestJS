import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { CreateUserDto } from '../../users/dto/create-user.dto';
export declare class CreateUserValidatorPipe implements PipeTransform {
    private schema;
    constructor(schema: ObjectSchema);
    transform(createSchema: CreateUserDto, metadata: ArgumentMetadata): CreateUserDto;
}
