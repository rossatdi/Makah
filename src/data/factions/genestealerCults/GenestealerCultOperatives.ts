import OperativeBase from "../../../types/OperativeBase";

export const Acolyte : OperativeBase =
{
    type:"Acolyte",
    mv:6,
    ws:4,
    bs:4,
    act:2,
    wnd:6,
    sv:5,
    pt:10,
}

export const Neophyte : OperativeBase =
{
    type:"Neophyte",
    mv:6,
    ws:3,
    bs:4,
    act:2,
    wnd:8,
    sv:5,
    pt:15,
}

export const Aberrant : OperativeBase =
{
    type:"Aberrant",
    mv:6,
    ws:3,
    bs:6,
    act:2,
    wnd:12,
    sv:4,
    pt:22,
}

export const Magus : OperativeBase =
{
    type:"Magus",
    mv:6,
    ws:3,
    bs:3,
    act:2,
    wnd:8,
    sv:5,
    pt:30,
    notes:"Magus are Psykers"
}

export const Genestealer : OperativeBase =
{
    type:"Genestealer",
    mv:7,
    ws:2,
    bs:7,
    act:3,
    wnd:8,
    sv:4,
    pt:30,
    notes:"Genestealer are Limited, and may only equip Claws"
}

const GenestealerCultOperatives : OperativeBase[] =
[
    Acolyte,
    Neophyte,
    Aberrant,
    Magus,
    Genestealer
]

export default GenestealerCultOperatives;
