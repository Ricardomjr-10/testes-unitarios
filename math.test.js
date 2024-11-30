const {soma, subtracao }= require('./math')

test('soma', () => {
    expect(soma(2, 3)).toBe(5)
})

test('subtracao', () => {
    expect(subtracao(2, 3)).toBe(-1)
})
