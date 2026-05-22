"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Building2, Search, TrendingUp, Settings, RefreshCw } from "lucide-react";

const learnings = [
  {
    id: "learning1",
    icon: Building2,
    title: "Integracao Itau",
    subtitle: "Junho - Cultura, governanca e Centro de Comando",
    content: {
      description:
        "Periodo de imersao na cultura organizacional do Itau atraves de cursos obrigatorios, conhecendo regras internas, padroes de seguranca e realizando pesquisas aprofundadas sobre o funcionamento do Centro de Comando.",
      tools: ["Cultura Itau", "Governanca", "Seguranca", "Centro de Comando", "Compliance"],
      learnings: [
        "Compreensao profunda da cultura e governanca bancaria",
        "Entendimento do papel estrategico do Centro de Comando",
        "Conhecimento de padroes de seguranca especificos",
        "Importancia do monitoramento para resposta a incidentes criticos",
      ],
      impact:
        "Este conhecimento fundamental foi essencial para todos os projetos posteriores, fornecendo contexto organizacional e operacional necessario para atuacao efetiva no ambiente bancario.",
    },
  },
  {
    id: "learning2",
    icon: Search,
    title: "Analise de Incidentes Clear",
    subtitle: "Julho - AWS e integracao de plataformas",
    content: {
      description:
        "Identificacao de quais siglas apresentavam maior numero de incidentes classificados como 'clear' e avaliacao do impacto dessas ocorrencias no ambiente bancario, utilizando analise de dados em ambiente de nuvem.",
      tools: ["AWS SageMaker", "AWS Athena", "ServiceNow", "Datadog", "Python"],
      learnings: [
        "Entendimento de como incidentes clear afetam as operacoes",
        "Desenvolvimento de habilidades em analise de dados cloud",
        "Integracao entre diferentes plataformas de monitoramento",
      ],
      impact:
        "A analise permitiu identificar padroes criticos de incidentes, fornecendo insights valiosos para priorizacao de melhorias e otimizacao de processos de monitoramento.",
    },
  },
  {
    id: "learning3",
    icon: TrendingUp,
    title: "Series Temporais Avancadas",
    subtitle: "Agosto - Prophet, ARIMA e SARIMA",
    content: {
      description:
        "Conducao de testes comparativos entre diferentes modelos de previsao para definir o mais adequado ao problema, analisando estacionaridade, sazonalidade, ruidos e tendencias em series temporais bancarias.",
      tools: ["Prophet", "ARIMA", "SARIMA", "Python", "Pandas", "Statsmodels"],
      learnings: [
        "Capacidade de selecionar modelo estatistico apropriado",
        "Analise de estacionaridade e diferenciacao",
        "Identificacao de padroes sazonais complexos",
        "Validacao cruzada de modelos de series temporais",
        "Tratamento de ruidos e outliers em dados financeiros",
      ],
      impact:
        "Esses conhecimentos foram fundamentais para apoiar decisoes de monitoramento de metricas criticas, permitindo previsoes mais precisas e identificacao antecipada de anomalias no sistema bancario.",
    },
  },
  {
    id: "learning4",
    icon: Settings,
    title: "Identificacao de Sazonalidade",
    subtitle: "Setembro - TIER 0/1 e analise em larga escala",
    content: {
      description:
        "Desenvolvimento de analise para squad Manhattan identificar sazonalidade em metricas criticas, analisando mais de 4.000 series temporais automaticamente.",
      tools: ["Python", "Automacao", "Series Temporais", "TIER 0/1", "AWS"],
      learnings: [
        "Automatizacao de analise em larga escala",
        "Identificacao de padroes sazonais em metricas criticas",
        "Colaboracao com times especializados",
      ],
      impact:
        "Projeto de alto impacto que permitiu identificar padroes sazonais em milhares de metricas, otimizando o monitoramento do banco.",
    },
  },
  {
    id: "learning5",
    icon: RefreshCw,
    title: "Incidentes Reincidentes",
    subtitle: "Setembro - Projeto em andamento",
    content: {
      description:
        "Projeto em andamento: definindo conceito de incidente reincidente, usando AWS Athena para mapear reincidencias e alinhamento com times de Gestao de Eventos.",
      tools: ["AWS Athena", "Analise de Dados", "Gestao de Eventos", "Monitoramento"],
      learnings: [
        "Definicao de conceitos de incidentes reincidentes",
        "Mapeamento de padroes de reincidencia",
        "Alinhamento com times de Gestao de Eventos",
      ],
      impact:
        "Projeto em desenvolvimento que visa melhorar a identificacao e prevencao de incidentes recorrentes no ambiente bancario.",
    },
  },
];

export function LearningsSection() {
  const [selectedLearning, setSelectedLearning] = useState<string | null>(null);

  const selected = learnings.find((l) => l.id === selectedLearning);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8 rounded-2xl bg-card overflow-hidden"
    >
      <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
        <h2 className="text-xl font-semibold text-primary-foreground">
          Principais Aprendizados
        </h2>
      </div>

      <div className="p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learnings.map((learning, index) => (
            <motion.button
              key={learning.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => setSelectedLearning(learning.id)}
              className="group relative rounded-xl bg-secondary/30 p-5 text-left hover:bg-secondary/50 transition-all border border-transparent hover:border-primary/30"
            >
              <div className="mb-3 inline-flex rounded-xl bg-primary/20 p-3">
                <learning.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground">
                {learning.title}
              </h3>
              <p className="text-sm text-muted-foreground">{learning.subtitle}</p>
              <span className="absolute bottom-4 right-4 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Ver mais
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLearning(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl bg-card shadow-2xl"
            >
              <div className="sticky top-0 bg-gradient-to-r from-primary to-primary/80 px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <selected.icon className="h-6 w-6 text-primary-foreground" />
                  <h2 className="text-xl font-semibold text-primary-foreground">
                    {selected.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedLearning(null)}
                  className="rounded-full bg-primary-foreground/20 p-2 hover:bg-primary-foreground/30 transition-colors"
                >
                  <X className="h-5 w-5 text-primary-foreground" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Descricao
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selected.content.description}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-foreground">
                    Ferramentas e Tecnologias
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.content.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-foreground">
                    Principais Aprendizados
                  </h3>
                  <ul className="space-y-2">
                    {selected.content.learnings.map((learning, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-accent/10 p-4 border-l-4 border-accent">
                  <h3 className="mb-2 font-semibold text-foreground">
                    Impacto
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selected.content.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
