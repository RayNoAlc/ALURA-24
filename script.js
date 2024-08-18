const botoes = document.querySelectorAll(".botao");
const abasConteudos = document.querySelectorAll(".aba-conteudo");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        document.querySelector(".botao.ativo").classList.remove("ativo");
        botao.classList.add("ativo");

        document.querySelector(".aba-conteudo.ativo").classList.remove("ativo");
        const target = botao.getAttribute("data-target");
        document.getElementById(target).classList.add("ativo");
    });
});

const metas = [
    { id: 1, deadline: new Date("2024-12-31T23:59:59") },
    // Adicione mais metas com suas datas de prazo
];

function calculaTempo(tempoObjetivo) {
    const agora = new Date();
    const diferenca = tempoObjetivo - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
}

function atualizaContadores() {
    metas.forEach(meta => {
        const { dias, horas, minutos, segundos } = calculaTempo(meta.deadline);
        document.getElementById(`dias${meta.id}`).textContent = dias;
        document.getElementById(`horas${meta.id}`).textContent = horas;
        document.getElementById(`min${meta.id}`).textContent = minutos;
        document.getElementById(`seg${meta.id}`).textContent = segundos;
    });
}

setInterval(atualizaContadores, 1000);
