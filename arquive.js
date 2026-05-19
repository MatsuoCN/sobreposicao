function criarData(stringData) {
    const [data, hora] = stringData.split(" - ");
    const [dia, mes, ano] = data.split("/");
    const [horas, minutos] = hora.split(":");
    return new Date(ano, mes - 1, dia, horas, minutos);
}

function verificarAgenda(p1InicioStr, p1FimStr, p2InicioStr, p2FimStr) {
    const p1Inicio = criarData(p1InicioStr);
    const p1Fim = criarData(p1FimStr);
    const p2Inicio = criarData(p2InicioStr);
    const p2Fim = criarData(p2FimStr);

    if (p1Inicio.getTime() < p2Fim.getTime() && p1Fim.getTime() > p2Inicio.getTime()) {
        console.log("⚠️ Saída: Estão sobrepostos");
        alert("⚠️ Estão sobrepostos");
    } else {
        console.log("✅ Saída: Não estão sobrepostos");
        alert("✅ Períodos Válidos");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("verificarAgenda");

    if (botao) {
        botao.addEventListener("click", function () {

            const p1DataIn = document.getElementById("p1DataInicio").value;
            const p1HoraIn = document.getElementById("p1HoraInicio").value;
            const p1DataFi = document.getElementById("p1DataFim").value;
            const p1HoraFi = document.getElementById("p1HoraFim").value;

            const p2DataIn = document.getElementById("p2DataInicio").value;
            const p2HoraIn = document.getElementById("p2HoraInicio").value;
            const p2DataFi = document.getElementById("p2DataFim").value;
            const p2HoraFi = document.getElementById("p2HoraFim").value;

            if (!p1DataIn || !p1HoraIn || !p1DataFi || !p1HoraFi || !p2DataIn || !p2HoraIn || !p2DataFi || !p2HoraFi) {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            function formatar(dataHtml, horaHtml) {
                const [ano, mes, dia] = dataHtml.split("-");
                return `${dia}/${mes}/${ano} - ${horaHtml}`;
            }

            const p1InicioFormatado = formatar(p1DataIn, p1HoraIn);
            const p1FimFormatado = formatar(p1DataFi, p1HoraFi);
            const p2InicioFormatado = formatar(p2DataIn, p2HoraIn);
            const p2FimFormatado = formatar(p2DataFi, p2HoraFi);

            verificarAgenda(p1InicioFormatado, p1FimFormatado, p2InicioFormatado, p2FimFormatado);
        });
    }
});