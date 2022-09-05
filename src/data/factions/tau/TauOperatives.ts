import OperativeBase from "../../../types/OperativeBase";
import { Flying } from "../../Skills";
import { CamouflageFields, StabilisationSystem } from "./TauEquipment";

export const Kroot : OperativeBase =
{
    type:"Kroot",
    mv:6,
    ws:3,
    bs:4,
    act:2,
    wnd:6,
    sv:6,
    pt:11,
}

export const KrootHound : OperativeBase =
{
    type:"Kroot Hound",
    mv:8,
    ws:4,
    bs:6,
    act:2,
    wnd:6,
    sv:6,
    pt:8,
}

export const Krootox : OperativeBase =
{
    type:"Krootox",
    mv:8,
    ws:4,
    bs:6,
    act:2,
    wnd:14,
    sv:5,
    pt:20,
}

export const Firewarrior : OperativeBase =
{
    type:"Firewarrior",
    mv:6,
    ws:5,
    bs:4,
    act:2,
    wnd:6,
    sv:4,
    pt:11,
}

export const Pathfinder : OperativeBase =
{
    type:"Pathfinder",
    mv:6,
    ws:5,
    bs:3,
    act:2,
    wnd:6,
    sv:5,
    pt:16,
}

export const Drone : OperativeBase =
{
    type:"Drone",
    mv:6,
    ws:6,
    bs:4,
    act:2,
    wnd:4,
    sv:5,
    pt:7,
    notes:"Drones are Limited"
}

export const StealthSuit : OperativeBase =
{
    type:"Stealth suit",
    mv:8,
    ws:5,
    bs:4,
    act:3,
    wnd:10,
    sv:3,
    pt:38,
    equipment:[CamouflageFields],
    notes:"Stealth suits include: Camouflage Fields."
}

export const CrisisSuit : OperativeBase =
{
    type:"Crisis suit",
    mv:8,
    ws:5,
    bs:4,
    act:3,
    wnd:14,
    sv:3,
    pt:55,
    equipment:[StabilisationSystem],
    skills:[Flying],
    notes:"Crisis suits include: Jetpack (flying) and Stabilisation Systems. Limit 1"
}

export const Ethereal : OperativeBase =
{
    type:"Ethereal",
    mv:6,
    ws:4,
    bs:4,
    act:3,
    wnd:6,
    sv:4,
    pt:20,
}

export const Vespid : OperativeBase =
{
    type:"Vespid",
    mv:8,
    ws:4,
    bs:4,
    act:2,
    wnd:6,
    sv:4,
    pt:14,
}

const TauOperatives : OperativeBase[] =
[
    Kroot,
    KrootHound,
    Krootox,
    Firewarrior,
    Pathfinder,
    Drone,
    StealthSuit,
    CrisisSuit,
    Ethereal,
    Vespid
]

export default TauOperatives;