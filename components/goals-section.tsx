"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "concluido" | "em-progresso" | "nao-iniciado";
type Priority = "alta" | "media" | "baixa";

interface Goal {
  objective: string;
  description: string;
  technologies: string;
  deadline: string;
  priority: Priority;
  status: Status;
}

const goals: Goal[] = [
  {
    objective: "Fundamentos Python",
    description:
      "Dominar conceitos fundamentais de Python, estruturas de dados e programacao orientada a objetos",
    technologies: "Python, Pandas, NumPy",
    deadline: "Fevereiro 2026",
    priority: "alta",
    status: "concluido",
  },
  {
    objective: "Algoritmos de Cluster",
    description:
      "Aprender tecnicas de clusterizacao como K-Means, DBSCAN e algoritmos hierarquicos para segmentacao de dados",
    technologies: "Scikit-Learn, K-Means, DBSCAN, Hierarchical Clustering",
    deadline: "Fevereiro 2026",
    priority: "alta",
    status: "concluido",
  },
  {
    objective: "Power BI",
    description:
      "Criar dashboards e relatorios interativos, dominar visualizacoes de dados e business intelligence",
    technologies: "Power BI, DAX, Consultas, Dashboards",
    deadline: "Fevereiro 2026",
    priority: "media",
    status: "concluido",
  },
  {
    objective: "Excel Avancado",
    description:
      "Dominar funcoes avancadas, tabelas dinamicas, analise de dados e automacao com Excel",
    technologies: "Excel, Tabelas Dinamicas, Formulas Avancadas, VBA",
    deadline: "Fevereiro 2026",
    priority: "media",
    status: "concluido",
  },
  {
    objective: "AWS SageMaker",
    description:
      "Dominar plataforma AWS SageMaker para treinar, ajustar e implantar modelos de machine learning na nuvem",
    technologies: "AWS SageMaker, XGBoost, Endpoints, SageMaker Studio",
    deadline: "Fevereiro 2026",
    priority: "alta",
    status: "concluido",
  },
  {
    objective: "Prova AWS Certified AI Practitioner",
    description:
      "Realizar exame de certificacao AWS Certified AI Practitioner - Specialty para validar competencias na plataforma",
    technologies: "AWS SageMaker, AWS Athena, AWS Bedrock, AWS Lex",
    deadline: "Fevereiro 2026",
    priority: "alta",
    status: "concluido",
  },
  {
    objective: "Aprendizado Continuo em IA Generativa",
    description:
      "Acompanhar avancos em IA generativa, LLMs e aplicacoes praticas com transformers e modelos pre-treinados",
    technologies: "GPT, BERT, Hugging Face, Prompt Engineering",
    deadline: "Continuo",
    priority: "alta",
    status: "concluido",
  },
  {
    objective: "Estudo de LangGraph",
    description:
      "Aprender e dominar o framework LangGraph para construcao de agentes e fluxos complexos com LLMs",
    technologies: "LangGraph, LangChain, Python, Agentes IA",
    deadline: "Julho 2026",
    priority: "alta",
    status: "em-progresso",
  },
  {
    objective: "Modelos de Classificacao e Regressao no Fixer",
    description:
      "Aplicar modelos de machine learning de classificacao e regressao dentro do contexto do Fixer para melhorar automacoes e previsoes",
    technologies: "Scikit-Learn, XGBoost, Random Forest, Regressao Linear",
    deadline: "Agosto 2026",
    priority: "alta",
    status: "nao-iniciado",
  },
];

const priorityStyles: Record<Priority, string> = {
  alta: "bg-destructive/20 text-destructive border-destructive/30",
  media: "bg-primary/20 text-primary border-primary/30",
  baixa: "bg-accent/20 text-accent border-accent/30",
};

const statusConfig: Record<Status, { label: string; icon: typeof CheckCircle2; className: string }> = {
  concluido: {
    label: "Concluido",
    icon: CheckCircle2,
    className: "bg-accent/20 text-accent border-accent/30",
  },
  "em-progresso": {
    label: "Em Progresso",
    icon: Clock,
    className: "bg-primary/20 text-primary border-primary/30",
  },
  "nao-iniciado": {
    label: "Nao Iniciado",
    icon: Circle,
    className: "bg-muted text-muted-foreground border-border",
  },
};

export function GoalsSection() {
  const completed = goals.filter((g) => g.status === "concluido").length;
  const inProgress = goals.filter((g) => g.status === "em-progresso").length;

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
          Planos e Metas para o Futuro
        </h2>
      </div>

      <div className="p-6">
        {/* Progress Overview */}
        <div className="mb-6 grid grid-cols-3 gap-4">
          <div className="rounded-xl bg-accent/10 p-4 text-center">
            <p className="text-3xl font-bold text-accent">{completed}</p>
            <p className="text-sm text-muted-foreground">Concluidas</p>
          </div>
          <div className="rounded-xl bg-primary/10 p-4 text-center">
            <p className="text-3xl font-bold text-primary">{inProgress}</p>
            <p className="text-sm text-muted-foreground">Em Progresso</p>
          </div>
          <div className="rounded-xl bg-secondary p-4 text-center">
            <p className="text-3xl font-bold text-foreground">{goals.length}</p>
            <p className="text-sm text-muted-foreground">Total</p>
          </div>
        </div>

        {/* Goals Table - Mobile Cards / Desktop Table */}
        <div className="hidden lg:block overflow-x-auto rounded-xl border border-border">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                  Objetivo
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                  Descricao
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                  Tecnologias
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                  Prazo
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                  Prioridade
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {goals.map((goal, index) => {
                const StatusIcon = statusConfig[goal.status].icon;
                return (
                  <motion.tr
                    key={goal.objective}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-secondary/30 transition-colors"
                  >
                    <td className="px-4 py-4 font-medium text-foreground">
                      {goal.objective}
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground max-w-xs">
                      {goal.description}
                    </td>
                    <td className="px-4 py-4 text-sm text-accent">
                      {goal.technologies}
                    </td>
                    <td className="px-4 py-4 text-sm text-primary whitespace-nowrap">
                      {goal.deadline}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span
                        className={cn(
                          "inline-block rounded-full border px-3 py-1 text-xs font-medium capitalize",
                          priorityStyles[goal.priority]
                        )}
                      >
                        {goal.priority}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
                          statusConfig[goal.status].className
                        )}
                      >
                        <StatusIcon className="h-3.5 w-3.5" />
                        {statusConfig[goal.status].label}
                      </span>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {goals.map((goal, index) => {
            const StatusIcon = statusConfig[goal.status].icon;
            return (
              <motion.div
                key={goal.objective}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl bg-secondary/30 p-4 space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{goal.objective}</h3>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium",
                      statusConfig[goal.status].className
                    )}
                  >
                    <StatusIcon className="h-3 w-3" />
                    {statusConfig[goal.status].label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{goal.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="text-accent">{goal.technologies}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary">{goal.deadline}</span>
                  <span
                    className={cn(
                      "rounded-full border px-2 py-0.5 text-xs font-medium capitalize",
                      priorityStyles[goal.priority]
                    )}
                  >
                    {goal.priority}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
