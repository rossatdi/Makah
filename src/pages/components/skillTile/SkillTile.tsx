import { Card } from "react-bootstrap"
import ISkill from "../../../interfaces/ISkill"
import "./SkillTile.css"

const handleText = (text: string) : string[] =>{
    return text.split('•')
}

export interface SkillTypeProps 
{
    skill:ISkill
    type:string
}

const SkillTile = ({skill, type}:SkillTypeProps) => {
    return (<Card className={`skillTile ${type}`}>
        <Card.Body>
            <Card.Title>{skill.name}</Card.Title>
            {handleText(skill.effect).map(o=><Card.Text>{o}</Card.Text>)}
        </Card.Body>
    </Card>)

}

export default SkillTile