"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveQueryParamMiddleware = void 0;
var SaveQueryParamMiddleware = function (param) {
    return function (context) {
        var _a = context.app, $config = _a.$config, $storage = _a.$storage, query = context.query;
        var paramValue = $config[param];
        var queryValue = query[paramValue];
        var savedValue = $storage.getUniversal(paramValue);
        if (queryValue && queryValue !== savedValue) {
            $storage.setCookie(paramValue, queryValue);
        }
    };
};
exports.SaveQueryParamMiddleware = SaveQueryParamMiddleware;
