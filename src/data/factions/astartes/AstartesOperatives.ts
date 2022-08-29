import OperativeBase from "../../../types/OperativeBase"


export const SpaceMarine : OperativeBase =
{
    type:"Space Marine",
    mv:6,
    ws:3,
    bs:3,
    act:3,
    wnd:12,
    sv:3,
    pt:42
}

export const Scout : OperativeBase =
{
    type:"Scout",
    mv:6,
    ws:3,
    bs:3,
    act:2,
    wnd:8,
    sv:4,
    pt:22
}

export const Servitor : OperativeBase =
{
    type:"Servitor",
    mv:6,
    ws:5,
    bs:5,
    act:2,
    wnd:8,
    sv:6,
    pt:7,
    notes:"Servitors have the Limited special rule."
}

export const AstartesOperatives : OperativeBase[] =
[SpaceMarine,Scout,Servitor]

export default AstartesOperatives;