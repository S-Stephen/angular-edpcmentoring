import {
  Rule,
  SchematicContext,
  Tree,
  SchematicsException,
  url,
  move,
  apply,
  mergeWith,
  MergeStrategy,
  template,
  chain,
  noop
} from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
//import { buildDefaultPath } from "@schematics/angular/utility/project";
import {
  addModuleImportToModule,
  buildDefaultPath,
  NodeDependencyType,
  NodeDependency,
  addPackageJsonDependency,
  appendHtmlElementToHead
  /*parseName*/
  // addSymbolToNgModuleMetadata no available - not exported
} from "schematics-utilities";

// Just return the tree
export function ngAdd(options: any): Rule {
  return chain([
    options && options.skipPackageJson ? noop() : addPackageJsonDependencies(),
    options && options.skipPackageJson
      ? noop()
      : installPackageJsonDependencies(),
    options && options.skipConfig ? noop() : createRouterModule(),
    options && options.skipConfig ? noop() : configureAppModule(options),
    options && options.skipConfig ? noop() : addModernizrFile(options),
    options && options.skipConfig ? noop() : addIosOrientationFixFile(options),
    options && options.skipConfig ? noop() : insertTypeKitScript()
  ]);
}

function insertTypeKitScript(): Rule {
  // This needs inserting into the head of our document

  //Test that a src/index.html file exists
  //and assume this is used to load the boilerplate

  //TODO check angular.json to make sure 'index' value in build has not been modified
  //eg by https://stackoverflow.com/questions/50113794/angular-how-to-dynamically-change-the-content-in-the-index-html-file-when-runn/57274333#57274333

  return (host: Tree, context: SchematicContext) => {
    let indexfile = "src/index.html";

    const foundIndexFile = host.read(indexfile);
    if (foundIndexFile) {
      appendHtmlElementToHead(host, "./src/index.html", typeKitInclude());
      context.logger.log("info", `✅️ Added typeKit`);
    } else {
      context.logger.log(
        "error",
        `🚫 - typeKit not added UI might not be rendering correctly!`
      );
    }
  };
}

function typeKitInclude() {
  // returns the HTML element to include for typeKit
  return `
  <script type="text/javascript" src="//use.typekit.com/hyb5bko.js"></script>
  <script type="text/javascript">
    try {
      Typekit.load();
    } catch (e) {}
  </script>
  <script type="text/javascript">
    document.documentElement.className += " js";
  </script>
  `;
}

function createRouterModule(): Rule {
  return (host: Tree, context: SchematicContext) => {
    // Only if it doesn't already exist
    let routeFile = "./src/app/routes/routing.module.ts";
    if (!host.exists(routeFile)) {
      // we need to create the ./routes/routing.module file
      host.create(routeFile, routerModuleFile());
    }
    // and add this to the AppModule
    addModuleImportToModule(
      host,
      "./src/app/app.module.ts",
      "RoutingModule",
      "./routes/routing.module"
    );

    context.logger.log("info", `✅️ Added RouterModule`);
  };
}

function addModernizrFile(options: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    const modernizrName = "modernizr";
    const modernizrPath =
      "node_modules/campl-ngx/assets/javascripts/libs/modernizr.js";

    try {
      const angularJsonFile = host.read("angular.json");

      if (angularJsonFile) {
        const angularJsonFileObject = JSON.parse(
          angularJsonFile.toString("utf-8")
        );
        const project = options.project
          ? options.project
          : Object.keys(angularJsonFileObject["projects"])[0];
        const projectObject = angularJsonFileObject.projects[project];
        const scripts = projectObject.architect.build.options.scripts;

        scripts.push({
          input: modernizrPath
        });
        host.overwrite(
          "angular.json",
          JSON.stringify(angularJsonFileObject, null, 2)
        );
      }
    } catch (e) {
      context.logger.log(
        "error",
        `🚫 Failed to add the modernizr file "${modernizrName}" to scripts ${e}`
      );

      throw new SchematicsException(
        `Unable to add ${modernizrName} to scripts:`
      );
    }

    context.logger.log("info", `✅️ Added "${modernizrName}" to scripts`);

    return host;
  };
}

