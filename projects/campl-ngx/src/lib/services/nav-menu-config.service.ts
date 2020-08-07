import { InjectionToken } from '@angular/core';
import { NavMenu } from '../models/nav-menu';

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionToken used to import the config object, provided from the outside
 * Constraints:
 *  An Injection Token  does not allow you to inject something with runtime representation
 *  (https://www.inversionofcontrol.co.uk/injection-tokens-in-angular/)
 */

export const NavMenuConfigService = new InjectionToken<NavMenu>('NavMenu');
