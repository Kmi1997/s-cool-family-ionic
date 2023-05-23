import { Model } from "./Model.model";

export class InternshipModel extends Model {
    id: number;
    fromAge: number;
    name: string;
    numberAvailable: number;
    place: string;
    price: number;
    startDate: Date;
    startHour: string;
    endHour: string;
    endDate: Date;

    constructor(
        id: number,
        fromAge: number,
        name: string,
        numberAvailable: number,
        place: string,
        price: number,
        startDate: Date,
        startHour: string,
        endHour: string,
        endDate: Date
    ) {
        super();
        this.id = id;
        this.fromAge = fromAge;
        this.name = name;
        this.numberAvailable = numberAvailable;
        this.place = place;
        this.price = price;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startHour = startHour;
        this.endHour = endHour;
    }

}