import { type } from "os";

class Pokemon {
  public id: number;
  public name: string;
  public types: Type[];
  public order: number;

  public constructor(id: number, name: string, types: Type[], order: number) {
    this.id = id;
    this.name = name;
    this.order = order;
    this.types = types;
  }
}
