import { Container } from "react-bootstrap";
import './Movement.css'

const Movement = () => <Container className="movement">
    <p>Only one of Normal Move, Charge or Fall Back can be done each Activation. Each can be as far as the Operative’s Move characteristic.</p>
    <ul>
            <li>Normal – Cannot move within 1" of an enemy.</li>
            <li>Charge – Can move within 1" of enemy operatives. Impact Hits: After a charge immediately attack with a combat weapon but only roll 1 dice.</li>
            <li>Fall Back – Can be used to leave Engagement.</li>
        </ul>
    <p>When moving, terrain less than 1" high can be ignored. All other terrain must be traversed by measuring the distance up and/or down. An Operative can drop 3" for free. You can move freely through your own Operatives.</p>
</Container>

export default Movement;