import {Model} from "./Model.model";

export class AdminModel extends Model{
  id: number;
  username: string;
  superRoot: boolean;

  constructor(id : number, username : string, superRoot : boolean) {
    super();
    this.id = id;
    this.username = username;
    this.superRoot = superRoot;
  }
}
