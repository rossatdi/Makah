import { Table } from "react-bootstrap";
import GlossaryTerms from "../../data/GlossaryTerms";

const glossaryTerms = GlossaryTerms


const page = () => <div>
    <h1>Glossary</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
            {glossaryTerms.map(o=><tr><td>{o.name}</td><td>{o.effect}</td></tr>)}  
        </tbody>
      </Table>
      </div>

export default page 