function addIosOrientationFixFile(options: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    const name = "iosOrientationFix";
    const path =
      "node_modules/campl-ngx/assets/javascripts/libs/ios-orientation-fix.js";

    try {
      const angularJsonFile = host.read("angular.json");

      if (angularJsonFile) {
        const angularJsonFileObject = JSON.parse(
          angularJsonFile.toString("utf-8")
        );
        const project = options.project
          ? options.project
          : Object.keys(angularJsonFileObject["projects"])[0];
        const projectObject = angularJsonFileObject.projects[project];
        const scripts = projectObject.architect.build.options.scripts;

        scripts.push({
          input: path
        });
        host.overwrite(
          "angular.json",
          JSON.stringify(angularJsonFileObject, null, 2)
        );
      }
    } catch (e) {
      context.logger.log(
        "error",
        `🚫 Failed to add the modernizr file "${name}" to scripts ${e}`
      );

      throw new SchematicsException(`Unable to add ${name} to scripts:`);
    }

    context.logger.log("info", `✅️ Added "${name}" to scripts`);

    return host;
  };
}
function addPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    const dependencies: NodeDependency[] = [
      {
        type: NodeDependencyType.Default,
        version:
          "https://github.com/S-Stephen/angular-edpcmentoring/releases/download/v0.0.1-alpha-1/campl-ngx-0.0.1.tgz",
        name: "campl-ngx"
      },
      {
        type: NodeDependencyType.Default,
        version: "^6.5.3",
        name: "rxjs"
      },
      {
        type: NodeDependencyType.Default,
        version: "^6.5.3",
        name: "rxjs-compat"
      }
    ];

    dependencies.forEach(dependency => {
      addPackageJsonDependency(host, dependency);
      context.logger.log(
        "info",
        `Added "${dependency.name}" into ${dependency.type}`
      );
    });

    return host;
  };
}

function installPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.log("info", `🔍 Installing packages...`);

    return host;
  };
}

function configureAppModule(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = tree.read("angular.json");
    if (!workspaceConfigBuffer) {
      throw new SchematicsException("Not an Angular CLI workspace");
    }

    // get the default project and its path -> this is where we will copy our file
    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    const projectName = _options.project || workspaceConfig.defaultProject;
    const project = workspaceConfig.projects[projectName];

    // addModuleImportToModule will remove a function call for the import statement
    // provided there are no new line characters in the function call!
    const config = camplConfigDefaults().replace(/\r?\n|\r/g, " ");
    // the alternatives are:
    // to set a variable in the module file using another schematics-utilities command?
    // to modify the library to search the app root for a particular file

    addModuleImportToModule(
      tree,
      "./src/app/app.module.ts",
      "CamplNgxModule.setConfig(" + config + ")",
      "campl-ngx"
    );

    addModuleImportToModule(
      tree,
      "./src/app/app.module.ts",
      "RoutingModule",
      "./routes/routing.module"
    );

    // however let's try to move some of our assets (namely javascripts/libs/modernizr.js into assets/javascripts/libs/modernizr.js) and add an entry in the angular,json file

    const defaultProjectPath = buildDefaultPath(project);
    /*const parsedPath = parseName(defaultProjectPath, _options.name);
    const { name, path } = parsedPath;
    */
    const sourceFiles = apply(url("./files"), [
      template({}),
      move("/src/test")
    ]);
    //console.log(name);
    //console.log(filesToMove);
    //const rule = mergeWith(sourceFiles, MergeStrategy.Overwrite);
    // move our files into the src/assets folder
    // if we wish to have them elsewhere we would need to also edit angular.json

    tree.getDir("./src/assets_moved").visit(filepath => {
      console.log("DEBUG filepath: " + filepath);
    });

    //_context.addTask(new NodePackageInstallTask());
    console.log(defaultProjectPath);
    console.log(sourceFiles);
    //console.log(project);
    //tree.create("hello1.js", `console.log("hello world:")`);
    const myrule = mergeWith(sourceFiles, MergeStrategy.Overwrite);
    return myrule(tree, _context);
  };
}

function routerModuleFile(): string {
  // TODO cat the routes/routing.module.ts file
  // TODO why can we not translate with a blank template?
  // apply template and move/
  return `
  import { NgModule } from "@angular/core";
  import { RouterModule, Routes } from "@angular/router";
  //import { HomeComponent } from "../home/home.component";
  //import { MatchComponent } from "../match/match.component";
  
  const routes: Routes = [
  //  { path: "home", component: HomeComponent },
  //  { path: "match", component: MatchComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class RoutingModule {}
  
  `;
}

