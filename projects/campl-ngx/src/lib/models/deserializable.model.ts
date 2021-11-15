// https://nehalist.io/working-with-models-in-angular/

export interface Deserializable {
    deserialize(input: any): this;
}
