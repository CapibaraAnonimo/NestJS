import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from '../../src/users/users.module';
import { UsersService } from '../../src/users/users.service';
import * as request from 'supertest';

describe('User controller (e2e)', () => {
  let app: INestApplication;
  const mockUser = {
    age: 20,
    name: 'userName',
    address: 'userSurname',
    email: 'as@gmail.com',
    single: true,
    userType: 'admin',
  };
  const mockUserService = {
    findAll: () => [mockUser],
    create: (user: any) => {
      return user;
    },
  };
  beforeAll(async () => {
    const usersModule: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(UsersService)
      .useValue(mockUserService)
      .compile();

    app = usersModule.createNestApplication();
    await app.init();
  });

  it('/GET users', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(mockUserService.findAll());
  });

  it('/POST users', () => {
    const mockUser = {
      age: 20,
      name: 'userName',
      address: 'userSurname',
      email: 'as@gmail.com',
      single: true,
      userType: 'admin',
    };
    return request(app.getHttpServer())
      .post('users')
      .send(mockUser)
      .expect(201)
      .expect(mockUser);
  });
});
