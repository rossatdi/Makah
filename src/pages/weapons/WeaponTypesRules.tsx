import WeaponTypes from "../../data/weapons/WeaponTypes";

const wsrList = WeaponTypes.map(rule=><tr><td>{rule.name}</td><td>{rule.effect}</td></tr>)

const page = () => <div>
        <h1>WEAPON TYPE RULES</h1>
        <table>
            {wsrList}
        </table>
    </div>


export default page;