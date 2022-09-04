import Point from "../types/Point";

export interface IGlossaryItem {
    name:string
    effect:string
    pt?:Point
    restrictons?:string
}

export default IGlossaryItem;