import { useState } from "react";
import { Container, Form } from "react-bootstrap"
import { Helmet } from "react-helmet";
import Campaigns from "../../data/campaigns/Campaigns";


const h = Campaigns

export const Page = () => {
    const [campaign, setCampaign] = useState<number>(-1);
    const [round, setRound] = useState<number>(-1);
    return (<Container className="campaign">
              <Helmet>
              <title>Campaign</title>
          </Helmet>
      <h1>Campaign</h1>
            <Form.Group controlId="custom-select" >
                <Form.Control as="select" value={campaign} onChange={e=>setCampaign(parseInt(e.target.value))} size="lg">
                    <option className="d-none" value="">
                         Select Option
                    </option>
                    {h.map((o,i)=><option key={i} value={i}>{o.name}</option>)}
                </Form.Control>
                {campaign != -1 && <Form.Control as="select" value={round} onChange={e=>setRound(parseInt(e.target.value))} size="lg">
                    <option className="d-none" value="">
                         Select Option
                    </option>
                    {h[campaign].rounds.map((o,i)=><option key={i} value={i}>{o.name}</option>)}
                </Form.Control>}
                {round != -1 && <Form.Control as="select" size="lg">
                    <option className="d-none" value="">
                         Select Option
                    </option>
                    {h[campaign].rounds[round].scenarios.map((o,i)=><option key={i} value={i}>{o.name}</option>)}
                </Form.Control>}
                
            </Form.Group>
      </Container>)}
  
  export default Page 