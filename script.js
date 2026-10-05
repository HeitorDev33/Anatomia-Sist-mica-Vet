// Pegando os elementos do HTML
const animalSelect = document.getElementById('filtro-animal');
const sistemaSelect = document.getElementById('filtro-sistema');
const areaTrabalho = document.getElementById('area-trabalho');

// Função que atualiza a tela
function atualizarFocoDeEstudo() {
    const animal = animalSelect.value;
    const sistema = sistemaSelect.value;
    
    // Só mostra a mensagem se a pessoa selecionou os dois filtros
    if (animal !== "" && sistema !== "") {
        areaTrabalho.innerHTML = `
            <h3>Foco Atual: ${sistema} - ${animal}</h3>
            <p>Excelente! Agora que o tema está definido, use o menu abaixo dos filtros para abrir os Flashcards, Pomodoro ou Anotações sobre este assunto.</p>
        `;
    } else {
        areaTrabalho.innerHTML = `
            <p>Aguardando seleção do tema de estudo...</p>
        `;
    }
}

// Ouve as mudanças nas caixas de seleção
animalSelect.addEventListener('change', atualizarFocoDeEstudo);
sistemaSelect.addEventListener('change', atualizarFocoDeEstudo);

// Chama a função uma vez ao carregar a página
atualizarFocoDeEstudo();
