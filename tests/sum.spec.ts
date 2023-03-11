import { sum } from "../src/sum"
describe('first test', () => {

  it('adds two numbers ', () => {
    const num1 = 1
    const num2 = 3
    const result = sum(num1, num2)
    expect(result).toEqual(4)
  })
})