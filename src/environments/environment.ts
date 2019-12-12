// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { environment_common } from "./environment.common";

let retenv = environment_common;

// EDIT HERE
// This will override or append to our common environment variables
// TODO improve this method
// ?https://medium.com/@madridserginho/angular-environments-inheritance-4423e6d6c99d?
// or by inheritance someway?
let env = {
  production: false,
  mock: true
};

Object.keys(env).forEach(function(key) {
  retenv[key] = env[key];
});

export const environment = retenv;
