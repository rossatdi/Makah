import { Skills } from "../../data/Skills";

const skillList = Skills.map(skill=><tr><td>{skill.name}</td><td>{skill.effect}</td><td>{skill.pt}</td></tr>)

const page = () => <div>
        <h1>SKILLS</h1>
        <p>The following list of generic skills can be purchased during crew building or added during campaigns. Unless otherwise
stated, skills can be purchased by any faction. You may wish to interpret the skills as a piece of equipment or skill that’s
more relevant to your faction.</p>
        <table>
            <tr>
                <th>Skill</th>
                <th>Effect</th>
                <th>Points</th>
            </tr>
            {skillList}
        </table>
    </div>


export default page;