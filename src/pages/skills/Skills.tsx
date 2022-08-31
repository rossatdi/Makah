import { Skills } from "../../data/Skills";
import { TileProps } from "../components/tile/Tile";
import TileDisplay from "../components/tileDisplay/TileDisplay";

const skills: TileProps[] = [...Skills.map(o=>({skill:o,type:"Skill"}))]
const SkillsPage = () => {
    return (<div>
     <h1>SKILLS</h1>
    <p>
      The following list of generic skills can be purchased during crew building
      or added during campaigns. Unless otherwise stated, skills can be
      purchased by any faction. You may wish to interpret the skills as a piece
      of equipment or skill that’s more relevant to your faction.
    </p>
        <TileDisplay items={skills} showFilter={true}/>
    </div>
  )};
  
  export default SkillsPage;