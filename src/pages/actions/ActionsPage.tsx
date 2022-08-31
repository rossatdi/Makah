import { Actions } from "../../data/Actions"
import Tile from "../components/tile/Tile"

export const page = () =>{
    return(<div>
        <h1>Actions</h1>
        {Actions.map(o=><Tile skill={o} type={"action"}/>)}
    </div>) 
}

export default page;