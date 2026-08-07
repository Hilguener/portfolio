const LANG_STORAGE_KEY = "portfolio-lang";

// English lives in the HTML markup itself; these dictionaries only hold the
// Portuguese translation for each data-i18n key. Elements tagged
// data-i18n-html are swapped via innerHTML (they contain real markup);
// everything else uses textContent.
const i18n = {
  navProjects: { pt: "Projetos" },
  navExperience: { pt: "Experiência" },
  navTools: { pt: "Ferramentas" },
  navBtn: { pt: "Fale Comigo" },

  heroEyebrow: { pt: "Baseado no Brasil · Remoto" },
  heroBio: { pt: "Um Desenvolvedor Full Stack que transforma processos internos bagunçados em software limpo e confiável." },
  headline: { pt: 'Desenvolvedor<br>Full Stack<span class="accent-word">.</span>' },
  heroSub: { pt: "Backend, frontend e dados — eu construo APIs REST, interfaces em Angular e dashboards de BI, e cuido de tudo sozinho, do banco de dados ao deploy." },

  stat1Label: { pt: "Anos de Experiência Profissional" },
  stat2Label: { pt: "Projetos Entregues" },
  stat3Label: { pt: "Fuso Horário Pronto para Remoto" },

  projectsTag: { pt: "Trabalhos Selecionados" },
  projectsHeading: { pt: "Projetos Recentes" },

  statusLive: { pt: "Ativo" },
  linkRepo: { pt: "Ver repositório →" },
  linkCase: { pt: "Ver estudo de caso →" },

  proj1Title: { pt: "Sistema de Gestão da Qualidade" },
  proj1Desc: { pt: "API REST em camadas para gestão de processos internos — autenticação, gestão de documentos e planos de ação." },

  proj2Title: { pt: "Sistema de Recrutamento e Seleção" },
  proj2Desc: { pt: "API de nível produtivo — JWT + refresh tokens, rate limiting, health checks, logging estruturado." },

  proj3Title: { pt: "Dashboard de Monitoramento Fiscal" },
  proj3Desc: { pt: "Dashboard Power BI que consome dados diretamente de um ERP para monitorar obrigações fiscais e conformidade." },

  proj4Title: { pt: "Dashboard de Fluxo de Caixa Operacional" },
  proj4DescLive: { pt: "Reestruturação do plano de contas no nível operacional e construção de um dashboard Power BI sobre os dados já organizados, com acompanhamento de entradas, saídas e saldos por período." },

  expTag: { pt: "Histórico" },
  expHeading: { pt: "Experiência" },
  expDates: { pt: "Jul 2024 — Atual" },
  expRole: { pt: "Desenvolvedor Full Stack .NET" },
  expLi1: { pt: "Projeto, desenvolvimento e manutenção de aplicações corporativas full-stack internas, atuando em backend e frontend." },
  expLi2: { pt: "Construção e manutenção de dashboards Power BI / SQL para acompanhamento de KPIs e apoio à decisão." },
  expLi3: { pt: "Automação de processos internos e integração de APIs para melhorar a eficiência operacional." },
  expLi4: { pt: "Administração de servidores Linux, máquinas virtuais e infraestrutura de rede; suporte técnico." },

  toolsTag: { pt: "Ferramentas" },
  toolsHeading: { pt: "Ferramentas & Stack" },

  catBackend: { pt: "Backend" },
  catLanguage: { pt: "Linguagem" },
  catFrontend: { pt: "Frontend" },
  catDataBI: { pt: "Dados & BI" },
  catData: { pt: "Dados" },
  catDatabase: { pt: "Banco de Dados" },
  catInfra: { pt: "Infraestrutura" },
  catOrm: { pt: "ORM" },
  catTooling: { pt: "Ferramentas" },

  contactHeading: { pt: 'Vamos construir<br>algo<span class="accent-word"> juntos.</span>' },

  footerText: { pt: "Lindolfo Collor, RS, Brasil — Inglês B2 · Português (Nativo)" }
};

