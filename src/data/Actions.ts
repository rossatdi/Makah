import Action from "../types/Action";

export const Movement : Action =
{
    name:"Movement",
    effect:"Only one of Normal Move, Charge or Fall Back can be done each Activation. Each can be as far as the Opeartive’s Move characteristic. • Normal – Cannot move within 1\" of an enemy. • Charge – Can move within 1\" of an enemy operative. Impact Hits: After a charge immediately attack with a combat weapon but only roll 1 dice. • Fall Back – Can be used to leave Engagement. When moving, terrain less than 1\" high can be ignored. All other terrain must be traversed by measuring the distance up and/or down. An Operative can drop 3\" for free. You can move freely through your own Operatives."
}  

export const Dash : Action =
{
    name:"Dash",
    effect:"An additional 3\" move. This cannot be used to move into or out of Engagement range. It can be used before or after a Movement action."
} 

export const Shoot : Action = 
{
    name:"Shoot",
    effect:"An Operative can’t make a Shoot action if they’re Engaged or made a Fall Back move. 1. Pick one of the Operative’s weapons and a target in range that can be seen (torso and/or head). 2. Once the target of the attack is declared but before rolling to hit, the Operative can choose to Evade. If they do so, place an Evade token next to them. 3. Roll dice equal to the weapon’s Attack. Each roll that equals or exceeds your Ballistic Skill (Bs) is a Hit. 4. Evading: If the target has an Evade token, they can roll a dice for each Hit. On a 5+, the Hit is cancelled. 5. The target then rolls a dice for each remaining hit. Each roll that equals or beats their Save cancels a Hit. 6. Each remaining Hit deals Damage according to the weapon. Range – Unless otherwise indicated, all weapons have infinite range. Cover - If the target is at least 25%+ obscured, -1 to Hit. Shooting into combat - You can shoot into an engagement. Choose a target and randomise between that Operative and all other Operatives engaged with them equally. Cover is determined by the chosen target."
}

export const Combat : Action = 
{
    name:"Combat",
    effect:"An operative must be engaged to fight. An operative is Engaged with all enemies within 1”. 1. Pick one of the Operative’s Combat weapons and a target within 1”. Ignore intervening terrain. 2. Once the target of the attack is declared but before rolling to hit, the target can choose to Defend or Fight Back. A target operative with an Evade token cannot Fight Back. 3. The attacker rolls dice equal to the weapon’s Attack value. Each dice that equals or exceeds their Weapon Skill (Ws) is a Hit. 4. Defend; the target then rolls a dice for each hit. Each roll that equals or beats their Save cancels a Hit. Each remaining Hit deals Damage. 5. Fight Back; the target carries out Step 3 with -1Ws. Compare the number of Hits, the operative who got the most Hits wins and deals Hits equal to the difference, with no Saves. In the case of a draw, no damage is dealt. 6. After the Action is resolved, the defender discards any Evade tokens. Multiple weapons – If you have two combat weapons, you gain +1 attack when Fighting or Fighting Back. A pistol can grant this bonus too. 5 Outnumbered – When Fighting or Fighting Back, each friendly operative within 1” of the target (or attacker if Fighting Back) grants +1 Attack Dice. Knife – Even if not equipped with a combat weapon, an Operative can always fight with 2 Attack Dice and 2 Damage."
}

export const Stabilise : Action =
{
    name:"Stabilise",
    effect:"Choose a friendly operative within 1\" that has been Injured, apply the Winded injury effect and stand them up. You or the target can’t be within 1\" of an enemy."
}

export const FinishOff : Action = 
{
    name:"Finish Off",
    effect:"Choose a Critically injured operative within 1\". Immediately remove this model from the game."
}

export const PsychicPower : Action = 
{
    name:"Psychic Power",
    effect:"Roll a d6, on 1 take 1 Damage. On a 2+, choose a faction psychic power to use. If an enemy psyker is visible to you, they may take an Evade token if they don’t have one, to give you -1 to this roll."
}

export const Actions : Action[] =
[
    Movement,
    Dash,
    Shoot,
    Combat,
    Stabilise,
    FinishOff,
    PsychicPower
]