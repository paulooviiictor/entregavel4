const quicksort = require('../funcoes/quicksort');

test('Teste de array Ordenado', () => {
    expect(quicksort()).toMatchObject([true]);
});
