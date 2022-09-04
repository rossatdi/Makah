import GlossaryTerm from "../types/GlossaryTerm";

export const Limited : GlossaryTerm ={
    name:"Limited",
    effect:"Limited Operatives cannot carry out Mission specific Action but do contest control of objectives."
}

export const Evade : GlossaryTerm ={
    name:"Evade",
    effect:"If an operative has a Evade token, the next time they activate they lose one action and discard it. Evade tokens are not cleared automatically between Turns. You can’t have more than one Evade token per Operative."
}

export const GlossaryTerms : GlossaryTerm[] =
[
    Limited, Evade
]

export default GlossaryTerms;