import Faction from "../../types/Faction";
import { OperativeBase } from "../../types/OperativeBase";
import SkillTile from "../components/skillTile/SkillTile";
import WeaponBlock from "../components/weaponsBlock/WeaponsBlock";
import { Table } from 'react-bootstrap';

const OperativesView = (operatives: OperativeBase[]) => (
  <Table striped>
    <thead>
    <tr>
      <th>Type</th>
      <th>Mv</th>
      <th>Ws</th>
      <th>Bs</th>
      <th>Act</th>
      <th>Wnd</th>
      <th>Sv</th>
      <th>Pt</th>
    </tr>
    </thead>
    <tbody>
    {operatives.map((o,i) => (
      <tr key={i}>
        <td>{o.type}</td>
        <td>{o.mv}"</td>
        <td>{o.ws}+</td>
        <td>{o.bs}+</td>
        <td>{o.act}</td>
        <td>{o.wnd}</td>
        <td>{o.sv}+</td>
        <td>{o.pt}</td>
      </tr>
    ))}
    </tbody>
  </Table>
);

const FactionView = ({ faction }: {faction: Faction; }) => {
  return (
    <div>
      <h1>{faction.name}</h1>
      <hr />
      <i>{faction.quote}</i>
      {faction.attribution && (
        <>
          <br />
          <i>-{faction.attribution}</i>
        </>
      )}
      <h3>Operatives</h3>
      {OperativesView(faction.operativeTypes)}
      {faction.operativeNotes && (
        <ul>
          {faction.operativeNotes.map((o) => (
            <li>{o}</li>
          ))}
        </ul>
      )}
      <h3>Faction Ability</h3>
      <SkillTile skill={faction.ability} type="facton"></SkillTile>
      <h3>Equipment</h3>
      {faction.equipment.map((o) => (
        <SkillTile key={o.name} skill={o} type="equipment" />
      ))}
      <h3>Weapons</h3>
      {WeaponBlock(faction.weapons, faction.name, true)}
    </div>
  );
};

export default FactionView;
