const mdc = require('../funcoes/mdc');

test('MDC entre 5 e 10', () => {
    expect(mdc(5,10)).toMatchObject([5]);
});

test('MDC entre 1 e 10', () => {
    expect(mdc(1,10)).toMatchObject([1]);
});


