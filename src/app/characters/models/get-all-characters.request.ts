import { Episodes } from "./episodes";


export interface GetAllCharactersRequest{
    name?:string;
    actor?:string;
    episodes?:Episodes[];
    page?: number;
    size?: number;
    occupation? : string;

}
