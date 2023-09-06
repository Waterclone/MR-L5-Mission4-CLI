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
exports.seedCmd = void 0;
const chalk_1 = __importDefault(require("chalk"));
const car_1 = require("../models/car");
// import { CARS } from "../utils/mockDataGenerator";
const carsData_1 = require("../utils/carsData");
const log = console.log;
const seedCmd = () => __awaiter(void 0, void 0, void 0, function* () {
    log(chalk_1.default.yellowBright('Seeding random cars...'));
    // const cars = CARS
    log(chalk_1.default.blue(JSON.stringify(carsData_1.cars, null, 2)));
    car_1.Car.insertMany(carsData_1.cars);
    log(chalk_1.default.green(`Successfully uploaded ${carsData_1.cars.length} cars!`));
});
exports.seedCmd = seedCmd;
