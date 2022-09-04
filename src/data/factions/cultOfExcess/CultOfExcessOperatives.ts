import OperativeBase from "../../../types/OperativeBase";
import { Daemonic, Limited } from "../../CommonNotes";

export const SlaaneshCultist : OperativeBase =
{
    type:"Slaanesh Cultist",
    mv:7,
    ws:4,
    bs:4,
    act:2,
    wnd:6,
    sv:6,
    pt:9,
}

export const Mutant : OperativeBase =
{
    type:"Mutant*",
    mv:6,
    ws:3,
    bs:4,
    act:2,
    wnd:8,
    sv:6,
    pt:12,
    notes: Limited
}

export const SlaaneshiMarine : OperativeBase =
{
    type:"Slaaneshi Marine",
    mv:7,
    ws:3,
    bs:3,
    act:3,
    wnd:12,
    sv:3,
    pt:43,
}

export const Daemonette : OperativeBase =
{
    type:"Daemonette",
    mv:8,
    ws:3,
    bs:6,
    act:2,
    wnd:6,
    sv:6,
    pt:12,
    notes:Daemonic
}

const CultOfExcessOperatives : OperativeBase[] =
[
    SlaaneshCultist,
    Mutant,
    SlaaneshiMarine,
    Daemonette
]

export default CultOfExcessOperatives;