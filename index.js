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
exports.default = getCode;
exports.fetchUserData = fetchUserData;
const axios_1 = __importDefault(require("axios"));
function getCode(clientId, clientSecret, code, redirectUri) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield axios_1.default.post("https://discord.com/api/oauth2/token", {
                client_id: clientId,
                client_secret: clientSecret,
                code,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code',
            });
            const { access_token } = res.data;
            return access_token;
        }
        catch (err) {
            console.log("Ocorreu um erro ao obter o token: ", err);
            return undefined;
        }
    });
}
function fetchUserData(access_token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!access_token) {
                throw new Error("Token não encontrado");
            }
            const res = yield axios_1.default.get("https://discord.com/api/users/@me", {
                headers: { Authorization: `Bearer ${access_token}` },
            });
        }
        catch (err) {
            console.log("Ocorreu um erro ao pegar os dados do usuário: ", err);
            return null;
        }
    });
}
