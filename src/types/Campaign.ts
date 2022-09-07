import CampaignRound from "./CampaignRound";

export type Campaign = 
{
    name:string
    blurb:string
    rounds:CampaignRound[]
}

export default Campaign;