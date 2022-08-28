import { Card } from "react-bootstrap"
import IGlossaryItem from "../../../interfaces/IGlossaryItem"
import "./SkillTile.css"

const handleText = (text: string) : string[] =>{
    return text.split('•')
}

export interface SkillTypeProps 
{
    skill:IGlossaryItem
    type:string
}

const SkillTile = ({skill, type}:SkillTypeProps) => {
    return (<Card className={`skillTile ${type}`}>
        <Card.Body>
            <Card.Title>{skill.name}</Card.Title>
            {handleText(skill.effect).map((o,i)=><Card.Text key={i}>{o}</Card.Text>)}
        </Card.Body>
    </Card>)

}

export default SkillTile