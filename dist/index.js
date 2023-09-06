#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
const commander_1 = require("commander");
const cars_1 = require("./commands/cars");
const db_1 = require("./db");
const seed_1 = require("./commands/seed");
const deleteAll_1 = require("./commands/deleteAll");
console.log(figlet_1.default.textSync("MongoDB CLI"));
(0, db_1.initDB)();
commander_1.program.version("1.0.0").description("A CLI tool to seed data into MongoDB");
commander_1.program
    .command("cars")
    .description("Shows collection of all cars in MongoDB")
    .option("-c, --count", "Only get the count. If not specified it will show all data.")
    .action((options) => (0, cars_1.carsCmd)(options.count));
commander_1.program
    .command("seed")
    .description("Uploads random cars onto MongoDB")
    .action(seed_1.seedCmd);
commander_1.program
    .command("delete-all")
    .description("Deletes all cars data in MongoDB")
    .action(deleteAll_1.deleteAllCmd);
commander_1.program.parse(process.argv);
