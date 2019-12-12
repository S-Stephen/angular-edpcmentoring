import { environment_common } from "./environment.common";

let retenv = environment_common;

// EDIT HERE
// This will override or append to our common environment variables
// TODO improve this method
// ?https://medium.com/@madridserginho/angular-environments-inheritance-4423e6d6c99d?
// or by inheritance someway?
let env = {
  production: true
};

Object.keys(env).forEach(function(key) {
  retenv[key] = env[key];
});

export const environment = retenv;
