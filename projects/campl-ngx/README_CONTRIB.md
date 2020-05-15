## Code scaffolding

Run `ng generate component component-name --project campl-ngx` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project campl-ngx`.

> Note: Don't forget to add `--project campl-ngx` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build campl-ngx` to build the project. The build artifacts will be stored in the `dist/` directory.
Change working directory to the `dist/campl-ngx` directory and run `npm run build` (this transpiles our ts files, and copies other files into location)
Back in teh applicaton root (cd ../../) schematics .\dist\campl-ngx\schematics\collection.json:ng-add --debug=false

// about schematics: https://medium.com/@tomastrajan/total-guide-to-custom-angular-schematics-5c50cf90cdb4
// another neat reference: https://brianflove.com/2018/12/15/ng-add-schematic/
// how to copy a file using schematics: https://nitayneeman.com/posts/making-an-addable-angular-package-using-schematics/
// we may need to link the schematic to the library: https://angular.io/guide/schematics-for-libraries

## Developing the Library

Various layouts using this library can be viewed and configured using the parent repository. To acheive this without having to go throught the pack and install steps seen in the gitpod file:

Add the following to the tsconfig.json file (found in the root of the application's directory):
```
"compilerOptions": {
  ...
  "paths": {
      "campl-ngx": [
        "dist/campl-ngx"
      ]
    },
  }
...
}
```

Then whilst editing the library build with the watch option:
```
ng build campl-ngx --watch
```

And to view the utilization via the parent app:
```
ng serve 
```

**N.B.** Following changes to the library - which should now be automatically rebuilt, you may need to run **ng serve** to restart the development server.

## Publishing

After building your library with `ng build campl-ngx`, go to the dist folder `cd dist/campl-ngx` and run `npm publish`.

## Running unit tests

Run `ng test campl-ngx` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Usage:

These Template files require you to import css, Javascript and image assets into your project under a projectlight directory.

You will then need to add the following into the **test** and **build** sections of your angular.js file:

```
            "styles": [
              "src/styles.css",
              "src/projectlight/stylesheets/custom.css",
              "src/projectlight/stylesheets/full-stylesheet.css",
              "src/projectlight/stylesheets/styleguide.css"
            ],
            "assets": [
              "src/assets",
              "src/favicon.ico",
              "src/projectlight/images/interface",
              "src/projectlight/javascripts/custom.js",
              "src/projectlight/javascripts/libs/bootstrap-tabs.js",
              "src/projectlight/javascripts/libs/datepicker_highlighted_events.js",
              "src/projectlight/javascripts/libs/ios-orientationchange-fix.js",
              "src/projectlight/javascripts/libs/jquery-min.js",
              "src/projectlight/javascripts/libs/modernizr.js",
              "src/projectlight/javascripts/libs/responsive-tooltip.js",
              "src/projectlight/javascripts/libs/zebra_datepicker.js"
            ]
```

Also required is to replace the index.html file with something like the following:

```
<!doctype html>
<html lang="en">

<head>
  <title>EDPC Mentoring Scheme</title>
  <base href="/">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="" />
  <meta name="author" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <script type="text/javascript" src="//use.typekit.com/hyb5bko.js"></script>
  <script type="text/javascript">
    try {
      Typekit.load();
    } catch (e) {}

  </script>
  <script type="text/javascript">
    document.documentElement.className += " js";

  </script>



</head>

<body>
  <app-root></app-root>

  <!-- placing in angular.json 'scripts' not working YET! -->
  <script type="text/javascript" src="/projectlight/javascripts/libs/ios-orientationchange-fix.js"></script>
  <script type="text/javascript" src="/projectlight/javascripts/libs/jquery-min.js"></script>
  <script type="text/javascript" src="/projectlight/javascripts/libs/modernizr.js"></script>
  <script type="text/javascript" src="/projectlight/javascripts/custom.js"></script>

</body>

</html>
```

**To pass site/page configuration** in the imports array of your applications module provide the config object to the setConfig() method:

```
    import { NavMenu } from "../../projects/campl-ngx/src/lib/models/nav-menu";

    ...

@NgModule({
  imports: [
    CamplNgxModule.setConfig({
      page_title: "EDPC Mentoring",
      local_footer_col1: [
        {
          label: "About the Scheme",
          link: "https://edpc.eng.cam.ac.uk/mentoring"
        }
      ],
      local_footer_col2: [
        { label: "About the EDPC", link: "https://edpc.eng.cam.ac.uk/aboutus" }
      ],
      quicklinks: [
          { label: "my label 1", link: "http://my link 1" },
          { label: "my label 2", link: "http://my link 2" }
      ]
    })
    ,...
  ]
  ...
})
```

Current values are:

- page_title
- local_footer_col1: MenuItem[]
- local_footer_col2: MenuItem[]
- local_footer_col3: MenuItem[]
- local_footer_col4: MenuItem[]

**To pass dynamic config** eg menus options which change based on user privilege:

Generate an observable which will generate the content and pass these to the root web-element (campl-ngx via an input)

TODO produce a schematic (https://angular.io/guide/schematics-for-libraries) to action the above (next time we use this library?)

The above should then be replaced with ng add command - hopefully

##### Configuration required in your app.module.ts file:

```
  @NgModule({
    ...
    providers: [
      ...
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
      }
    ]
  })
```

##### Constraints

At the moment local navigation menus only allow for tree two tiers deep eg;

```

    this.nav_menu$ = this.userService.response$.pipe(
      map(user => {
        /*let nm: NavMenu = {
          title: "Navigation Menu goes here",
          subMenu: []
        };
        return nm;*/
        //return { title: "some title", subMenu: [] };

        //user.first_name = "modified";
        let mHome: NavMenuItem = {
          label: "Home",
          link: "/home/",
          subItems: []
        };
        let mMatch: NavMenuItem = {
          label: "Match mentor and mentees",
          link: "/match/",
          subItems: []
        };
        let mAdmin: NavMenuItem = {
          label: "Admin",
          link: "/admin",
          subItems: [
            {
              label: "admin1",
              link: "/admin1",
              subItems: [
                { label: "admin1a", link: "/admin1a", subItems: [] },
                { label: "admin1b", link: "/admin1b", subItems: [] },
                //Not available:-
                //{
                //  label: "admin1c",
                //  link: "/admin1c",
                //  subItems: [
                //    { label: "admin1c1", link: "/admin1c1", subItems: [] },
                //    { label: "admin1c2", link: "/admin1c2", subItems: [] }
                //  ]
                //},
                { label: "admin1d", link: "/admin1d", subItems: [] }
              ]
            },
            { label: "admin2", link: "/admin2", subItems: [] },
            { label: "admin3", link: "/admin3", subItems: [] }
          ]
        };
        let mLogout: NavMenuItem = {
          label: user.last_name + " (" + user.username + ")",
          link: "",
          subItems: [
            { label: "Log out", link: "/accounts/logout/", subItems: [] }
          ]
        };
        let nm: NavMenu = {
          title: "Navigation Menu",
          subMenus: [mHome, mMatch, mAdmin, mLogout]
        };
        return nm;
      })
    );
```

##### In progress

Animation for local nav menus -> angular animation to replace jquery ones

##### To do

CSS modifications:

modify top-list-hover to set a variable that triggers class inclusion - rather than manipulating the DOM directly

Add animations when sliding submenus into focus
