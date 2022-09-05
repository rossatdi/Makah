import OperativeBase from "../../../types/OperativeBase";

export const Guardian : OperativeBase =
{
    type:"Guardian",
    mv:7,
    ws:4,
    bs:4,
    act:2,
    wnd:6,
    sv:5,
    pt:11,
}

export const Ranger : OperativeBase =
{
    type:"Ranger",
    mv:7,
    ws:4,
    bs:3,
    act:2,
    wnd:6,
    sv:5,
    pt:16,
}

export const AspectWarrior : OperativeBase =
{
    type:"Aspect Warrior",
    mv:7,
    ws:3,
    bs:3,
    act:3,
    wnd:8,
    sv:4,
    pt:30,
}

export const Wraithguard : OperativeBase =
{
    type:"Wraithguard",
    mv:5,
    ws:3,
    bs:3,
    act:2,
    wnd:12,
    sv:3,
    pt:35,
    notes:"Wraithguard Operatives cannot be chosen as a leader."
}

export const Warlock : OperativeBase =
{
    type:"Warlock",
    mv:7,
    ws:3,
    bs:3,
    act:3,
    wnd:9,
    sv:4,
    pt:35,
    isPsyker:true,
    notes:"A Warlock is a Psyker and their Save cannot be modified."
}

const CraftworldOperatives : OperativeBase[] = 
[
    Guardian,
    Ranger,
    AspectWarrior,
    Wraithguard,
    Warlock
]

export default CraftworldOperatives;