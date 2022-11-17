import {
  IsAlpha,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

enum userTypes {
  'admin',
  'client',
}

export class CreateUserDto {
  @IsAlpha('es-ES', {
    message: 'El nombre solo debe tener letras',
  })
  @ApiProperty({
    example: 'nombre',
    required: true,
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  address: string;

  @IsInt()
  @Min(18)
  @Max(90)
  @ApiProperty()
  age: number;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsBoolean()
  @ApiProperty()
  single: boolean;

  @IsEnum(userTypes)
  @ApiProperty()
  userType: string;
}
