"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = void 0;
const Joi = require("joi");
exports.CreateUserSchema = Joi.object().keys({
    name: Joi.string().required(),
    address: Joi.string(),
    age: Joi.number().min(10).max(80),
});
//# sourceMappingURL=create-user.schema.js.map