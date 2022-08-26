import Weapon from "../types/Weapon";

//TODO make it take an arbitrary number of lists
export function CombineWeaponsLists(a: Weapon[], b:Weapon[]) : Weapon[]
{
    let c = a;
    b.forEach(weapon => {
        const g = c.find(o=>o.name===weapon.name);
        if(!g){
            c.push(weapon)
        }
        else{
            if(g.pt > weapon.pt){
                c[c.indexOf(g)] = weapon;
            }
        }
    });
    return c;
}

export default CombineWeaponsLists;