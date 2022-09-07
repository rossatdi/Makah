import Scenario from "./Scenario";

export type CampaignRound = 
{
    name:string
    blurb:JSX.Element
    scenarios:Scenario[]
}

export default CampaignRound;