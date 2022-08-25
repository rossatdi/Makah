import { OverlayTrigger, Popover } from "react-bootstrap"
import ISkill from "../../types/ISkill"

const popover = (rule:ISkill) =>
(<Popover>
    <Popover.Header>{rule.name}</Popover.Header>
    <Popover.Body>{rule.effect}</Popover.Body>
</Popover>
)

const SkillOverlay = (skill:ISkill) =>(
    <OverlayTrigger trigger={["hover","focus"]} delay={{show:250, hide:400}} placement="bottom" overlay={popover(skill)}>
        <p className="skillName">{skill.name}</p>
    </OverlayTrigger>
)

export default SkillOverlay

