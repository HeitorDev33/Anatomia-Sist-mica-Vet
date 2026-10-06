const animalSelect = document.getElementById('filtro-animal');
const sistemaSelect = document.getElementById('filtro-sistema');
const areaTrabalho = document.getElementById('area-trabalho');

function atualizarFocoDeEstudo() {
    const animal = animalSelect.value;
    const sistema = sistemaSelect.value;
    
    if (animal !== "" && sistema !== "") {
        areaTrabalho.className = 'painel-ativo';
        
        let tituloExibicao = "";
        
        if (animal === "Esplancnologia" && sistema === "Esplancnologia") {
            tituloExibicao = "Esplancnologia Geral Comparada";
        } else if (animal === "Esplancnologia") {
            tituloExibicao = `${sistema} - Visão Geral (Esplancnologia)`;
        } else if (sistema === "Esplancnologia") {
            tituloExibicao = `Esplancnologia (Vísceras) - ${animal}`;
        } else {
            tituloExibicao = `${sistema} - ${animal}`;
        }

        areaTrabalho.innerHTML = `
            <h3>${tituloExibicao}</h3>
            <p style="color: #8892b0;">As informações para este estudo irão aparecer aqui.</p>
        `;
    } else {
        areaTrabalho.className = '';
        areaTrabalho.innerHTML = '';
    }
}

animalSelect.addEventListener('change', atualizarFocoDeEstudo);
sistemaSelect.addEventListener('change', atualizarFocoDeEstudo);
atualizarFocoDeEstudo();
