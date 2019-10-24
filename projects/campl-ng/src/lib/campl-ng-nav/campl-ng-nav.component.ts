import { Component, OnInit, Inject, Input } from "@angular/core";
import { NavMenu } from "../models/nav-menu";
import { Observable } from "rxjs/Observable";
// might be better to replace testing Capabilities with directives that do so?
import { CamplNgCapabilitiesService } from "../services/campl-ng-capabilities.service";
import { CamplNgPrimaryMenuStateService } from "../services/campl-ng-primary-menu-state.service";
//import { NavMenuService } from "../services/nav-menu.service";
//import { NavMenu } from "../models/nav-menu";

// defined as const in model rather than separate field atm
// import { NavMenuConfigService } from ??

@Component({
  selector: "campl-ng-nav",
  templateUrl: "./campl-ng-nav.component.html",
  styleUrls: ["./campl-ng-nav.component.css"]
})
export class CamplNgNavComponent implements OnInit {
  @Input()
  nav_menu$: Observable<NavMenu>;
  capabilities: any;
  myid = "CamplNgNavComponent";

  public nav_menu: NavMenu;
  constructor(
    public primary_comp: CamplNgPrimaryMenuStateService,
    public browser_capabilities: CamplNgCapabilitiesService
  ) {
    browser_capabilities.modernizrSource.subscribe(capabilities => {
      this.capabilities = capabilities;
    });
  }

  ngOnInit() {
    this.nav_menu$.subscribe(nm => (this.nav_menu = nm));
  }

  clickMenuBtn() {
    alert(" TODO: action the custom.js ");

    // gain control:
    this.primary_comp.sendId(this.myid);
    /** 				
						$openMenu.click(function () { 
							var $linkClicked = $(this);

							//close main nav drawer or search panel if open
							$("body").removeClass("campl-navigation-open");
							projectlight.$searchDrawer.removeClass("campl-search-open");

							if ($linkClicked.parent().hasClass("campl-closed")) {
								displayMenu("show")
							} else {
								displayMenu("hide")
							}
							return false
            });
            ');
          }

          ...
          
		//shows the desktop dropdown menus by positioning them on or off screen
		function displayMenu(actionSent) {
			if (actionSent == "show") {

				//Walk up through DOM to determine nested level
				var $currentUL = $currentPageListitem.parent();
				currentSectionNo = 0;
				if ($currentPageListitem.length > 0) {
					if ($currentPageListitem.parent().length > 0) {
						//do while this is UL
						while ($currentUL[0].tagName === "UL") {
							$currentUL.addClass("campl-current") // this displays hidden nav sections
							if ($currentUL.parent()[0].tagName === "LI") {
								$currentUL.parent().addClass("campl-current") //need to add current to full path, UL and LI
							}
							$currentUL = $currentUL.parent().parent();
							currentSectionNo++;
						}
						//set current menu position depending on which nested level the active page is on
						menuPosition = currentSectionNo - 1;
						$navContainer.children("ul").removeClass("campl-current")
					}
				} else {
					menuPosition = 0
				}

				//get current menu width
				if (Modernizr.mq('only screen and (min-width: 768px)')) {
					widthOfMenu = 480;
				} else {
					widthOfMenu = $(window).width();
				}

				//set left position depending which level to open menu at
				$navContainer.css({
					left: -(menuPosition * widthOfMenu)
				});

				$openMenu.parent().removeClass("campl-closed").addClass("campl-open");
			} else {
				if (actionSent == "hide") {
					$openMenu.parent().removeClass("campl-open").addClass("campl-closed");
					$navContainer.css({
						left: -9999
					});

					//need to force top container to go away. Ghost block seemed to be staying on screen even
					//though CSS should have removed it, this hack forces it to be hidden then removes the display
					//style to allow it to be controlled by the CSS again
					$navContainer.find(".campl-current").removeClass("campl-current").hide();
					$navContainer.find(':hidden').css("display", "")

					//reset menu back to opening position
					menuPosition = currentSectionNo - 1;
				}
			}
		}

          **/
  }
}
