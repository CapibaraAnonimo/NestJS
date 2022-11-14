import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GeneralExeptionFilter } from '../filters/exceptions/general-exeption/general-exeption.filter';
import { CustomPipe } from '../pipes/custom/custom.pipe';
import { CreateUserValidatorPipe } from '../pipes/create-user-validator/create-user-validator.pipe';
import { CreateUserSchema } from '../pipes/create-user-validator/create-user.schema';

@Controller('users')
@UseFilters(new GeneralExeptionFilter())
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new CreateUserValidatorPipe(CreateUserSchema))
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    console.log(typeof id);
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', new CustomPipe()) id: string) {
    return this.usersService.remove(+id);
  }
}
