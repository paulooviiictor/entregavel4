const somatorio = require('../funcoes/somatorio');

test ('Somatorio entre 30 e 35 e igual a 65', () =>{
    expect(somatorio(30+35)).toMatchObject([65]);
});
