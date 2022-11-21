const primo = require('../funcoes/primo');

test('O número informado é primo', () => {
    expect(primo()).toMatchObject([true]);
});

test('O número informado não é primo!', () => {
    expect(primo()).toMatchObject([false]);
});

