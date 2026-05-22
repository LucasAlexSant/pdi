"use client";

import { motion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 rounded-2xl bg-card p-6 text-center md:p-8"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="rounded-xl bg-primary/20 p-3">
          <FileText className="h-8 w-8 text-primary" />
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="rounded-xl bg-accent/20 p-3"
        >
          <Sparkles className="h-8 w-8 text-accent" />
        </motion.div>
      </div>

      <h1 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
        PDI - Plano de Desenvolvimento Individual
      </h1>
      <p className="text-lg text-muted-foreground">
        Registro de Performance e Planejamento Profissional
      </p>

      {/* Animated gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-6 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
      />
    </motion.header>
  );
}
