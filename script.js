document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const logoHub = document.getElementById('logo-hub');
    const navTriggers = document.querySelectorAll('.nav-trigger');
    
    const sectionContent = document.getElementById('section-content');
    const sectorTitle = document.getElementById('sector-title');
    const sectorDescription = document.getElementById('sector-description'); 
    const resetButton = document.getElementById('reset-button');
    const mainFooter = document.getElementById('main-footer');
    const mainMaxim = document.getElementById('main-maxim');
    const mainSubtitle = document.querySelector('.main-subtitle'); 

    const logoContainer = document.querySelector('.logo-container'); 

    const sectorData = {
        projeto: {
            title: 'O Projeto Só Vós',
            contentBlocks: [
                { type: 'paragraph', text: 'O Projeto Só Vós nasceu de um profundo desejo de evangelizar e cristianizar o mundo, seguindo os ensinamentos da Santíssima Virgem Maria. Compreendemos que, para que o Reino de Deus se estabeleça na terra, é fundamental que cada pessoa seja alcançada pela verdade e pelo amor de Cristo.' },
                { type: 'heading', level: 2, text: 'Como Surgiu' },
                { type: 'paragraph', text: 'Idealizado em [Ano de Fundação, ex: 2023] por um grupo de leigos e consagrados, o projeto teve sua inspiração na urgência de levar a Palavra de Deus de forma acessível e dinâmica para as novas gerações. Vimos a necessidade de utilizar ferramentas modernas e criativas para alcançar corações sedentos de Deus, em meio aos desafios do mundo contemporâneo.' },
                { type: 'heading', level: 2, text: 'Nosso Objetivo' },
                { type: 'list', items: [
                    'Disseminar a Doutrina Católica de forma clara e inspiradora.',
                    'Promover a devoção mariana como caminho seguro para Cristo.',
                    'Capacitar evangelizadores para atuarem em diversas frentes.',
                    'Construir uma comunidade de fé sólida e atuante na sociedade.',
                    'Incentivar a vivência dos sacramentos e a vida de oração.'
                ]},
                { type: 'paragraph', text: 'Nosso compromisso é com a verdade e a beleza do Evangelho, buscando sempre inovar nas metodologias, mas sem nunca perder a essência da nossa fé.' }
            ],
            colorClass: 'default',
            bgClass: 'default-bg', 
            textGradientClass: '' 
        },
        formacao: {
            title: 'Formação Contínua: Crescimento e Conhecimento',
            contentBlocks: [
                { type: 'paragraph', text: 'Nossa área de Formação é dedicada ao aprofundamento da fé e ao desenvolvimento humano integral. Oferecemos um currículo rico e diversificado para todas as idades e níveis de conhecimento.' },
                { type: 'heading', level: 2, text: 'Cursos e Programas Principais' },
                { type: 'list', items: [
                    'Catequese para Adultos e Jovens: Fundamentos da Fé Católica.',
                    'Estudos Bíblicos Aprofundados: Mergulhe nas Escrituras Sagradas.',
                    'Formação Litúrgica: Compreendendo e Vivendo a Celebração Eucarística.',
                    'Doutrina Social da Igreja: Compromisso com a Justiça e a Caridade.'
                ]},
                { type: 'paragraph', text: 'Promovemos encontros, retiros e seminários para garantir que a formação seja não apenas teórica, mas também uma vivência profunda da espiritualidade e da comunidade.' },
                { type: 'paragraph', text: 'Participe e fortaleça sua jornada de fé conosco!' }
            ],
            colorClass: 'formacao',
            bgClass: 'bg-formacao',
            textGradientClass: 'text-formacao'
        },
        evangelizacao: {
            title: 'Evangelização: Levando a Boa Nova a Todos',
            contentBlocks: [
                { type: 'paragraph', text: 'A Evangelização é o cerne da nossa missão. Somos chamados a ser sal da terra e luz do mundo, compartilhando a alegria do Evangelho em cada aspecto da vida.' },
                { type: 'heading', level: 2, text: 'Nossas Ações Missionárias' },
                { type: 'list', items: [
                    'Missões Urbanas: Levando a Palavra às ruas e comunidades.',
                    'Acolhimento e Aconselhamento Pastoral: Um porto seguro para quem busca auxílio.',
                    'Eventos de Evangelização: Retiros, shows e encontros para todas as idades.',
                    'Ações Sociais: Evangelização através do serviço aos mais necessitados.'
                ]},
                { type: 'paragraph', text: 'Nosso objetivo é tocar corações, despertar vocações e construir uma comunidade viva e atuante, testemunhando o amor de Cristo a cada dia.' },
                { type: 'paragraph', text: 'Venha ser um missionário conosco!' }
            ],
            colorClass: 'evangelizacao',
            bgClass: 'bg-evangelizacao',
            textGradientClass: 'text-evangelizacao'
        },
        musica: {
            title: 'Música Sacra: Harmonizando Almas e Corações',
            contentBlocks: [
                { type: 'paragraph', text: 'A música é uma linguagem universal que eleva a alma a Deus. Em nosso setor de Música, buscamos a beleza e a profundidade na expressão musical sacra, a serviço da liturgia e da evangelização.' },
                { type: 'heading', level: 2, text: 'Nossas Atividades Musicais' },
                { type: 'list', items: [
                    'Corais Litúrgicos: Animação das celebrações com cantos tradicionais e contemporâneos.',
                    'Oficinas de Canto e Instrumento: Desenvolvimento de talentos musicais para o serviço da Igreja.',
                    'Concertos e Recitais Sacros: Momentos de contemplação e elevação espiritual.',
                    'Composições Inéditas: Incentivo à criação de novas obras para a evangelização.'
                ]},
                { type: 'paragraph', text: 'Acreditamos que a música é um caminho privilegiado para o encontro com o divino, capaz de tocar as fibras mais profundas do ser humano.' },
                { type: 'paragraph', text: 'Deixe-se envolver pela melodia da fé!' }
            ],
            colorClass: 'musica',
            bgClass: 'bg-musica',
            textGradientClass: 'text-musica'
        },
        arte: {
            title: 'Arte e Cultura: Beleza que Evangeliza',
            contentBlocks: [
                { type: 'paragraph', text: 'O setor de Arte celebra a capacidade humana de criar e expressar o transcendente através da beleza. A arte, em suas diversas manifestações, é um poderoso instrumento de evangelização e cultura.' },
                { type: 'heading', level: 2, text: 'Expressões Artísticas em Destaque' },
                { type: 'list', items: [
                    'Artes Plásticas: Pintura, escultura e artesanato com temas sacros.',
                    'Teatro e Dança: Dramatizações e performances que transmitem mensagens de fé e valores.',
                    'Literatura: Grupos de leitura e escrita que exploram a espiritualidade e a cultura cristã.',
                    'Fotografia e Audiovisual: Capturando e divulgando a beleza da nossa fé e comunidade.'
                ]},
                { type: 'paragraph', text: 'Promovemos exposições, workshops e eventos culturais para que todos possam apreciar e desenvolver seus talentos artísticos, reconhecendo a arte como um dom de Deus.' },
                { type: 'paragraph', text: 'Venha e descubra a arte que habita em você!' }
            ],
            colorClass: 'arte',
            bgClass: 'bg-arte',
            textGradientClass: 'text-arte'
        }
    };

    // Função para renderizar o conteúdo da seção
    function renderSectionContent(data) {
        sectorTitle.textContent = data.title;
        sectorDescription.innerHTML = ''; // Limpa o container

        data.contentBlocks.forEach(block => {
            let element;
            if (block.type === 'paragraph') {
                element = document.createElement('p');
                element.textContent = block.text;
            } else if (block.type === 'heading') {
                element = document.createElement(`h${block.level}`);
                element.textContent = block.text;
            } else if (block.type === 'list') {
                element = document.createElement('ul');
                block.items.forEach(itemText => {
                    const li = document.createElement('li');
                    li.textContent = itemText;
                    element.appendChild(li);
                });
            }
            if (element) {
                sectorDescription.appendChild(element);
            }
        });
        
        sectionContent.className = 'section-content'; // Reseta as classes
        sectionContent.classList.add('visible', data.colorClass);

        // Remove todas as classes de background anteriores
        body.classList.remove('bg-formacao', 'bg-evangelizacao', 'bg-musica', 'bg-arte');
        
        // NEW: Lógica para aplicar o background: Se bgClass existe e não é 'default-bg', adiciona a classe.
        // Caso contrário, o background padrão do body (var(--fundo-padrao)) do CSS se encarrega.
        if (data.bgClass && data.bgClass !== 'default-bg') { 
            body.classList.add(data.bgClass);
        } else {
            // Garante que qualquer estilo inline anterior seja removido, para que o CSS de 'body' se aplique
            body.style.background = ''; // Remove o estilo inline
        }
        
        logoHub.classList.add('hidden');
        mainFooter.classList.add('hidden');
        mainMaxim.classList.add('hidden');
        if (mainSubtitle) mainSubtitle.classList.add('hidden'); 
    }

    // Event listeners para os setores
    navTriggers.forEach(trigger => {
        const sector = trigger.dataset.sector;
        const hoverClass = `hover-${sector}`;
        const bgClass = `bg-${sector}`;
        const textGradientClass = sectorData[sector].textGradientClass; 

        trigger.addEventListener('mouseenter', () => {
            logoHub.classList.add(hoverClass);
            logoHub.classList.add('is-hovered');
            body.classList.add(bgClass);
            mainMaxim.classList.add(textGradientClass); 
        });

        trigger.addEventListener('mouseleave', () => {
            if (!sectionContent.classList.contains('visible')) {
                logoHub.classList.remove(hoverClass);
                logoHub.classList.remove('is-hovered');
                body.classList.remove(bgClass);
                mainMaxim.classList.remove(textGradientClass); 
            }
        });
        
        trigger.addEventListener('click', () => {
            renderSectionContent(sectorData[sector]); 
        });
    });

    logoContainer.style.cursor = 'pointer'; 
    logoContainer.addEventListener('click', () => {
        renderSectionContent(sectorData.projeto); 
        // Garante que a máxima não tenha gradiente quando estiver na seção do projeto
        mainMaxim.classList.remove('text-formacao', 'text-evangelizacao', 'text-musica', 'text-arte'); 
    });
    
    resetButton.addEventListener('click', () => {
        sectionContent.classList.remove('visible'); 
        // Remova a classe 'default' aqui também para limpeza completa
        sectionContent.classList.remove('formacao', 'evangelizacao', 'musica', 'arte', 'default'); 
        
        // Remove explicitamente TODAS as classes de background dos setores do body
        body.classList.remove('bg-formacao', 'bg-evangelizacao', 'bg-musica', 'bg-arte');
        // NEW: Garante que qualquer estilo inline anterior seja removido para que o CSS de 'body' se aplique
        body.style.background = ''; 
        
        logoHub.classList.remove('hover-formacao', 'hover-evangelizacao', 'hover-musica', 'hover-arte'); 
        logoHub.classList.remove('is-hovered'); 
        
        mainMaxim.classList.remove('text-formacao', 'text-evangelizacao', 'text-musica', 'text-arte'); 

        setTimeout(() => {
            logoHub.classList.remove('hidden');
            mainFooter.classList.remove('hidden');
            mainMaxim.classList.remove('hidden');
            if (mainSubtitle) mainSubtitle.classList.remove('hidden');
        }, 500); 
    });
});