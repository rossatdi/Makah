import { Evade } from "../../data/GlossaryTerms";

const page = () => <div className="rules">
    <h1>Rules</h1>
    <p>Each game includes two or more Crews made up of Operatives. Each Operative Activates once per Turn. The setup, length, special rules and win conditions are set out in each scenario. Most scenarios are four Turns.</p>
    <p>Each Turn has the following steps:</p>
    <ol>
        <li>Planning phase – Set initiative order.</li>
        <li>Battle phase – Take turns activating Operatives.</li>
        <li>Aftermath – Remove Injured Operatives.</li>
    </ol>
    <h3>Planning Phase</h3>
    <ol>
        <li>Each player places their Operatives’ initiative cards face down. Operatives will be activated in order, left to right. </li>
        <li>Each player decided if they’re using their faction ability (the player with the most Operatives left on the board chooses first).</li>
        <li>Each player gains 1 Gambit point, gain an extra Gambit point on the first Turn..</li>
    </ol>

    <h3>Battle Phase</h3>
    <p>Each player rolls a d6, re-roll draws. The player with the highest score can choose to go first or second. Then taking it in turns, each player activates an Operative in the order they set in the Planning phase.</p>
    <p>An Operative can take as many actions as their Action characteristic. Except Fight, an Operative cannot repeat an action during their activation. </p>    
    
    <h6>{Evade.name}</h6>
    <p>{Evade.effect}</p>

    <h6>Gambits</h6>
    <p>A player can spend 1 Gambit point to:</p>
    <ul>
        <li>Reroll any number of dice in a roll.</li>
        <li>Give an operative +1 Action when they’re activated (can’t be given twice to the same Operative in the same Activation).</li>
        <li>Activate an operative out of initiative order.</li>
    </ul>
    <h6>Injury Table</h6>
    <p>When an operative has suffered more Damage than their Wounds characteristic, their player rolls on the table below immediately.</p>
    <table>
        <tbody>
            <tr>
                <td>1-2</td>
                <td>Critically injured</td>
                <td>Remove this model.</td>
            </tr>
            <tr>
                <td>3-5</td>
                <td>Injured</td>
                <td>Place the model on its side. Skip their activation.</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Winded</td>
                <td>Return the model to 1 wound and give them an Evade token.</td>
            </tr>
        </tbody>
    </table>

    <h2>Crew Building Rules</h2>
    <p>You may assemble a crew from any of the available Operatives, however you only gain the relevant faction ability if your full crew is drawn from the same faction. Each crew must have five to twelve operatives. You also get two Barricades.</p>
    <p>You have 200 points to spend on your crew including their weapons, equipment and skills. There are no advantages for leaving points spare. Weapons can be drawn from outside of your faction but increase their cost by 50% (rounding up).</p>
    <h3>Leader</h3>
    <p>You must pick one Operative to be your Leader. They gain +2 Wounds and get 10 free points to spend on weapons and equipment. Leaders can reroll the Injury table when they lose their last wound. Leaders are not limited on the number of weapons, pieces of equipment or skills they take.
    <h3>Psykers</h3>
    <p>Up to two Operatives can be upgraded to be Psykers for 8 points each. All psychic powers are unique actions and powers are faction specific. 
    <h3>Restrictions</h3>
    <ul>
        <li>Max 3 heavy weapons per crew.</li>
        <li>Operatives can have up to as many weapons as their Action stat plus a knife.</li>
        <li>One use weapons don't count towards this number.</li>
        <li>Operatives can have a combined number of Equipment and Skills up to their Action stat.</li>
    </ul>

</p>
</p>
</div>

export default page;