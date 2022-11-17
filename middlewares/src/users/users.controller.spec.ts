import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create user test suit', () => {
    it('should create an user', () => {
      const mockUser = {
        age: 20,
        name: 'userName',
        address: 'userSurname',
        email: 'as@gmail.com',
        single: true,
        userType: 'admin',
      };
      jest.spyOn(usersService, 'create').mockImplementation(() => mockUser);
      const result = usersController.create(mockUser);
      expect(result).toBe(mockUser);
    });

    it('should return a not acceptable exception', () => {
      const mockUser = {
        age: 0,
        name: '',
        address: '',
        email: 'as@.com',
        single: true,
        userType: 'admin',
      };
      jest.spyOn(userService, 'create').mockImplementation(() => {
        try {
          await usercontroller.create(mockUser);
        } catch (error) {

        }
      })
    });
  });
});
