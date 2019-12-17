# Projectlight-ngx _**(Under development)**_

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/S-Stephen/angular-edpcmentoring)

This project contains the source for campl-ngx an angular library providing components to build a University of Cambridge Projectlight style web application. Please see the [angular.json](./angular.json) file for a list of projects included in this repository. The root directory containing the source of an angular application is to be used to vie wdevelopment of the library as well as a place to run e2e tests with the components.

The quickest way to view an example of a site is to open the repository in gitpod following the link above. Doing so will build and install the angular library into the boilerplate app, run the **add** schematic and start the development webserver which can be previewed online.

Hopefully apparent from [angular.json](./angular.json) here is a summary of some of the directories:

- **/src** - a prototype/example application utilising the campl-ng library
- **/project/campl-ngx** - The campl-ngx library itself
- **/e2e** - protractor test to be written against our prototype application

## Development server

If you are not loading from gitpod then to get the prototype application running:

```
npm install
ng build campl-ngx
cd .\projects\campl-ngx\
npm install
npm run build
cd ..\..\dist\campl-ngx\
npm pack
cd ..\..\
npm install .\dist\campl-ngx\campl-ngx*.tgz
ng add campl-ngx
```

**NB.** In [src/app/app.module.ts](./src/app/app.module.ts) remove the second entry for **CamplNgxModule.setConfig** so that config is taken from the [./src/environments/environment.common.ts](./src/environments/environment.common.ts) file

Run `ng serve` for the dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

In actioning the above the campl-ngx library has now been installed into our application, so any modification to the library will require a rebuild and re-installation to see their effects

## Debug whilst development:

To view the changes produced by editing the campl-ngx library, we need to build the library:

If you have installed the library via the **npm install \*.tgz** command we need to uninstall:

In our repository root:

```
npm uninstall campl-ngx
```

Because the application was bundling assets from the node_modules/campl-ngx directory you will need to edit angular.json file and modify entries in the scripts array (eg those refering to modernizr) to reference

./projects/campl-ng/src/assets/javascripts/libs/...

Then to build the library (which will now be found via the tsconfig.app.json config)

```
cd projects/campl-ngx
npm run build
```

To attach and run a debugger take a look at: https://medium.com/@MarkPieszak/debugging-angular-cli-inside-vscode-with-browser-preview-8dcc4b18ed64

# The usual advice whilst developing the prototype application:

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.
