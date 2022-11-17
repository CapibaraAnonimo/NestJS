"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = UsersService_1 = class UsersService {
    constructor() {
        this.logger = new common_1.Logger(UsersService_1.name);
    }
    create(createUserDto) {
        throw new common_1.HttpException({ error: 'metodo no implementado', statu: common_1.HttpStatus.NOT_IMPLEMENTED }, common_1.HttpStatus.NOT_IMPLEMENTED);
    }
    findAll() {
        this.logger.log(`This action returns all users`);
        this.logger.debug(`This action returns all users`);
        this.logger.error(`This action returns all users`);
        this.logger.warn(`This action returns all users`);
        this.logger.verbose(`This action returns all users`);
        return `This action returns all users`;
    }
    findOne(id) {
        if (id === 1) {
            return `This action returns a #${id} user`;
        }
        throw new common_1.NotFoundException({
            error: 'error al buscar usuario',
        }, 'usuario no encontrado');
    }
    update(id, updateUserDto) {
        throw new common_1.HttpException({
            error: 'error al actualizar usuario',
            statu: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        }, common_1.HttpStatus.NOT_IMPLEMENTED);
    }
    remove(id) {
        return `This action removes a #${id} user`;
        throw new common_1.NotImplementedException({ error: 'metodo no implementado' }, 'metodo no implementado');
    }
};
UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map