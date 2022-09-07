import Action from "./Action"

export type ScenarioType = "Matched"|"Asymmetric"

export type MiscItem = {
    name:string,
    item:JSX.Element
}

export type Scenario = 
{
    name:string
    scenarioType:ScenarioType
    blurb:JSX.Element
    board:string
    setup:string
    deployment:string
    map:any
    missionAction: Action
    missionSpecialRule:Action
    winCondition:string
    postGame:string
    MiscItems?:MiscItem[]
}

export default Scenario;