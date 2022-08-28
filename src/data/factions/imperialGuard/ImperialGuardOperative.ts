import OperativeBase from "../../../types/OperativeBase"

export const Guardsman : OperativeBase =
{
    type:"Guardsman",
    mv:6,
    ws:4,
    bs:4,
    act:2,
    wnd:6,
    sv:5,
    pt:10,
}

export const Veteran : OperativeBase =
{
    type:"Veteran",
    mv:6,
    ws:4,
    bs:3,
    act:2,
    wnd:6,
    sv:5,
    pt:15,
}

export const Scion : OperativeBase =
{
    type:"Scion",
    mv:6,
    ws:4,
    bs:3,
    act:2,
    wnd:7,
    sv:4,
    pt:20,
}

export const Officer : OperativeBase =
{
    type:"Officer",
    mv:6,
    ws:3,
    bs:3,
    act:2,
    wnd:8,
    sv:5,
    pt:20,
}

export const Ratling : OperativeBase =
{
    type:"Ratling",
    mv:5,
    ws:4,
    bs:3,
    act:2,
    wnd:4,
    sv:5,
    pt:12,
}

export const Ogryn : OperativeBase =
{
    type:"Ogryn",
    mv:5,
    ws:3,
    bs:5,
    act:2,
    wnd:12,
    sv:5,
    pt:22,
}

export const ImperialGuardOperatives : OperativeBase[] =
[Guardsman, Veteran,Scion,Officer,Ratling,Ogryn]

export default ImperialGuardOperatives;