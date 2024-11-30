const {soma, subtracao, multiplicacao, divisao }= require('./math')

test('soma', () => {
    expect(soma(2, 3)).toBe(5)
})

test('subtracao', () => {
    expect(subtracao(2, 3)).toBe(-1)
})

test('multiplicacao', () => {
    expect(multiplicacao(2, 3)).toBe(6)
})

test('divisao de dois numeros', () => {
    expect(divisao(10,2)).toBe(5)
})