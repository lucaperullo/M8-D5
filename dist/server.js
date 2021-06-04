"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_list_endpoints_1 = __importDefault(require("express-list-endpoints"));
const mongoose_1 = require("./mongoose");
const accommodations_1 = __importDefault(require("./services/accommodations"));
const app = express_1.default();
app.use(express_1.default.json());
const port = process.env.PORT || 5000;
app.use("/", accommodations_1.default);
console.table(express_list_endpoints_1.default(app));
mongoose_1.connect();
app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map