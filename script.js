document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const orbitSystem = document.querySelector('.orbit-system');
    const navItems = document.querySelectorAll('.nav-item');
    const logoCore = document.getElementById('logo-core');
    
    // Elementos de Fundo
    const bgLayers = {
        default: document.querySelector('.bg-default'),
        formacao: document.querySelector('.bg-formacao'),
        evangelizacao: document.querySelector('.bg-evangelizacao'),
        musica: document.querySelector('.bg-musica'),
        arte: document.querySelector('.bg-arte')
    };

    // Elementos Modal
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('close-btn');
    const modalHeader = document.getElementById('dynamic-modal-header');
    const modalBody = document.getElementById('modal-body');
    
    const mainFooter = document.getElementById('main-footer');
    const brandHeader = document.querySelector('.brand-header');

    const sectors = {
        projeto: {
            title: 'O Projeto',
            quote: 'Ad Jesum per Mariam',
            headerStyle: 'background: linear-gradient(135deg, #d4af37, #b8860b);',
            content: `
                <p>O Projeto Só Vós nasceu de um profundo desejo de evangelizar e cristianizar o mundo, seguindo os ensinamentos da Santíssima Virgem Maria.</p>
                <h3>Nossa Missão</h3>
                <ul>
                    <li>Disseminar a Doutrina Católica com clareza.</li>
                    <li>Promover a devoção mariana como caminho seguro.</li>
                    <li>Formar uma comunidade sólida de fé.</li>
                </ul>
            `
        },
        formacao: {
            title: 'Formação',
            quote: 'Fides quaerens intellectum',
            headerStyle: 'background: linear-gradient(135deg, #FFD900, #b8860b);',
            content: `
                <p>A fé que não é alimentada pelo conhecimento corre o risco de se apagar.</p>
                <h3>Pilares</h3>
                <ul>
                    <li><strong>Catequese:</strong> Fundamentos da fé.</li>
                    <li><strong>Escrituras:</strong> Mergulho na Palavra.</li>
                    <li><strong>Liturgia:</strong> Viver o mistério.</li>
                </ul>
            `
        },
        evangelizacao: {
            title: 'Evangelização',
            quote: 'Ite in mundum universum',
            headerStyle: 'background: linear-gradient(135deg, #980001, #5e0000);',
            content: `
                <p>Não podemos calar o que vimos e ouvimos.</p>
                <h3>Frentes</h3>
                <ul>
                    <li><strong>Missões Urbanas:</strong> Cristo nas ruas.</li>
                    <li><strong>Acolhimento:</strong> Um braço amigo.</li>
                    <li><strong>Caridade:</strong> O Evangelho em atos.</li>
                </ul>
            `
        },
        musica: {
            title: 'Música Sacra',
            quote: 'Qui cantat, bis orat',
            headerStyle: 'background: linear-gradient(135deg, #078A4D, #00174D);',
            content: `
                <p>A música sacra eleva os corações através da harmonia.</p>
                <h3>Atividades</h3>
                <ul>
                    <li><strong>Corais:</strong> Polifonia e canto.</li>
                    <li><strong>Gregoriano:</strong> Tesouro musical.</li>
                    <li><strong>Formação:</strong> Músicos para o serviço.</li>
                </ul>
            `
        },
        arte: {
            title: 'Arte & Cultura',
            quote: 'Via Pulchritudinis',
            headerStyle: 'background: linear-gradient(135deg, #3787BA, #14296A);',
            content: `
                <p>A beleza é um dos nomes de Deus.</p>
                <h3>Expressões</h3>
                <ul>
                    <li><strong>Artes Plásticas:</strong> Iconografia.</li>
                    <li><strong>Teatro:</strong> Evangelização.</li>
                    <li><strong>Audiovisual:</strong> Olhar católico.</li>
                </ul>
            `
        }
    };

    function setActiveBackground(sector) {
        Object.values(bgLayers).forEach(layer => layer.classList.remove('active'));
        
        if (sector === 'default') {
            bgLayers.default.classList.add('active');
            body.classList.remove('dark-mode');
        } else {
            if (bgLayers[sector]) bgLayers[sector].classList.add('active');
            
            // Define modo escuro para contraste
            if (['evangelizacao', 'musica', 'arte'].includes(sector)) {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
        }
    }

    navItems.forEach(item => {
        const sectorKey = item.dataset.sector;

        item.addEventListener('mouseenter', () => {
            orbitSystem.setAttribute('data-active', sectorKey);
            setActiveBackground(sectorKey);
        });

        item.addEventListener('mouseleave', () => {
            orbitSystem.removeAttribute('data-active');
            setActiveBackground('default');
        });

        item.addEventListener('click', () => openModal(sectorKey));
    });

    logoCore.addEventListener('click', () => openModal('projeto'));

    function openModal(key) {
        const data = sectors[key];
        modalHeader.style = data.headerStyle; 
        modalHeader.innerHTML = `<h2>${data.title}</h2><span class="quote">${data.quote}</span>`;
        modalBody.innerHTML = data.content;

        modalOverlay.classList.add('active');
        mainFooter.classList.add('hide-ui');
        brandHeader.classList.add('hide-ui');
        if(window.innerWidth < 768) logoCore.style.opacity = '0';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        mainFooter.classList.remove('hide-ui');
        brandHeader.classList.remove('hide-ui');
        if(window.innerWidth < 768) logoCore.style.opacity = '1';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
});