const caseStudyI18n = {
  backLink: { pt: "← Voltar ao portfólio" },
  eyebrow: { pt: "Estudos de Caso — Dados & BI" },
  pageTitle: { pt: "Trabalho de Business Intelligence" },
  pageIntro: { pt: "Esses quatro dashboards foram construídos para uso interno. Como os dados pertencem à empresa, os textos abaixo focam no problema, na abordagem e no resultado — não nos números reais." },
  caseStatusLive: { pt: "Status: Ativo" },
  labelProblem: { pt: "Problema" },
  labelApproach: { pt: "Abordagem" },
  labelResult: { pt: "Resultado" },
  placeholderTitle: { pt: "Print em breve" },

  case1Title: { pt: "Dashboard de Monitoramento Fiscal" },
  case1Problem: { pt: "As obrigações fiscais e os dados de conformidade estavam dentro do sistema ERP da empresa, mas não havia uma forma consolidada de monitorá-los. Verificar o status fiscal significava navegar diretamente no ERP ou cruzar exportações manualmente — lento, sujeito a erros e difícil de manter atualizado." },
  case1Approach: { pt: "Conectei diretamente ao banco de dados do ERP e escrevi consultas SQL para extrair e consolidar os registros fiscais relevantes. A partir disso, modelei os dados no Power BI e construí um dashboard focado em clareza: obrigações atuais, prazos e status de conformidade, atualizados direto da fonte em vez de exportações manuais." },
  case1Result: { pt: "As obrigações fiscais passaram a ficar visíveis em um só lugar, direto da fonte de dados oficial em vez de conciliação manual — reduzindo a chance de algo passar despercebido ou ser verificado com dado desatualizado." },
  case1PlaceholderDesc: { pt: "Recriando este dashboard com dado sintético no Power BI Desktop, já que o original contém registros fiscais reais da empresa." },

  case2Title: { pt: "Dashboard de Fluxo de Caixa Operacional" },
  case2Problem: { pt: "O plano de contas da empresa não vinha sendo mantido de forma consistente — as transações eram classificadas de maneira inconsistente na origem, o que tornava qualquer relatório de fluxo de caixa construído em cima disso pouco confiável, por melhor que o dashboard parecesse." },
  case2Approach: { pt: "Em vez de começar pelo dashboard, comecei pelos dados. Reestruturei o plano de contas no nível operacional e defini regras claras de reclassificação para que as transações fossem consolidadas e categorizadas corretamente na origem. Só depois que essa base ficou sólida construí o dashboard no Power BI, com medidas de entradas, saídas e saldos por período." },
  case2Result: { pt: "A empresa agora tem uma base estruturalmente confiável para o relatório de fluxo de caixa operacional — o tipo de trabalho de base que importa mais do que o dashboard em si, já que uma visualização bonita em cima de dado bagunçado ainda engana." },
  case2PlaceholderDesc: { pt: "Recriando este dashboard com dado sintético no Power BI Desktop, já que o original contém dados financeiros reais da empresa." },

  case3Title: { pt: "Dashboard de Contas a Receber e a Pagar" },
  case3Problem: { pt: "Os dados de contas a receber e a pagar estavam espalhados em sistemas diferentes, sem uma visão consolidada — o que dificultava responder, de forma rápida, uma pergunta simples: o que está entrando, o que está vencendo, e qual a posição de caixa no curto prazo." },
  case3Approach: { pt: "Consolidei os dados de contas a receber e a pagar dos sistemas de origem em um único dashboard no Power BI, estruturado para mostrar recebimentos e pagamentos futuros lado a lado, permitindo que o time financeiro visse a posição de caixa de curto prazo rapidamente, em vez de checar várias fontes." },
  case3Result: { pt: "O time financeiro passou a ter uma visão única e consolidada de contas a receber e a pagar, substituindo checagens manuais espalhadas por um dashboard confiável para acompanhar o caixa no dia a dia." },
  case3PlaceholderDesc: { pt: "Recriando este dashboard com dado sintético no Power BI Desktop, já que o original contém dados financeiros reais da empresa." },

  case4Title: { pt: "Dashboard de Comissão de Vendas e Metas" },
  case4Problem: { pt: "A comissão de vendas era calculada manualmente em planilha — lento e sujeito a erro. A lógica de negócio por trás também não era trivial: o atingimento de meta é medido sobre o mês em que a nota fiscal é emitida, mas a comissão só é paga quando o pagamento é efetivamente recebido, às vezes em parcelas ao longo de vários meses, sempre usando a taxa travada no mês original de emissão." },
  case4Approach: { pt: "Construí um modelo semântico em esquema estrela direto sobre o banco de dados do ERP, separando metas, faturamento e recebimento de comissão em tabelas fato com granularidade e tempo próprios. Usei DAX com contexto de filtro deslocado no tempo para travar a taxa de comissão de cada parcela no mês original de emissão, e documentei as regras de negócio e casos extremos descobertos durante a validação dos números contra os relatórios legados da empresa." },
  case4Result: { pt: "Substituiu um processo manual e sujeito a erro por um dashboard automatizado e auditável — cada valor de comissão rastreável linha a linha até a fonte de dados." },
  case4PlaceholderDesc: { pt: "Recriando este dashboard com dado sintético no Power BI Desktop, já que o original contém dados reais de vendas e comissão da empresa." },

  footerText: { pt: "Tem dúvidas sobre algum desses projetos?" }
};

let currentLang = "en";

function applyLang(lang, dictionary) {
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const useHtml = el.hasAttribute("data-i18n-html");

    if (el.dataset.i18nOriginal === undefined) {
      el.dataset.i18nOriginal = useHtml ? el.innerHTML : el.textContent;
    }

    if (lang === "en") {
      if (useHtml) el.innerHTML = el.dataset.i18nOriginal;
      else el.textContent = el.dataset.i18nOriginal;
      return;
    }

    const entry = dictionary[key];
    if (!entry || entry[lang] === undefined) {
      console.warn(`[i18n] missing "${lang}" translation for key "${key}"`);
      return;
    }
    if (useHtml) el.innerHTML = entry[lang];
    else el.textContent = entry[lang];
  });

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.textContent = lang === "en" ? "PT" : "EN";
    toggle.setAttribute("aria-label", lang === "en" ? "Switch to Portuguese" : "Mudar para inglês");
  }

  currentLang = lang;
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) {
    // localStorage unavailable (private mode, disabled storage) — non-fatal
  }
}

function initI18n(dictionary) {
  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      applyLang(currentLang === "en" ? "pt" : "en", dictionary);
    });
  }

  let initialLang = "en";
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "en" || saved === "pt") {
      initialLang = saved;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith("pt")) {
      initialLang = "pt";
    }
  } catch (e) {
    // localStorage unavailable — fall back to browser language only
    if (navigator.language && navigator.language.toLowerCase().startsWith("pt")) {
      initialLang = "pt";
    }
  }

  applyLang(initialLang, dictionary);
}

function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  const closeMenu = () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  });
}

if (document.querySelector("[data-i18n]")) {
  const isCaseStudiesPage = window.location.pathname.includes("case-studies") || document.body.dataset.page === "case-studies";
  initI18n(isCaseStudiesPage ? caseStudyI18n : i18n);
}

initMobileNav();
