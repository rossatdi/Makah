import { Card } from "react-bootstrap"
import IGlossaryItem from "../../../interfaces/IGlossaryItem"
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
            {handleText(skill.effect).map((o,i)=><Card.Text key={i}>{o}</Card.Text>)}
        </Card.Body>
    </Card>)

}

export default Tile