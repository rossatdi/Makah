import { Accordion, Container } from "react-bootstrap"
import { Helmet } from "react-helmet"
import Movement from "./Movement"
import './ActionsPage.css'
import Shoot from "./Shoot"
import Fight from "./Fight"


export const page = () =>{
    return(<Container className="actionsPage">
        <Helmet>
            <title>Actions</title>
        </Helmet>
        <h1>Actions</h1>
        <Accordion flush alwaysOpen>
      <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>Action 1: Movement</h3>
          </Accordion.Header>
          <Accordion.Body>
            <Movement/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3>Action 2: Dash</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>An additional 3" move. This cannot be used to move into or out of Engagement range. It can be used before or after a Movement action.</p>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3>Action 3: Shoot</h3>
          </Accordion.Header>
          <Accordion.Body>
            <Shoot/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3>Action 4: Fight</h3>
          </Accordion.Header>
          <Accordion.Body>
            <Fight/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h3>Action 5: Stabilise</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>Choose a friendly operative within 1" that has been Injured, apply the Winded injury effect and stand them up. You or the target can’t be within 1" of an enemy.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h3>Action 6: Finish Off</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>Choose a Critically injured operative within 1". Immediately remove this model from the game.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h3>Action 7: Psychic power</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>Roll a d6, on 1 take 1 Damage. On a 2+, choose a psychic power from the Operative’s faction to use. If an enemy psyker is visible to you, they may take an Evade token if they don’t have one, to give you -1 to this roll.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>) 
}

export default page;