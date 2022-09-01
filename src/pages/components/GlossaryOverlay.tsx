import { OverlayTrigger, Popover } from "react-bootstrap"
import { getKey } from "../../functions/keys";
import IGlossaryItem from "../../interfaces/IGlossaryItem"

const popover = (rule:IGlossaryItem) =>
(<Popover>
    <Popover.Header>{rule.name}</Popover.Header>
    <Popover.Body>{rule.effect}</Popover.Body>
</Popover>
)

const GlossaryOverlay = (props :{skill:IGlossaryItem; item:JSX.Element;}) =>(
    <OverlayTrigger key={getKey()}  trigger={["hover","focus"]} delay={{show:250, hide:400}} placement="bottom" overlay={popover(props.skill)}>
        {props.item}
    </OverlayTrigger>
)

export default GlossaryOverlay

