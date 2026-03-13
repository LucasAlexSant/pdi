"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";

export function FinalConsiderations() {
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
          Consideracoes Finais
        </h2>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="rounded-xl bg-accent/20 p-3 flex-shrink-0">
            <MessageSquare className="h-6 w-6 text-accent" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Como o meu primeiro PDI, este documento reflete meu compromisso com o
            crescimento profissional e a busca continua por excelencia. Atraves
            das entregas realizadas, competencias desenvolvidas e aprendizados
            adquiridos, estou construindo uma base solida para minha carreira de
            cientista de dados.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-xl bg-secondary/30 p-5 border-l-4 border-primary"
        >
          <div className="flex items-center gap-2 mb-3">
            <ArrowRight className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Proximos Passos</h3>
          </div>
          <p className="text-muted-foreground">
            Buscar feedback continuo da lideranca, participar ativamente de
            projetos estrategicos e manter foco no desenvolvimento das
            competencias planejadas.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
