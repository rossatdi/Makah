import SumPoints from './SumPoints'
 
describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(SumPoints([{pt:1},{pt:1}])).toBe(2);
  });
});