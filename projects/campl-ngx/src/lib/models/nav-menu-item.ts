import { Deserializable } from './deserializable.model';

/**
 * Class provides a NavMenuItem to be displayedd in our Navigation Menu. 
 * 
 * 
 * Export this via public-api.js and it will available in our app when importing campl-ngx
 * 
 * We do not add these to the declarations in the library model: https://stackoverflow.com/questions/53932862
 * 
 */

export class NavMenuItem implements Deserializable{
    label: string;
    link: string;
    subItems:NavMenuItem[];

    constructor(){}

    public pushItem(newItem: NavMenuItem) {
        this.subItems.push(newItem);
    }
    public unshiftItem(newItem: NavMenuItem) {
        this.subItems.unshift(newItem);
    }
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}

