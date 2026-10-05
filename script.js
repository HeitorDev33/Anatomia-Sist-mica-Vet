const animalSelect = document.getElementById('filtro-animal');
const sistemaSelect = document.getElementById('filtro-sistema');
const btnEsplancno = document.getElementById('btn-esplancno');
const btnCarregar = document.getElementById('btn-carregar');
const areaTrabalho = document.getElementById('area-trabalho');

// Botão "Esplancnologia" (Aborda tudo sobre as vísceras de uma só vez)
btnEsplancno.addEventListener('click', () => {
    const animal = animalSelect.value;

    if (animal === "") {
        alert("Por favor, selecione qual Animal deseja estudar a Esplancnologia.");
        return;
    }

    areaTrabalho.className = 'painel-ativo';
    areaTrabalho.innerHTML = `
        <h3>Esplancnologia Geral - ${animal}</h3>
        <p style="text-align: center; color: #a9a9b3;">A Esplancnologia aborda o estudo integrado das vísceras (sistemas digestivo, respiratório, urogenital e endócrino) do(a) <strong>${animal}</strong>.</p>
        
        <div class="esplancno-grid">
            <div class="esplancno-card">
                <h4>Sistema Digestivo</h4>
                <p>Órgãos de apreensão, mastigação, condução, digestão, absorção e excreção para ${animal}.</p>
            </div>
            <div class="esplancno-card">
                <h4>Sistema Respiratório</h4>
                <p>Vias aéreas, cavidade nasal, laringe, traqueia, brônquios e pulmões do(a) ${animal}.</p>
            </div>
            <div class="esplancno-card">
                <h4>Sistema Urinário</h4>
                <p>Anatomia e morfologia dos rins, ureteres, bexiga e uretra no(a) ${animal}.</p>
            </div>
            <div class="esplancno-card">
                <h4>Sistema Genital</h4>
                <p>Anatomia reprodutiva dos machos e fêmeas da espécie.</p>
            </div>
        </div>
    `;
});

// Botão "Estudar Sistema" (Para sistemas específicos)
btnCarregar.addEventListener('click', () => {
    const animal = animalSelect.value;
    const sistema = sistemaSelect.value;

    if (animal === "" || sistema === "") {
        alert("Por favor, selecione o Animal e o Sistema específico.");
        return;
    }

    areaTrabalho.className = 'painel-ativo';
    areaTrabalho.innerHTML = `
        <h3>${sistema} - ${animal}</h3>
        <p style="text-align: center; color: #a9a9b3;">Conteúdo específico e detalhado sobre o ${sistema} em ${animal}.</p>
    `;
});
