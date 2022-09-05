import { OverlayTrigger, Popover } from "react-bootstrap"
import GlossaryTerms from "../../data/GlossaryTerms";
import { Skills } from "../../data/Skills";
import { WeaponSpecialRules } from "../../data/weapons/WeaponSpecialRules";
import { getKey } from "../../functions/keys";
import onlyUnique from "../../functions/OnlyUnique";
import IGlossaryItem from "../../interfaces/IGlossaryItem"

const wsr: IGlossaryItem[] = [...WeaponSpecialRules]
const skill: IGlossaryItem[] = [...Skills]
const terms: IGlossaryItem[] = [...GlossaryTerms]


const glossaryTerms : IGlossaryItem[] = [...terms, ...skill, ...wsr]
.filter(onlyUnique)

const mapOverlay = (value: string): JSX.Element =>{
    for (const term of glossaryTerms){
        if(value === term.name){
            return <GlossaryOverlay skill={term} item={<i>{value}</i>} />
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

