import { NegocicaoController } from "./controllers/negociacao-controller.js";
const controller = new NegocicaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possivel inicializara aplicação. Verifique se o form existe');
}
;
