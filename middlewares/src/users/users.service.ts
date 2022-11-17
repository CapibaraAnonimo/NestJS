import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  create(createUserDto: CreateUserDto) {
    //return 'This action adds a new user';
    throw new HttpException(
      { error: 'metodo no implementado', statu: HttpStatus.NOT_IMPLEMENTED },
      HttpStatus.NOT_IMPLEMENTED,
    );
  }

  findAll() {
    this.logger.log(`This action returns all users`);
    this.logger.debug(`This action returns all users`);
    this.logger.error(`This action returns all users`);
    this.logger.warn(`This action returns all users`);
    this.logger.verbose(`This action returns all users`);
    return `This action returns all users`;
  }

  findOne(id: number) {
    if (id === 1) {
      return `This action returns a #${id} user`;
    }
    throw new NotFoundException(
      {
        error: 'error al buscar usuario',
      },
      'usuario no encontrado',
    );
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    //return `This action updates a #${id} user`;
    throw new HttpException(
      {
        error: 'error al actualizar usuario',
        statu: HttpStatus.INTERNAL_SERVER_ERROR,
      },
      HttpStatus.NOT_IMPLEMENTED,
    );
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
    throw new NotImplementedException(
      { error: 'metodo no implementado' },
      'metodo no implementado',
    );
  }
}
