# CamplNgx

This is an Angular (8) library which can be used to produce a UI based around the University of Cambridge, Project Light template

## Quickstart:

Within the root directory of your Angular application:

(if you have not created one already)

```
ng new my-new-app
cd my-new-app
```

Install this library and the required peerDependancy: **schematics-utilities@^2.0.0**. Then add the campl-ngx components to the application.

```
npm install campl-ngx

npm install schematics-utilities@^2.0.0

ng add campl-ngx
```

Include the site template, for example wrap your UI (eg content of app.component.html) with

```
<campl-ngx-app></campl-ngx-app>
```

Then start the server:

```
ng serve
```

An example site should be available at localhost:4200

### Configure the navigation menus

Replace the argument to CamplNgxModule.setConfig() in app.module.ts with a function call that returns the correct config object.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.4.
