
import { Pistol, Assault, Rifle, Heavy, Combat, Grenade } from '../../../data/weapons/WeaponTypes';
import WeaponType from '../../../types/WeaponType';
import { weaponSorting } from './WeaponsBlock';
import { WeaponTileProps } from './../weaponTIle/WeaponTile';

const makeWeapon = (type:WeaponType, name:string) : WeaponTileProps  =>{
    return { weapon: {
        name: name,
        profiles: [
            {
            types: [type],
            attack: 0,
            dam: 0,
            ap: 0,
            special: [],
            },
        ],
        pt: 0,
        source: "",
    }}
} 

describe('testing weaponSorting', () => {

    const TestData = [
        {a:Pistol, b:Assault, e:-1},
        {a:Assault, b:Rifle, e:-1},
        {a:Rifle, b:Heavy, e:-1},
        {a:Heavy, b:Combat, e:-1},
        {a:Combat, b:Grenade, e:-1},
    ]
    const TestFn = (a:WeaponType, b:WeaponType, e: number) => {
       expect(weaponSorting(makeWeapon(a,""),makeWeapon(b,""))).toBe(e);
      }
    TestData.forEach(o=> test(`${o.a.name} < ${o.b.name}`,()=>TestFn(o.a,o.b,o.e)))

    test("secondary sort on names+", ()=> expect(weaponSorting(makeWeapon(Pistol,"a"),makeWeapon(Pistol,"b"))).toBe(-1))
    test("secondary sort on names-", ()=> expect(weaponSorting(makeWeapon(Pistol,"b"),makeWeapon(Pistol,"a"))).toBe(1))
});