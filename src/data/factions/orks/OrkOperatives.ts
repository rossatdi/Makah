import OperativeBase from "../../../types/OperativeBase";

export const Grot : OperativeBase =
{
    type:"Grot",
    mv:5,
    ws:5,
    bs:4,
    act:2,
    wnd:4,
    sv:6,
    pt:6,
}

export const OrkBoy : OperativeBase =
{
    type:"Ork Boy",
    mv:5,
    ws:3,
    bs:5,
    act:2,
    wnd:9,
    sv:6,
    pt:15,
}

export const Weirdboy : OperativeBase =
{
    type:"Weirdboy",
    mv:5,
    ws:3,
    bs:5,
    act:2,
    wnd:9,
    sv:6,
    pt:23,
    isPsyker:true,
    notes:"Weirdboys are psykers."
}

export const Nob : OperativeBase =
{
    type:"Nob",
    mv:5,
    ws:3,
    bs:5,
    act:3,
    wnd:12,
    sv:5,
    pt:30,
}

const OrkOperatives : OperativeBase[] =
[
    Grot,
    OrkBoy,
    Weirdboy,
    Nob
]

export default OrkOperatives;