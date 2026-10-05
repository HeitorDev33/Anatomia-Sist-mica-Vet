const animalSelect = document.getElementById('filtro-animal');
const sistemaSelect = document.getElementById('filtro-sistema');
const btnCarregar = document.getElementById('btn-carregar');
const areaTrabalho = document.getElementById('area-trabalho');

btnCarregar.addEventListener('click', () => {
    const animal = animalSelect.value;
    const sistema = sistemaSelect.value;

    if (animal === "" || sistema === "") {
        alert("Por favor, selecione o Animal e o Sistema antes de clicar em Estudar.");
        return;
    }

    areaTrabalho.className = 'painel-ativo';

    // Se for Esplancnologia, exibe a abordagem completa das vísceras
    if (sistema === "Esplancnologia") {
        areaTrabalho.innerHTML = `
            <h3>Esplancnologia Geral - ${animal}</h3>
            <p style="text-align: center; color: #a9a9b3;">A Esplancnologia compreende o estudo dos órgãos viscerais contidos nas cavidades do corpo do(a) ${animal}.</p>
            
            <div class="esplancno-grid">
                <div class="esplancno-card">
                    <h4>Sistema Digestivo</h4>
                    <p>Estruturas ligadas à apreensão, mastigação, digestão e absorção de nutrientes específicas para ${animal}.</p>
                </div>
                <div class="esplancno-card">
                    <h4>Sistema Respiratório</h4>
                    <p>Vias aéreas superiores, cavidade nasal, laringe, traqueia e pulmões adaptados ao ${animal}.</p>
                </div>
                <div class="esplancno-card">
                    <h4>Sistema Urinário</h4>
                    <p>Rins, ureteres, bexiga e uretra. Análise morfológica dos rins de ${animal}.</p>
                </div>
                <div class="esplancno-card">
                    <h4>Sistema Genital</h4>
                    <p>Órgãos reprodutores e estruturas anexas dos machos e fêmeas da espécie.</p>
                </div>
            </div>
        `;
    } else {
        // Para os outros sistemas individuais
        areaTrabalho.innerHTML = `
            <h3>${sistema} - ${animal}</h3>
            <p style="text-align: center; color: #a9a9b3;">Conteúdo específico e detalhado sobre o ${sistema} em ${animal}.</p>
        `;
    }
});
