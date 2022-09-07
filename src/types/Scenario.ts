import Action from "./Action"

export type ScenarioType = "Matched"|"Asymmetric"

export type Scenario = 
{
    name:string
    scenarioType:ScenarioType
    blurb:string
    setup:string
    deployment:string
    map:any
    missionAction: Action
    missionSpecialRule:string
    winCondition:string
    postGame:string
}

export default Scenario;