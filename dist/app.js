"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
app.post('/webhook', (req, res) => {
    console.log('Webhook received:', req.body);
    res.status(200).json({ message: 'Webhook received' });
});
app.listen(PORT).on('listening', () => {
    console.log(`Server started on port ${PORT}`);
}).on('error', (error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
});
