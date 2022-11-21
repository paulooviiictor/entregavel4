const contagem = require('../funcoes/contagem');

test ('A quantidade de itens presentes na lista é', () =>{
    expect(contagem(13)).toMatchObject([1, 2, 3, 4, 5, 4, 5, 8, 9, 10, -1, 0, -33]);
});

test('Numeros inteiros entre 1 e 10', () => {
    expect(contagem(10)).toMatchObject([10]);
});

test('Numeros inteiros entre 1 e 5', () => {
    expect(contagem(5)).toMatchObject([5]);
});