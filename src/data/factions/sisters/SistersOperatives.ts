import OperativeBase from "../../../types/OperativeBase";


export const Celestian : OperativeBase =
{
    type:"Celestian",
    mv:6,
    ws:3,
    bs:3,
    act:3,
    wnd:9,
    sv:3,
    pt:36,
}

export const BattleSister : OperativeBase =
{
    type:"Battle Sister",
    mv:6,
    ws:4,
    bs:3,
    act:2,
    wnd:8,
    sv:3,
    pt:26,
}

export const Neophyte : OperativeBase =
{
    type:"Neophyte",
    mv:6,
    ws:4,
    bs:4,
    act:2,
    wnd:8,
    sv:4,
    pt:15,
}

export const ArcoFlagellant : OperativeBase =
{
    type:"Arco-flagellant",
    mv:7,
    ws:4,
    bs:6,
    act:2,
    wnd:10,
    sv:5,
    pt:15,
    notes:"Arco-flagellants are Limited."
}

export const Repentia : OperativeBase =
{
    type:"Repentia",
    mv:6,
    ws:3,
    bs:5,
    act:2,
    wnd:8,
    sv:6,
    pt:13,
    notes:"Repentia have Relentless"
}

export const SistersOperatives : OperativeBase[] =
[
    Celestian,
    BattleSister,
    Neophyte,
    ArcoFlagellant,
    Repentia
]

export default SistersOperatives;