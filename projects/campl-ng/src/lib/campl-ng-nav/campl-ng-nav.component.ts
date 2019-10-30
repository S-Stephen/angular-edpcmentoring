import { Component, OnInit, Inject, Input } from "@angular/core";
import { NavMenu } from "../models/nav-menu";
import { Observable } from "rxjs/Observable";
// might be better to replace testing Capabilities with directives that do so?
import { CamplNgCapabilitiesService } from "../services/campl-ng-capabilities.service";
import { CamplNgPrimaryMenuStateService } from "../services/campl-ng-primary-menu-state.service";
import { CamplNgLocalmenuService } from "../services/campl-ng-localmenu.service";
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
  public open_localnav: boolean = false; // used to manage control
  public left_pos: number = -9999;
  public menu_width: number = 480;
  public list_style: any = {};
  public local_nav_con_pos: number;

  window_width: number;

  public nav_menu: NavMenu;
  constructor(
    public primary_comp: CamplNgPrimaryMenuStateService,
    public browser_capabilities: CamplNgCapabilitiesService,
    public local_nav: CamplNgLocalmenuService
  ) {
    browser_capabilities.modernizrSource.subscribe(capabilities => {
      this.capabilities = capabilities;
    });
    local_nav.localNavSource.subscribe(pos => {
      this.local_nav_con_pos = pos;
    });
  }

  ngOnInit() {
    this.nav_menu$.subscribe(nm => (this.nav_menu = nm));
    this.primary_comp.id$.subscribe(id => {
      if (id == this.myid) {
        this.open_localnav = true;
        this.left_pos = 0;
      } else {
        this.open_localnav = false;
        this.left_pos = -9999;
      }
    });

    this.window_width = window.innerWidth;
  }
  /*
  onParentPos(position) {
    alert("move the parent menu: " + position);
    this.list_style = { "left.px": position };
  }
*/
  clickMenuBtn() {
    // clicking this will toggle the displayMenu

    // toggle control

    let controlto = "";
    if (this.open_localnav) {
      if (this.capabilities["mobile_layout"]) {
        this.menu_width = 0;
        this.local_nav.updatePosition(-9999);
      }
      controlto = "__NONE__";
    } else {
      // set the menu width based on capabilities
      if (this.capabilities["mobile_layout"]) {
        this.list_style = { "width.px": this.window_width };
        this.local_nav.updatePosition(0);
      }
      controlto = this.myid;
    }

    this.primary_comp.sendId(controlto);
    /** 				
						$openMenu.click(function () { 
							var $linkClicked = $(this);

							//close main nav drawer or search panel if open
							$("body").removeClass("campl-navigation-open");
							projectlight.$searchDrawer.removeClass("campl-search-open");
              */
    var target = event.target || event.srcElement || event.currentTarget;
    //if (target.hasClass("campl-closed"))
    // if the parent has class campl-closed
    // displayMenu("show")
    // else
    // displayMenu('Hide')
    /** 
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
