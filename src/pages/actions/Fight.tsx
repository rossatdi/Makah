import { Container } from "react-bootstrap";
import './Fight.css'

const Fight = () => <Container className="fight">
    <p>An operative must be engaged to fight.</p>
    <ol>
            <li>Pick one of the Operative’s Combat weapons and a target within 1". Ignore intervening terrain.</li>
            <li>Once the target of the attack is declared but before rolling to hit, the target can choose to Defend or Fight Back. A target operative with an Evade token cannot Fight Back.</li>
            <li>The attacker rolls dice equal to the weapon’s Attack value. Each dice that equals or exceeds their Weapon Skill (Ws) is a Hit.</li>
            <li>Defend; the target then rolls a dice for each hit. Each roll that equals or beats their Save cancels a Hit, each remaining Hit deals Damage.</li>
            <li>Fight Back; the target carries out Step 3 with -1Ws. Compare the number of Hits, the operative who got the most Hits wins and deals Hits equal to the difference, with no Saves allowed. In the case of a draw, no damage is dealt.</li>
            <li>After the Action is resolved, the defender discards any Evade tokens.</li>
        </ol>
    <p>Multiple weapons – If you have two combat weapons, you gain +1 attack when Fighting or Fighting Back. A pistol can grant this bonus too.</p>
    <p>Outnumbered – When Fighting or Fighting Back, each friendly operative within 1" of the target (or attacker if Fighting Back) grants +1 Attack Dice.</p>
    <p>Knife – Even if not equipped with a combat weapon, an Operative can always fight with 2 Attack Dice and 2 Damage.</p>
</Container>

export default Fight;