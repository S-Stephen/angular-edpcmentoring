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

**src/app/app.component.html**

```
<campl-ngx-app [nav_menu$]="my_nav$"></campl-ngx-app>
```

Where the navigation menu is to be setup in the app.component.ts file, perhaps based on who the identified user is, or by default as n the example below;

**src/app/app.component.ts**

```

import { Observable } from "rxjs/Observable";
import { of } from "rxjs";
import { NavMenu, NavMenuItem } from "campl-ngx";
...


export class AppComponent {
  ...
  my_nav$: Observable<NavMenu>;
  title = "test-campl-ng8";
  constructor() {
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
    let mLogout: NavMenuItem = {
      label: "Actions",
      link: "",
      subItems: [{ label: "Log out", link: "/accounts/logout/", subItems: [] }]
    };
    let nm: NavMenu = {
      title: "Navigation Menu",
      subMenus: [mHome, mMatch, mLogout]
    };
    this.my_nav$ = of(nm);
  }
}
```

Add the following into the head of your **src/app/index.html** file:

```
  <head>
  ...
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
```

Then start the server:

```
ng serve
```

An example site should be available at localhost:4200

### Configure the global menus

Replace the argument to CamplNgxModule.setConfig() in **src/app/app.module.ts** with a function call that returns the correct config object.

### Components available

*Roughly associated to atomic design:*

#### Templates

_campl-ngx-app_  a template with header and footer, and university of Cambridge links

#### Organisms

_campl-ngx-footer_
_campl-ngx-header_
_campl-ngx-localfooter_
_campl-ngx-titlenav_

#### Molecules

_campl-ngx-localnav-menu_
_campl-ngx-nav_
_campl-ngx-quicklinks_


#### Atoms

_campl-ngx-messages_
_campl-ngx-table_


This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.4.
