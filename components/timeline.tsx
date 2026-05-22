"use client";

import { motion } from "framer-motion";

const deliveries = [
  {
    title: "Integracao e Regras Internas do Banco",
    description:
      "Conclusao de cursos obrigatorios para conhecer o Itau, suas regras internas, padroes de seguranca e pesquisas aprofundadas sobre funcionamento do Centro de Comando.",
    date: "Junho 2025",
    tags: ["Governanca", "Compliance", "Centro de Comando"],
  },
  {
    title: "Analise de Incidentes Clear",
    description:
      "Identificacao de siglas com maior numero de incidentes classificados como clear, avaliando impacto no ambiente bancario usando analise de dados em nuvem.",
    date: "Julho 2025",
    tags: ["AWS SageMaker", "AWS Athena", "ServiceNow", "Datadog"],
  },
  {
    title: "Estudos Avancados de Series Temporais",
    description:
      "Testes comparativos entre modelos Prophet, ARIMA e SARIMA, analise de estacionaridade, sazonalidade, ruidos e tendencia para apoiar decisoes de monitoramento.",
    date: "Agosto 2025",
    tags: ["Prophet", "ARIMA", "SARIMA", "Python"],
  },
  {
    title: "Analise de Sazonalidade - Metricas TIER 0 e TIER 1",
    description:
      "Desenvolveu Analise para squad Manhattan identificar sazonalidade em metricas criticas, analisando mais de 4.000 series temporais automaticamente.",
    date: "Setembro 2025",
    tags: ["Automacao", "Python", "Series Temporais", "TIER 0/1"],
  },
  {
    title: "Investigacao de Incidentes Reincidentes",
    description:
      "Projeto em andamento: definindo conceito de incidente reincidente, usando AWS Athena para mapear reincidencias e alinhamento com times de Gestao de Eventos.",
    date: "Setembro 2025",
    tags: ["AWS Athena", "Gestao de Eventos", "Monitoramento"],
  },
  {
    title: "Democratizador de Logs",
    description:
      "Desenvolvimento de ferramenta para democratizar o acesso e analise de logs, facilitando a investigacao de incidentes e troubleshooting para toda a equipe.",
    date: "Fevereiro 2026",
    tags: ["Logs", "Observabilidade", "Python", "Automacao"],
  },
  {
    title: "Resgate de Historico - Fixer Core",
    description:
      "Implementacao de solucao para resgate e organizacao de historico de dados no Fixer Core, permitindo analises retroativas e melhoria na gestao de conhecimento.",
    date: "Maio 2026",
    tags: ["Fixer Core", "Historico", "Data Engineering", "Python"],
  },
];

export function Timeline() {
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
          Principais Entregas Realizadas
        </h2>
      </div>

      <div className="p-6">
        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/50" />

          <div className="space-y-6">
            {deliveries.map((delivery, index) => (
              <motion.div
                key={delivery.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-5 top-2 h-4 w-4 rounded-full border-2 border-primary bg-card" />

                <div className="rounded-xl bg-secondary/30 p-5 hover:bg-secondary/50 transition-colors">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {delivery.title}
                    </h3>
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                      {delivery.date}
                    </span>
                  </div>
                  <p className="mb-4 text-muted-foreground">
                    {delivery.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {delivery.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
