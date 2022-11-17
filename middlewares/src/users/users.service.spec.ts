import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be created', () => {
    const mockUser = {
      age: 20,
      name: 'userName',
      address: 'userSurname',
      email: 'as@gmail.com',
      single: true,
      userType: 'admin',
    };
    const result = service.create(mockUser);
    expect(result).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        surname: expect.any(String),
      }),
    );
  });
});
