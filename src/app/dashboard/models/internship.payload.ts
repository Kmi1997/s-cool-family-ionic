
export class InternshipPayload {
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