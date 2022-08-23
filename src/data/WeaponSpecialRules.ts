import { Variable } from "../types/Variable"
import {WeaponSpecialRule} from "../types/WeaponSpecialRule"


export const Aim : WeaponSpecialRule =    
{
    name:"Aim",
    effect:"An Operative with this weapon can use the Aim action even though it's not a rifle.",
}

export const Arc : WeaponSpecialRule =    
{
    name:"Arc",
    effect:"If at least 1 to hit dice is a 6, add 1 successful hit to the attack.",
}

export const Viscous : WeaponSpecialRule = {...Arc,name:"Viscous"}


export function Blast(x: Variable): WeaponSpecialRule  
{
    return {
        name:`Blast ${x}`,
        effect:`Resolve hits against other models within ${x}\", reducing the Attack dice by 1. Each model potentially hit has the opportunity to Evade.`
    }
}

export const Defensive : WeaponSpecialRule =    
{
    name:"Defensive",
    effect:"Does not suffer the -1 penalty for fighting back. Ignore the first -1 AP of ranged and combat attacks.",
}

export const Dangerous : WeaponSpecialRule =    
{
    name:"Dangerous",
    effect:"Rolls of 1 to Hit inflict 1 Damage on the user.",
}

export const Frequency : WeaponSpecialRule =    
{
    name:"Frequency",
    effect:"Hit rolls that exactly match the Save characteristic of the target are resolved at -2AP. Resolve these hits separately to other hits.",
}

export function Gauss(x: Variable): WeaponSpecialRule  
{
    return {
        name:`Gauss ${x}`,
        effect:`If at least 1 to hit dice is a 6, add ${x} to the total damage of the attack (not each hit).`
    }
}

export const Grenade : WeaponSpecialRule =    
{
    name:"Grenade",
    effect:"All grenades are one use only and ignore cover in addition to other rules.",
}

export const Headshot : WeaponSpecialRule =    
{
    name:"Headshot",
    effect:"Unmodified 6s to Hit gain an additional -4 AP.",
}

export const IgnoresCover : WeaponSpecialRule =    
{
    name:"Ignores cover",
    effect:"Targets don’t benefit from cover. This affects special rules that convey any version of ‘always in cover’.",
}

export const Inaccurate : WeaponSpecialRule =    
{
    name:"Inaccurate",
    effect:"Cannot get better than 5+ to hit.",
}

export const Indirect : WeaponSpecialRule =    
{
    name:"Indirect",
    effect:"Can be shot at targets without line of sight but at -2 to hit.",
}

export function Irradiate(x:Variable) : WeaponSpecialRule   
{
    return {
        name:`Irradiate ${x}`,
        effect:`If at least 1 to hit dice is a 6, add ${x} to the weapon's Damage value for the entire attack.`
    }
}

export function Brutal(x:Variable) : WeaponSpecialRule{
    return {...Irradiate(x), name:`Brutal ${x}`} 
}

export const Markerlight : WeaponSpecialRule =    
{
    name:"Markerlight",
    effect:"For each hit that is not evaded, place a Markerlight token next to the target. Friendly Operatives shooting at a target with a Markerlight token can discard one to gain +1 to hit or cause -1 to Evade rolls. Multiple tokens can be discarded and their effects are cumulative.",
}

export const MoreDakka : WeaponSpecialRule =    
{
    name:"More dakka",
    effect:"This weapon can take a second Shoot action, which can only hit on 6+.",
}

export const NonLethal : WeaponSpecialRule =    
{
    name:"Non-lethal",
    effect:"When rolling on the injury table, treat critically injured as injured.",
}

export const OneUse : WeaponSpecialRule =    
{
    name:"One Use",
    effect:"This Weapon can be used once per mission."
}

export function Poison(x: Variable): WeaponSpecialRule  
{
    return {
        name:`Poison ${x}`,
        effect:`If at least 1 hit is not Saved, add ${x} as additional Damage.`
    }
}

export const PsykerOnly : WeaponSpecialRule =    
{
    name:"Psyker Only",
    effect:"This weapon may only be used by a psyker."
}

export function Range(x: Variable): WeaponSpecialRule  
{
    return {
        name:`Range ${x}`,
        effect:`The range of this weapon is limited to ${x}\".`
    }
}

export const RapidFire : WeaponSpecialRule = 
{
    name:"Rapid fire",
    effect:"If the model does not Move in the same activation, they can take a second Shoot action (at -1 to Hit) targeting the same target or a target within 3\" of the original target.",
}

export const Reach : WeaponSpecialRule =    
{
    name:"Reach",
    effect:"This combat weapon can be used to fight Operatives 2\" away, outside of engagement range.",
}

export const Reckless : WeaponSpecialRule =    
{
    name:"Reckless",
    effect:"This combat weapon cannot be used to fight back.",
}

export const Rending : WeaponSpecialRule =    
{
    name:"Rending",
    effect:"Rolls of 6 to hit gain -2 AP to the full attack.",
}

export const RerollOneToHit : WeaponSpecialRule =    
{
    name:"Re-roll 1s To Hit",
    effect:"Re-roll 1s To Hit.",
}

export function Rot(x: Variable): WeaponSpecialRule  
{
    return {
        name:`Rot ${x}`,
        effect:`Re-roll to hit rolls of ${x} or less with this weapon.`
    }
}

export const SplitFire : WeaponSpecialRule =    
{
    name:"Split fire",
    effect:"When choosing targets, you can split dice rolls between targets within 3\" of each other.",
}

export const Stun : WeaponSpecialRule =    
{
    name:"Stun",
    effect:"If hit the target gains a Evade Token. If this token is granted during a Fight action, it isn’t removed the end of the Fight action.",
}

export const Torrent : WeaponSpecialRule =    
{
    name:"Torrent",
    effect:"Use the flamer template to determine who is hit. You can split dice between targets under the template. You cannot place the template over friendly operatives.",
}

export const Small : WeaponSpecialRule  = 
{
    name:"Small",
    effect:"Doesn't take up a weapon slot",
}

export const WeaponSpecialRules : WeaponSpecialRule[] = 
[
    Aim,
    Arc,
    Blast("X"),
    Brutal("X"),
    Defensive,
    Dangerous,
    Frequency,
    Gauss("X"),
    Grenade,
    Headshot,
    IgnoresCover,
    Inaccurate,
    Irradiate("X"),
    Markerlight,
    MoreDakka,
    NonLethal,
    Poison("X"),
    Range("X"),
    RapidFire,
    Reach,
    Reckless,
    Rending,
    Rot("X"),
    SplitFire,
    Stun,
    Torrent,
    Viscous,
]