"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const general_exeption_filter_1 = require("./filters/exceptions/general-exeption/general-exeption.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(logger_middleware_1.loggerMiddleware);
    app.useGlobalFilters(new general_exeption_filter_1.GeneralExeptionFilter());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map