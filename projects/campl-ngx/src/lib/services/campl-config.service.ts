import { InjectionToken } from '@angular/core';
import { NavMenu } from '../models/nav-menu';

/**
 * This is not a real service, but it looks like it is from the outside.
 * It's just an InjectionToken used to import the config object, provided from the outside
 *
 * in the Token we will provide settings to configure the pages in this library eg:
 *
 * page_title
 * header_links
 * main_heading
 * localfooter_links
 * footer_links
 *
 * (If these are not supplied defaults will be used)
 *
 * Constraints:
 *  An Injection Token  does not allow you to inject something with runtime representation
 *  (https://www.inversionofcontrol.co.uk/injection-tokens-in-angular/)
 */

export const CamplConfigService = new InjectionToken<any>('CamplConfig');
