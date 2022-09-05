import DiceCalc from "./DiceCalc"
import Equipment from "./Equipment"
import Point from "./Point"
import Skill from "./Skill"
import Weapon from "./Weapon"

export type OperativeBase = Stats & {
    type: string
    pt:Point
    isPsyker?: boolean
    weapons?:Weapon[]
    equipment?:Equipment[]
    skills?:Skill[]
    notes?:string
}
export default OperativeBase;

export type Stats = {
    mv:number | DiceCalc
    ws:number
    bs:number
    act:number
    wnd:number
    sv:number
}