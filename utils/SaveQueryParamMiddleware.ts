import { Middleware } from "@nuxt/types";

export const SaveQueryParamMiddleware = (param: string): Middleware =>
  function (context): void {
    const {
      app: { $config, $storage },
      query,
    } = context;
    const paramValue = $config[param];

    const queryValue = query[paramValue];
    const savedValue = $storage.getUniversal(paramValue);

    if (queryValue && queryValue !== savedValue) {
      $storage.setUniversal(paramValue, queryValue);
    }
  };
