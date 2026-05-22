"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderGit2, 
  ExternalLink, 
  X, 
  Code2, 
  Target, 
  BarChart3,
  CreditCard,
  Brain
} from "lucide-react";

const projects = [
  {
    id: "nps-preditivo",
    name: "NPS Preditivo",
    subtitle: "Tech Challenge Fase 1",
    icon: BarChart3,
    description:
      "Projeto desenvolvido como parte do Tech Challenge da Fase 1 da pos-graduacao POSTECH (FIAP). Analise de dados operacionais de um e-commerce para entender os fatores que influenciam a satisfacao dos clientes (NPS) e propor uma estrategia preditiva capaz de antecipar o score antes da aplicacao da pesquisa.",
    objective:
      "Analisar dados operacionais de um e-commerce para entender os fatores que influenciam a satisfacao dos clientes (NPS) e propor uma estrategia preditiva capaz de antecipar o score antes da aplicacao da pesquisa.",
    stack: ["Python", "Flask", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    features: [
      "Analise exploratoria orientada a negocio",
      "Modelagem preditiva com regressao",
      "API REST com Flask e Swagger",
      "Predicao individual e em lote",
    ],
    github: "https://github.com/LucasAlexSant/Tech-Challenge-Fase-1-FIAP",
  },
  {
    id: "payflow-credit",
    name: "PayFlow Credit Risk",
    subtitle: "Desafio CRISP-DM",
    icon: CreditCard,
    description:
      "Projeto desenvolvido para o desafio CRISP-DM na pratica (Pos-Tech). O objetivo e prever a probabilidade de inadimplencia em ate 90 dias (default_90d) apos concessao de credito em uma fintech ficticia (PayFlow).",
    objective:
      "Prever a probabilidade de inadimplencia em ate 90 dias apos concessao de credito, apoiando decisoes de credito mais consistentes e escalaveis.",
    stack: ["Python", "Pandas", "Scikit-Learn", "XGBoost"],
    features: [
      "Analise de risco de credito",
      "Ensemble de modelos (Voting)",
      "Pipeline de inferencia",
      "AUC de 0.74 com Logistic Regression",
    ],
    results: [
      { model: "Logistic Regression", auc: 0.74 },
      { model: "Random Forest", auc: 0.74 },
      { model: "Ensemble", auc: 0.73 },
      { model: "XGBoost", auc: 0.70 },
      { model: "Decision Tree", auc: 0.69 },
    ],
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const selected = projects.find((p) => p.id === selectedProject);

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
          Projetos Academicos
        </h2>
      </div>

      <div className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              onClick={() => setSelectedProject(project.id)}
              className="group relative rounded-xl bg-secondary/30 p-6 text-left transition-all hover:bg-secondary/50 hover:shadow-lg hover:shadow-primary/10 border border-transparent hover:border-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/20 p-3">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg">
                    {project.name}
                  </h3>
                  <p className="text-sm text-primary mt-0.5">{project.subtitle}</p>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <FolderGit2 className="h-5 w-5 text-primary" />
              </div>
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
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card shadow-2xl"
            >
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-6 relative sticky top-0">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 rounded-full bg-primary-foreground/20 p-2 hover:bg-primary-foreground/30 transition-colors"
                >
                  <X className="h-5 w-5 text-primary-foreground" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-primary-foreground/20 p-3">
                    <selected.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary-foreground">
                      {selected.name}
                    </h2>
                    <p className="text-primary-foreground/80">{selected.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Objetivo */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Objetivo</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selected.objective}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">
                      Principais Funcionalidades
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {selected.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results (if available) */}
                {selected.results && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">
                        Resultados dos Modelos
                      </h3>
                    </div>
                    <div className="rounded-lg bg-secondary/30 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="px-4 py-2 text-left font-medium text-foreground">
                              Modelo
                            </th>
                            <th className="px-4 py-2 text-right font-medium text-foreground">
                              AUC
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {selected.results.map((result, idx) => (
                            <tr
                              key={result.model}
                              className={
                                idx !== selected.results!.length - 1
                                  ? "border-b border-border/50"
                                  : ""
                              }
                            >
                              <td className="px-4 py-2 text-muted-foreground">
                                {result.model}
                              </td>
                              <td className="px-4 py-2 text-right font-mono text-accent">
                                {result.auc.toFixed(2)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Stack</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selected.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-4 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Ver no GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
