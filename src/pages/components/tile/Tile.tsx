import { Card } from "react-bootstrap"
import IGlossaryItem from "../../../interfaces/IGlossaryItem"
import { applyGlossaryOverlay } from "../GlossaryOverlay"
import "./Tile.css"




const handleText = (text: string) : string[] =>{
    return text.split('•')
}

export interface TileProps
{
    skill:IGlossaryItem
    type?:string
    background?:string
    faction?:string
}

const Tile = ({skill, type, background, faction}:TileProps) => {
    return (<Card className={`tile ${type}`}>
            <Card.Header>
                <div className="tileHeader">
                    {type && <span className="type">{`${type}`}</span>}
                    <span className="title">{skill.name}</span>
                    {skill.pt && skill.pt!=="-" && <span className="pt">{`${skill.pt}pt`}</span>}
                </div>
                </Card.Header>
        <Card.Body className="body" style={{backgroundImage: background ?`url(${background})`:"none"}} >
            {skill.restrictons && <Card.Subtitle className="mb-2">{skill.restrictons}</Card.Subtitle>}
            {handleText(skill.effect).map((o,i)=><Card.Text key={i}>{applyGlossaryOverlay(o)}</Card.Text>)}
        </Card.Body>
    </Card>)

}

export default Tile