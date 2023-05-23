import { Model } from "./Model.model";

export class DeleteResponseModel<T> extends Model {
    message: string;
    results: T;
}