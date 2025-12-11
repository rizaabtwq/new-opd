"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Переходим на lucide-react для единообразия
import { Home, Download, HelpCircle, BookOpen } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        fixed top-0 left-0 z-[25]
        h-16 md:h-20
        w-full
        px-5 sm:px-8 lg:px-10
        backdrop-blur-xl
        bg-black/70
        border-b border-white/10
      "
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-start gap-4 py-3 md:py-4 h-full relative">
        <Link
          href="/"
          className="flex items-center gap-3 group transition hover:opacity-100 z-20"
        >
          <Image
            src="/new-opd/icon.png"
            alt="Icon"
            width={42}
            height={42}
            priority
            className="shrink-0 hidden md:block"
          />
        </Link>

        {/* Десктоп: центрированное меню, как было изначально */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-12 text-white/85 text-sm z-10">
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Home
              size={24}
              className="group-hover:text-white transition"
            />
            <span className="group-hover:text-white transition">
              Главная
            </span>
          </Link>

          <Link
            href="/download"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Download
              size={24}
              className="group-hover:text-white transition"
            />
            <span className="group-hover:text-white transition">
              Скачать
            </span>
          </Link>

          <Link
            href="/faq"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <HelpCircle
              size={24}
              className="group-hover:text-white transition"
            />
            <span className="group-hover:text-white transition">
              FAQ
            </span>
          </Link>

          <Link
            href="/guides"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <BookOpen
              size={24}
              className="group-hover:text-white transition"
            />
            <span className="group-hover:text-white transition">
              Гайды
            </span>
          </Link>
        </nav>

        {/* Мобильная версия меню с уменьшенными иконками и текстом */}
        <nav className="flex md:hidden flex-1 justify-end items-center gap-4 text-white/85 text-xs">
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Home
              size={18}
              className="group-hover:text-white transition"
            />
            <span className="group-hover:text-white transition">
              Главная
            </span>
          </Link>

          <Link
            href="/download"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Download
              size={18}
              className="group-hover:text-white transition"
            />
            <span className="group-hover:text-white transition">
              Скачать
            </span>
          </Link>

          <Link
            href="/faq"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <HelpCircle
              size={18}
              className="group-hover:text-white transition"
            />
            <span className="group-hover:text-white transition">
              FAQ
            </span>
          </Link>

          <Link
            href="/guides"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <BookOpen
              size={18}
              className="group-hover:text-white transition"
            />
            <span className="group-hover:text-white transition">
              Гайды
            </span>
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}