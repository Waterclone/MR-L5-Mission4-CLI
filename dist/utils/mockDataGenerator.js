"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CARS = exports.generateRandomCar = void 0;
const faker_1 = require("@faker-js/faker");
const generateRandomCar = () => {
    const randomYear = Math.floor(Math.random() * (2024 - 2000) + 2000);
    return {
        make: faker_1.faker.vehicle.manufacturer(),
        model: faker_1.faker.vehicle.model(),
        year: randomYear,
        image: `https://picsum.photos/200/300?random=${randomYear}`,
    };
};
exports.generateRandomCar = generateRandomCar;
exports.CARS = Array.from({ length: 100 }, exports.generateRandomCar);
