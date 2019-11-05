# CamplNgx

This is an Angular (8) library which can be used to produce a UI based around the University of Cambridge, Project Light template

## Quickstart:

Assuming that you application is the default 'app' instantiation. (ng new <your_app_name>; cd <your_app_name>)

Include in your app.module.ts file:

```
import { CamplNgxModule } from "campl-ngx";

@NgModule({
  ...
  imports: [
    CamplNgxModule.setConfig({})
    ...],
  bootstrap: [AppComponent],
})
```

In app.component.html include the root component:

```
<campl-ngx-app [nav_menu$]="nav_menu$"></campl-ngx-app>
  <!-- place your component logic here -->
</campl-ngx-app>
```

The app.component needs to setup and pass the nav_menu\$ Observable. This is an Observable to allow your application to query a service and apply logic to the navigation dropdowns to your page. If you do not need to apply logic you could pass the set of menu by the Object passed to the setConfig() call as follows

Consider **setConfig(myobj)**

where **myobj** includes a key and value **myobj.nav_menu_static**:

```
  let mMenu1: NavMenuItem = {
    label: "Menu1",
    link: "/menu1_link",
    subItems: []
  };
  let mMenu2: NavMenuItem = {
    label: "Menu2",
    link: "/menu2_link",
    subItems: []
  };
  let mMenuWithSubMenu: NavMenuItem = {
    label: "Has Submenu",
    link: "/sub",
    subItems: [{
      label: "Sub menu 1",
      link: "/sub1",
      subItems: [
        { label: "SM item1", link: "/sm_item1", subItems: [] },
        { label: "SM item2", link: "/sm_item2", subItems: [] }
      ]
    }]
  }
  let nm: NavMenu = {
    title: "Navigation Menu",
    subMenus: [mMenu1, mMenu2, mMenuWithSubMenu]
  };
  myobj = {...
          nav_menu_static: nm }
```

Then in our application controller eg **app.component.ts**

```
import { Observable, of } from "rxjs";
import { CamplService, NavMenu } from "campl-ngx;

@Component({
  ...
})
export class AppComponent {

  nav_menu$: Observable<<NavMenu>;
  constructor( public campl_config: CamplService ) {
    this.nav_menu$ = of(campl_config["nav_menu_static"]);
  }
}
```

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.4.
