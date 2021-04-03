import { NuxtAppOptions } from "@nuxt/types/app";

export default function ExtendVueApp(app: NuxtAppOptions, mixin: any): void {
  if (!app.mixins) {
    app.mixins = [];
  }
  app.mixins.push(mixin);
}
