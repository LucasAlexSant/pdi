"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Users, Building2, Calendar } from "lucide-react";

const profileDetails = [
  { label: "Cargo", value: "Estagiario", icon: Briefcase },
  { label: "Squad", value: "Celula IA Automacao", icon: Users },
  { label: "Comunidade", value: "Command Center", icon: Building2 },
  { label: "Periodo", value: "2025/2", icon: Calendar },
];

export function ProfileSection() {
  return (
    <section className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-card p-6 md:p-8"
      >
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
          {/* Profile Photo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative h-40 w-40 overflow-hidden rounded-full bg-gradient-to-br from-primary to-accent p-1 md:h-52 md:w-52"
          >
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/foto.jpg"
                alt="Lucas Alexandre Santana"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-3xl font-bold text-foreground md:text-4xl"
            >
              Lucas Alexandre Santana
            </motion.h1>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {profileDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 rounded-xl bg-secondary/50 px-4 py-3"
                >
                  <detail.icon className="h-5 w-5 text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {detail.label}
                    </span>
                    <p className="font-medium text-foreground">{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Biography Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-6 rounded-2xl bg-card p-6 md:p-8"
      >
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Biografia Profissional
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          Estudante de Sistemas da Informacao atualmente atuando como estagiario
          no Itau Unibanco, com objetivo de aplicar e expandir meus conhecimentos
          adquiridos em sala de aula em um ambiente profissional dinamico. Sou
          proativo, comprometido com o aprendizado continuo e possuo forte
          capacidade de trabalho em equipe, quero contribuir com solucoes
          criativas e eficientes.
        </p>
      </motion.div>
    </section>
  );
}
