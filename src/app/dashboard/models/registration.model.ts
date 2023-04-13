import { Model } from "./Model.model";
export class RegistrationModel extends Model {

  childName : string;
  parentName : string;
  parentPhone : string;
  age : number;
  paid : boolean;
  mail: string;
  healthIssue : string;
  internshipId: number;
  Internships : {name: string}[];
  id : number;
  constructor(
   childName : string,
   parentName: string,
   parentPhone: string,
   age: number,
   paid: boolean,
   mail: string,
   healthIssue: string,
   internshipId: number,
   Internships : {name: string}[],
   id : number,
  ) {
   super();
   this.childName = childName;
   this.age = age;
   this.healthIssue = healthIssue;
   this.paid = paid;
   this.parentPhone = parentPhone;
   this.parentName = parentName;
   this.internshipId = internshipId;
   this.mail = mail;
   this.Internships = Internships;
   this.id = id;
  }

}
