import OperativeBase from "../../../types/OperativeBase";

export const Servitor : OperativeBase =
{
    type:"Servitor",
    mv:5,
    ws:4,
    bs:5,
    act:2,
    wnd:8,
    sv:6,
    pt:7,
    notes:"Servitors have the Limited special rule."
}

export const CombatServitor : OperativeBase =
{
    type:"Combat Servitor",
    mv:5,
    ws:3,
    bs:5,
    act:2,
    wnd:8,
    sv:6,
    pt:8,
    notes:"CombatServitor have the Limited special rule."
}

export const SupportServitor : OperativeBase =
{
    type:"Support Servitor",
    mv:5,
    ws:4,
    bs:4,
    act:2,
    wnd:8,
    sv:4,
    pt:14,
    notes:"Support Servitors have the Limited special rule."
}

export const LargeServitor : OperativeBase =
{
    type:"Large Servitor",
    mv:5,
    ws:4,
    bs:4,
    act:2,
    wnd:14,
    sv:4,
    pt:28,
    notes:"Large Servitors have the Limited special rule."
}

export const Skitarii : OperativeBase =
{
    type:"Skitarii",
    mv:6,
    ws:4,
    bs:3,
    act:2,
    wnd:7,
    sv:4,
    pt:20,
}

export const Sicaran : OperativeBase =
{
    type:"Sicaran",
    mv:7,
    ws:3,
    bs:4,
    act:2,
    wnd:8,
    sv:4,
    pt:20,
}

export const Magos : OperativeBase =
{
    type:"Magos",
    mv:6,
    ws:3,
    bs:3,
    act:3,
    wnd:9,
    sv:3,
    pt:36,
}

export const GrandMagos : OperativeBase =
{
    type:"Grand Magos",
    mv:6,
    ws:3,
    bs:3,
    act:3,
    wnd:12,
    sv:3,
    pt:44,
}

const MechanicusOperatives : OperativeBase[] =
[
    Servitor,
    CombatServitor,
    SupportServitor,
    LargeServitor,
    Skitarii,
    Sicaran,
    Magos,
    GrandMagos
]

export default MechanicusOperatives


