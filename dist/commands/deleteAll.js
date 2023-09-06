"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllCmd = void 0;
const chalk_1 = __importDefault(require("chalk"));
const car_1 = require("../models/car");
const log = console.log;
const deleteAllCmd = () => __awaiter(void 0, void 0, void 0, function* () {
    log(chalk_1.default.yellowBright('Deleting all cars data...'));
    try {
        const deleteResult = yield car_1.Car.deleteMany({});
        if (deleteResult.deletedCount > 0) {
            log(chalk_1.default.green(`Successfully deleted ${deleteResult.deletedCount} cars!`));
        }
        else {
            log(chalk_1.default.yellow('No cars data found to delete.'));
        }
    }
    catch (error) {
        log(chalk_1.default.red('Error occurred while deleting cars data:'));
    }
});
exports.deleteAllCmd = deleteAllCmd;
