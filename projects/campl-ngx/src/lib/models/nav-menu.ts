import { Deserializable } from './deserializable.model';

import { NavMenuItem } from './nav-menu-item';

/**
 * Class provides a NavMenu to be used when configuring the Navigation Menus. 
 * 
 * A container for NavmMenuItems.
 * 
 * Export this via public-api.js and it will available in our app when importing campl-ngx
 * 
 * We do not add these to the declarations in the library model: https://stackoverflow.com/questions/53932862
 * 
 */

export class NavMenu implements Deserializable{

  subMenus: NavMenuItem[];
  title: string;
  // There is no link cf NavMenuItem

  constructor(){}

  public pushItem(newItem: NavMenuItem) {
      this.subMenus.push(newItem);
  }
  public unshiftItem(newItem: NavMenuItem) {
      this.subMenus.unshift(newItem);
  }
  deserialize(input: any): this {
      Object.assign(this, input);
      return this;
  }
}
