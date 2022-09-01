import OperativeBase from "../../../types/OperativeBase";

export const Scarabs : OperativeBase =
{
    type:"Scarabs",
    mv:6,
    ws:4,
    bs:5,
    act:2,
    wnd:4,
    sv:5,
    pt:6,
    notes:"Scarabs have the Limited special rule. and can only select mandible weapons"
}

export const Warrior : OperativeBase =
{
    type:"Warrior",
    mv:5,
    ws:3,
    bs:3,
    act:2,
    wnd:8,
    sv:4,
    pt:21,
}

export const Immortal : OperativeBase =
{
    type:"Immortal",
    mv:5,
    ws:3,
    bs:3,
    act:2,
    wnd:9,
    sv:3,
    pt:26,
}

export const FlayedOne : OperativeBase =
{
    type:"Flayed One",
    mv:6,
    ws:3,
    bs:6,
    act:2,
    wnd:8,
    sv:4,
    pt:17,
}

export const Lychguard : OperativeBase =
{
    type:"Lychguard",
    mv:5,
    ws:3,
    bs:3,
    act:3,
    wnd:10,
    sv:3,
    pt:40,
}

export const Cryptek : OperativeBase =
{
    type:"Cryptek",
    mv:5,
    ws:3,
    bs:3,
    act:2,
    wnd:9,
    sv:3,
    pt:28,
}

export const Skorpekh : OperativeBase =
{
    type:"Skorpekh",
    mv:7,
    ws:3,
    bs:3,
    act:2,
    wnd:12,
    sv:3,
    pt:40,
}

const NecronOperatives : OperativeBase[] =
[
    Scarabs,
    Warrior,
    Immortal,
    FlayedOne,
    Lychguard,
    Cryptek,
    Skorpekh
]

export default NecronOperatives;