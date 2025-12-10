"use client";

import { motion } from "framer-motion";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingCard from "@/components/PricingCard";

// 1. ИМПОРТИРУЕМ КАРТИНКУ
// Символ "@" обычно означает корень проекта (src). 
// Если картинка в папке public, путь может быть "@/public/pricing.jpg" или просто относительный "../public/pricing.jpg"
import pricingImg from "@/public/pricing.jpg"; 

export default function PricingPage() {
  return (
    <>
      <Header />

      <main className="text-white bg-black min-h-screen relative overflow-hidden">
        <section className="relative z-10 pt-48 pb-40 flex flex-col items-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-extrabold mb-20 text-center"
          >
            Pricing
          </motion.h1>

          <div className="flex flex-wrap gap-14 justify-center">
            <PricingCard
              title="30 days"
              price="249 rubles"
              // 2. ИСПОЛЬЗУЕМ ИМПОРТИРОВАННУЮ ПЕРЕМЕННУЮ
              image={pricingImg}
            />

            <PricingCard
              title="Forever"
              price="599 rubles"
              image={pricingImg}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}