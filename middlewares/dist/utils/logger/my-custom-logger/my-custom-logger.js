"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCustomLogger = void 0;
class MyCustomLogger {
    error(message, ...optionalParams) {
        console.log(`Este es un error tradicional ${new Date().getFullYear()} | CONTENT: ${message} | EXTRAS: ${optionalParams}`);
    }
    log(message, ...optionalParams) {
        console.log(`Este es un tradicional ${new Date().getFullYear()} | CONTENT: ${message} | EXTRAS: ${optionalParams}`);
    }
    warn(message, ...optionalParams) {
        console.log(`Este es un warn tradicional ${new Date().getFullYear()} | CONTENT: ${message} | EXTRAS: ${optionalParams}`);
    }
}
exports.MyCustomLogger = MyCustomLogger;
//# sourceMappingURL=my-custom-logger.js.map