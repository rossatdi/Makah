import CampaignRound from "./CampaignRound";

export type Campaign = 
{
    name:string
    blurb:JSX.Element
    rounds:CampaignRound[]
}

export default Campaign;