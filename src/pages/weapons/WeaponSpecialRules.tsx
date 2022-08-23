import { WeaponSpecialRules } from "../../data/weapons/WeaponSpecialRules";

const wsrList = WeaponSpecialRules.map(rule=><tr><td>{rule.name}</td><td>{rule.effect}</td></tr>)

const page = () => <div>
        <h1>WEAPON SPECIAL RULES</h1>
        <p>The following special rules can be found on different weapons across factions ... except for ‘More dakka’ because no one
            can dakka like Orks.</p>
        <table>
            {wsrList}
        </table>
    </div>


export default page;