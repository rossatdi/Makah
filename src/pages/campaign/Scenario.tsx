import { Container } from "react-bootstrap"
import Scenario from "../../types/Scenario"
import Tile from "../components/tile/Tile"

export const ScenarioComponent = ({scenario}:{scenario:Scenario}) => {
return (<Container className="scenario">
        {scenario.blurb}
        <p><b>Board - </b>{scenario.board}</p>
        <p><b>Setup - </b>{scenario.setup}</p>
        <p><b>Deployment - </b>{scenario.deployment}</p>
        <h5>Mission Action</h5>
        <Tile skill={scenario.missionAction}/>
        <h5>Mission Special Rule</h5>
        <Tile skill={scenario.missionSpecialRule}/>
        <p><b>Win Condition - </b>{scenario.winCondition}</p>
        <p><b>Post Game - </b>{scenario.postGame}</p>
        {scenario.MiscItems && scenario.MiscItems.map(o=><><h6>{o.name}</h6>{o.item}</>)}
      </Container>)}
  
  export default ScenarioComponent 