"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Award } from "lucide-react";

const badges = [
  {
    id: "badge1",
    name: "Practitioner - Generative AI",
    date: "Julho 2025",
    image: "/badges/badge_1.png",
    description:
      "Certificacao que valida conhecimentos fundamentais em IA Generativa, incluindo conceitos de LLMs, prompts e aplicacoes praticas.",
    skills: ["IA Generativa", "LLMs", "Prompt Engineering", "AWS Bedrock"],
  },
  {
    id: "badge2",
    name: "Practitioner - D&A Foundation",
    date: "Julho 2025",
    image: "/badges/badge_2.png",
    description:
      "Certificacao em fundamentos de Data & Analytics, cobrindo conceitos de dados, analise e ferramentas AWS.",
    skills: ["Data Analytics", "AWS", "Big Data", "Data Lake"],
  },
  {
    id: "badge3",
    name: "Associate - Generative AI",
    date: "Setembro 2025",
    image: "/badges/badge_3.png",
    description:
      "Certificacao avancada em IA Generativa, demonstrando proficiencia em implementacao e desenvolvimento de solucoes com IA.",
    skills: ["IA Avancada", "Transformers", "Fine-tuning", "RAG"],
  },
  {
    id: "badge4",
    name: "AWS Certified AI Practitioner",
    date: "2026",
    image: "/badges/badge_4.png",
    description:
      "Certificacao oficial da AWS que valida conhecimentos fundamentais em Inteligencia Artificial e Machine Learning na nuvem AWS.",
    skills: ["AWS AI Services", "Machine Learning", "AI Foundations", "Cloud AI"],
  },
];

export function BadgesSection() {
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const selected = badges.find((b) => b.id === selectedBadge);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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
          Badges e Certificacoes Conquistadas
        </h2>
      </div>

      <div className="p-6">
        <div className="relative">
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {badges.map((badge, index) => (
              <motion.button
                key={badge.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                onClick={() => setSelectedBadge(badge.id)}
                className="group flex-shrink-0 w-48 rounded-xl bg-gradient-to-br from-primary to-primary/80 p-5 text-center transition-shadow hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="relative mx-auto mb-3 h-24 w-24 rounded-full bg-primary-foreground/10 p-2">
                  <Image
                    src={badge.image}
                    alt={badge.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="mb-1 font-semibold text-primary-foreground text-sm leading-tight">
                  {badge.name}
                </h3>
                <p className="text-xs text-primary-foreground/80">{badge.date}</p>
              </motion.button>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-4 flex justify-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="rounded-full bg-secondary p-2 hover:bg-secondary/80 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="rounded-full bg-secondary p-2 hover:bg-secondary/80 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBadge(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl bg-card shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-8 text-center relative">
                <button
                  onClick={() => setSelectedBadge(null)}
                  className="absolute top-4 right-4 rounded-full bg-primary-foreground/20 p-2 hover:bg-primary-foreground/30 transition-colors"
                >
                  <X className="h-5 w-5 text-primary-foreground" />
                </button>
                <div className="relative mx-auto mb-4 h-32 w-32 rounded-full bg-primary-foreground/10 p-3">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <h2 className="text-xl font-bold text-primary-foreground">
                  {selected.name}
                </h2>
                <p className="text-primary-foreground/80">{selected.date}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">
                      Sobre a Certificacao
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selected.description}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-foreground">
                    Competencias Validadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
