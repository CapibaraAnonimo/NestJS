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

enum userTypes {
  'admin',
  'client',
}

export class CreateUserDto {
  @IsAlpha('es-ES', {
    message: 'El nombre solo debe tener letras',
  })
  name: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsInt()
  @Min(18)
  @Max(90)
  age: number;

  @IsEmail()
  email: string;

  @IsBoolean()
  single: boolean;

  @IsEnum(userTypes)
  userType: string;
}
