document.getElementById('generate-button').addEventListener('click', function () {
    const selectedDays = Array.from(document.querySelectorAll('#days-selection input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.nextElementSibling.innerText);

    const rating = document.getElementById('rating').value;
    const hours = parseFloat(document.getElementById('hours').value);
    const trainingPlan = document.getElementById('training-plan');
    trainingPlan.innerHTML = ''; // Limpa o plano anterior

    if (selectedDays.length > 0) {
        selectedDays.forEach(day => {
            const table = document.createElement('table');
            table.classList.add('training-table');

            const header = document.createElement('tr');
            header.innerHTML = `<th>Atividade</th><th>Tempo</th>`;
            table.appendChild(header);

            // Definição de atividades de treino
            const activities = {
                'iniciantes': [
                    ['Puzzles de xadrez (básicos)', '15 min'],
                    ['Partida jogada (exemplo: 1.e4 e5)', '30 min'],
                    ['Blitz (5 min por partida)', '10 min'],
                    ['Estudo de aberturas (exemplo: Abertura Italiana)', '15 min'],
                    ['Finais básicos (exemplo: Rei e peão vs Rei)', '15 min'],
                    ['Análise de partida (exemplo: analisar uma partida entre dois jogadores iniciantes)', '20 min'],
                ],
                '1000': [
                    ['Puzzles de xadrez (intermediários)', '20 min'],
                    ['Partida jogada (exemplo: 1.d4 d5)', '30 min'],
                    ['Rápidas (10 min por partida)', '20 min'],
                    ['Análise de partida (exemplo: partida de Magnus Carlsen)', '20 min'],
                    ['Estudo de meio de jogo (táticas e estratégias)', '20 min'],
                    ['Análise de aberturas (exemplo: Defesa Siciliana)', '20 min'],

                    ['Puzzles de xadrez (básicos)', '15 min'],
                    ['Partida jogada (exemplo: 1.e4 e5)', '30 min'],
                    ['Blitz (5 min por partida)', '10 min'],
                    ['Estudo de aberturas (exemplo: Abertura Italiana)', '15 min'],
                    ['Finais básicos (exemplo: Rei e peão vs Rei)', '15 min'],
                    ['Análise de partida (exemplo: analisar uma partida entre dois jogadores iniciantes)', '20 min'],
                ],
                '1200': [
                    ['Puzzles de xadrez (avançados)', '25 min'],
                    ['Partida jogada (exemplo: 1.Nf3 d5)', '30 min'],
                    ['Blitz (3 min por partida)', '15 min'],
                    ['Estudo de aberturas (exemplo: Defesa Francesa)', '25 min'],
                    ['Análise de meio de jogo (exemplo: posição de torre e peões)', '25 min'],
                    ['Análise de final (exemplo: finais de rei e peão)', '20 min'],

                    ['Puzzles de xadrez (intermediários)', '20 min'],
                    ['Partida jogada (exemplo: 1.d4 d5)', '30 min'],
                    ['Rápidas (10 min por partida)', '20 min'],
                    ['Análise de partida (exemplo: partida de Magnus Carlsen)', '20 min'],
                    ['Estudo de meio de jogo (táticas e estratégias)', '20 min'],
                    ['Análise de aberturas (exemplo: Defesa Siciliana)', '20 min'],

                    ['Puzzles de xadrez (básicos)', '15 min'],
                    ['Partida jogada (exemplo: 1.e4 e5)', '30 min'],
                    ['Blitz (5 min por partida)', '10 min'],
                    ['Estudo de aberturas (exemplo: Abertura Italiana)', '15 min'],
                    ['Finais básicos (exemplo: Rei e peão vs Rei)', '15 min'],
                    ['Análise de partida (exemplo: analisar uma partida entre dois jogadores iniciantes)', '20 min'],
                ],
                '1400': [
                    ['Puzzles de xadrez (desafios)', '30 min'],
                    ['Partida jogada (exemplo: 1.e4 c5)', '40 min'],
                    ['Rápidas (15 min por partida)', '30 min'],
                    ['Estudo de finais (exemplo: torre e peão vs torre)', '30 min'],
                    ['Análise de partida (exemplo: partida de Fabiano Caruana)', '30 min'],
                    ['Estudo de meio de jogo (exemplo: ataque ao rei)', '25 min'],

                    ['Puzzles de xadrez (avançados)', '25 min'],
                    ['Partida jogada (exemplo: 1.Nf3 d5)', '30 min'],
                    ['Blitz (3 min por partida)', '15 min'],
                    ['Estudo de aberturas (exemplo: Defesa Francesa)', '25 min'],
                    ['Análise de meio de jogo (exemplo: posição de torre e peões)', '25 min'],
                    ['Análise de final (exemplo: finais de rei e peão)', '20 min'],

                    ['Puzzles de xadrez (intermediários)', '20 min'],
                    ['Partida jogada (exemplo: 1.d4 d5)', '30 min'],
                    ['Rápidas (10 min por partida)', '20 min'],
                    ['Análise de partida (exemplo: partida de Magnus Carlsen)', '20 min'],
                    ['Estudo de meio de jogo (táticas e estratégias)', '20 min'],
                    ['Análise de aberturas (exemplo: Defesa Siciliana)', '20 min'],

                    ['Puzzles de xadrez (básicos)', '15 min'],
                    ['Partida jogada (exemplo: 1.e4 e5)', '30 min'],
                    ['Blitz (5 min por partida)', '10 min'],
                    ['Estudo de aberturas (exemplo: Abertura Italiana)', '15 min'],
                    ['Finais básicos (exemplo: Rei e peão vs Rei)', '15 min'],
                    ['Análise de partida (exemplo: analisar uma partida entre dois jogadores iniciantes)', '20 min'],
                ],
                '1600': [
                    ['Puzzles de xadrez (mestres)', '35 min'],
                    ['Partida jogada (exemplo: 1.e4 e5 2.Nf3 Nc6)', '40 min'],
                    ['Blitz (1 min por partida)', '20 min'],
                    ['Estudo de estratégias de abertura (exemplo: Abertura Inglesa)', '35 min'],
                    ['Análise de final (exemplo: finais de bispos)', '25 min'],
                    ['Análise de partida (exemplo: análise de Carlsen vs Anand)', '30 min'],

                    ['Puzzles de xadrez (desafios)', '30 min'],
                    ['Partida jogada (exemplo: 1.e4 c5)', '40 min'],
                    ['Rápidas (15 min por partida)', '30 min'],
                    ['Estudo de finais (exemplo: torre e peão vs torre)', '30 min'],
                    ['Análise de partida (exemplo: partida de Fabiano Caruana)', '30 min'],
                    ['Estudo de meio de jogo (exemplo: ataque ao rei)', '25 min'],

                    ['Puzzles de xadrez (avançados)', '25 min'],
                    ['Partida jogada (exemplo: 1.Nf3 d5)', '30 min'],
                    ['Blitz (3 min por partida)', '15 min'],
                    ['Estudo de aberturas (exemplo: Defesa Francesa)', '25 min'],
                    ['Análise de meio de jogo (exemplo: posição de torre e peões)', '25 min'],
                    ['Análise de final (exemplo: finais de rei e peão)', '20 min'],

                    ['Puzzles de xadrez (intermediários)', '20 min'],
                    ['Partida jogada (exemplo: 1.d4 d5)', '30 min'],
                    ['Rápidas (10 min por partida)', '20 min'],
                    ['Análise de partida (exemplo: partida de Magnus Carlsen)', '20 min'],
                    ['Estudo de meio de jogo (táticas e estratégias)', '20 min'],
                    ['Análise de aberturas (exemplo: Defesa Siciliana)', '20 min'],

                    ['Puzzles de xadrez (básicos)', '15 min'],
                    ['Partida jogada (exemplo: 1.e4 e5)', '30 min'],
                    ['Blitz (5 min por partida)', '10 min'],
                    ['Estudo de aberturas (exemplo: Abertura Italiana)', '15 min'],
                    ['Finais básicos (exemplo: Rei e peão vs Rei)', '15 min'],
                    ['Análise de partida (exemplo: analisar uma partida entre dois jogadores iniciantes)', '20 min'],
                ],
                '1800': [
                    ['Puzzles de xadrez (altamente desafiadores)', '40 min'],
                    ['Partida jogada (exemplo: 1.c4 e5)', '40 min'],
                    ['Rápidas (25 min por partida)', '40 min'],
                    ['Estudo de meio de jogo (exemplo: sacrifícios e táticas)', '35 min'],
                    ['Análise de partidas de grandes mestres (exemplo: partida de Karpov)', '40 min'],
                    ['Estudo aprofundado de aberturas (exemplo: Abertura Catalã)', '40 min'],

                    ['Puzzles de xadrez (mestres)', '35 min'],
                    ['Partida jogada (exemplo: 1.e4 e5 2.Nf3 Nc6)', '40 min'],
                    ['Blitz (1 min por partida)', '20 min'],
                    ['Estudo de estratégias de abertura (exemplo: Abertura Inglesa)', '35 min'],
                    ['Análise de final (exemplo: finais de bispos)', '25 min'],
                    ['Análise de partida (exemplo: análise de Carlsen vs Anand)', '30 min'],

                    ['Puzzles de xadrez (desafios)', '30 min'],
                    ['Partida jogada (exemplo: 1.e4 c5)', '40 min'],
                    ['Rápidas (15 min por partida)', '30 min'],
                    ['Estudo de finais (exemplo: torre e peão vs torre)', '30 min'],
                    ['Análise de partida (exemplo: partida de Fabiano Caruana)', '30 min'],
                    ['Estudo de meio de jogo (exemplo: ataque ao rei)', '25 min'],

                    ['Puzzles de xadrez (avançados)', '25 min'],
                    ['Partida jogada (exemplo: 1.Nf3 d5)', '30 min'],
                    ['Blitz (3 min por partida)', '15 min'],
                    ['Estudo de aberturas (exemplo: Defesa Francesa)', '25 min'],
                    ['Análise de meio de jogo (exemplo: posição de torre e peões)', '25 min'],
                    ['Análise de final (exemplo: finais de rei e peão)', '20 min'],

                    ['Puzzles de xadrez (intermediários)', '20 min'],
                    ['Partida jogada (exemplo: 1.d4 d5)', '30 min'],
                    ['Rápidas (10 min por partida)', '20 min'],
                    ['Análise de partida (exemplo: partida de Magnus Carlsen)', '20 min'],
                    ['Estudo de meio de jogo (táticas e estratégias)', '20 min'],
                    ['Análise de aberturas (exemplo: Defesa Siciliana)', '20 min'],

                    ['Puzzles de xadrez (básicos)', '15 min'],
                    ['Partida jogada (exemplo: 1.e4 e5)', '30 min'],
                    ['Blitz (5 min por partida)', '10 min'],
                    ['Estudo de aberturas (exemplo: Abertura Italiana)', '15 min'],
                    ['Finais básicos (exemplo: Rei e peão vs Rei)', '15 min'],
                    ['Análise de partida (exemplo: analisar uma partida entre dois jogadores iniciantes)', '20 min'],
                ],
            };

            // Aleatoriza as atividades
            const shuffledActivities = activities[rating].sort(() => 0.5 - Math.random());
            const numberOfActivities = Math.floor(Math.random() * 4) + 2; // De 2 a 5 atividades
            let timeAvailable = hours * 60; // tempo total disponível em minutos
            let activitiesCount = 0;

            shuffledActivities.forEach(activity => {
                if (activitiesCount < numberOfActivities) {
                    const activityTime = parseInt(activity[1]) || 0;
                    const timeInMinutes = parseInt(activity[1].split(' ')[0]);
                    if (timeAvailable >= timeInMinutes) {
                        const row = document.createElement('tr');
                        row.innerHTML = `<td>${activity[0]}</td><td>${activity[1]}</td>`;
                        table.appendChild(row);
                        timeAvailable -= timeInMinutes;
                        activitiesCount++;
                    }
                }
            });

            // Adiciona a tabela ao plano de treino
            const dayHeader = document.createElement('h3');
            dayHeader.innerText = `Treinamento para ${day}`;
            trainingPlan.appendChild(dayHeader);
            trainingPlan.appendChild(table);
        });
    } else {
        trainingPlan.innerHTML = '<p>Por favor, selecione pelo menos um dia para treinar.</p>';
    }
});
