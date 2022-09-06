import { Container } from "react-bootstrap";
import './Shoot.css'

const Shoot = () => <Container className="shoot">
    <p>An Operative can’t make a Shoot action if they’re Engaged or made a Fall Back move.</p>
    <ol>
            <li>Pick one of the Operative’s weapons and a target in range that can be seen (torso and/or head).</li>
            <li>Once the target of the attack is declared but before rolling to hit, the Operative can choose to Evade. If they do so, place an Evade token next to them.</li>
            <li>Roll dice equal to the weapon’s Attack. Each roll that equals or exceeds your Ballistic Skill (Bs) is a Hit.</li>
            <li>Evading: If the target has an Evade token, they can roll a dice for each Hit. On a 5+, the Hit is cancelled.</li>
            <li>The target then rolls a dice for each remaining hit. Each roll that equals or beats their Save cancels a Hit.</li>
            <li>Each remaining Hit deals Damage according to the weapon.</li>
        </ol>
    <p>Range – Unless otherwise indicated, all weapons have infinite range.</p>
    <p>Cover – If the target is at least 25%+ obscured, -1 to Hit.</p>
    <p>Shooting into combat - You can shoot at Engaged models. Choose a target and randomise between that Operative and all other Operatives engaged with them equally. Cover is determined by the chosen target.</p>
</Container>

export default Shoot;