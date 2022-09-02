import OperativeBase from "../../../types/OperativeBase"

export const Cultist : OperativeBase =
{
    type:"Cultist",
    mv:6,
    ws:4,
    bs:4,
    act:2,
    wnd:6,
    sv:6,
    pt:9
}

export const Mutant : OperativeBase =
{
    type:"Mutant",
    mv:6,
    ws:3,
    bs:4,
    act:2,
    wnd:8,
    sv:6,
    pt:12,
    notes:"Mutants are Limited"
}

export const Beast : OperativeBase =
{
    type:"Beast",
    mv:8,
    ws:3,
    bs:6,
    act:2,
    wnd:6,
    sv:6,
    pt:8,
    notes:"Beasts are Limited"
}

export const ChaosMarine : OperativeBase =
{
    type:"Chaos Marine",
    mv:6,
    ws:3,
    bs:3,
    act:3,
    wnd:13,
    sv:3,
    pt:43
}

export const Possessed : OperativeBase =
{
    type:"Possessed",
    mv:7,
    ws:3,
    bs:4,
    act:3,
    wnd:13,
    sv:3,
    pt:42
}

const ChaosCultOperatives : OperativeBase[] =
[
    Cultist,
    Mutant,
    Beast,
    ChaosMarine,
    Possessed
]

export default ChaosCultOperatives;