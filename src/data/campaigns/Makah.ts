import Campaign from "../../types/Campaign";

const Makah : Campaign = 
{
    name:"Makah",
    blurb:"this is makah",
    rounds: [
        {
            name:"this is the beginning",
            blurb:"",
            scenarios:[
                {
                    name:"Scenario1",
                    scenarioType:"Matched",
                    blurb:"blurb",
                    setup:"setup",
                    deployment:"deployment",
                    map:"will require work",
                    missionAction: { name:"mission Action", effect:"do the thing"},
                    missionSpecialRule:"missionSpecialRule",
                    winCondition:"winCondition",
                    postGame:"postGame",
                },
                {
                    name:"Scenario2",
                    scenarioType:"Asymmetric",
                    blurb:"blurb",
                    setup:"setup",
                    deployment:"deployment",
                    map:"will require work",
                    missionAction: { name:"mission Action", effect:"do the thing"},
                    missionSpecialRule:"missionSpecialRule",
                    winCondition:"winCondition",
                    postGame:"postGame",
                }
            ]
        },
        {
            name:"and this is the end",
            blurb:"",
            scenarios:[
                {
                    name:"Scenario3",
                    scenarioType:"Matched",
                    blurb:"blurb",
                    setup:"setup",
                    deployment:"deployment",
                    map:"will require work",
                    missionAction: { name:"mission Action", effect:"do the thing"},
                    missionSpecialRule:"missionSpecialRule",
                    winCondition:"winCondition",
                    postGame:"postGame",
                },
                {
                    name:"Scenario4",
                    scenarioType:"Asymmetric",
                    blurb:"blurb",
                    setup:"setup",
                    deployment:"deployment",
                    map:"will require work",
                    missionAction: { name:"mission Action", effect:"do the thing"},
                    missionSpecialRule:"missionSpecialRule",
                    winCondition:"winCondition",
                    postGame:"postGame",
                }
            ]
        }
    ]
    
}

export default Makah;