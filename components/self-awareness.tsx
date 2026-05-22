"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target } from "lucide-react";

const strengths = [
  {
    title: "Curioso",
    description: "Gosto de ver coisas novas e entender o que elas podem fazer",
  },
  {
    title: "Capacidade Analitica",
    description: "Facilidade para interpretar dados e identificar padroes",
  },
  {
    title: "Adaptabilidade",
    description: "Me ajusto rapidamente a novas tecnologias e processos",
  },
  {
    title: "Trabalho em Equipe",
    description: "Colaboro efetivamente com diferentes areas e perfis",
  },
];

const improvements = [
  {
    title: "Documentacao",
    description: "Preciso melhorar a forma que me organizo",
  },
  {
    title: "Comunicacao Tecnica",
    description: "Desenvolver habilidade para explicar conceitos complexos",
  },
  {
    title: "Overthinking",
    description: "Penso demais antes de agir, o que pode atrasar entregas",
  },
  {
    title: "Posicionamento",
    description: "Me posicionar mais na hora de falar e compartilhar o que penso",
  },
];

export function SelfAwareness() {
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
          Autoconhecimento Profissional
        </h2>
      </div>

      <div className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Strengths */}
          <div className="rounded-xl bg-secondary/30 p-5">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-lg bg-accent/20 p-2">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Pontos Fortes
              </h3>
            </div>
            <div className="space-y-3">
              {strengths.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-lg bg-card/50 p-4 border-l-2 border-accent"
                >
                  <h4 className="font-medium text-foreground">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Improvements */}
          <div className="rounded-xl bg-secondary/30 p-5">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-lg bg-primary/20 p-2">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Pontos de Melhoria
              </h3>
            </div>
            <div className="space-y-3">
              {improvements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-lg bg-card/50 p-4 border-l-2 border-primary"
                >
                  <h4 className="font-medium text-foreground">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
