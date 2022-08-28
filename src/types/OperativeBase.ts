import Point from "./Point"

export type OperativeBase = Stats & {
    type: string
    pt:Point
    notes?:string[]
}
export default OperativeBase;

export type Stats = {
    mv:number
    ws:number
    bs:number
    act:number
    wnd:number
    sv:number
}