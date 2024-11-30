const {soma, subtracao, multiplicacao }= require('./math')

test('soma', () => {
    expect(soma(2, 3)).toBe(5)
})

test('subtracao', () => {
    expect(subtracao(2, 3)).toBe(-1)
})

test('multiplicacao', () => {
    expect(multiplicacao(2, 3)).toBe(6)
})