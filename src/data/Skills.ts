import Skill from "../types/Skill"

export const Assassin : Skill = 
{
    name:"Assassin",
    effect:"If Fighting an Operative with an Evade token, re-roll 1s to hit and +1 Damage.",
    pt:4
}

export const BlindingSpeed : Skill = 
{
    name:"Blinding Speed",
    effect:"Dash is increased to 5\".",
    pt:2
}

export const Bodyguard : Skill = 
{
    name:"Bodyguard",
    effect:"When your Leader is within 3\" and is targeted by a Shooting attack you may force yourself to be the target instead, but you may not Evade. If choosing this option you immediately move to base to base contact with the Leader.",
    pt:5
}

export const CommsOfficer : Skill = 
{
    name:"Comms officer",
    effect:"Unique action: Friendly operative discards a Evade token.",
    pt:4
}

export const Duellist : Skill = 
{
    name:"Duellist",
    effect:"As long as this operative is engaged with only one enemy operative, and is receiving no bonus for outnumbering, re-roll one to hit dice while Fighting or Fighting Back.",
    pt:3
}

export const Elite : Skill = 
{
    name:"Elite",
    effect:"Increase Actions characteristic to 3.",
    modifier:{act:1},
    requirement:{act:2},
    pt:12
}

export const ExpertMarksman : Skill = 
{
    name:"Expert Marksman",
    effect:"When aiming with a weapon with the headshot rule, you can trigger that effect on a 5+ instead of gaining +1 to hit",
    pt:3
}

export const FerociousCharge : Skill = 
{
    name:"Ferocious Charge",
    effect:"During the first Fight action after charging, add 1 to the Damage of combat weapons.",
    pt:2
}

export const Flying : Skill = 
{
    name:"Flying",
    effect:"When moving, this Operative can ignore intervening terrain and models.",
    pt:3
}

export const Gunfighter : Skill = 
{
    name:"Gunfighter",
    effect:"Don't suffer the -1 to hit penalty for Shooting a pistol while engaged.",
    pt:2
}

export const Gunslinger : Skill = 
{
    name:"Gunslinger",
    effect:"Don't suffer the -1 to hit penalty for Shooting with two pistols.",
    pt:2
}

export const JumpUp : Skill = 
{
    name:"Jump Up",
    effect:"When this Operative activates with a Evade token, on a 4+ the Evade token is discarded without losing an action.",
    pt:5
}

export const Killshot : Skill = 
{
    name:"Killshot",
    effect:"Force a target to re-roll on the injury table.",
    pt:2
}

export const Patient : Skill = 
{
    name:"Patient",
    effect:"When chosen to activate, this operative can instead be placed at the end of the player's initiative track. Activate the next operative as normal.",
    pt:3
}

export const Rage : Skill = 
{
    name:"Rage",
    effect:"Always gain +1 Attack when Fighting, but cannot Fight Back.",
    pt:3
}

export const Relentless : Skill = 
{
    name:"Relentless",
    effect:"Reduce the damage suffered by each attack by 1 (total, not per hit) but can never take Evade tokens.",
    pt:3
}

export const Rifleman : Skill = 
{
    name:"Rifleman",
    effect:"When aiming with a rifle, do not suffer -1 to hit for the target being in cover",
    pt:3
}

export const Scout : Skill = 
{
    name:"Scout",
    effect:"When deploying, this Operative must be set up last and can be set up anywhere on the board at least 9\" from an enemy operative.",
    pt:6
}

export const ShieldBash : Skill = 
{
    name:"Shield Bash",
    effect:"Defensive combat weapons gain +2 Damage.",
    pt:2
}

export const ShockTrooper : Skill = 
{
    name:"Shock Trooper",
    effect:"When Shooting an Assault weapon using the free action after Dashing, do not -1 to hit.",
    pt:3
}

export const Tireless : Skill = 
{
    name:"Tireless",
    effect:"This operative can Move in the same activation as firing a Heavy weapon, but suffers -1 to hit when doing so.",
    pt:4
}

export const VoiceOfCommand : Skill = 
{
    name:"Voice of command",
    effect:"Unique action: Friendly operatives within 3\" remove Evade tokens.",
    pt:5
}

export const WitchHunter : Skill = 
{
    name:"Witch hunter",
    effect:"Re-roll all 1s when Shooting or Fighting a psyker.",
    pt:1
}
export const Skills : Skill[] 
= [
    Assassin,
    BlindingSpeed,
    Bodyguard,
    CommsOfficer,
    Duellist,
    Elite,
    ExpertMarksman,
    FerociousCharge,
    Flying,
    Gunfighter,
    Gunslinger,
    JumpUp,
    Killshot,
    Patient,
    Rage,
    Relentless,
    Rifleman,
    Scout,
    ShieldBash,
    ShockTrooper,
    Tireless,
    VoiceOfCommand,
    WitchHunter
]

export default Skills;
