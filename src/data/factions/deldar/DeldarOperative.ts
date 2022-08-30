import OperativeBase from "../../../types/OperativeBase";

export const KabaliteWarrior : OperativeBase =
{
    type:"Kabalite Warrior",
    mv:7,
    ws:3,
    bs:3,
    act:2,
    wnd:6,
    sv:4,
    pt:18,
}

export const Wych : OperativeBase =
{
    type:"Wych",
    mv:8,
    ws:3,
    bs:3,
    act:2,
    wnd:6,
    sv:6,
    pt:15,
}

export const Wrack : OperativeBase =
{
    type:"Wrack",
    mv:7,
    ws:3,
    bs:3,
    act:2,
    wnd:9,
    sv:6,
    pt:18,
}

export const Mandrake : OperativeBase =
{
    type:"Mandrake",
    mv:7,
    ws:3,
    bs:3,
    act:2,
    wnd:7,
    sv:5,
    pt:24,
    notes:"Save cannot be modified and all attacks that target them are at -1 to hit. They may only be equipped with Bale weapons."
}

export const Grotesque : OperativeBase =
{
    type:"Grotesque",
    mv:7,
    ws:3,
    bs:6,
    act:2,
    wnd:14,
    sv:5,
    pt:28,
}

export const Incubi : OperativeBase =
{
    type:"Incubi",
    mv:7,
    ws:2,
    bs:3,
    act:3,
    wnd:8,
    sv:3,
    pt:42,
}

export const Haemonculus : OperativeBase =
{
    type:"Haemonculus",
    mv:7,
    ws:3,
    bs:3,
    act:3,
    wnd:9,
    sv:6,
    pt:28,
}

const DeldarOperatives : OperativeBase[] =
[
    KabaliteWarrior,
    Wych,
    Wrack,
    Mandrake,
    Grotesque,
    Incubi,
    Haemonculus
]

export default DeldarOperatives;