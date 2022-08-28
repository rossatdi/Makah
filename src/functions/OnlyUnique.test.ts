import { onlyUnique } from './OnlyUnique';

describe('testing onlyUnique', () => {
    const o= {a:"A"};
    const p= {a:"A"};
    const testData : {i:any[], e:number}[] = [
        {i:["A","B","C","A"], e:3},
        {i:[o,o,o,o], e:1},
        {i:[o,o,p,p], e:2},
    ]

    testData.forEach(a=>test(`sum ${JSON.stringify(a.i)} should be ${a.e}`, () => {
        expect(a.i.filter(onlyUnique).length).toBe(a.e);
      }));
});