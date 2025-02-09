document.addEventListener("DOMContentLoaded", function () {

    AOS.init({
        duration: 2000, // Duração padrão para todas as animações
        easing: "ease-in-out", // Suavização padrão
        once: false
    });

    const dataDoEvento = new Date("Jun 19, 2025 20:00:00"); //data futura do evento
    const timeStampDoEvento = dataDoEvento.getTime(); //timestamp desse evento

    const contaAsHoras = setInterval(function () {
        const agora = new Date(); //data atual renovada a cada 1 segundo
        const timeStampAtual = agora.getTime(); //timestamp data atual

        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; //diferença das datas futura e atual

        const diaEmMs = 1000 * 60 * 60 * 24; //dia em milisegundos
        const horaEmMs = 1000 * 60 * 60; //hora em milisegundos
        const minutoEmMs = 1000 * 60; //minutos em milisegundos

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs); //encontrando os dias

        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs); //encontrando as horas //coloca a % para pegar o resto da divisão, os numeros quebras que sobram para depois fazer a próxima divisão

        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs); //encontra os minutos

        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000); //encontra os segundos

        document.getElementById('contador').innerHTML = ` começa em ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

        if (distanciaAteOEvento < 0) {
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = ` já aconteceu.<br>Mas aguarde que ano que em 2026 teremos novamente!`;
            document.querySelector('.hero__text2').style.backgroundColor = 'red';
        }

    }, 1000);

});