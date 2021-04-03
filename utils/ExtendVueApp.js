"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ExtendVueApp(app, mixin) {
    if (!app.mixins) {
        app.mixins = [];
    }
    app.mixins.push(mixin);
}
exports.default = ExtendVueApp;
