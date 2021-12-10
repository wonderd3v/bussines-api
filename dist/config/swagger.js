"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Extended: https://swagger.io/specification/#infoObject
exports.default = {
    swagger: "2.0",
    swaggerDefinition: {
        info: {
            version: "1.0",
            title: "Customer API",
            description: "Customer API Information",
            contact: {
                name: "Wonderd3v"
            },
            servers: ["http://localhost:5000"]
        }
    },
    // ['.routes/*.js']
    apis: ["app.ts"]
};
