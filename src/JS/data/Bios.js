/**
 * Bios.js — dados de Jean Barros
 */

const BIO = {
    nome: 'Jean Barros',
    titulo: 'Analista de Dados | Logística | Power BI | SQL | Excel',
    status: 'Disponível para receber oferta de emprego',
    nivel: 'Queimados/RJ',
    contato: {
        email: 'jeanbarrosd@outlook.com',
        telefone: '(21) 99542-1917',
        linkedin: 'https://www.linkedin.com/in/jean/',
    }
};

const SKILLS = [
    { nome: 'Power BI',    estrelas: 3, icone: 'fas fa-chart-bar' },
    { nome: 'SQL',         estrelas: 4, icone: 'fas fa-database'  },
    { nome: 'Excel',       estrelas: 4, icone: 'fas fa-file-excel'  },
    { nome: 'Figma',       estrelas: 3, icone: 'fab fa-figma'     },
    { nome: 'Soft Skills', estrelas: 4, icone: 'fas fa-handshake' },
];

const EXPERIENCIAS = [
    { cargo: 'Analista de Dados Logística', empresa: 'Di Santinni',   periodo: 'Fev/2025 - Até o momento' },
    { cargo: 'Analista de Suporte TI', empresa: 'Solution Tech', periodo: 'Abr/2021 - Out/2021'},
    { cargo: 'Analista Administrativo', empresa: 'Cencosud Brasil', periodo: 'Abr/2020 - Out/2024'},
];

const FORMACAO = [
    { curso: 'Análise e Desenvolvimento de Sistemas', instituicao: 'Gran Faculdade', periodo: 'Mar/2023 - Julh/2026' },
    { curso: 'Técnico em Informática', instituicao: 'Faetec', periodo: 'Mar/2014 - Dez/2016' },
];

// ========================================
// PROJETOS — imagens reais dos dashboards
// ========================================

const PROJETOS = [
    {
        id: 1,
        titulo: 'Dashboard Comsumy Energy',
        descricao: 'Você é da área de Supply Chain, você sabe exatamente como está a eficiência das suas entregas? Sabe quais rotas e períodos onde há mais atrasos?',
        imagensCapa: [
            '../src/imgs/dashboard-consumy-energy.PNG',
            '../src/imgs/dashboard-consumy-energy1.PNG',
            '../src/imgs/dashboard-consumy-energy2.PNG',
            '../src/imgs/dashboard-consumy-energy3.PNG'
        ],
        linkExterno: 'https://app.powerbi.com/view?r=eyJrIjoiZDhiZGYzNmItMmFjYS00NmJkLWJmODQtZmMwZWNhMGMzYTJiIiwidCI6ImM1MjQ3ODIyLTc2N2YtNDQwMS1hYjQyLWIyOTRkM2I4NjFiZSJ9',
        powerBiFrames: [
            'https://app.powerbi.com/view?r=eyJrIjoiZDhiZGYzNmItMmFjYS00NmJkLWJmODQtZmMwZWNhMGMzYTJiIiwidCI6ImM1MjQ3ODIyLTc2N2YtNDQwMS1hYjQyLWIyOTRkM2I4NjFiZSJ9',
        ],
        descricaoCompleta: {
            descricao: "Dashboard de gestão de consumo de utilidades (eletricidade, água e gás) de uma organização com múltiplos prédios distribuídos em municípios da Baixada Fluminense e Grande Rio (RJ). Monitora custos totais, consumo unitário e distribuição geográfica por município e prédio.",
            contexto: "A organização opera em pelo menos 11 municípios da região metropolitana do Rio de Janeiro, com forte presença na Baixada Fluminense. Os dados cobrem aproximadamente 21 meses e envolvem mais de R$ 13,8 milhões em gastos totais com utilidades, sendo água o maior custo, seguido de eletricidade e gás.",
            insights: "Água é o maior custo total (R$ 6,17 Mi), seguida de eletricidade (R$ 5,77 Mi) e gás (R$ 1,88 Mi). O consumo elétrico teve pico abrupto em janeiro/2017 e queda drástica logo após, sugerindo anomalia ou mudança operacional. Queimados lidera o custo de gás com 34,95% do total. A distribuição entre municípios é equilibrada nos três tipos de consumo, sem dominância isolada. Os três tipos de consumo apresentam queda brusca no final do período, indicando possível encerramento de contratos ou dados incompletos. O prédio P1001 é o maior consumidor elétrico, P1010 o maior de água e P1000 o maior de gás.",
        },
        skills: ['Power BI', 'Figma', 'Business'],
    },
    {
        id: 2,
        titulo: 'Dashboard Performance Comercial',
        descricao: 'Esse dashboard foi desenvolvido para Gestores e supervisores da Área Comercial de um Marketplace. Possui uma interface interativa, permitindo que os usuários selecionem filtros e visualizem diferentes análises de acordo com seus interesses.',
        imagensCapa: [
            '../src/imgs/dashboard-comercial.png'
        ],
        linkExterno: '#',
        powerBiFrames: [
            'https://app.powerbi.com/view?r=eyJrIjoiNzkwYjk3N2EtMjM3OC00OWUzLTljMDQtMGYxMmExNGRkYmRiIiwidCI6ImM1MjQ3ODIyLTc2N2YtNDQwMS1hYjQyLWIyOTRkM2I4NjFiZSJ9',
        ],
        descricaoCompleta: {
            descricao: 'Esse dashboard foi desenvolvido para Gestores e supervisores da Área Comercial de um Marketplace.',
            contexto: 'Possui uma interface interativa, permitindo que os usuários selecionem filtros e visualizem diferentes análises de acordo com seus interesses.',
            insights: 'Painel completo de KPIs comerciais com visão executiva de vendas, performance por categoria e métricas de conversão em tempo real.\n\nO dashboard permite acompanhar o faturamento por categoria, análise NPS, metas de vendas e muito mais, tudo em uma interface limpa e interativa.',
        },
        skills: ['Power BI', 'Figma', 'Business'],
    },
    {
        id: 3,
        titulo: 'Dashboard de People Analytics',
        descricao: 'Painel analítico focado em dados de pessoas e RH, permitindo visualizar indicadores estratégicos de gestão de pessoas, turnover, headcount e performance de equipes.',
        imagensCapa: [
            '../src/imgs/dashboard-people-analytics.PNG',
            '../src/imgs/dashboard-people-analytics2.PNG',
            '../src/imgs/dashboard-people-analytics3.PNG'
        ],
        
        linkExterno: '#',
        powerBiFrames: [
            'https://app.powerbi.com/view?r=eyJrIjoiZDExNWVjZWYtYTlmMS00MmExLTgwZjQtMWU1N2FlZWMyZmJlIiwidCI6ImM1MjQ3ODIyLTc2N2YtNDQwMS1hYjQyLWIyOTRkM2I4NjFiZSJ9',
        ],
        descricaoCompleta: {
            descricao: 'Painel analítico focado em dados de pessoas e RH, permitindo visualizar indicadores estratégicos de gestão de pessoas.',
            contexto: 'Dashboard desenvolvido para gestores de RH que precisam tomar decisões baseadas em dados sobre sua força de trabalho.',
            insights: 'O painel consolida informações de headcount, turnover, absenteísmo e performance, permitindo identificar tendências e agir preventivamente.\n\nCom filtros por área, período e cargo, o gestor consegue navegar pelos dados de forma intuitiva e gerar insights acionáveis para o negócio.',
        },
        skills: ['Power BI', 'Business Intelligence', 'Figma'],
    },
];
