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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
// { 
//     'host': 'onlyfans.com', 
//     'connection': 'keep-alive', 
//     'user-id': '83096664', 
//     'time': '1635192249954', 
//     'sec-ch-ua-mobile': '?0', 
//     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', 
//     'app-token': '33d57ade8c02dbc5a333db99ff9ae26a', 
//     'accept': 'application/json, text/plain, */*', 
//     'x-bc': '2f593e32e6cc8aa1d10264400427d079d9bed082', 
//     'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"', 
//     'sign': '1307:9e3182bd7485bcbd5528effa5c3390aacd8a842b:bc8:6176c656', 
//     'sec-ch-ua-platform': '"Linux"', 
//     'sec-fetch-site': 'same-origin', 
//     'sec-fetch-mode': 'cors', 
//     'sec-fetch-dest': 'empty', 
//     'referer': 'https://onlyfans.com/onlyfans', 
//     'accept-encoding': 'gzip, deflate, br', 
//     'accept-language': 'en-US,en;q=0.9', 
//     'cookie': 'csrf=9FXKQpku9fc7979f0a5e714fb7ef66fb2f825470; fp=e2241d978f3d41e27fcad987284946a1; auth_id=83096664; ref_src=https%3A%2F%2Fonlyfans.com%2F; sess=h83g0mp26oaj438j43leu412d5; st=4705a99a9c6b28914d6ab776ac468db072c4a0f2e19f6a33d42e455eac6281d1; sess=h83g0mp26oaj438j43leu412d5', 
//   }
var OnlyFansAPI = /** @class */ (function () {
    function OnlyFansAPI(RequestHeader, App_Token) {
        this.RequestHeader = {
            'host': 'onlyfans.com',
            'connection': 'keep-alive',
            'user-id': '83096664',
            'time': '1635192249954',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
            'app-token': '33d57ade8c02dbc5a333db99ff9ae26a',
            'accept': 'application/json, text/plain, */*',
            'x-bc': '2f593e32e6cc8aa1d10264400427d079d9bed082',
            'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            'sign': '1307:9e3182bd7485bcbd5528effa5c3390aacd8a842b:bc8:6176c656',
            'sec-ch-ua-platform': '"Linux"',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://onlyfans.com/onlyfans',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9',
            'cookie': 'csrf=9FXKQpku9fc7979f0a5e714fb7ef66fb2f825470; fp=e2241d978f3d41e27fcad987284946a1; auth_id=83096664; ref_src=https%3A%2F%2Fonlyfans.com%2F; sess=h83g0mp26oaj438j43leu412d5; st=4705a99a9c6b28914d6ab776ac468db072c4a0f2e19f6a33d42e455eac6281d1; sess=h83g0mp26oaj438j43leu412d5'
        };
    }
    // async getMembers(guild_id) {
    //     const res = await axios.get(
    //       `https://discordapp.com/api/v6/guilds/${guild_id}/members?limit=1000`
    //     );
    //     return res.data;
    //   }
    /**
     * GetUserFeed
     */
    OnlyFansAPI.prototype.GetUserFeed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get("\n        https://onlyfans.com/api2/v2/users/15585607/posts?limit=10&order=publish_date_desc&skip_users=all&skip_users_dups=1&pinned=0&format=infinite")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return OnlyFansAPI;
}());
var OF = new OnlyFansAPI('maaktnietuit');
var t = OF.GetUserFeed();
console.log(t);
