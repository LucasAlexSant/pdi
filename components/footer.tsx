"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-card p-6 text-center"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

      <p className="text-sm text-muted-foreground">
        PDI - Lucas Alexandre Santana | Itau Unibanco - {currentYear}
      </p>
      <p className="mt-2 text-xs text-muted-foreground/60">
        Celula IA Automacao - Command Center
      </p>
    </motion.footer>
  );
}
