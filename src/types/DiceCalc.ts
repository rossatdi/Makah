
type diceSize = "3"|"4"|"6"|"8"|"10"|"12"|"20"|"100";
type d = "D"|"d";

export type DiceCalc = 
`${number}${d}${diceSize}`
| `${d}${diceSize}`
| `${number}${d}${diceSize}+${number}`
| `${d}${diceSize}+${number}`

export default DiceCalc;