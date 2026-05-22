"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "Python",
    projects: 5,
    percentage: 90,
    details: "Automacao, ML, Analise, Series Temporais, Clustering",
    tools: "Pandas, NumPy, Scikit-Learn, Statsmodels",
  },
  {
    name: "Analise de Dados",
    projects: 5,
    percentage: 90,
    details: "Incidentes Clear, Series Temporais, TIER 0/1, Reincidentes",
    tools: "AWS Athena, Power BI, Excel Avancado",
  },
  {
    name: "AWS Cloud",
    projects: 4,
    percentage: 80,
    details: "SageMaker, Athena, Analise em Nuvem",
    tools: "SageMaker, Athena, Lambda, S3",
  },
  {
    name: "Series Temporais",
    projects: 3,
    percentage: 75,
    details: "Estudos Avancados, Sazonalidade TIER, Reincidentes",
    tools: "Prophet, ARIMA, SARIMA, Decomposicao Sazonal",
  },
  {
    name: "Machine Learning",
    projects: 3,
    percentage: 70,
    details: "AWS SageMaker, Clustering, Preditivo",
    tools: "K-Means, DBSCAN, Prophet, Regressao",
  },
  {
    name: "SQL & Query",
    projects: 3,
    percentage: 70,
    details: "AWS Athena, Extracao de Dados, Analise",
    tools: "JOINs, Agregacoes, Subqueries, Otimizacao",
  },
  {
    name: "Power BI & Dashboards",
    projects: 2,
    percentage: 65,
    details: "Relatorios, Visualizacoes, Business Intelligence",
    tools: "DAX, Queries, Dashboards Interativos",
  },
  {
    name: "Clustering & Segmentacao",
    projects: 2,
    percentage: 60,
    details: "Analise Clustering, Segmentacao de Dados",
    tools: "K-Means, DBSCAN, Hierarchical Clustering",
  },
];

export function SkillsSection() {
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
          Competencias por Frequencia de Uso
        </h2>
      </div>

      <div className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl bg-secondary/30 p-5 border-l-4 border-primary hover:bg-secondary/50 transition-all"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
                <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                  {skill.projects} projetos
                </span>
              </div>

              {/* Progress bar */}
              <div className="mb-3 h-2 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>

              <p className="mb-2 text-sm text-muted-foreground">
                {skill.details}
              </p>

              <div className="rounded-lg bg-accent/10 p-2 border-l-2 border-accent">
                <span className="text-xs text-accent">
                  <strong>Ferramentas:</strong> {skill.tools}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 rounded-xl bg-accent/10 p-5 border-l-4 border-accent"
        >
          <h3 className="mb-2 font-semibold text-foreground">
            Resumo de Competencias Tecnicas
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Durante 2025-2026, desenvolvi expertise em{" "}
            <strong className="text-foreground">11 areas principais</strong>, com
            especializacao em{" "}
            <strong className="text-foreground">Analise de Dados (5 projetos)</strong>,{" "}
            <strong className="text-foreground">Python (5 projetos)</strong> e{" "}
            <strong className="text-foreground">AWS Cloud (4 projetos)</strong>.
            Domino algoritmos criticos como K-Means, DBSCAN, Prophet, ARIMA e
            XGBoost, alem de ferramentas de BI como Power BI e analise em nuvem
            com AWS SageMaker e Athena.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
