import OperativeView from "../../pages/components/operative/OperativeView";
import Campaign from "../../types/Campaign";
import { BlastPistol } from "../factions/deldar/DeldarWeapons";
import { PowerAxe } from "../weapons/GenericWeapons";

const Makah : Campaign = 
{
    name:"Makah",
    blurb:<p>this is makah</p>,
    rounds: [
        {
            name:"ROUND 1: ARRIVAL",
            blurb:<><p><i>As your ship drops out of the warp, there’s little indication
            of any sentient life on the planet at all. Comms traffic is
            non-existence but there are faint residual engine traces
            from other interstellar craft. Slowly, you approach the ice
            world looking for potential landing spots that will be
            shelter from the appalling storms.</i></p>
            <p><i>Piecing the ice blue swirling storm of the surface dozens,
            maybe hundreds, of megaliths tear into the sky. Cragged
            and black, each is clearly many kilometres high. Your pilot
            nimbly manoeuvres round them, but they’re playing havoc
            with your sensors.</i></p>
            <ul>
                <li>If your comms attempts fail (matched) – play ‘Exploration’</li>
                <li>If your comms attempt reach Magos Drax (asymmetric) – play ‘Escort’.</li>
            </ul></>,
            scenarios:[
                {
                    name:"1A: EXPLORATION",
                    scenarioType:"Matched",
                    blurb:<p><i>You land to silence. The facility seems operational but abandoned. No defensive fire or landing party meet you on the shielded landing pad. Cautiously you push into the facility and discover a wealth of equipment. Whoever is funding this base had resources to burn. You pick through the cargo quarantine area to gather anything useful for the coming exploration when your scout catches sight of something across the hall…</i></p>,
                    board:"The board is a standard 30” by 22”.",
                    setup:"Place terrain. Roll off. The player who wins picks a deployment. Starting with the player who didn’t pick deployment, players alternate placing objectives until there are four on the board. Each objective must be at least 4” from a player’s own deployment zone and at least 6” away from other objectives. If there are no spaces that fit this criteria, do not place any more objectives.",
                    deployment:"See map. Roll off, the winner decides who deploys first.",
                    map:"will require work",
                    missionAction: { name:"Examine (1 Action)", effect:"You can only use this action if you control the objective (see ‘Controlling Objectives’ – page 9). Immediately gain d3 Victory Points and remove this objective from the board. Then roll on a d6 and consult the table."},
                    missionSpecialRule:{ name:"Storage facility", effect:"At the end of a turn, after all operatives have activated, if there are fewer than four objectives players take turn placing more objectives until there are four again. Roll off to decide who places first. A player must place an objective at least 8” away from his own Operatives and at least 6” away from other objectives."},
                    winCondition:"At the end of turn 4, the player with the most victory points wins.",
                    postGame:"In addition to the standard post game rules, the winner of this scenario may gain a piece of equipment from any Imperial faction. One unused piece of equipment from the mission may be carried over to the next Scenario, but is lost after that. Specific limitation, other than faction, that apply to the equipment still apply.",
                    MiscItems:[{name:"Examine", item:<ol>
                        <li>Unstable munitions! Every operative within d6”
                        suffers d3 damage. If they have an Evade token
                        they may make an Evade save to avoid this
                        damage, but regular saves cannot be made.</li>
                        <li>Medical supplies – This operative has a one-use
                        Medi-Kit (Imperial Guard faction equipment).</li>
                        <li>Medical stimulants – This operative has a one-
                        use Combat Stimm (Inquisition faction).</li>
                        <li>Demolition charge – This operative gains a
                        grenade. It has Attack 3, Damage d6+1, AP-1, R4,
                        Blast d3”.</li>
                        <li>Adaptive weapon modification – Pick one of the
                        operative’s weapons, they gain Special
                        Ammunition (Space Marine faction) for the
                        weapon regardless of whether it’s a bolt
                        weapon.</li>
                        <li>Facility schematics – Gain d3 extra VP.</li>
                    </ol>}]  
                },
                {
                    name:"1B: ESCORT",
                    scenarioType:"Asymmetric",
                    blurb:<p><i>As you get within 10 clicks of the landing pad, a faint
                    comms signal reaches you. A distracted tech-priest
                    introduces himself as Magos Drax. He directs you towards
                    pad Alpha 7 and asks if you’d be willing to escort him
                    across the base to an emergency elevator linked to his
                    workshop. Someone else has landed, destroyed part of his
                    laboratory and, he’s sure, is hunting him. If he escapes,
                    he’ll be a powerful ally to you however, there are others
                    who will extract knowledge about the base from him less
                    … collegiately.</i></p>,
                    board:"The board is a standard 30” by 22”.",
                    setup:"Roll off, the winner can choose to be the Escort player or Attacker. Pool the available terrain. The Escort player chooses their deployment zone. Set an objective to represent the Emergency Elevator. The Escort player places two pieces of terrain, then the Attacking player places one. Each placement must leave at least 2” between existing terrain pieces. Repeat this until all the terrain is placed.",
                    deployment:"See map. The Escort player must start deploying, and their first deployment must be the Escort (see below).",
                    map:"will require work",
                    missionAction: { name:"Escape (1 Action)", effect:"Regardless of normal objective rules, if the Escort is touching the Escape Elevator objective they may make this action. Immediately remove the Escort from the board, and the Escort player wins the scenario. Any other operative touching the objective immediately makes an injury role as a combination of complex defensive weapons bio-locked the magos’s genecode spring to life and ensure that only the intended person uses it."},
                    missionSpecialRule:{ name:"The Escort", effect:"Magos Drax is treated an Operative in the Escort player’s crew. Drax cannot be targeted from more than 4” away, as the Attacking player is shooting to wound. The Escort player can give one of their crew the Bodyguard rule for the scenario, but it triggers on the Escort not their leader."},
                    winCondition:"If the Escort player completes the Escape mission action, they win. If they do not, they lose.",
                    postGame:"The winner of this scenario gets to automatically choose to go first or second on the first                     turn of their next game, regardless of scenario rules.",
                    MiscItems:[{name:"Magos Drax",item:<OperativeView operative={{name:"Magos Drax", type:"Magos", mv:5,ws:4,bs:3,act:2,wnd:8,sv:3, pt:"-", isLeader:false, isPsyker:false, weapons:[PowerAxe, BlastPistol], skills:[], equipment:[]}}/>}]
                }
            ]
        },
    ]
    
}

export default Makah;