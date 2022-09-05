import { OverlayTrigger, Popover } from "react-bootstrap"
import GlossaryTerms from "../../data/GlossaryTerms";
import { getKey } from "../../functions/keys";
import IGlossaryItem from "../../interfaces/IGlossaryItem"

const mapOverlay = (value: string): JSX.Element =>{
    for (const term of GlossaryTerms){
        if(value === term.name){
            return <GlossaryOverlay skill={term} item={<span>{value}</span>} />
        }
    }
    return <>{value}</>
}

export const applyGlossaryOverlay = (text: string) : JSX.Element =>{
    const split = text.split(' ')
        .map(o=>mapOverlay(o))
        .reduce((a,b)=> <>{a} {b}</>)
    return <>{split}</>
}


const popover = (rule:IGlossaryItem) =>
(<Popover>
    <Popover.Header>{rule.name}</Popover.Header>
    <Popover.Body>{rule.effect}</Popover.Body>
</Popover>
)

const GlossaryOverlay = ({skill,item} :{skill:IGlossaryItem; item:JSX.Element;}) =>(
    <OverlayTrigger key={getKey()}  trigger={["hover","focus"]} delay={{show:250, hide:400}} placement="bottom" overlay={popover(skill)}>
        {item}
    </OverlayTrigger>
)

export default GlossaryOverlay

