import SumPoints from './SumPoints'
import IPointed from './../interfaces/IPointed';
import Point from '../types/Point';
 
describe('testing SumPoints', () => {

    type test = { 
        input:IPointed[]
    expected:Point}

    const tests : test[] =
    [
        {
            input:[{pt:1},{pt:1}],
            expected:2
        },
        {
            input:[{pt:2},{pt:1}],
            expected:3
        },
        {
            input:[{pt:1},{pt:"-"}],
            expected:1
        },
        {
            input:[{pt:"-"},{pt:"-"}],
            expected:"-"
        },
    ]

    tests.forEach(a=>test(`sum ${JSON.stringify(a.input)} should be ${JSON.stringify(a.expected)}`, () => {
        expect(SumPoints(a.input)).toBe(a.expected);
      }));
});