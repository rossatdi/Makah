import { Actions } from "../../data/Actions"
import SkillTile from "../components/skillTile/SkillTile"

export const page = () =>{
    return(<div>
        <h1>Actions</h1>
        {Actions.map(o=><SkillTile skill={o} type={"action"}/>)}
    </div>) 
}

export default page;