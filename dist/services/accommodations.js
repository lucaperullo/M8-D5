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
const express_1 = require("express");
const index_1 = __importDefault(require("../models/index"));
const route = express_1.Router();
route.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accommodation = yield index_1.default.find({});
    res.status(200).send({ accommodations: [] });
}));
route.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accommodation = yield index_1.default.findById(req.params.id);
        res.send(accommodation).status(200);
    }
    catch (error) {
        next(error);
    }
}));
route.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, maxGuests, city } = req.body;
    if (!description || !name || !maxGuests || !city)
        throw new Error("Invalid data");
    const accommodations = new index_1.default({
        description,
        name,
        maxGuests,
        city,
    });
    yield accommodations.save();
    res.status(201).send(accommodations);
}));
route.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
route.delete("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.default.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
}));
exports.default = route;
//# sourceMappingURL=accommodations.js.map