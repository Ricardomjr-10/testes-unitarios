const { test} = require('@jest')
const { soma } = require('./math')

test('soma', () => {
    expect(soma(2, 3)).toBe(5)
})

