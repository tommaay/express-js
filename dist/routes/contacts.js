"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/contacts", (req, res) => {
    res.json({
        message: "Get all Contacts request successful!",
    });
});
router.get("/contacts/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Get contact with the ID of ${id} request successful!`,
    });
});
router.post("/contacts", (req, res) => {
    res.json({
        message: "Create contact request successful!",
    });
});
router.put("/contacts/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Update contact with the ID of ${id} request successful!`,
    });
});
router.delete("/contacts/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Delete contact with the ID of ${id} request successful!`,
    });
});
module.exports = router;
