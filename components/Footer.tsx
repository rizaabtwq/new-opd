"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        w-full
        relative
        bg-black
        overflow-hidden
      "
    >
      <div className="absolute left-0 top-0 h-full opacity-30 pointer-events-none">
        <Image
          // ИСПРАВЛЕНИЕ: Добавлен префикс /new-opd/ из basePath
          src="/fluid3.png"
          alt="Fluid"
          width={400}
          height={800}
          className="h-full w-auto object-cover"
        />
      </div>

      <div
        className="
          relative
          z-10
          px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32
          py-16 lg:py-20
          flex flex-col lg:flex-row
          gap-10 lg:gap-0
          justify-between
          items-start
          text-white/70
        "
      >
        <div className="flex flex-col gap-3 max-w-xs">
          <h3 className="text-xl font-semibold text-white">Проект по ОПД</h3>
          <p className="text-sm text-white/50 leading-relaxed">
          </p>
          <p className="text-white/50 text-sm">
            Made by{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text transition"
            >
              rizaabtwq
            </a>
          </p>
        </div>

        
      </div>
    </motion.footer>
  );
}