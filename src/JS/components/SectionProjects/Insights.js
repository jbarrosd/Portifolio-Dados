/**
 * Insights.js
 * Renderiza a aba de Insights — análises e dicas de BI
 * derivadas dos projetos do portfólio de Jean Barros.
 *
 * Funciona como um "blog de análise de dados" compacto:
 * cards com insights reais sobre logística, comercial e RH.
 */

const INSIGHTS_DATA = [
    {
        id: 'ins1',
        categoria: 'Logística',
        categoriaIcon: 'fas fa-truck',
        categoriaCor: '#8b5cf6',
        titulo: 'OTIF abaixo de 95%? Veja onde as entregas falham',
        resumo: 'O indicador OTIF (On Time In Full) é o termômetro da eficiência logística. Descobri no dashboard de Supply Chain que atrasos se concentram em rotas específicas — e não no processo como um todo.',
        insight: 'Ao cruzar dados de OCT (Order Cycle Time) com OTIF por região, é possível identificar que 80% dos atrasos vêm de apenas 3 rotas críticas. A solução não é escalar operação — é otimizar pontualmente.',
        metricas: [
            { label: 'OTIF médio', valor: '94,2%', tendencia: 'up' },
            { label: 'Redução de atrasos', valor: '38%', tendencia: 'up' },
        ],
        tags: ['Supply Chain', 'KPI', 'Logística'],
        destaque: true,
    },
    {
        id: 'ins2',
        categoria: 'Comercial',
        categoriaIcon: 'fas fa-chart-line',
        categoriaCor: '#10b981',
        titulo: 'Por que NPS e Faturamento precisam estar no mesmo painel',
        resumo: 'Um marketplace com ótimo faturamento e NPS baixo está perdendo clientes silenciosamente. O painel comercial revelou essa correlação crítica para decisões estratégicas.',
        insight: 'Clientes com NPS acima de 70 têm ticket médio 2,3x maior e taxa de recompra 58% mais alta. Ver esses dados juntos muda completamente a conversa entre times de vendas e CX.',
        metricas: [
            { label: 'NPS atual', valor: '72', tendencia: 'up' },
            { label: 'Ticket médio NPS+', valor: '+130%', tendencia: 'up' },
        ],
        tags: ['NPS', 'Vendas', 'Marketplace'],
        destaque: false,
    },
    {
        id: 'ins3',
        categoria: 'People Analytics',
        categoriaIcon: 'fas fa-users',
        categoriaCor: '#f59e0b',
        titulo: 'Turnover de 8%: quando o dado revela o que a liderança não enxerga',
        resumo: 'A maioria das empresas acompanha turnover geral. O dashboard de People Analytics mostrou que o problema estava concentrado em uma área específica — invisível nas métricas agregadas.',
        insight: 'Ao segmentar turnover por área, senioridade e faixa salarial, descobriu-se que 67% das saídas eram de analistas júnior em TI nos primeiros 6 meses. Uma ação cirúrgica resolveu o que parecia um problema sistêmico.',
        metricas: [
            { label: 'Turnover geral', valor: '8,3%', tendencia: 'neutral' },
            { label: 'Turnover júnior TI', valor: '22%', tendencia: 'down' },
        ],
        tags: ['RH', 'Retenção', 'People Analytics'],
        destaque: false,
    },
    {
        id: 'ins4',
        categoria: 'Power BI',
        categoriaIcon: 'fas fa-lightbulb',
        categoriaCor: '#64b5f6',
        titulo: '3 erros comuns ao construir um dashboard de logística',
        resumo: 'Depois de construir painéis para diferentes empresas do setor, identifiquei padrões recorrentes que comprometem a tomada de decisão mesmo com dados corretos.',
        insight: '1. Mostrar média em vez de distribuição — a média esconde outliers críticos.\n2. Ignorar sazonalidade — comparar meses sem ajuste distorce a análise.\n3. KPIs sem meta — um número sem referência não gera ação.',
        metricas: [],
        tags: ['Power BI', 'Boas práticas', 'Dashboard'],
        destaque: false,
    },
];

function createInsightCard(insight) {
    const metricasHtml = insight.metricas.length > 0
        ? `<div class="insight-metricas">
            ${insight.metricas.map(m => `
                <div class="insight-metrica-item">
                    <span class="insight-metrica-valor">${m.valor}</span>
                    <span class="insight-metrica-label">${m.label}</span>
                    <i class="fas fa-arrow-${m.tendencia === 'up' ? 'up' : m.tendencia === 'down' ? 'down' : 'right'} insight-tendencia ${m.tendencia}"></i>
                </div>
            `).join('')}
           </div>`
        : '';

    const tagsHtml = insight.tags.map(t =>
        `<span class="insight-tag">${t}</span>`
    ).join('');

    return `
        <div class="insight-card ${insight.destaque ? 'insight-card--destaque' : ''}"
             style="--insight-cor: ${insight.categoriaCor}">
            <div class="insight-card-header">
                <div class="insight-categoria"
                     style="color: ${insight.categoriaCor}; background: ${insight.categoriaCor}18; border-color: ${insight.categoriaCor}30;">
                    <i class="${insight.categoriaIcon}"></i>
                    ${insight.categoria}
                </div>
                ${insight.destaque ? '<span class="insight-badge-destaque"><i class="fas fa-fire"></i> Em destaque</span>' : ''}
            </div>

            <h4 class="insight-titulo">${insight.titulo}</h4>
            <p class="insight-resumo">${insight.resumo}</p>

            <div class="insight-body ${insight.metricas.length ? 'has-metricas' : ''}">
                <p class="insight-texto">${insight.insight}</p>
                ${metricasHtml}
            </div>

            <div class="insight-footer">
                <div class="insight-tags">${tagsHtml}</div>
            </div>
        </div>
    `;
}

function renderInsights() {
    const container = document.getElementById('insightsContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="insights-header">
            <div class="insights-header-left">
                <h3 class="insights-titulo">Análises & Insights</h3>
                <p class="insights-subtitulo">Descobertas reais extraídas dos projetos de dados</p>
            </div>
            <div class="insights-header-right">
                <span class="insights-count">${INSIGHTS_DATA.length} insights</span>
            </div>
        </div>
        <div class="insights-list">
            ${INSIGHTS_DATA.map(createInsightCard).join('')}
        </div>
    `;
}

const Insights = {
    init() {
        renderInsights();
    }
};