function camplConfigDefaults(): string {
  /**
   * returns an example config file used to setup the initial pojectlight content etc
   * TODO provide this as an argument ?which could be a reference to a json file?
   */

  return `{
    page_title: "Your title here",
    local_footer_col1: [
      {
        label: "Local footer 1",
        link: "https://somelink"
      },
      {
        label: "Local footer 1a",
        link: "https://somelink1a"
      }
    ],
    local_footer_col2: [
      { label: "local footer2", link: "https://edpc.eng.cam.ac.uk/aboutus" }
    ],
    quicklinks: [
      { link: "http://www.cam.ac.uk/for-staff", label: "For staff" },
      {
        link: "http://www.cam.ac.uk/current-students",
        label: "For current students"
      },
      { link: "http://www.alumni.cam.ac.uk", label: "For alumni" },
      { link: "http://www.cam.ac.uk/for-business", label: "For business" },
      {
        link: "http://www.cam.ac.uk/colleges-and-departments",
        label: "Colleges & departments"
      },
      {
        link: "http://www.lib.cam.ac.uk/libraries/",
        label: "Libraries & facilities"
      },
      {
        link: "http://www.cam.ac.uk/museums-and-collections",
        label: "Museums & collections"
      },
      {
        link: "http://www.cam.ac.uk/email-and-phone-search",
        label: "Email & phone search"
      }
    ],
    global_nav: [
      {
        label: "Study at Cambridge",
        link: "http://www.cam.ac.uk/study-at-cambridge",
        anchor: "studyatcambridge",
        sub: [
          {
            label: "Undergraduate",
            link: "http://www.study.cam.ac.uk/undergraduate/",
            sub: [
              {
                label: "Course",
                link: "http://www.undergraduate.study.cam.ac.uk/courses"
              },
              {
                label: "Applying",
                link: "http://www.undergraduate.study.cam.ac.uk/applying"
              },
              {
                label: "Events and open days",
                link: "http://www.undergraduate.study.cam.ac.uk/events"
              },
              {
                label: "Fees and Finances",
                link: "http://www.undergraduate.study.cam.ac.uk/financess"
              },
              {
                label: "Student blogs and videos",
                link: "http://www.becambridge.com/"
              }
            ]
          },
          {
            label: "Graduate",
            link: "http://www.graduate.study.cam.ac.uk",
            sub: [
              {
                label: "Why Cambridge",
                link:
                  "http://www.graduate.study.cam.ac.uk/why-cambridge/welcome-vice-chancellor"
              },
              {
                label: "How to apply",
                link: "http://www.graduate.study.cam.ac.uk/how-do-i-apply"
              },
              {
                label: "Fees and funding",
                link:
                  "http://www.cambridgestudents.cam.ac.uk/fees-and-funding"
              },
              {
                label: "Frequently asked questions",
                link: "http://www.graduate.study.cam.ac.uk/faqs/applicant"
              }
            ]
          },
          {
            label: "International students",
            link: "http://www.internationalstudents.cam.ac.uk"
          },
          {
            label: "Continuing education",
            link: "http://www.ice.cam.ac.uk"
          },
          {
            label: "Executive and professional education",
            link: "http://www.epe.admin.cam.ac.uk/"
          },
          {
            label: "Courses in education",
            link: "http://www.educ.cam.ac.uk"
          }
        ]
      },
      {
        label: "About the University",
        link: "http://www.cam.ac.uk/about-the-university",
        anchor: "abouttheuniversity",
        sub: [
          {
            sub: [
              {
                label: "How the University and Colleges work",
                link:
                  "http://www.cam.ac.uk/about-the-university/how-the-university-and-colleges-work",
                sub: []
              },
              {
                label: "History",
                link: "http://www.cam.ac.uk/about-the-university/history"
              },
              {
                label: "Visiting the University",
                link:
                  "http://www.cam.ac.uk/about-the-university/visiting-the-university"
              },
              {
                label: "Term dates and calendars",
                link:
                  "http://www.cam.ac.uk/about-the-university/term-dates-and-calendars"
              },
              {
                label: "Map",
                link: "http://map.cam.ac.uk"
              }
            ]
          },
          {
            sub: [
              {
                label: "For media",
                link: "http://www.communications.cam.ac.uk/"
              },
              {
                label: "Video and audio",
                link: "http://www.cam.ac.uk/video-and-audio"
              },
              {
                label: "Find an expert",
                link: "http://webservices.admin.cam.ac.uk/fae/"
              },
              {
                label: "Publications",
                link: "http://www.cam.ac.uk/about-the-university/publications"
              },
              {
                label: "Global Cambridge",
                link: "http://www.cam.ac.uk/global-cambridge"
              }
            ]
          },
          {
            sub: [
              { link: "http://www.cam.ac.uk/news", label: "News" },
              {
                link: "http://www.admin.cam.ac.uk/whatson/",
                label: "Events"
              },
              {
                link: "http://www.cam.ac.uk/public-engagement",
                label: "Public engagement"
              },
              {
                link: "http://www.jobs.cam.ac.uk",
                label: "Jobs"
              },
              {
                link: "https://philanthropy.cam.ac.uk",
                label: "Give to Cambridge"
              }
            ]
          }
        ]
      },
      {
        label: "Research at Cambridge",
        link: "http://www.cam.ac.uk/research"
      }
    ]
  }`;
}
