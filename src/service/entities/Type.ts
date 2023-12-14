class Type {
  public name: string;
  public relations: TypeRelation;

  public constructor(name: string, relations: TypeRelation) {
    this.name = name;
    this.relations = relations;
  }
}

class TypeRelation {
  public constructor() {}
}
